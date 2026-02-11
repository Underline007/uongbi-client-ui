import { PageBanner } from "@/components/server";
import { DocumentSearch, SectionDocumentsModal } from "@/components/client";
import { documentsApi } from "@/lib/api";
import type { DocSectionTreeNodeResponse } from "@/types/api";

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

    // Fetch documents for all sections that have documents
    const sectionDetails = await Promise.all(
        allSections
            .filter((s) => s.published_document_count > 0)
            .map((s) => documentsApi.getSectionBySlug(s.slug).catch(() => null))
    );

    const allDocuments = sectionDetails
        .filter(Boolean)
        .flatMap((detail) => detail!.documents);

    // Build section → documents mapping for the modal
    const sectionsWithDocuments = allSections.map((section) => {
        const detail = sectionDetails.find(
            (d) => d && d.slug === section.slug
        );
        return {
            section,
            documents: detail?.documents ?? [],
        };
    });

    // Extract unique doc_types for filter dropdown
    const docTypes = Array.from(new Set(allDocuments.map((d) => d.doc_type))).sort();

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

                    {/* Search, Filter & Document List */}
                    <DocumentSearch documents={allDocuments} docTypes={docTypes} />

                    {/* Sections Grid with Modal */}
                    {sections.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-base md:text-xl font-bold text-gray-900 mb-4">Danh mục văn bản</h2>
                            <SectionDocumentsModal sections={sectionsWithDocuments} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
