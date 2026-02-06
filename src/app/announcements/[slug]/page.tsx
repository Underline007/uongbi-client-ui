import Link from "next/link";
import { Calendar, Bell, Pin, ChevronRight, Megaphone } from "lucide-react";
import { ArticleTracker, ShareButtons } from "@/components/analytics";

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
        <p>Ngày 5/8, Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên - xã/phường không xuất nhập cảnh trái phép" và thành lập Ban Chỉ đạo triển khai mô hình. Tới dự có các đồng chí: Thượng tá Phạm Văn Dũng, UVBTV Đảng ủy, Phó Giám đốc Công an Tỉnh Quảng Ninh; Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3; Đỗ Thị Hồng Nhung, Phó Bí thư Đảng ủy, Chủ tịch UBND phường Móng Cái 3; Trung tá Phạm Thị Hoài Thu, Trưởng Công an phường Móng Cái 3 và các đơn vị đứng chân trên địa bàn cùng đông đảo nhân dân.</p>
        <p>Mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép" được thành lập nhằm phát huy vai trò của Nhân dân trong phòng ngừa, phát hiện, ngăn chặn hoạt động xuất nhập cảnh trái phép, xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc, góp phần giữ gìn an ninh trật tự tại địa bàn các khu dân cư trên địa bàn phường. Ban Chỉ đạo triển khai mô hình được thành lập gồm Trưởng ban là đồng chí Chủ tịch UBND phường Đỗ Thị Hồng Nhung; Phó Trưởng ban là đồng chí Phạm Thị Hoài Thu - Trưởng Công an Phường.</p>
    `,
};

const relatedAnnouncements = [
    {
        id: "2",
        title: "Thông báo lịch tiếp công dân định kỳ tháng 1/2026",
        slug: "thong-bao-lich-tiep-cong-dan-dinh-ky-thang-1-2026",
        publishedAt: "2025-12-25",
        isPinned: true,
    },
    {
        id: "3",
        title: "Thông báo về việc tạm dừng tiếp nhận hồ sơ trực tiếp",
        slug: "thong-bao-ve-viec-tam-dung-tiep-nhan-ho-so-truc-tiep",
        publishedAt: "2025-12-24",
        isPinned: false,
    },
    {
        id: "4",
        title: "Kế hoạch tổ chức các hoạt động mừng Đảng, mừng Xuân 2026",
        slug: "ke-hoach-to-chuc-cac-hoat-dong-mung-dang-mung-xuan-2026",
        publishedAt: "2025-12-23",
        isPinned: false,
    },
];

const otherAnnouncements = [
    {
        id: "5",
        title: "Thông báo về việc triển khai dịch vụ công trực tuyến mức độ 4",
        slug: "thong-bao-ve-viec-trien-khai-dich-vu-cong-truc-tuyen-muc-do-4",
        publishedAt: "2025-12-22",
    },
    {
        id: "6",
        title: "Lịch làm việc của UBND phường trong dịp Tết Nguyên đán 2026",
        slug: "lich-lam-viec-cua-ubnd-phuong-trong-dip-tet-nguyen-dan-2026",
        publishedAt: "2025-12-21",
    },
    {
        id: "7",
        title: "Thông báo kết quả xét tuyển viên chức năm 2025",
        slug: "thong-bao-ket-qua-xet-tuyen-vien-chuc-nam-2025",
        publishedAt: "2025-12-20",
    },
    {
        id: "8",
        title: "Công khai quyết toán ngân sách năm 2024",
        slug: "cong-khai-quyet-toan-ngan-sach-nam-2024",
        publishedAt: "2025-12-19",
    },
];

function formatDate(dateString: string, includeTime = false) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    if (includeTime) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    return `${day}/${month}/${year}`;
}

export default function AnnouncementDetailPage() {
    return (
        <ArticleTracker type="announcement" id={announcementDetail.id} title={announcementDetail.title}>
            <main className="flex-1">
                <div className="min-h-screen bg-white">
                    <div className="py-1 sm:py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Breadcrumb */}
                            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                                <Link href="/" className="hover:text-red-600 transition-colors">
                                    Trang chủ
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                                <Link href="/announcements" className="hover:text-red-600 transition-colors">
                                    Thông báo
                                </Link>
                                <ChevronRight className="w-4 h-4" />
                                <span className="text-gray-900 font-medium truncate max-w-[200px]">
                                    Chi tiết
                                </span>
                            </nav>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-3">
                                    <article>
                                        <div className="mb-8">
                                            {/* Header with badges */}
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                {announcementDetail.isPinned && (
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                                                        <Pin className="w-3 h-3" />
                                                        Ghim
                                                    </span>
                                                )}
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                                                    <Bell className="w-3 h-3" />
                                                    {announcementDetail.type.name}
                                                </span>
                                                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium">
                                                    {announcementDetail.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                                {announcementDetail.title}
                                            </h1>

                                            {/* Meta info */}
                                            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    <span className="sm:hidden">
                                                        {formatDate(announcementDetail.publishedAt)}
                                                    </span>
                                                    <span className="hidden sm:inline">
                                                        {formatDate(announcementDetail.publishedAt, true)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="mt-8">
                                                <div
                                                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                                                        [&>p]:mb-4
                                                        [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4
                                                        [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-6 [&>h3]:mb-3
                                                        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
                                                        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
                                                        [&>li]:mb-2
                                                        [&>blockquote]:border-l-4 [&>blockquote]:border-red-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                                                        [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-6"
                                                    dangerouslySetInnerHTML={{ __html: announcementDetail.content }}
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom Share */}
                                        <div className="flex justify-end pt-6 border-t border-gray-200">
                                            <ShareButtons
                                                contentType="announcement"
                                                itemId={announcementDetail.id}
                                                title={announcementDetail.title}
                                            />
                                        </div>
                                    </article>
                                </div>

                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-8 space-y-8">
                                        {/* Related Announcements */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
                                                Thông báo liên quan
                                            </h3>
                                            <div className="space-y-4">
                                                {relatedAnnouncements.map((item) => (
                                                    <Link
                                                        key={item.id}
                                                        href={`/announcements/${item.slug}`}
                                                        className="group block"
                                                    >
                                                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors -mx-3">
                                                            <div className="flex-shrink-0 w-10 h-10 bg-red-50 flex items-center justify-center">
                                                                {item.isPinned ? (
                                                                    <Pin className="w-4 h-4 text-amber-600" />
                                                                ) : (
                                                                    <Bell className="w-4 h-4 text-red-600" />
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                                                                    {item.title}
                                                                </h4>
                                                                <div className="text-xs text-gray-500 mt-1">
                                                                    {formatDate(item.publishedAt)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Links */}
                                        <div className="bg-gray-50 p-4">
                                            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <Megaphone className="w-4 h-4 text-red-600" />
                                                Danh mục thông báo
                                            </h3>
                                            <ul className="space-y-2">
                                                <li>
                                                    <Link
                                                        href="/announcements?type=thong-thuong"
                                                        className="text-sm text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                                        Thông báo thường
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/announcements?type=khan-cap"
                                                        className="text-sm text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                                                        Thông báo khẩn
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/announcements?type=tuyen-dung"
                                                        className="text-sm text-gray-600 hover:text-red-600 transition-colors flex items-center gap-2"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                        Tuyển dụng
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other Announcements Section */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
                                    Thông báo khác
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {otherAnnouncements.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/announcements/${item.slug}`}
                                            className="group block bg-white border border-gray-200 hover:border-red-300 hover:shadow-md transition-all p-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                                    <Bell className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                                                        <Calendar className="w-3 h-3" />
                                                        {formatDate(item.publishedAt)}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* View All Button */}
                                <div className="mt-8 text-center">
                                    <Link
                                        href="/announcements"
                                        className="inline-flex items-center px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium text-sm"
                                    >
                                        Xem tất cả thông báo
                                        <ChevronRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </ArticleTracker>
    );
}
