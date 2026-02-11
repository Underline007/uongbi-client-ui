import { User } from "lucide-react";
import type { OrganizationMember } from "@/types/api";

interface OrganizationSectionProps {
    organization: OrganizationMember[];
}

export function OrganizationSection({ organization }: OrganizationSectionProps) {
    return (
        <div className="bg-white lg:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="bg-white w-full lg:border-t border-gray-200 pt-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-1 h-6 bg-red-600"></div>
                                <h2 className="font-bold text-gray-900 uppercase" style={{ fontSize: "0.8rem" }}>
                                    Cơ cấu tổ chức
                                </h2>
                            </div>
                        </div>
                        <div className="mb-0 lg:mb-6">
                            {/* Mobile Horizontal Scroll */}
                            <div className="md:hidden flex gap-3 pb-4 overflow-x-auto">
                                {organization.map((member) => (
                                    <div key={member.id} className="shrink-0 w-40">
                                        <div className="bg-white border border-gray-200 p-2 lg:p-3 min-w-[160px] h-full hover:shadow-md transition-shadow duration-200">
                                            <div className="flex flex-col items-center text-center h-full">
                                                <div className="mb-2">
                                                    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gray-100 flex items-center justify-center border border-gray-100 rounded-full">
                                                        <User className="h-7 w-7 lg:h-10 lg:w-10 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="font-bold text-gray-900 uppercase mb-1 leading-tight text-[0.65rem] lg:text-[0.7rem]">
                                                    {member.name}
                                                </div>
                                                <div className="px-1 lg:px-2 py-1 text-gray-600 leading-tight text-[0.6rem] lg:text-[0.65rem]">
                                                    <div>{member.position}</div>
                                                    {member.position2 && <div>{member.position2}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden md:grid gap-4 lg:gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                                {organization.map((member) => (
                                    <div key={member.id} className="flex">
                                        <div className="bg-white border border-gray-200 p-2 lg:p-3 h-full hover:shadow-md transition-shadow duration-200">
                                            <div className="flex flex-col items-center text-center h-full">
                                                <div className="mb-2">
                                                    <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gray-100 flex items-center justify-center border border-gray-100 rounded-full">
                                                        <User className="h-7 w-7 lg:h-10 lg:w-10 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="font-bold text-gray-900 uppercase mb-1 leading-tight text-[0.65rem] lg:text-[0.7rem]">
                                                    {member.name}
                                                </div>
                                                <div className="px-1 lg:px-2 py-1 text-gray-600 leading-tight text-[0.6rem] lg:text-[0.65rem]">
                                                    <div>{member.position}</div>
                                                    {member.position2 && <div>{member.position2}</div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
