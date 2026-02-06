import { PageBanner } from "@/components/server";
import { Pin, Bell, Eye, Calendar } from "lucide-react";
import Link from "next/link";

export default function AnnouncementsPage() {
    return (
        <main className="flex-1">
            <PageBanner />
            <div className="min-h-screen bg-gray-50">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Pin className="w-5 h-5 text-gray-900 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">Thông báo đã ghim</h2>
                        </div>

                        {/* Pinned Announcements */}
                        <div className="space-y-6">
                            {/* Announcement Card */}
                            <div className="group bg-white shadow-red-300 hover:shadow-lg hover:border-gray-300 transition-all duration-200 overflow-hidden">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center flex-wrap gap-2">
                                            {/* Badge: Thông thường */}
                                            <div className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-900 ">
                                                <Bell className="w-4 h-4 text-gray-900" />
                                                <span className="ml-1">Thông thường</span>
                                            </div>
                                            {/* Badge: Ghim */}
                                            <div className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-900 ">
                                                <Pin className="w-3 h-3 mr-1" />
                                                Ghim
                                            </div>
                                            {/* Badge: Thông báo */}
                                            <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-900 ">
                                                Thông báo
                                            </div>
                                        </div>
                                        {/* View Button */}
                                        <Link
                                            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                            href="/announcements/694e2c8f6808578c44aa1eb5"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Xem chi tiết
                                        </Link>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors">
                                        <Link href="/announcements/694e2c8f6808578c44aa1eb5">
                                            Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái
                                        </Link>
                                    </h3>

                                    {/* Content */}
                                    <div className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                                        Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái
                                        Ngày 5/8, Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên - xã/phường không xuất nhập cảnh trái phép" và thành lập Ban Chỉ đạo triển khai mô hình. Tới dự có các đồng chí: Thượng tá Phạm Văn Dũng, UVBTV Đảng ủy, Phó Giám đốc Công an Tỉnh Quảng Ninh; Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3; Đỗ Thị Hồng Nhung, Phó Bí thư Đảng ủy, Chủ tịch UBND phường Móng Cái 3; Trung tá Phạm Thị Hoài Thu, Trưởng Công an phường Móng Cái 3 và các đơn vị đứng chân trên địa bàn cùng đông đảo nhân dân.
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>26/12/2025 06:34</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
