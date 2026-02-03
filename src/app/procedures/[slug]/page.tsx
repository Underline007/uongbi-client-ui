import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { ArticleTracker, ShareButtons } from "@/components/analytics";

// Mock data - sẽ được thay thế bằng API call
const guideDetail = {
    id: "694e2b856808578c44aa1eb2",
    title: "Đăng ký thường trú",
    slug: "dang-ky-thuong-tru",
    content: `
        <h2>Trình tự thực hiện</h2>
        <p>Bước 1: Cá nhân chuẩn bị hồ sơ theo quy định của pháp luật.</p>
        <p>Bước 2: Cá nhân nộp hồ sơ đến Công an cấp xã.</p>
        <p>Bước 3: Khi tiếp nhận hồ sơ đăng ký thường trú, cơ quan đăng ký cư trú kiểm tra tính pháp lý và nội dung hồ sơ; thực hiện khai thác thông tin chứng minh về chỗ ở hợp pháp, quan hệ nhân thân do công dân cung cấp trong trong căn cước điện tử, tài khoản định danh điện tử trên hệ thống định danh và xác thực điện tử qua Ứng dụng định danh quốc gia hoặc trong Cơ sở dữ liệu quốc gia về dân cư, Cơ sở dữ liệu về cư trú, Kho quản lý dữ liệu điện tử tổ chức, cá nhân trên Cổng dịch vụ công quốc gia, Hệ thống thông tin giải quyết thủ tục hành chính cấp bộ, cấp tỉnh hoặc cơ sở dữ liệu quốc gia, cơ sở dữ liệu chuyên ngành khác.</p>
        <p>Trường hợp không khai thác được thông tin thì cơ quan đăng ký cư trú có trách nhiệm kiểm tra, xác minh để giải quyết thủ tục về cư trú; công dân có trách nhiệm cung cấp bản sao, bản chụp, bản điện tử một trong các giấy tờ, tài liệu chứng minh về chỗ ở hợp pháp khi cơ quan đăng ký cư trú có yêu cầu.</p>
        <p>- Trường hợp hồ sơ đã đầy đủ, hợp lệ thì tiếp nhận hồ sơ và cấp Phiếu tiếp nhận hồ sơ và hẹn trả kết quả (Mẫu CT04 ban hành kèm theo Thông tư số 66/2023/TT-BCA) cho người đăng ký.</p>
        <p>+ Chuyển hồ sơ đề nghị cấp văn bản đồng ý cho giải quyết thường trú đến cơ quan quản lý xuất, nhập cảnh Công an tỉnh, thành phố trực thuộc Trung ương nơi công dân đề nghị đăng ký thường trú (kèm hồ sơ đề nghị đăng ký thường trú) để kiểm tra, xác minh và đề nghị cơ quan quản lý xuất, nhập cảnh Bộ Công an xem xét cấp văn bản đồng ý cho giải quyết thường trú đối với trường hợp công dân Việt Nam định cư ở nước ngoài không có hộ chiếu Việt Nam còn giá trị sử dụng (nếu có).</p>
        <p>+ Chuyển hồ sơ đề nghị xác nhận nơi thường xuyên đậu, đỗ; sử dụng phương tiện vào mục đích để ở hoặc hồ sơ đề nghị xác nhận tình trạng chỗ ở hợp pháp, diện tích nhà ở tối thiểu để đăng ký thường trú, đăng ký tạm trú đến Ủy ban nhân dân cấp xã để xem xét, giải quyết theo quy định (nếu có).</p>
        <p>- Trường hợp hồ sơ đủ điều kiện nhưng chưa đầy đủ thành phần hồ sơ theo quy định của pháp luật thì hướng dẫn bổ sung, hoàn thiện và cấp Phiếu hướng dẫn bổ sung, hoàn thiện hồ sơ (Mẫu CT05 ban hành kèm theo Thông tư số 66/2023/TT-BCA) cho người đăng ký;</p>
        <p>- Trường hợp hồ sơ không đủ điều kiện thì từ chối và cấp Phiếu từ chối tiếp nhận, giải quyết hồ sơ (Mẫu CT06 ban hành kèm theo Thông tư số 66/2023/TT-BCA) cho người đăng ký.</p>
        <p>Bước 4: Cá nhân nộp lệ phí đăng ký thường trú theo quy định.</p>
        <p>Bước 5: Căn cứ theo ngày hẹn trên Phiếu tiếp nhận hồ sơ và hẹn trả kết quả để nhận thông báo kết quả giải quyết thủ tục đăng ký cư trú (nếu có).</p>
    `,
};

const relatedGuides = [
    {
        id: "694e2a666808578c44aa1ead",
        title: "Thủ tục đăng ký khai sinh",
        slug: "thu-tuc-dang-ky-khai-sinh",
    },
];

const otherGuides: { id: string; title: string; slug: string }[] = [];

export default function GuideDetailPage() {
    return (
        <ArticleTracker type="procedure" id={guideDetail.id} title={guideDetail.title}>
        <main className="flex-1">
            <div className="min-h-screen bg-white">
                <div className="py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                {/* Breadcrumb */}
                                <nav className="flex mb-8" aria-label="Breadcrumb">
                                    <ol className="flex items-center space-x-4">
                                        <li>
                                            <Link
                                                className="text-red-600 hover:text-red-700 text-sm font-medium"
                                                href="/guides"
                                            >
                                                Hướng dẫn thủ tục
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <ArrowLeft className="flex-shrink-0 h-4 w-4 text-gray-400 rotate-180" />
                                                <span className="ml-4 text-sm font-medium text-gray-500 truncate">
                                                    Chi tiết hướng dẫn
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>

                                {/* Header */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-3"></div>
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                        {guideDetail.title}
                                    </h1>
                                </div>

                                {/* Tabs */}
                                <div className="mb-8">
                                    <div className="border-b border-gray-200">
                                        <nav className="-mb-px flex space-x-8">
                                            <button className="py-4 px-1 border-b-2 font-medium text-sm border-red-500 text-red-600">
                                                Nội dung hướng dẫn
                                            </button>
                                        </nav>
                                    </div>

                                    {/* Content */}
                                    <div className="min-h-[400px] pt-8">
                                        <div
                                            className="max-w-none text-slate-700 prose-headings:text-slate-900 prose-links:text-red-600 [&>*]:!m-0 [&>p]:!mb-4 [&>h1]:!mb-4 [&>h2]:!mb-4 [&>h3]:!mb-4 [&>h4]:!mb-4 [&>h5]:!mb-4 [&>h6]:!mb-4 [&>ul]:!mb-4 [&>ol]:!mb-4 [&_.image-block]:!text-left [&_.image-block]:!justify-start [&_.image-block_img]:!mx-0"
                                            dangerouslySetInnerHTML={{ __html: guideDetail.content }}
                                        />
                                    </div>
                                </div>

                                {/* Share Buttons */}
                                <div className="flex justify-end mt-8">
                                    <ShareButtons
                                        contentType="procedure"
                                        itemId={guideDetail.id}
                                        title={guideDetail.title}
                                    />
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-8">
                                    {/* Related Guides */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                                            Hướng dẫn liên quan
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedGuides.length > 0 ? (
                                                relatedGuides.map((guide) => (
                                                    <Link
                                                        key={guide.id}
                                                        className="group block hover:bg-gray-50 transition-colors duration-200"
                                                        href={`/guides/${guide.slug}`}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex-shrink-0 w-16 h-12 bg-gray-100 overflow-hidden">
                                                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                                                    <FileText className="h-4 w-4 text-gray-500" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                                                                    {guide.title}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 text-sm text-center py-6">
                                                    Không có hướng dẫn liên quan
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Other Guides */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                                            Hướng dẫn khác
                                        </h3>
                                        <div className="space-y-4">
                                            {otherGuides.length > 0 ? (
                                                otherGuides.map((guide) => (
                                                    <Link
                                                        key={guide.id}
                                                        className="group block hover:bg-gray-50 transition-colors duration-200"
                                                        href={`/guides/${guide.slug}`}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex-shrink-0 w-16 h-12 bg-gray-100 overflow-hidden">
                                                                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                                                    <FileText className="h-4 w-4 text-gray-500" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                                                                    {guide.title}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))
                                            ) : (
                                                <p className="text-gray-500 text-sm text-center py-6">
                                                    Không có hướng dẫn khác
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </ArticleTracker>
    );
}
