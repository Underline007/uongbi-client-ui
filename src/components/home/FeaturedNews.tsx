import Image from "next/image";
import Link from "next/link";
import type { FeaturedNews as FeaturedNewsType } from "@/types/api";

interface FeaturedNewsProps {
    featured: FeaturedNewsType;
}

export function FeaturedNews({ featured }: FeaturedNewsProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">
            {/* Featured Article */}
            <div className="lg:col-span-3">
                <div>
                    <div className="relative">
                        <div className="relative aspect-video overflow-hidden bg-gray-100">
                            <Image
                                src={featured.main.image}
                                alt="Featured"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />
                        </div>
                    </div>
                    <div className="pt-6">
                        <Link href={`/news/${featured.main.id}`}>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                                {featured.main.title}
                            </h2>
                        </Link>
                        <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
                            {featured.main.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Sidebar News List */}
            <div className="lg:col-span-2">
                <div className="hidden lg:block overflow-y-auto scrollbar-hide space-y-0 scrollbar-thin" style={{ maxHeight: "530px" }}>
                    {featured.sidebar.map((news, index) => (
                        <Link
                            key={news.id}
                            className={`block group py-3 ${index < featured.sidebar.length - 1 ? 'border-b border-gray-200' : ''}`}
                            href={`/news/${news.id}`}
                        >
                            <div className="flex space-x-3">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                                        {news.title}
                                    </h4>
                                </div>
                                <div className="relative w-24 h-16 bg-gray-100 shrink-0">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile News List */}
                <div className="lg:hidden space-y-0">
                    {featured.sidebar.map((news, index) => (
                        <Link
                            key={news.id}
                            className={`block group py-3 ${index < featured.sidebar.length - 1 ? 'border-b border-gray-200' : ''}`}
                            href={`/news/${news.id}`}
                        >
                            <div className="flex space-x-3">
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                                        {news.title}
                                    </h4>
                                </div>
                                <div className="relative w-24 h-16 bg-gray-100 overflow-hidden shrink-0">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                    <div className="pt-4 text-right">
                        <button className="text-gray-900 hover:text-red-600 font-medium text-sm underline transition-colors">
                            Xem thêm &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
