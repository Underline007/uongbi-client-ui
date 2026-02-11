'use client';

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OutboundLink } from "@/components/analytics";
import type { BannerResponse } from "@/types/api";

const AUTO_PLAY_INTERVAL = 5000;

interface BannerDisplayProps {
    banner: BannerResponse;
}

function BannerImage({ image_url, title, link_url, link_target, maxHeight }: {
    image_url: string;
    title?: string | null;
    link_url?: string | null;
    link_target: string;
    maxHeight?: number | null;
}) {
    const img = (
        <img
            src={image_url}
            alt={title || "Banner"}
            className="w-full h-auto object-contain"
            style={{ maxHeight: maxHeight ? `${maxHeight}px` : "200px" }}
        />
    );

    if (link_url) {
        if (link_target === "_blank") {
            return (
                <OutboundLink
                    href={link_url}
                    className="block w-full hover:opacity-90 transition-opacity"
                >
                    {img}
                </OutboundLink>
            );
        }
        return (
            <a
                href={link_url}
                target={link_target}
                className="block w-full hover:opacity-90 transition-opacity"
            >
                {img}
            </a>
        );
    }

    return <div className="w-full">{img}</div>;
}

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%",
        opacity: 0,
    }),
};

export function BannerDisplay({ banner }: BannerDisplayProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    // Single mode or no items
    if (banner.display_mode === "single" || !banner.items || banner.items.length === 0) {
        return (
            <BannerImage
                image_url={banner.image_url}
                title={banner.title}
                link_url={banner.link_url}
                link_target={banner.link_target}
                maxHeight={banner.layout_height}
            />
        );
    }

    const items = [...banner.items].sort((a, b) => a.display_order - b.display_order);

    const goTo = useCallback((index: number, dir?: number) => {
        const next = (index + items.length) % items.length;
        setDirection(dir ?? (next > currentSlide ? 1 : -1));
        setCurrentSlide(next);
    }, [items.length, currentSlide]);

    // Auto-play
    useEffect(() => {
        if (isPaused || items.length <= 1) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % items.length);
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(timer);
    }, [isPaused, items.length]);

    const current = items[currentSlide];

    return (
        <div
            className="relative w-full group overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full"
                >
                    <BannerImage
                        image_url={current.image_url}
                        title={current.title}
                        link_url={current.link_url}
                        link_target={current.link_target}
                        maxHeight={banner.layout_height}
                    />
                </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
                <>
                    <button
                        onClick={() => goTo(currentSlide - 1, -1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Trước"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => goTo(currentSlide + 1, 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Sau"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots + Progress bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="relative w-2 h-2 rounded-full overflow-hidden"
                                aria-label={`Slide ${i + 1}`}
                            >
                                <span className={`absolute inset-0 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/50"}`} />
                                {i === currentSlide && !isPaused && (
                                    <motion.span
                                        className="absolute inset-0 rounded-full bg-white/80"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                                        style={{ transformOrigin: "left" }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
