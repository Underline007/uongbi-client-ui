import { PageBanner, Breadcrumb } from "@/components/server";
import { Bell, Eye, Calendar } from "lucide-react";
import Link from "next/link";
import { categoriesApi } from "@/lib/api";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default async function AnnouncementsPage() {
    let articles: Awaited<ReturnType<typeof categoriesApi.getArticles>> | null = null;

    try {
        articles = await categoriesApi.getArticles("thong-bao", { page: 1, page_size: 20 });
    } catch (error) {
        console.error("Failed to fetch announcements:", error);
    }

    const announcements = articles?.data ?? [];

    return (
        <main className="flex-1">
            <PageBanner />
            <div className="min-h-screen bg-gray-50">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Breadcrumb items={[
                        { label: "Thông báo" },
                    ]} />
                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <Bell className="w-5 h-5 text-gray-900 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">Thông báo</h2>
                        </div>

                        {/* Announcements List */}
                        <div className="space-y-6">
                            {announcements.length === 0 && (
                                <div className="bg-white p-8 text-center text-gray-500">
                                    Không có thông báo nào.
                                </div>
                            )}

                            {announcements.map((item) => (
                                <div
                                    key={item.id}
                                    className="group bg-white shadow-red-300 hover:shadow-lg hover:border-gray-300 transition-all duration-200 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <div className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white border border-gray-200 text-gray-900">
                                                    <Bell className="w-4 h-4 text-gray-900" />
                                                    <span className="ml-1">Thông báo</span>
                                                </div>
                                                {item.category_name && (
                                                    <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-900">
                                                        {item.category_name}
                                                    </div>
                                                )}
                                            </div>
                                            <Link
                                                className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                                href={`/announcements/${item.slug}`}
                                            >
                                                <Eye className="w-4 h-4 mr-2" />
                                                Xem chi tiết
                                            </Link>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors">
                                            <Link href={`/announcements/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h3>

                                        {/* Excerpt */}
                                        {item.excerpt && (
                                            <div className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed">
                                                {item.excerpt}
                                            </div>
                                        )}

                                        {/* Date */}
                                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{formatDate(item.published_at)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
