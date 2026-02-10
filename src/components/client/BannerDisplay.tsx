'use client';

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OutboundLink } from "@/components/analytics";
import type { BannerResponse, BannerItemResponse } from "@/types/api";

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

export function BannerDisplay({ banner }: BannerDisplayProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Single mode or no items — render the banner's own image
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

    // Carousel mode — render items with navigation
    const items = [...banner.items].sort((a, b) => a.display_order - b.display_order);

    const goTo = (index: number) => {
        setCurrentSlide((index + items.length) % items.length);
    };

    const current = items[currentSlide];

    return (
        <div className="relative w-full group">
            <BannerImage
                image_url={current.image_url}
                title={current.title}
                link_url={current.link_url}
                link_target={current.link_target}
                maxHeight={banner.layout_height}
            />

            {items.length > 1 && (
                <>
                    <button
                        onClick={() => goTo(currentSlide - 1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Trước"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => goTo(currentSlide + 1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Sau"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
