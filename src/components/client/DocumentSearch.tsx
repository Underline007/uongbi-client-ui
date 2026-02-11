"use client";

import { useState, useMemo, useRef } from "react";
import { Search, Filter, Calendar, FileText, Eye, ChevronRight, SearchX } from "lucide-react";
import Link from "next/link";
import { trackSearch } from "@/lib/analytics";
import type { DocumentSummaryResponse } from "@/types/api";

interface DocumentSearchProps {
    documents: DocumentSummaryResponse[];
    docTypes: string[];
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function DocumentSearch({ documents, docTypes }: DocumentSearchProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [documentType, setDocumentType] = useState("all");
    const [year, setYear] = useState("all");

    const debounceTimer = useRef<NodeJS.Timeout>(null);

    // Extract available years from documents
    const availableYears = useMemo(() => {
        const years = new Set<number>();
        for (const doc of documents) {
            if (doc.published_at) {
                years.add(new Date(doc.published_at).getFullYear());
            }
        }
        return Array.from(years).sort((a, b) => b - a);
    }, [documents]);

    // Filter documents client-side
    const filteredDocuments = useMemo(() => {
        return documents.filter((doc) => {
            // Search filter
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const matchTitle = doc.title.toLowerCase().includes(q);
                const matchExcerpt = doc.excerpt?.toLowerCase().includes(q);
                if (!matchTitle && !matchExcerpt) return false;
            }

            // Doc type filter
            if (documentType !== "all" && doc.doc_type !== documentType) return false;

            // Year filter
            if (year !== "all" && doc.published_at) {
                const docYear = new Date(doc.published_at).getFullYear().toString();
                if (docYear !== year) return false;
            }

            return true;
        });
    }, [documents, searchQuery, documentType, year]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }

        if (value.trim().length > 2) {
            debounceTimer.current = setTimeout(() => {
                trackSearch(value);
            }, 1500);
        }
    };

    const hasActiveFilters = searchQuery.trim() || documentType !== "all" || year !== "all";

    return (
        <>
            {/* Search & Filter Panel */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm shadow-slate-100
                            p-4 md:p-6 mb-5 md:mb-8 transition-shadow hover:shadow-md">
                {/* Search Input */}
                <div className="mb-3 md:mb-4">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                        </div>
                        <input
                            type="text"
                            placeholder="Tìm kiếm văn bản, số hiệu, nội dung..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="block w-full pl-9 md:pl-12 pr-4 md:pr-6 py-2.5 md:py-3.5
                                       text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-xl
                                       placeholder-slate-400 text-gray-900
                                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white
                                       transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
                    {/* Document Type Filter */}
                    <div className="relative flex-1">
                        <Filter className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-slate-400 pointer-events-none" />
                        <select
                            value={documentType}
                            onChange={(e) => setDocumentType(e.target.value)}
                            className="pl-8 md:pl-11 pr-9 block w-full border border-slate-200 rounded-xl
                                       py-2.5 md:py-3 text-xs md:text-sm bg-slate-50
                                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white
                                       transition-all duration-200 appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 0.75rem center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "1.25em 1.25em",
                            }}
                        >
                            <option value="all">Tất cả loại văn bản</option>
                            {docTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Year Filter */}
                    <div className="relative sm:w-40 md:w-48">
                        <Calendar className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 md:h-4 md:w-4 text-slate-400 pointer-events-none" />
                        <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="pl-8 md:pl-11 pr-9 block w-full border border-slate-200 rounded-xl
                                       py-2.5 md:py-3 text-xs md:text-sm bg-slate-50
                                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 focus:bg-white
                                       transition-all duration-200 appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 0.75rem center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "1.25em 1.25em",
                            }}
                        >
                            <option value="all">Tất cả năm</option>
                            {availableYears.map((y) => (
                                <option key={y} value={y.toString()}>{y}</option>
                            ))}
                        </select>
                    </div>

                    {/* Result Count Badge */}
                    <div className="hidden sm:flex items-center gap-1.5 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-slate-100 shrink-0">
                        <span className="text-[11px] md:text-xs text-slate-500">Kết quả:</span>
                        <span className="text-xs md:text-sm font-bold text-gray-900">{filteredDocuments.length}</span>
                    </div>
                </div>
            </div>

            {/* Document List */}
            {filteredDocuments.length === 0 ? (
                /* Empty State */
                <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden">
                    <div className="p-10 md:p-16 text-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-5">
                            {hasActiveFilters ? (
                                <SearchX className="h-7 w-7 md:h-9 md:w-9 text-slate-300" />
                            ) : (
                                <FileText className="h-7 w-7 md:h-9 md:w-9 text-blue-400" />
                            )}
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                            {hasActiveFilters ? "Không tìm thấy kết quả" : "Không có văn bản"}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                            {hasActiveFilters
                                ? "Thử thay đổi từ khóa hoặc bộ lọc để tìm kết quả phù hợp hơn."
                                : "Hiện tại chưa có văn bản pháp luật nào được xuất bản."}
                        </p>
                        {hasActiveFilters && (
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(""); setDocumentType("all"); setYear("all"); }}
                                className="mt-4 px-4 py-2 text-xs md:text-sm font-medium text-blue-600 bg-blue-50 rounded-lg
                                           hover:bg-blue-100 active:bg-blue-150 transition-colors duration-150 cursor-pointer"
                            >
                                Xóa bộ lọc
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden divide-y divide-slate-100">
                    {filteredDocuments.map((doc, index) => (
                        <Link
                            key={doc.id}
                            href={`/documents/${doc.title}`}
                            className="group flex items-start gap-4 px-5 py-4 md:px-6 md:py-5
                                       hover:bg-blue-50/40 active:bg-blue-50/70
                                       transition-colors duration-150"
                        >
                            {/* Number Badge */}
                            <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-100
                                            flex items-center justify-center
                                            group-hover:bg-blue-100 transition-colors duration-150 mt-0.5">
                                <FileText/>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug
                                               group-hover:text-blue-600 transition-colors duration-150 line-clamp-2 mb-1.5">
                                    {doc.title}
                                </h3>
                                {doc.excerpt && (
                                    <p className="text-xs text-gray-400 line-clamp-1 mb-2 leading-relaxed">
                                        {doc.excerpt}
                                    </p>
                                )}
                                <div className="flex items-center gap-3 text-[11px] text-gray-400">
                                    {doc.published_at && (
                                        <span className="font-medium">{formatDate(doc.published_at)}</span>
                                    )}
                                    <span className="inline-flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        {doc.views}
                                    </span>
                                    <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-medium">
                                        {doc.doc_type}
                                    </span>
                                </div>
                            </div>

                            <ChevronRight className="w-4 h-4 text-gray-300 shrink-0 mt-2
                                                      group-hover:text-blue-500 group-hover:translate-x-0.5
                                                      transition-all duration-150" />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
