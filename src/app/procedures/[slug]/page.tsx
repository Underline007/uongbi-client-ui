import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { ArticleTracker, ShareButtons } from "@/components/analytics";
import { articlesApi } from "@/lib/api";

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let guideDetail;
    try {
        guideDetail = await articlesApi.getBySlug(slug);
    } catch {
        notFound();
    }

    const [relatedGuides, otherGuides] = await Promise.all([
        articlesApi.getRelated(slug, 5).catch(() => []),
        articlesApi.getLatest(5).catch(() => []),
    ]);

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
