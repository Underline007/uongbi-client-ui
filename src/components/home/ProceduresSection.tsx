'use client';

import Link from "next/link";
import { Baby, GraduationCap, Briefcase, Home as HomeIcon, Heart, Building2, Activity, Car, Users, ClipboardList, Scale } from "lucide-react";
import type { CitizenService, Procedure } from "@/types/api";
import { OutboundLink } from "@/components/analytics";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Baby,
    GraduationCap,
    Briefcase,
    Home: HomeIcon,
    Heart,
    Building2,
    Activity,
    Car,
    Users,
    ClipboardList,
    Scale,
};

interface ProceduresSectionProps {
    services: CitizenService[];
    procedures: Procedure[];
}

export function ProceduresSection({ services, procedures }: ProceduresSectionProps) {
    return (
        <section className="py-12 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 uppercase">
                        Hướng dẫn thủ tục hành chính
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Công dân / Doanh nghiệp tabs */}
                    <div className="bg-white border border-gray-300">
                        <div className="flex border-b-2 border-red-600">
                            <button className="flex-1 px-6 py-3 text-sm lg:text-lg font-bold uppercase transition-colors bg-red-600 text-white">
                                Công Dân
                            </button>
                            <button className="flex-1 px-6 py-3 text-sm lg:text-lg font-bold uppercase transition-colors bg-white text-gray-900 hover:bg-gray-50">
                                Doanh Nghiệp
                            </button>
                        </div>
                        <div className="p-2 md:p-6">
                            <div className="grid grid-cols-1 gap-2">
                                {services.map((service) => {
                                    const IconComponent = iconMap[service.icon] || ClipboardList;
                                    return (
                                        <OutboundLink
                                            key={service.id}
                                            href={service.href}
                                            className="group flex items-center bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-150 p-3"
                                        >
                                            <div className="shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center">
                                                <IconComponent className="w-5 h-5 text-gray-700" />
                                            </div>
                                            <span className="ml-3 text-gray-900 text-sm group-hover:text-gray-700">{service.label}</span>
                                        </OutboundLink>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bài hướng dẫn */}
                    <div className="bg-white border border-gray-300">
                        <div className="bg-white border-b-2 border-red-600 px-6 py-3 flex items-center justify-between">
                            <h3 className="text-base font-bold text-gray-900 uppercase">Bài hướng dẫn</h3>
                            <Link className="text-base text-gray-400 hover:text-gray-600 transition-colors" href="/procedures">
                                Xem tất cả
                            </Link>
                        </div>
                        <div className="p-2 md:p-6 overflow-y-auto" style={{ maxHeight: "600px" }}>
                            <ul className="space-y-3">
                                {procedures.map((proc) => (
                                    <li key={proc.id} className="flex items-start group">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-600 transition-colors"></span>
                                        <Link className="flex-1" href={`/procedures/${proc.id}`}>
                                            <h4 className="font-medium text-gray-900 text-sm leading-relaxed group-hover:text-red-600 transition-colors">
                                                {proc.title}
                                            </h4>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
