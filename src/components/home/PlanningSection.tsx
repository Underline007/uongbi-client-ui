import Link from "next/link";
import { Clock } from "lucide-react";
import type { PlanningItem } from "@/types/api";

interface PlanningSectionProps {
    plannings: {
        featured: PlanningItem;
        sidebar: PlanningItem;
    };
}

export function PlanningSection({ plannings }: PlanningSectionProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="w-full">
                    <div className="mb-3 lg:mb-6">
                        <h3 className="text-base font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                            Thông tin quy hoạch
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-1">
                            <div className="space-y-4 h-full">
                                <Link className="group block bg-white transition-all duration-300" href={`/news/${plannings.sidebar.id}`}>
                                    <div className="aspect-[16/10]">
                                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                                            <img src={plannings.sidebar.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                                            {plannings.sidebar.title}
                                        </h5>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Clock className="h-3 w-3" />
                                            <time>{plannings.sidebar.date}</time>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <Link className="group block bg-white transition-all duration-300 h-full" href={`/news/${plannings.featured.id}`}>
                                <div className="flex flex-col h-full">
                                    <div className="aspect-[16/10] shrink-0">
                                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                                            <img src={plannings.featured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                    </div>
                                    <div className="py-6 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                                                {plannings.featured.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                                {plannings.featured.description}
                                            </p>
                                        </div>
                                        <div className="mt-4">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Clock className="h-3 w-3" />
                                                <time>{plannings.featured.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="space-y-4 h-full"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
