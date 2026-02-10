import Link from "next/link";
import { Phone, Eye, TrendingUp, Users } from "lucide-react";
import type { Announcement, AnalyticsStats } from "@/types/api";

interface HomeSidebarProps {
    announcements: Announcement[];
    analytics: AnalyticsStats;
    orgName?: string | null;
    orgPhone?: string | null;
}

export function HomeSidebar({ announcements, analytics, orgName, orgPhone }: HomeSidebarProps) {
    return (
        <aside className="lg:col-span-1">
            <div className="space-y-6">
                <div className="space-y-4">
                    {/* Banner Image 1 */}
                    <div className="hidden md:block">
                        <div className="space-y-4">
                            <div className="overflow-hidden">
                                <div className="overflow-hidden cursor-pointer">
                                    <img
                                        src="https://storage.4ship.vn/public/image/59d7ec0b-0052-418b-81d2-963b5aa99401.jpg"
                                        alt="thủ tục hành chính"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thông báo */}
                    <div className="hidden md:block bg-white border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-2">
                            <h3 className="text-base font-bold text-gray-900">THÔNG BÁO</h3>
                            <Link className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }} href="/announcements">
                                Xem thêm →
                            </Link>
                        </div>
                        <div className="space-y-0">
                            {announcements.map((announcement) => (
                                <div key={announcement.id}
                                    className="py-3">
                                    <div className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug " style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }}>
                                        {announcement.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Liên hệ */}
                    <div className="hidden md:block bg-red-600 shadow-sm overflow-hidden">
                        <div className="bg-red-600 px-4 py-2 text-center border-b border-red-500">
                            <h2 className="text-white font-bold text-sm font-family: 'Inter', sans-serif;">LIÊN HỆ</h2>
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="text-white">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-white p-2">
                                        <Phone className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div className="flex-1 text-base">
                                        <h3 className="font-medium mb-1 text-yellow-200 uppercase">Trực ban tại {orgName || 'phường'}</h3>
                                        {orgPhone ? (
                                            <a href={`tel:${orgPhone.replace(/\./g, '')}`} className="font-bold text-yellow-200 hover:text-white transition-colors">
                                                {orgPhone}
                                            </a>
                                        ) : (
                                            <span className="font-bold text-yellow-200">-</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Banner Image 2 */}
                    <div className="hidden md:block">
                        <div className="space-y-4">
                            <div className="overflow-hidden">
                                <div className="overflow-hidden cursor-pointer">
                                    <img
                                        src="https://storage.4ship.vn/public/image/1fab35bf-1424-4800-94f7-8f3c31c603f5.jpg"
                                        alt="dịch vụ công"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thống kê truy cập */}
                    <div className="hidden md:block bg-white border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-2">
                            <h3 className="text-xl font-bold text-gray-900">THỐNG KÊ TRUY CẬP</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Eye className="h-5 w-5 text-gray-600" />
                                    <div className="text-sm text-gray-600">Đang truy cập</div>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{analytics.online}</div>
                            </div>
                            <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="h-5 w-5 text-gray-600" />
                                    <div className="text-sm text-gray-600">Truy cập hôm nay</div>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{analytics.today}</div>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-gray-600" />
                                    <div className="text-sm text-gray-600">Tổng lượt truy cập</div>
                                </div>
                                <div className="text-lg font-bold text-gray-900">{analytics.total.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
