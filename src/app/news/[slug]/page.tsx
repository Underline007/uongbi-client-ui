import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Eye, Tag, User } from "lucide-react";
import { ArticleTracker, ShareButtons, SummaryButton } from "@/components/analytics";
import { CommentList } from "@/components/comments";
import { Breadcrumb } from "@/components/server";
import { articlesApi, categoriesApi, tagsApi } from "@/lib/api";

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

    const [relatedNews, categoriesData, otherNews, tagsData] = await Promise.all([
        articlesApi.getRelated(slug, 3).catch(() => []),
        categoriesApi.getTree().catch(() => ({ items: [] })),
        articlesApi.getLatest(8).catch(() => []),
        tagsApi.list(5).catch(() => ({ items: [], total: 0 })),
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
                        <Breadcrumb items={[
                            ...(newsDetail.category_name
                                ? [{ label: newsDetail.category_name, href: `/news?category=${newsDetail.category_slug}` }]
                                : [{ label: "Tin tức", href: "/news" }]),
                            { label: newsDetail.title },
                        ]} />
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                <article>
                                    <div className="mb-8">
                                        {/* Category */}
                                        {newsDetail.category_name && (
                                            <div className="mb-4">
                                                <Link
                                                    href={`/news?category=${newsDetail.category_slug}`}
                                                    className="inline-block px-3 py-1 text-sm font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
                                                >
                                                    {newsDetail.category_name}
                                                </Link>
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                            {newsDetail.title}
                                        </h1>

                                        {/* Meta */}
                                        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-6 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span className="sm:hidden">
                                                    {formatDate(newsDetail.published_at)}
                                                </span>
                                                <span className="hidden sm:inline">
                                                    {formatDate(newsDetail.published_at, true)}
                                                </span>
                                            </div>
                                            {newsDetail.author_name && (
                                                <div className="flex items-center">
                                                    <User className="h-4 w-4 mr-1" />
                                                    <span>{newsDetail.author_name}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center">
                                                <Eye className="h-4 w-4 mr-1" />
                                                <span>{newsDetail.views?.toLocaleString('vi-VN') || 0} lượt xem</span>
                                            </div>
                                            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                                                <SummaryButton
                                                    articleId={newsDetail.id}
                                                    articleTitle={newsDetail.title}
                                                />
                                            </div>
                                        </div>                                  
                                        {/* Content */}
                                        <div
                                            className="prose max-w-none"
                                            dangerouslySetInnerHTML={{ __html: newsDetail.content }}
                                        />
                                    </div>

                                    {/* Tags & Share Buttons */}
                                    <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
                                        {newsDetail.tags && newsDetail.tags.length > 0 ? (
                                            <div className="flex items-center flex-wrap gap-2 flex-1 min-w-0">
                                                <Tag className="h-4 w-4 text-gray-400 shrink-0" />
                                                {newsDetail.tags.map((tag) => (
                                                    <Link
                                                        key={tag}
                                                        href={`/news?tag=${encodeURIComponent(tag)}`}
                                                        className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-full"
                                                    >
                                                        {tag}
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <div />
                                        )}
                                        <div className="shrink-0">
                                            <ShareButtons
                                                contentType="news"
                                                itemId={newsDetail.id}
                                                title={newsDetail.title}
                                            />
                                        </div>
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
                                                        <div className="relative shrink-0 w-16 h-12 bg-gray-100 overflow-hidden">
                                                            <Image
                                                                src={news.featured_image || '/no-image.png'}
                                                                alt={news.title}
                                                                fill
                                                                className="object-cover"
                                                                sizes="64px"
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

                                    {/* Popular Tags */}
                                    {tagsData.items.length > 0 && (
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-red-600">
                                                Tags phổ biến
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {tagsData.items.map((tag) => (
                                                    <Link
                                                        key={tag.name}
                                                        href={`/news?tag=${encodeURIComponent(tag.name)}`}
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-full"
                                                    >
                                                        {tag.name}
                                                        <span className="text-xs text-gray-400">({tag.count})</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

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
                                                <Image
                                                    src={news.featured_image || '/no-image.png'}
                                                    alt={news.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
