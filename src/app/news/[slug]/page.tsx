import Link from "next/link";
import { Calendar } from "lucide-react";
import { ArticleTracker, ShareButtons, SummaryButton } from "@/components/analytics";
import { CommentList } from "@/components/comments";

// Mock data - sẽ được thay thế bằng API call
const newsDetail = {
    id: "1",
    title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
    slug: "day-nhanh-tien-do-thi-cong-du-an-sua-chua-duong-tinh-335",
    publishedAt: "2025-12-28T16:33:00.000Z",
    content: `
        <p>Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông. Do vậy, những năm qua, Trung ương và Tỉnh Quảng Ninh đã ưu tiên giành nhiều nguồn vốn để đầu tư nhiều dự án giao thông quan trọng. Trong đó, dự án sửa chữa đường tỉnh lộ 335 qua TP Móng Cái đang được gấp rút triển khai là một điển hình cho nỗ lực đầu tư của Tỉnh vào Móng Cái.</p>
        <p>Dự án đầu tư xây dựng công trình sửa chữa đường tỉnh lộ 335, đoạn từ km1+670- km7+ 200, TP Móng Cái do Sở giao thông vận tải Quảng Ninh làm chủ đầu tư; Doanh nghiệp tư nhân Xây dựng Thành An (Ninh Bình) thi công với tổng mức đầu tư trên 44,4 tỷ đồng hiện đang được gấp rút triển khai. Trong đó, bắt đầu từ ngày 2.9 đơn vị thi công đã tiến hành thảm nhựa những mét thảm đầu tiên.</p>
        <div class="image-block" style="margin: 2rem 0; text-align: center">
            <img src="https://mongcai.gov.vn/caches/editor/a60/a6024feb-dc93-417f-8f5e-ecc205e019e6.JPG" alt="" style="height: auto; border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
        </div>
        <div class="image-block" style="margin: 2rem 0; text-align: center">
            <img src="https://mongcai.gov.vn/caches/editor/734/73495c01-3b03-44f5-9b35-71d575d64443.JPG" alt="Nhà thầu cam kết sẽ hoàn thành dự án trong tháng 11.2017" style="height: auto; border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
            <p class="image-caption" style="text-align: center; font-style: italic; color: #6b7280; margin-top: 12px; font-size: 14px; line-height: 1.5"><em>Nhà thầu cam kết sẽ hoàn thành dự án trong tháng 11.2017</em></p>
        </div>
        <p>Ông Đặng Anh Tuấn, Chỉ huy trưởng công trường cho biết: mặt cắt đường sẽ giữ nguyên hiện trạng. Đơn vị thi công sẽ sử dụng 2 lớp bê tông thảm. Dự kiến khoảng trong tháng 11/2017 sẽ hoàn thành.</p>
        <p>Ông Tuấn cho biết thêm: do đây là tuyến đang khai thác, nhân dân và du khách vẫn thường xuyên đi qua khu vực này để dẫn tới khu du lịch Trà Cổ nên chúng tôi vừa gấp rút thi công, vừa chú ý đảm bảo an toàn giao thông cho phương tiện và người qua lại.</p>
        <div class="image-block" style="margin: 2rem 0; text-align: center">
            <img src="https://mongcai.gov.vn/caches/editor/068/068ccee4-5675-4585-ac7c-5839245fb0f6.JPG" alt="Đường 335 xuống cấp..." style="height: auto; border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
            <p class="image-caption" style="text-align: center; font-style: italic; color: #6b7280; margin-top: 12px; font-size: 14px; line-height: 1.5"><em>Đường 335 xuống cấp...</em></p>
        </div>
        <div class="image-block" style="margin: 2rem 0; text-align: center">
            <img src="https://mongcai.gov.vn/caches/editor/b65/b6581e10-012d-4092-a046-dce8507fdedb.JPG" alt="... sẽ sớm được thay thế hoàn toàn" style="height: auto; border-radius: 8px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
            <p class="image-caption" style="text-align: center; font-style: italic; color: #6b7280; margin-top: 12px; font-size: 14px; line-height: 1.5"><em>... sẽ sớm được thay thế hoàn toàn</em></p>
        </div>
        <p>Dịp nghỉ lễ 2/9 nhà thầu chúng tôi vẫn thi công bình thường, không những thế thời gian này nhà thầu còn làm 3 ca với 4 kíp với mục tiêu cao nhất là đẩy nhanh tiến độ dự án, tranh thủ những ngày nắng để bù lại những ngày giãn công do mưa trong suốt tháng 8 vừa qua.</p>
        <p>Với mong muốn tăng cường đảm bảo ATGT, phục vụ nhu cầu đi lại của nhân dân được thuận lợi, an toàn, duy trì tình trạng kỹ thuật, tuổi thọ khai thác tuyến đường, việc đẩy nhanh tiến độ Dự án đầu tư xây dựng công trình sửa chữa đường tỉnh lộ 335 đoạn qua TP Móng Cái cùng với các dự án công trình giao thông động lực khác sẽ thiết thực tạo diện mạo mới, động lực mới cho sự phát triển kinh tế xã hội của TP Móng Cái.</p>
    `,
};

const relatedNews = [
    {
        id: "2",
        title: "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái",
        slug: "quyet-dinh-v-v-phe-duyet-quy-hoach-chi-tiet-ty-le-1-500-cum-cong-nghiep-hai-yen-tai-phuong-mong-cai",
        thumbnail: "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
        publishedAt: "2025-12-28",
    },
    {
        id: "3",
        title: "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt",
        slug: "dai-hoi-dai-bieu-hoi-lhtn-viet-nam-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2029-thanh-cong-tot",
        thumbnail: "https://storage.4ship.vn/public/image/aaa41038-8a6b-4f6a-a43b-bffe7ef3a90e.jpeg",
        publishedAt: "2025-12-26",
    },
    {
        id: "4",
        title: "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026",
        slug: "ky-hop-thu-5-hdnd-phuong-mong-cai-3-khoa-i-nhiem-ky-2021-2026",
        thumbnail: "https://storage.4ship.vn/public/image/3ae9df3a-08b2-4ade-98ff-634f33b6d7a9.jpeg",
        publishedAt: "2025-12-26",
    },
];

const categories = [
    { id: "3329deeb-e963-4e95-a1bd-85b9d5ab304a", name: "Tin tức tổng hợp", count: 5 },
    { id: "a8f02942-d0c1-4d79-8e2e-f59387762c8f", name: "Kinh tế - Chính trị", count: 2 },
    { id: "c22e47a7-1735-44a7-a903-18de44929ec1", name: "Văn hóa - Xã hội", count: 4 },
    { id: "66586744-834c-43cd-9983-be819f61c0a0", name: "An ninh - Quốc phòng", count: 0 },
    { id: "92b745ca-fa3a-4c2a-8326-6af5e0d3e72d", name: "Công tác xây dựng đảng trong sạch vững mạnh", count: 5 },
    { id: "596ad0d4-4754-4ba9-8ce7-d04c4f70f7dd", name: "Chuyển đổi số", count: 0 },
];

const otherNews = [
    {
        id: "5",
        title: "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt",
        slug: "dai-hoi-dai-bieu-hoi-lhtn-viet-nam-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2029-thanh-cong-tot",
        thumbnail: "https://storage.4ship.vn/public/image/aaa41038-8a6b-4f6a-a43b-bffe7ef3a90e.jpeg",
        publishedAt: "2025-12-26T12:32:17.287000",
    },
    {
        id: "6",
        title: "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026",
        slug: "ky-hop-thu-5-hdnd-phuong-mong-cai-3-khoa-i-nhiem-ky-2021-2026",
        thumbnail: "https://storage.4ship.vn/public/image/3ae9df3a-08b2-4ade-98ff-634f33b6d7a9.jpeg",
        publishedAt: "2025-12-26T12:29:10.687000",
    },
    {
        id: "7",
        title: "Kỳ họp thứ Nhất HĐND phường Móng Cái 3, Khóa I, nhiệm kỳ 2021-2026",
        slug: "ky-hop-thu-nhat-hdnd-phuong-mong-cai-3-khoa-i-nhiem-ky-2021-2026",
        thumbnail: "https://storage.4ship.vn/public/image/d65aa7a8-69e4-4e35-aa2f-18fee7707f50.jpeg",
        publishedAt: "2025-12-25T13:21:32.535000",
    },
    {
        id: "8",
        title: "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên – xã, phường không xuất nhập cảnh trái'",
        slug: "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gio-i-bi-nh-yen-xa-phuo-ng-khong-xua-t-nha-p-ca-nh-tra-i",
        thumbnail: "https://storage.4ship.vn/public/image/a9518693-c087-4de6-8f6c-432b6236d047.jpeg",
        publishedAt: "2025-12-25T12:13:16.654000",
    },
    {
        id: "9",
        title: "Phường Móng Cái 3: Trung tâm phát triển công nghiệp và dịch vụ trọng điểm của tỉnh",
        slug: "phuong-mong-cai-3-trung-tam-phat-trien-cong-nghiep-va-dich-vu-trong-diem-cua-tinh",
        thumbnail: "https://storage.4ship.vn/public/image/4d052271-efc1-4d56-8688-da2f93fadc64.jpg",
        publishedAt: "2025-12-25T12:07:21.608000",
    },
    {
        id: "10",
        title: "Đại hội Hội Doanh nghiệp phường Móng Cái 3 lần thứ nhất nhiệm kỳ 2025-2030",
        slug: "dai-hoi-hoi-doanh-nghiep-phuong-mong-cai-3-lan-thu-nhat-nhiem-ky-2025-2030",
        thumbnail: "https://storage.4ship.vn/public/image/59463595-39a4-42aa-b300-8fc91f162099.jpeg",
        publishedAt: "2025-12-28T16:16:56.024000",
    },
    {
        id: "11",
        title: "Đại hội Đại biểu Đảng bộ phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025-2030",
        slug: "dai-hoi-dai-bieu-dang-bo-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2030",
        thumbnail: "https://storage.4ship.vn/public/image/68306c43-b1ff-45fb-92d1-7d2e51a98693.jpeg",
        publishedAt: "2025-12-25T13:24:02.394000",
    },
    {
        id: "12",
        title: "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm",
        slug: "phuong-mong-cai-3-ky-niem-80-nam-ngay-truyen-thong-cua-luc-luong-cong-an-nhan-dan-viet-nam-va-20-nam",
        thumbnail: "https://storage.4ship.vn/public/image/c9a6aa5f-dff9-44a3-8f80-f1a098ebc6a9.jpeg",
        publishedAt: "2025-12-28T05:13:11.347000",
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

export default function NewsDetailPage() {
    return (
        <ArticleTracker type="news" id={newsDetail.id} title={newsDetail.title}>
        <main className="flex-1">
            <div className="min-h-screen bg-white">
                <div className="py-1 sm:py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                <article>
                                    <div className="mb-8">
                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6 gap-2">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Calendar className="h-4 w-4 mr-1" />
                                                    <span className="sm:hidden">
                                                        {formatDate(newsDetail.publishedAt)}
                                                    </span>
                                                    <span className="hidden sm:inline">
                                                        {formatDate(newsDetail.publishedAt, true)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <SummaryButton
                                                    articleId={newsDetail.id}
                                                    articleTitle={newsDetail.title}
                                                />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h1 className="text-3xl font-bold text-gray-900 mb-6">
                                            {newsDetail.title}
                                        </h1>

                                        {/* Content */}
                                        <div className="max-w-none">
                                            <div className="text-gray-700 leading-relaxed">
                                                <div
                                                    className="prose prose-lg max-w-none [&_p]:mb-4 [&_img]:rounded-lg [&_img]:shadow-md"
                                                    dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="flex justify-end mt-8">
                                        <ShareButtons
                                            contentType="news"
                                            itemId={newsDetail.id}
                                            title={newsDetail.title}
                                        />
                                    </div>

                                    {/* Comments */}
                                    <CommentList articleId={newsDetail.id} />
                                </article>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-8">
                                    {/* Related News */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                                            Bài viết liên quan
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedNews.map((news) => (
                                                <Link
                                                    key={news.id}
                                                    className="group block hover:bg-gray-50 transition-colors duration-200"
                                                    href={`/news/${news.slug}`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="flex-shrink-0 w-16 h-12 bg-gray-100 overflow-hidden">
                                                            <img
                                                                src={news.thumbnail}
                                                                alt={news.title}
                                                                className="w-full h-full object-cover"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1 line-clamp-2">
                                                                {news.title}
                                                            </h4>
                                                            <div className="text-xs text-gray-500">
                                                                {formatDate(news.publishedAt)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Categories */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                                            Chuyên mục
                                        </h3>
                                        <div className="space-y-2">
                                            {categories.map((category) => (
                                                <Link
                                                    key={category.id}
                                                    className="group flex items-center justify-between p-2 hover:bg-gray-50 transition-colors duration-200"
                                                    href={`/news?category_id=${category.id}`}
                                                >
                                                    <span className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors">
                                                        {category.name}
                                                    </span>
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1">
                                                        {category.count}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Other News Section */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-red-600">
                                Bài viết khác
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {otherNews.map((news) => (
                                    <Link
                                        key={news.id}
                                        className="group block bg-white transition-all duration-300"
                                        href={`/news/${news.slug}`}
                                    >
                                        <div className="aspect-[16/10] mb-4">
                                            <div className="relative overflow-hidden w-full h-full bg-gray-100 group-hover:opacity-95 transition-opacity">
                                                <img
                                                    src={news.thumbnail}
                                                    alt={news.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                                                {news.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <time dateTime={news.publishedAt}>
                                                    {formatDate(news.publishedAt)}
                                                </time>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </ArticleTracker>
    );
}
