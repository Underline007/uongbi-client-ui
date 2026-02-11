"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FolderOpen, FileText, Eye, ChevronRight, X, BookOpen } from "lucide-react";
import Link from "next/link";
import type { DocumentSummaryResponse, DocSectionTreeNodeResponse } from "@/types/api";

interface SectionWithDocuments {
    section: DocSectionTreeNodeResponse;
    documents: DocumentSummaryResponse[];
}

interface SectionDocumentsModalProps {
    sections: SectionWithDocuments[];
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function SectionDocumentsModal({ sections }: SectionDocumentsModalProps) {
    const [selected, setSelected] = useState<SectionWithDocuments | null>(null);

    return (
        <>
            {/* Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map(({ section, documents }) => (
                    <button
                        key={section.id}
                        type="button"
                        onClick={() => setSelected({ section, documents })}
                        className="relative bg-white border border-slate-200 rounded-xl p-5 md:p-6 text-left cursor-pointer group
                                   hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100/50
                                   transition-all duration-300 ease-out overflow-hidden"
                    >
                        {/* Decorative accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-400 via-amber-500 to-orange-400
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center
                                            group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                                <FolderOpen className="w-5 h-5 text-amber-500 group-hover:text-amber-600 transition-colors" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1
                                               group-hover:text-blue-600 transition-colors duration-200">
                                    {section.name}
                                </h3>
                                {section.description && (
                                    <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">
                                        {section.description}
                                    </p>
                                )}
                                <div className="flex items-center gap-1.5">
                                    <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-gray-500 transition-colors">
                                        {section.published_document_count} văn bản
                                    </span>
                                </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-300 shrink-0 mt-3
                                                      group-hover:text-blue-500 group-hover:translate-x-0.5
                                                      transition-all duration-200" />
                        </div>
                    </button>
                ))}
            </div>

            {/* Radix UI Dialog */}
            <Dialog.Root open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                                   data-[state=open]:animate-in data-[state=open]:fade-in-0
                                   data-[state=closed]:animate-out data-[state=closed]:fade-out-0
                                   duration-200"
                    />
                    <Dialog.Content
                        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                   w-[calc(100%-2rem)] max-w-2xl max-h-[85vh]
                                   bg-white rounded-2xl shadow-2xl shadow-black/10
                                   flex flex-col overflow-hidden
                                   data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]
                                   data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95
                                   duration-200 focus:outline-none"
                    >
                        {selected && (
                            <>
                                {/* Header */}
                                <div className="shrink-0 px-6 py-5 border-b border-gray-100 bg-linear-to-r from-slate-50 to-white">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3.5 min-w-0">
                                            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                                                <FolderOpen className="w-5 h-5 text-amber-500" />
                                            </div>
                                            <div className="min-w-0">
                                                <Dialog.Title className="text-base md:text-lg font-bold text-gray-900 truncate">
                                                    {selected.section.name}
                                                </Dialog.Title>
                                                <Dialog.Description className="text-xs text-gray-500 mt-0.5">
                                                    {selected.documents.length} văn bản trong danh mục
                                                </Dialog.Description>
                                            </div>
                                        </div>
                                        <Dialog.Close asChild>
                                            <button
                                                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200
                                                           transition-colors duration-150 shrink-0 cursor-pointer"
                                                aria-label="Đóng"
                                            >
                                                <X className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                                            </button>
                                        </Dialog.Close>
                                    </div>
                                </div>

                                {/* Document List */}
                                <div className="flex-1 overflow-y-auto overscroll-contain">
                                    {selected.documents.length === 0 ? (
                                        <div className="p-12 text-center">
                                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4">
                                                <FileText className="w-7 h-7 text-gray-300" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">
                                                Chưa có văn bản
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                Danh mục này hiện chưa có văn bản nào được xuất bản
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="divide-y divide-gray-50">
                                            {selected.documents.map((doc, index) => (
                                                <Link
                                                    key={doc.id}
                                                    href={`/documents/${doc.slug}`}
                                                    className="group flex items-start gap-4 px-6 py-4
                                                               hover:bg-blue-50/40 active:bg-blue-50/70
                                                               transition-colors duration-150"
                                                    onClick={() => setSelected(null)}
                                                >
                                                    {/* Number badge */}
                                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center
                                                                    group-hover:bg-blue-100 transition-colors duration-150 mt-0.5">
                                                        <span className="text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-sm font-semibold text-gray-800 leading-snug
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
                                                            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium">
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
                                </div>

                                {/* Footer */}
                                {selected.documents.length > 0 && (
                                    <div className="shrink-0 px-6 py-3.5 border-t border-gray-100 bg-gray-50/50">
                                        <p className="text-xs text-gray-400 text-center">
                                            Nhấn vào văn bản để xem chi tiết
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}
