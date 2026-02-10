import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { ArticleTracker, ShareButtons, SummaryButton } from "@/components/analytics";
import { CommentList } from "@/components/comments";
import { articlesApi, categoriesApi } from "@/lib/api";

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

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let newsDetail;
    try {
        newsDetail = await articlesApi.getBySlug(slug);
    } catch {
        notFound();
    }

    const [relatedNews, categoriesData, otherNews] = await Promise.all([
        articlesApi.getRelated(slug, 3).catch(() => []),
        categoriesApi.getTree().catch(() => ({ items: [] })),
        articlesApi.getLatest(8).catch(() => []),
    ]);

    const categories = categoriesData.items.map((cat) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        count: cat.article_count,
    }));

    // console.log("cate" + JSON.stringify(categories)); 
    // đoạn này lấy mối cate to chứ không lấy child trong cate to ? 
    
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
                                                        {formatDate(newsDetail.published_at)}
                                                    </span>
                                                    <span className="hidden sm:inline">
                                                        {formatDate(newsDetail.published_at, true)}
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
                                    <CommentList articleSlug={slug} />
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
                                            {relatedNews.length === 0 && (
                                                <p className="text-gray-500 text-sm">Chưa có bài viết liên quan</p>
                                            )}
                                            {relatedNews.map((news) => (
                                                <Link
                                                    key={news.id}
                                                    className="group block hover:bg-gray-50 transition-colors duration-200"
                                                    href={`/news/${news.slug}`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="shrink-0 w-16 h-12 bg-gray-100 overflow-hidden">
                                                            <img
                                                                src={news.featured_image || '/no-image.png'}
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
                                                                {formatDate(news.published_at)}
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
                                                    href={`/news?category=${category.slug}`}
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
                                        <div className="aspect-16/10 mb-4">
                                            <div className="relative overflow-hidden w-full h-full bg-gray-100 group-hover:opacity-95 transition-opacity">
                                                <img
                                                    src={news.featured_image || '/no-image.png'}
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
                                                <time dateTime={news.published_at}>
                                                    {formatDate(news.published_at)}
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
