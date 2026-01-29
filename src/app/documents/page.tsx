import { PageBanner } from "@/components/server";
import { DocumentSearch } from "@/components/client";
import { FileText } from "lucide-react";

export default function DocumentsPage() {
    return (

        <main className="flex-1">
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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

                    {/* Search and Filter Section (Client Component) */}
                    <DocumentSearch />

                    {/* Empty State */}
                    <div className="bg-white border border-slate-200/50 overflow-hidden shadow-lg shadow-slate-200/50">
                        <div className="p-8 md:p-16 text-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mx-auto mb-4 md:mb-6">
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
                </div>
            </div>
        </main>
    );
}
