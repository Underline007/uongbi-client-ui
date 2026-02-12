import { PageBanner, Breadcrumb } from "@/components/server";
import { DocumentsPageContent } from "@/components/client";
import { documentsApi } from "@/lib/api";
import type { DocSectionFullTreeNodeResponse, DocumentSummaryResponse } from "@/types/api";

function collectAllDocuments(nodes: DocSectionFullTreeNodeResponse[]): DocumentSummaryResponse[] {
    const result: DocumentSummaryResponse[] = [];
    function traverse(items: DocSectionFullTreeNodeResponse[]) {
        for (const node of items) {
            result.push(...(node.documents ?? []));
            if (node.children?.length > 0) {
                traverse(node.children);
            }
        }
    }
    traverse(nodes);
    return result;
}

export default async function DocumentsPage() {
    let treeData: Awaited<ReturnType<typeof documentsApi.getFullTree>> | null = null;

    try {
        treeData = await documentsApi.getFullTree();
    } catch (error) {
        console.error("Failed to fetch document tree:", error);
    }

    const sections = treeData?.items ?? [];
    const allDocuments = collectAllDocuments(sections);

    // Extract unique doc_types for filter dropdown
    const docTypes = Array.from(new Set(allDocuments.map((d) => d.doc_type))).sort();

    return (
        <main className="flex-1">
            <div className="min-h-screen">
                <PageBanner />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4 lg:py-8">
                    <Breadcrumb items={[
                        { label: "Văn bản" },
                    ]} />
                    {/* Header */}
                    <div className="mb-3 md:mb-6">
                        <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                            Chính sách & Văn bản pháp lý
                        </h1>
                        <p className="text-xs md:text-base text-gray-600">
                            Tra cứu các văn bản pháp luật, chính sách và quy định của phường
                        </p>
                    </div>

                    {/* Sidebar Tree + Search & Document List */}
                    <DocumentsPageContent
                        sections={sections}
                        allDocuments={allDocuments}
                        docTypes={docTypes}
                    />
                </div>
            </div>
        </main>
    );
}
