import { PageBanner } from "@/components/server";
import { DocumentSearch } from "@/components/client";
import { FileText, FolderOpen, ChevronRight, Eye } from "lucide-react";
import Link from "next/link";
import { documentsApi } from "@/lib/api";
import type { DocSectionTreeNodeResponse } from "@/types/api";

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function flattenSections(nodes: DocSectionTreeNodeResponse[]): DocSectionTreeNodeResponse[] {
    const result: DocSectionTreeNodeResponse[] = [];
    for (const node of nodes) {
        result.push(node);
        if (node.children.length > 0) {
            result.push(...flattenSections(node.children));
        }
    }
    return result;
}

export default async function DocumentsPage() {
    let sectionsData: Awaited<ReturnType<typeof documentsApi.getSections>> | null = null;

    try {
        sectionsData = await documentsApi.getSections();
    } catch (error) {
        console.error("Failed to fetch document sections:", error);
    }

    const sections = sectionsData?.items ?? [];
    const allSections = flattenSections(sections);
    const totalDocuments = allSections.reduce((sum, s) => sum + s.published_document_count, 0);

    // Fetch documents for all sections that have documents
    const sectionDetails = await Promise.all(
        allSections
            .filter((s) => s.published_document_count > 0)
            .map((s) => documentsApi.getSectionBySlug(s.slug).catch(() => null))
    );
    const allDocuments = sectionDetails
        .filter(Boolean)
        .flatMap((detail) => detail!.documents);

    return (
        <main className="flex-1">
            <div className="min-h-screen">
                <PageBanner />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4 lg:py-8">
                    {/* Header */}
                    <div className="mb-3 md:mb-6">
                        <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                            Chính sách & Văn bản pháp lý
                        </h1>
                        <p className="text-xs md:text-base text-gray-600">
                            Tra cứu các văn bản pháp luật, chính sách và quy định của phường
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <DocumentSearch />

                    {allDocuments.length === 0 ? (
                        /* Empty State */
                        <div className="bg-white border border-slate-200/50 overflow-hidden shadow-lg shadow-slate-200/50">
                            <div className="p-8 md:p-16 text-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                                    <FileText className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />
                                </div>
                                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                                    Không có văn bản
                                </h3>
                                <p className="text-xs md:text-base text-slate-600 mb-4 md:mb-6 max-w-md mx-auto px-4">
                                    Hiện tại chưa có văn bản pháp luật nào được xuất bản.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Document Count */}
                            <div className="mb-4 text-sm text-gray-600">
                                Tổng: <span className="font-semibold text-gray-900">{totalDocuments}</span> văn bản
                            </div>

                            {/* Document List */}
                            <div className="space-y-3">
                                {allDocuments.map((doc) => (
                                    <Link
                                        key={doc.id}
                                        href={`/documents/${doc.slug}`}
                                        className="group block bg-white border border-slate-200/50 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
                                    >
                                        <div className="p-4 md:p-6 flex items-start gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <FileText className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                                    {doc.title}
                                                </h3>
                                                {doc.excerpt && (
                                                    <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mb-2">
                                                        {doc.excerpt}
                                                    </p>
                                                )}
                                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                                    {doc.published_at && (
                                                        <span>{formatDate(doc.published_at)}</span>
                                                    )}
                                                    <span className="inline-flex items-center gap-1">
                                                        <Eye className="w-3 h-3" />
                                                        {doc.views}
                                                    </span>
                                                    <span className="text-blue-500 font-medium">{doc.doc_type}</span>
                                                </div>
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Sections Tree */}
                    {sections.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-base md:text-xl font-bold text-gray-900 mb-4">Danh mục văn bản</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {allSections.map((section) => (
                                    <div
                                        key={section.id}
                                        className="bg-white border border-slate-200/50 p-4 md:p-5 hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-start gap-3">
                                            <FolderOpen className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                                                    {section.name}
                                                </h3>
                                                {section.description && (
                                                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{section.description}</p>
                                                )}
                                                <span className="text-xs text-gray-400">
                                                    {section.published_document_count} văn bản
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
