import Link from "next/link";
import type { HighlightColumn } from "@/types/api";

interface HighlightsSectionProps {
    highlights: HighlightColumn[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
    return (
        <div>
            <div className="relative">
                <div className="mb-[-16px] relative z-10 pl-4">
                    <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase shadow-md">
                        Tiêu điểm
                    </span>
                </div>
                <div className="bg-gray-50 p-3 lg:p-6 pt-6 lg:pt-10 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
                        {highlights.map((column, colIndex) => (
                            <div key={colIndex} className={`relative ${colIndex < 2 ? 'md:pr-4' : 'md:px-4'}`}>
                                {colIndex < 2 && (
                                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
                                )}
                                {column.items.map((item, itemIndex) => (
                                    <div
                                        key={item.id}
                                        className={`pt-4 ${itemIndex === 0 ? '' : 'pl-4 md:pl-0'} ${itemIndex === 1 ? 'border-b border-dashed border-gray-300 pb-4' : ''}`}
                                    >
                                        <span className="text-xs text-gray-500 block mb-2">{item.date}</span>
                                        <Link
                                            className={`${item.featured ? 'font-semibold' : ''} text-gray-900 hover:text-red-600 transition-colors line-clamp-${item.featured ? '3' : '2'} text-sm leading-relaxed`}
                                            href={`/tin-tuc/${item.id}`}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
