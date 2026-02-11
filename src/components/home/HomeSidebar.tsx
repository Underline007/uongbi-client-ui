import Link from "next/link";
import { Phone, Eye, TrendingUp, Users } from "lucide-react";
import { BannerDisplay } from "@/components/client/BannerDisplay";
import type { ArticleResponse, AnalyticsStats, BannerResponse } from "@/types/api";

interface HomeSidebarProps {
    announcements: ArticleResponse[];
    analytics: AnalyticsStats;
    orgName?: string | null;
    orgPhone?: string | null;
    sidebarBanners?: BannerResponse[];
}

export function HomeSidebar({ announcements, analytics, orgName, orgPhone, sidebarBanners = [] }: HomeSidebarProps) {
    return (
        <aside className="lg:col-span-1">
            <div className="space-y-6">
                <div className="space-y-4">
                    {/* Sidebar Banners */}
                    {sidebarBanners.length > 0 ? (
                        <div className="hidden md:block space-y-4">
                            {sidebarBanners.map((banner) => (
                                <div key={banner.id} className="overflow-hidden">
                                    <BannerDisplay banner={banner} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="hidden md:block">
                            <div className="overflow-hidden cursor-pointer">
                                <img
                                    src="/thu-tuc-hanh-chinh.png"
                                    alt="thủ tục hành chính"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}

                    {/* Thông báo */}
                    <div className="hidden md:block bg-white border border-gray-200 p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-2">
                            <h3 className="text-base font-bold text-gray-900">THÔNG BÁO</h3>
                            <Link className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }} href="/announcements">
                                Xem thêm →
                            </Link>
                        </div>
                        <div className="space-y-0">
                            {announcements.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Chưa có thông báo nào</p>
                                </div>
                            ) : (
                                announcements.map((announcement) => (
                                    <Link key={announcement.id} href={`/announcements/${announcement.slug}`}
                                        className="block py-3 hover:bg-gray-50 transition-colors">
                                        <div className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug hover:text-red-600 transition-colors" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }}>
                                            {announcement.title}
                                        </div>
                                    </Link>
                                ))
                            )}
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

                    {/* Banner Image 2 (static fallback) */}
                    {sidebarBanners.length === 0 && (
                        <div className="hidden md:block">
                            <div className="overflow-hidden cursor-pointer">
                                <a href="https://dichvucong.gov.vn/p/home/dvc-trang-chu.html">
                                    <img
                                        src="/cong-dich-vu-cong.jpg"
                                        alt="dịch vụ công"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </div>
                    )}

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
