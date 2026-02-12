import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Bell, ChevronRight, Megaphone } from "lucide-react";
import { ArticleTracker, ShareButtons } from "@/components/analytics";
import { Breadcrumb } from "@/components/server";
import { articlesApi } from "@/lib/api";

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

export default async function AnnouncementDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let announcementDetail;
    try {
        announcementDetail = await articlesApi.getBySlug(slug);
    } catch {
        notFound();
    }

    const [relatedAnnouncements, otherAnnouncements] = await Promise.all([
        articlesApi.getRelated(slug, 3).catch(() => []),
        articlesApi.getLatest(4).catch(() => []),
    ]);

    return (
        <ArticleTracker type="announcement" id={announcementDetail.id} title={announcementDetail.title}>
            <main className="flex-1">
                <div className="min-h-screen bg-white">
                    <div className="py-1 sm:py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Breadcrumb items={[
                                { label: "Thông báo", href: "/announcements" },
                                { label: announcementDetail.title },
                            ]} />

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-3">
                                    <article>
                                        <div className="mb-8">
                                            {/* Header with badges */}
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                                                    <Bell className="w-3 h-3" />
                                                    Thông báo
                                                </span>
                                                {announcementDetail.category_name && (
                                                    <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium">
                                                        {announcementDetail.category_name}
                                                    </span>
                                                )}
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
                                                        {formatDate(announcementDetail.published_at)}
                                                    </span>
                                                    <span className="hidden sm:inline">
                                                        {formatDate(announcementDetail.published_at, true)}
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
                                                            <div className="shrink-0 w-10 h-10 bg-red-50 flex items-center justify-center">
                                                                <Bell className="w-4 h-4 text-red-600" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                                                                    {item.title}
                                                                </h4>
                                                                <div className="text-xs text-gray-500 mt-1">
                                                                    {formatDate(item.published_at)}
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
                                                <div className="shrink-0 w-10 h-10 bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                                    <Bell className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                                                        <Calendar className="w-3 h-3" />
                                                        {formatDate(item.published_at)}
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
