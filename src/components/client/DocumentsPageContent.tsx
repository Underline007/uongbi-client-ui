"use client";

import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { DocumentSidebar } from "./DocumentSidebar";
import { DocumentSearch } from "./DocumentSearch";
import type { DocSectionFullTreeNodeResponse, DocumentSummaryResponse } from "@/types/api";

interface SectionDocMap {
    slug: string;
    documents: DocumentSummaryResponse[];
}

function collectSectionDocs(nodes: DocSectionFullTreeNodeResponse[]): SectionDocMap[] {
    const result: SectionDocMap[] = [];
    function traverse(items: DocSectionFullTreeNodeResponse[]) {
        for (const node of items) {
            if (node.documents?.length > 0) {
                result.push({ slug: node.slug, documents: node.documents });
            }
            if (node.children?.length > 0) {
                traverse(node.children);
            }
        }
    }
    traverse(nodes);
    return result;
}

// Collect documents from a section and all its descendants
function collectDocsForSection(nodes: DocSectionFullTreeNodeResponse[], targetSlug: string): DocumentSummaryResponse[] {
    const docs: DocumentSummaryResponse[] = [];
    function traverse(items: DocSectionFullTreeNodeResponse[], collecting: boolean) {
        for (const node of items) {
            const isTarget = node.slug === targetSlug;
            if (isTarget || collecting) {
                docs.push(...(node.documents ?? []));
                if (node.children?.length > 0) {
                    traverse(node.children, true);
                }
            } else if (node.children?.length > 0) {
                traverse(node.children, false);
            }
        }
    }
    traverse(nodes, false);
    return docs;
}

interface DocumentsPageContentProps {
    sections: DocSectionFullTreeNodeResponse[];
    allDocuments: DocumentSummaryResponse[];
    docTypes: string[];
}

export function DocumentsPageContent({ sections, allDocuments, docTypes }: DocumentsPageContentProps) {
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const filteredDocuments = useMemo(() => {
        if (!selectedSlug) return allDocuments;
        return collectDocsForSection(sections, selectedSlug);
    }, [sections, allDocuments, selectedSlug]);

    const filteredDocTypes = useMemo(() => {
        return Array.from(new Set(filteredDocuments.map((d) => d.doc_type))).sort();
    }, [filteredDocuments]);

    const handleSelect = (slug: string | null) => {
        setSelectedSlug(slug);
        setSidebarOpen(false);
    };

    return (
        <div className="flex gap-6 lg:gap-8 relative">
            {/* Mobile sidebar toggle */}
            <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed bottom-6 right-6 z-40 w-12 h-12 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
                    <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="font-bold text-gray-900">Danh mục văn bản</h3>
                            <button
                                type="button"
                                onClick={() => setSidebarOpen(false)}
                                className="p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <div className="p-3">
                            <DocumentSidebar
                                sections={sections}
                                selectedSlug={selectedSlug}
                                onSelect={handleSelect}
                                totalCount={allDocuments.length}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-8">
                    <h3 className="font-bold text-gray-900 mb-3 pb-2 border-b-2 border-red-600">
                        Danh mục văn bản
                    </h3>
                    <DocumentSidebar
                        sections={sections}
                        selectedSlug={selectedSlug}
                        onSelect={handleSelect}
                        totalCount={allDocuments.length}
                    />
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
                <DocumentSearch documents={filteredDocuments} docTypes={filteredDocTypes} />
            </div>
        </div>
    );
}
