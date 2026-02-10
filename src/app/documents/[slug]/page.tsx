import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, FileText, ChevronRight, Eye, Download } from "lucide-react";
import { documentsApi } from "@/lib/api";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default async function DocumentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let document;
    try {
        document = await documentsApi.getBySlug(slug);
    } catch {
        notFound();
    }

    return (
        <main className="flex-1">
            <div className="min-h-screen bg-white">
                <div className="py-1 sm:py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                Trang chủ
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/documents" className="hover:text-blue-600 transition-colors">
                                Văn bản
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
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                                                <FileText className="w-3 h-3" />
                                                Văn bản
                                            </span>
                                            {document.doc_type && (
                                                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium">
                                                    {document.doc_type}
                                                </span>
                                            )}
                                            {document.section_name && (
                                                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium">
                                                    {document.section_name}
                                                </span>
                                            )}
                                        </div>

                                        {/* Title */}
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                            {document.title}
                                        </h1>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
                                            {document.published_at && (
                                                <div className="flex items-center text-gray-500 text-sm">
                                                    <Calendar className="h-4 w-4 mr-2" />
                                                    <span>{formatDate(document.published_at)}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <Eye className="h-4 w-4 mr-2" />
                                                <span>{document.views} lượt xem</span>
                                            </div>
                                        </div>

                                        {/* Excerpt */}
                                        {document.excerpt && (
                                            <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 text-gray-700 text-sm leading-relaxed">
                                                {document.excerpt}
                                            </div>
                                        )}

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
                                                    [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
                                                    [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-6"
                                                dangerouslySetInnerHTML={{
                                                    __html: typeof document.content === "string"
                                                        ? document.content
                                                        : JSON.stringify(document.content),
                                                }}
                                            />
                                        </div>

                                        {/* Attachments */}
                                        {document.attachments && document.attachments.length > 0 && (
                                            <div className="mt-8 p-4 bg-gray-50 border border-gray-200">
                                                <h3 className="text-sm font-bold text-gray-900 mb-3">Tệp đính kèm</h3>
                                                <div className="space-y-2">
                                                    {document.attachments.map((url, index) => (
                                                        <a
                                                            key={index}
                                                            href={url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            <span className="truncate">
                                                                {url.split("/").pop() || `Tệp đính kèm ${index + 1}`}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-8 space-y-8">
                                    <div className="bg-gray-50 p-4">
                                        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-blue-600" />
                                            Thông tin văn bản
                                        </h3>
                                        <dl className="space-y-3 text-sm">
                                            {document.doc_type && (
                                                <div>
                                                    <dt className="text-gray-500">Loại văn bản</dt>
                                                    <dd className="font-medium text-gray-900">{document.doc_type}</dd>
                                                </div>
                                            )}
                                            {document.section_name && (
                                                <div>
                                                    <dt className="text-gray-500">Danh mục</dt>
                                                    <dd className="font-medium text-gray-900">{document.section_name}</dd>
                                                </div>
                                            )}
                                            {document.published_at && (
                                                <div>
                                                    <dt className="text-gray-500">Ngày đăng</dt>
                                                    <dd className="font-medium text-gray-900">{formatDate(document.published_at)}</dd>
                                                </div>
                                            )}
                                            <div>
                                                <dt className="text-gray-500">Lượt xem</dt>
                                                <dd className="font-medium text-gray-900">{document.views}</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="text-center">
                                        <Link
                                            href="/documents"
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                                        >
                                            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
                                            Quay lại danh sách
                                        </Link>
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
