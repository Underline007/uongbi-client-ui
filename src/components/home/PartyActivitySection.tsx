import Link from "next/link";
import { Clock } from "lucide-react";
import type { PartyActivityData } from "@/types/api";

interface PartyActivitySectionProps {
    partyActivity: PartyActivityData;
}

export function PartyActivitySection({ partyActivity }: PartyActivitySectionProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="w-full">
                    <div className="mb-3 lg:mb-6">
                        <h3 className="text-base font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                            Hoạt động Đảng bộ phường
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-1">
                            <Link className="group block bg-white transition-all duration-300" href={`/tin-tuc/${partyActivity.featured.id}`}>
                                <div className="aspect-[16/10]">
                                    <div className="bg-gray-100 overflow-hidden w-full h-full">
                                        <img src={partyActivity.featured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                        {partyActivity.featured.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                                        {partyActivity.featured.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Clock className="h-3 w-3" />
                                        <time>{partyActivity.featured.date}</time>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="md:col-span-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {partyActivity.grid.map((news) => (
                                    <Link key={news.id} className="group block bg-white transition-all duration-300" href={`/tin-tuc/${news.id}`}>
                                        <div className="aspect-16/10">
                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                <img src={news.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <div className="py-3">
                                            <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                                {news.title}
                                            </h5>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Clock className="h-3 w-3" />
                                                <time>{news.date}</time>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
