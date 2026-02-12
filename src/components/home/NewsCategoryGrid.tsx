import Image from "next/image";
import Link from "next/link";
import type { NewsCategory } from "@/types/api";

interface NewsCategoryGridProps {
    categories: NewsCategory[];
}

export function NewsCategoryGrid({ categories }: NewsCategoryGridProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:pt-4 lg:border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-white mt-2 lg:mt-0">
                                <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                                    <div className="w-1 h-6 bg-red-600 mr-3"></div>
                                    <Link href={`/categories/${category.id}`}>
                                        <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors">
                                            {category.name}
                                        </h3>
                                    </Link>
                                </div>
                                <div className="space-y-2 lg:space-y-4">
                                    <Link className="block group" href={`/news/${category.featured.id}`}>
                                        <div className="space-y-2">
                                            <div className="relative aspect-video overflow-hidden bg-gray-100">
                                                <Image
                                                    src={category.featured.image}
                                                    alt={category.featured.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                            <h4 className="font-bold text-gray-900 text-sm leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2">
                                                {category.featured.title}
                                            </h4>
                                        </div>
                                    </Link>
                                    {category.items.length > 0 && (
                                        <>
                                            <div className="border-t border-gray-200 pt-2"></div>
                                            <div className="m-0 ">
                                                {category.items.map((item, idx) => (
                                                    <Link key={item.id} className="block group" href={`/news/${item.id}`}>
                                                        <div className={`py-2 ${idx < category.items.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                                            <h4 className="font-medium text-gray-700 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2 m-0">
                                                                {item.title}
                                                            </h4>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
