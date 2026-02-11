import Link from "next/link";
import type { PartyBuildingColumn } from "@/types/api";

interface PartyBuildingSectionProps {
    partyBuilding: PartyBuildingColumn[];
}

export function PartyBuildingSection({ partyBuilding }: PartyBuildingSectionProps) {
    return (
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="w-full bg-white">
                    <section className="w-full">
                        <div className="mb-3 md:mb-0 md:relative md:z-10">
                            <h3 className="inline-block bg-primary py-1.5 px-2.5 text-base font-black uppercase text-white rounded-sm w-fit md:absolute md:top-[-20px] md:left-6 md:z-1" style={{ fontWeight: 900 }}>
                                công tác xây dựng đảng trong sạch vững mạnh
                            </h3>
                        </div>
                        <div className="border border-gray-200 bg-gray-50 p-2 md:p-6 md:pt-10 lg:pt-12 relative shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                                {partyBuilding.map((col, colIndex) => (
                                    <div key={colIndex} className="flex flex-col space-y-2 md:space-y-3">
                                        <Link className="group block" href={`/tin-tuc/${col.featured.id}`}>
                                            <div className="aspect-16/12 mb-2 md:mb-3 overflow-hidden bg-gray-100">
                                                <img
                                                    src={col.featured.image}
                                                    alt="Featured"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <h3 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1 md:mb-2 line-clamp-2">
                                                {col.featured.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                                                {col.featured.description}
                                            </p>
                                        </Link>
                                        {col.secondary && (
                                            <div className="space-y-2 md:space-y-3 pt-2 md:pt-3 border-t border-gray-200">
                                                <Link className="group flex gap-2 md:gap-3 pb-2 md:pb-3" href={`/tin-tuc/${col.secondary.id}`}>
                                                    <div className="shrink-0 w-20 md:w-28 h-11 md:h-16 overflow-hidden bg-gray-100">
                                                        <img
                                                            src={col.secondary.image}
                                                            alt="Featured"
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm md:text-base font-normal text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                                                            {col.secondary.title}
                                                        </h4>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
