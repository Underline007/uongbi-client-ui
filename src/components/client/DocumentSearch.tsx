"use client";

import { useState, useRef } from "react";
import { Search, Filter, Calendar } from "lucide-react";
import { trackSearch } from "@/lib/analytics";

interface DocumentSearchProps {
    onSearch?: (query: string, documentType: string, year: string) => void;
}

export function DocumentSearch({ onSearch }: DocumentSearchProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [documentType, setDocumentType] = useState("all");
    const [year, setYear] = useState("all");

    // Debounce timer ref
    const debounceTimer = useRef<NodeJS.Timeout>(null);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch?.(value, documentType, year);

        // Track search with debounce (1.5s delay to capture complete query)
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        if (value.trim().length > 2) {
            debounceTimer.current = setTimeout(() => {
                trackSearch(value);
            }, 1500);
        }
    };

    const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setDocumentType(value);
        onSearch?.(searchQuery, value, year);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setYear(value);
        onSearch?.(searchQuery, documentType, value);
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm p-3 md:p-6 mb-4 md:mb-8">
            {/* Search Input */}
            <div className="mb-3 md:mb-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-2 md:pl-4 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm văn bản, số hiệu, nội dung..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="block w-full pl-8 md:pl-12 pr-8 md:pr-12 py-2 md:py-3 text-xs md:text-base border border-slate-300 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 flex-1">
                    {/* Document Type Filter */}
                    <div className="relative flex-1">
                        <Filter className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 h-3 w-3 md:h-4 md:w-4 text-gray-500 pointer-events-none" />
                        <select
                            value={documentType}
                            onChange={handleDocumentTypeChange}
                            className="pl-8 md:pl-12 pr-8 md:pr-10 block w-full border border-slate-300 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors duration-200 bg-white min-w-48 appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 0.75rem center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "1.25em 1.25em",
                            }}
                        >
                            <option value="all">Tất cả loại văn bản</option>
                        </select>
                    </div>

                    {/* Year Filter */}
                    <div className="relative">
                        <Calendar className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 h-3 w-3 md:h-4 md:w-4 text-gray-500 pointer-events-none" />
                        <select
                            value={year}
                            onChange={handleYearChange}
                            className="pl-8 md:pl-12 pr-8 md:pr-10 block w-full border border-slate-300 py-2 md:py-3 px-2 md:px-4 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors duration-200 bg-white min-w-32 appearance-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 0.75rem center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "1.25em 1.25em",
                            }}
                        >
                            <option value="all">Tất cả năm</option>
                        </select>
                    </div>
                </div>

                {/* Document Count */}
                <div className="text-[10px] md:text-sm text-slate-600 px-2 md:px-4 py-2 md:py-3 min-w-fit">
                    Tổng: 0 văn bản
                </div>
            </div>
        </div>
    );
}
