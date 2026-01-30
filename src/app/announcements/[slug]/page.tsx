import Link from "next/link";
import { ArrowLeft, Bell, Pin, Calendar, Share2 } from "lucide-react";

// Mock data - sẽ được thay thế bằng API call
const announcementDetail = {
    id: "694e2c8f6808578c44aa1eb5",
    title: "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép'",
    slug: "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gioi-binh-yen",
    type: {
        id: "type-001",
        name: "Thông thường",
        slug: "thong-thuong",
    },
    category: "Thông báo",
    isPinned: true,
    isImportant: false,
    publishedAt: "2025-12-26T06:34:00.000Z",
    content: `
        <h2>Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép"</h2>
        <p>Ngày 5/8, Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên - xã/phường không xuất nhập cảnh trái phép" và thành lập Ban Chỉ đạo triển khai mô hình. Tới dự có các đồng chí: Thượng tá Phạm Văn Dũng, UVBTV Đảng ủy, Phó Giám đốc Công an Tỉnh Quảng Ninh; Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3; Đỗ Thị Hồng Nhung, Phó Bí thư Đảng ủy, Chủ tịch UBND phường Móng Cái 3; Trung tá Phạm Thị Hoài Thu, Trưởng Công an phường Móng Cái 3 và các đơn vị đứng chân trên địa bàn cùng đông đảo nhân dân.</p>
        <p>Mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép" được thành lập nhằm phát huy vai trò của Nhân dân trong phòng ngừa, phát hiện, ngăn chặn hoạt động xuất nhập cảnh trái phép, xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc, góp phần giữ gìn an ninh trật tự tại địa bàn các khu dân cư trên địa bàn phường. Ban Chỉ đạo triển khai mô hình được thành lập gồm Trưởng ban là đồng chí Chủ tịch UBND phường Đỗ Thị Hồng Nhung; Phó Trưởng ban là đồng chí Phạm Thị Hoài Thu - Trưởng Công an Phường.</p>
    `,
};

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function AnnouncementDetailPage() {
    return (
        <main className="flex-1">
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link
                                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                                href="/announcements"
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Quay lại danh sách
                            </Link>
                            <div className="flex items-center space-x-3">
                                <button className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                                    <Share2 className="w-4 h-4 mr-1" />
                                    Chia sẻ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <article className="bg-white shadow-sm border overflow-hidden">
                        <div className="p-6 sm:p-8">
                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <div className="flex items-center space-x-2">
                                    <Bell className="w-5 h-5 text-blue-500" />
                                    <span className="text-xs font-medium px-2 py-1 border bg-blue-100 text-blue-800 border-blue-200">
                                        {announcementDetail.type.name}
                                    </span>
                                </div>
                                {announcementDetail.isPinned && (
                                    <div className="flex items-center space-x-1 text-amber-600">
                                        <Pin className="w-4 h-4" />
                                        <span className="text-xs font-medium">Ghim</span>
                                    </div>
                                )}
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
                                    {announcementDetail.category}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                {announcementDetail.title}
                            </h1>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b">
                                <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(announcementDetail.publishedAt)}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className="prose prose-lg max-w-none text-gray-900 leading-relaxed [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-4 [&>p]:mb-4"
                                dangerouslySetInnerHTML={{ __html: announcementDetail.content }}
                            />
                        </div>
                    </article>

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <Link
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                            href="/announcements"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Quay lại danh sách thông báo
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
