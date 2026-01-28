"use client";

import { Box, Flex, Text } from "@radix-ui/themes";
import { Menu, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";

import { menuItems } from "@/data/menu";

function TopSection() {
    const [dateString, setDateString] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            const dayName = days[now.getDay()];
            const date = now.toLocaleDateString('en-GB'); // DD/MM/YYYY
            const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

            setDateString(`${time} ${dayName}, ${date}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="shadow-sm relative w-full border-t-[4px]">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/trongdong_header.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    opacity: 0.15
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
                <div className="flex items-center py-3 sm:py-4">
                    <div className="flex items-center flex-1">
                        {/* Logo */}
                        <div className="mr-2 sm:mr-4 lg:mr-6 shrink-0">
                            <img
                                src="/images/7f1950c1-a8f8-4139-82ab-320fc1bf646a.png"
                                alt="Logo Phường Móng Cái 3"
                                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-28 lg:w-28 object-contain"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="text-left flex-1 min-w-0">
                            <div className="text-[#e23d3d] font-bold text-xs sm:text-sm lg:text-lg mb-0.5 sm:mb-1 leading-tight font-serif uppercase">
                                TRANG THÔNG TIN ĐIỆN TỬ
                            </div>
                            <h1 className="text-[#e23d3d] font-bold text-sm sm:text-lg lg:text-2xl leading-tight font-serif uppercase">
                                PHƯỜNG MÓNG CÁI 3
                            </h1>
                            <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 font-sans flex items-center flex-wrap gap-x-2">
                                <span className="block sm:inline">{dateString}</span>
                                <span className="hidden sm:inline text-gray-400">|</span>
                                <span className="hidden sm:inline">Việt Nam</span>
                            </div>
                        </div>

                        {/* Notification Bell */}
                        <div className="ml-2 sm:ml-4 lg:ml-6 shrink-0 hidden md:block">
                            <NextLink
                                className="relative p-2 text-gray-600 hover:text-[#e23d3d] transition-colors hover:bg-gray-100 rounded-full inline-flex items-center justify-center"
                                title="Thông báo"
                                href="/announcements"
                            >
                                <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                            </NextLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box className="md:hidden" >
            <Flex justify="between" align="center" p="3">
                <Flex align="center" gap="3">
                    <Image
                        src="/images/7f1950c1-a8f8-4139-82ab-320fc1bf646a.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                    />
                    <Box>
                        <Text size="1" weight="bold" style={{ color: "#e23d3d", textTransform: "uppercase", display: "block", lineHeight: 1.2 }}>
                            Trang TTĐT
                        </Text>
                        <Text size="3" weight="bold" style={{ color: "#e23d3d", textTransform: "uppercase", display: "block", lineHeight: 1.2 }}>
                            P. Móng Cái 3
                        </Text>
                    </Box>
                </Flex>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ padding: 8 }}
                >
                    {isOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
                </button>
            </Flex>

            {isOpen && (
                <Box
                    style={{
                        borderTop: "1px solid var(--gray-100)",
                        background: "white",
                        height: "calc(100vh - 70px)",
                        overflowY: "auto"
                    }}
                >
                    {menuItems.map(item => (
                        <Box key={item.href}>
                            <NextLink
                                href={item.href}
                                style={{
                                    display: "block",
                                    padding: "16px 20px",
                                    color: item.active ? "#e23d3d" : "#1f2937",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    textDecoration: "none",
                                    borderBottom: "1px solid var(--gray-100)",
                                    textTransform: "uppercase"
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NextLink>
                            {item.submenu && (
                                <Box style={{ background: "var(--gray-50)" }}>
                                    {item.submenu.map(sub => (
                                        <NextLink
                                            key={sub.href}
                                            href={sub.href}
                                            style={{
                                                display: "block",
                                                padding: "12px 20px 12px 40px",
                                                color: "#4b5563",
                                                fontSize: "13px",
                                                textDecoration: "none",
                                                borderBottom: "1px solid var(--gray-100)"
                                            }}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {sub.label}
                                        </NextLink>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
}

export function Header() {
    return (
        <header className="font-sans">
            <Box className="hidden md:block">
                <TopSection />
            </Box>
            {/* <MobileHeader /> */}
        </header>
    );
}
