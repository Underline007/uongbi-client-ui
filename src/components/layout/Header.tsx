"use client";

import { Box, Flex, Text, Container } from "@radix-ui/themes";
import {
    HamburgerMenuIcon,
    Cross1Icon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    BellIcon
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";

// Navigation menu items
const menuItems = [
    { label: "TRANG CHỦ", href: "/", active: true },
    { label: "TỔNG QUAN", href: "/about" },
    { label: "THÔNG TIN BẦU CỬ", href: "/election-info", badge: "MỚI" },
    { label: "TIN TỨC", href: "/news" },
    { label: "VĂN BẢN", href: "/documents" },
    { label: "HƯỚNG DẪN TTHC", href: "/administrative-procedures" },
    {
        label: "THÔNG TIN QUY HOẠCH",
        href: "/planning-info",
        submenu: [
            { label: "Các quy hoạch chiến lược", href: "/planning-info?type=strategic" },
            { label: "Xem tất cả quy hoạch", href: "/planning-info" },
        ]
    },
    { label: "THÔNG BÁO", href: "/announcements" },
];

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
        <div className="bg-white border-b shadow-sm relative w-full border-t-[4px] border-[#2e7d32]">
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
                            <div className="text-[#dc2626] font-bold text-xs sm:text-sm lg:text-lg mb-0.5 sm:mb-1 leading-tight font-serif uppercase">
                                TRANG THÔNG TIN ĐIỆN TỬ
                            </div>
                            <h1 className="text-[#dc2626] font-bold text-sm sm:text-lg lg:text-2xl leading-tight font-serif uppercase">
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
                                className="relative p-2 text-gray-600 hover:text-[#dc2626] transition-colors hover:bg-gray-100 rounded-full inline-flex items-center justify-center"
                                title="Thông báo"
                                href="/announcements"
                            >
                                <BellIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </NextLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NavBar() {
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    return (
        <Box
            style={{
                background: "white",
                borderBottom: "1px solid var(--gray-200)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)",
            }}
            className="hidden md:block"
        >
            <Container size="4">
                <Flex align="center">
                    {menuItems.map((item) => (
                        <Box
                            key={item.href}
                            style={{ position: "relative" }}
                            onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
                            onMouseLeave={() => setActiveSubmenu(null)}
                        >
                            <NextLink
                                href={item.href}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "50px",
                                    padding: "0 18px",
                                    color: item.active || item.href === "/announcements" ? "#dc2626" : "#374151",
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    borderBottom: item.active || item.href === "/announcements" ? "3px solid #dc2626" : "3px solid transparent",
                                    position: "relative",
                                    top: "1px" // Push border down to overlap container border
                                }}
                                className="hover:text-red-700"
                            >
                                {item.label}
                                {/* Badge */}
                                {item.badge && (
                                    <span
                                        style={{
                                            marginLeft: 6,
                                            background: "#dc2626",
                                            color: "white",
                                            fontSize: "9px",
                                            fontWeight: "bold",
                                            padding: "2px 5px",
                                            borderRadius: "4px",
                                            position: "relative",
                                            top: -1
                                        }}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                                {item.submenu && <ChevronDownIcon style={{ marginLeft: 4 }} />}
                            </NextLink>

                            {/* Dropdown Menu */}
                            {item.submenu && activeSubmenu === item.label && (
                                <Box
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        background: "white",
                                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                        borderTop: "3px solid #dc2626",
                                        minWidth: 240,
                                        zIndex: 100,
                                        borderRadius: "0 0 4px 4px"
                                    }}
                                >
                                    {item.submenu.map((sub) => (
                                        <NextLink
                                            key={sub.href}
                                            href={sub.href}
                                            style={{
                                                display: "block",
                                                padding: "12px 16px",
                                                color: "#374151",
                                                fontSize: "13px",
                                                fontWeight: 500,
                                                textDecoration: "none",
                                                borderBottom: "1px solid var(--gray-100)",
                                                transition: "background 0.15s"
                                            }}
                                            className="hover:bg-red-50 hover:text-red-700"
                                        >
                                            {sub.label}
                                        </NextLink>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))}

                    {/* Spacer to push search if needed, or search on right */}
                </Flex>
            </Container>
        </Box>
    );
}

function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box className="md:hidden" style={{ background: "white", borderBottom: "1px solid var(--gray-200)" }}>
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
                        <Text size="1" weight="bold" style={{ color: "#dc2626", textTransform: "uppercase", display: "block", lineHeight: 1.2 }}>
                            Trang TTĐT
                        </Text>
                        <Text size="3" weight="bold" style={{ color: "#dc2626", textTransform: "uppercase", display: "block", lineHeight: 1.2 }}>
                            P. Móng Cái 3
                        </Text>
                    </Box>
                </Flex>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ padding: 8 }}
                >
                    {isOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
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
                                    color: item.active ? "#dc2626" : "#1f2937",
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
        <header className="sticky top-0 z-50 bg-white font-sans">
            <Box className="hidden md:block">
                <TopSection />
                <NavBar />
            </Box>
            <MobileHeader />
        </header>
    );
}
