import Link from "next/link";
import { Clock } from "lucide-react";
import type { StaffWorkData } from "@/types/api";

interface StaffWorkSectionProps {
    staffWork: StaffWorkData;
}

export function StaffWorkSection({ staffWork }: StaffWorkSectionProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="w-full">
                    <div className="mb-3 lg:mb-6">
                        <h3 className="text-base font-bold uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                            Công tác cán bộ
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {staffWork.main.map((news) => (
                            <Link key={news.id} className="group block bg-white transition-all duration-300" href={`/tin-tuc/${news.id}`}>
                                <div className="aspect-16/10">
                                    <div className="bg-gray-100 overflow-hidden w-full h-full">
                                        <img src={news.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                        {news.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Clock className="h-3 w-3" />
                                        <time>{news.date}</time>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div >
        </div >
    );
}
