"use client";

import { Bell } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
    orgName?: string | null;
    logoUrl?: string | null;
}

export function Header({ orgName, logoUrl }: HeaderProps) {
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

    const displayName = orgName || "UBND Phường";

    return (
        <header className="bg-white border-b shadow-sm relative w-full font-sans" style={{ borderColor: "var(--gray-200)" }}>
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/trongdong_header.webp"), url("/images/trongdong_header.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    width: '100%',
                    height: '100%'
                }}
            ></div>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
                <div className="flex items-center py-3 sm:py-4">
                    <div className="flex items-center flex-1">
                        <div className="mr-2 sm:mr-4 lg:mr-6">
                            <img
                                src={logoUrl || "/images/quochuy.png"}
                                alt={`Logo ${displayName}`}
                                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-28 lg:w-28 object-contain"
                            />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                            <div className="text-red-600 font-bold text-xs sm:text-sm lg:text-lg mb-0.5 sm:mb-1 leading-tight">
                                TRANG THÔNG TIN ĐIỆN TỬ
                            </div>
                            <h1 className="text-red-600 font-bold text-sm sm:text-lg lg:text-2xl leading-tight uppercase">
                                Phường {displayName}
                            </h1>
                            <div className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                                <span className="block sm:inline">{dateString}</span>
                                <span className="hidden sm:inline sm:ml-2 lg:ml-4">|</span>
                                <span className="hidden sm:inline sm:ml-2 lg:ml-4">Việt Nam</span>
                            </div>
                        </div>
                        <div className="ml-2 sm:ml-4 lg:ml-6">
                            <Link
                                className="relative p-2 text-gray-600 hover:text-red-600 transition-colors hover:bg-gray-100 rounded-full inline-flex"
                                title="Thông báo"
                                href="/announcements"
                                data-discover="true"
                            >
                                <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
