import { PageBanner, Breadcrumb } from "@/components/server";
import { MapPin, ChevronRight, FileText } from "lucide-react";
import Link from "next/link";

export default function PlanningsPage() {
    return (
        <main className="flex-1">
            <PageBanner />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Breadcrumb items={[
                    { label: "Quy hoạch" },
                ]} />
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <MapPin className="w-8 h-8 text-red-600 mr-3" />
                        <h1 className="text-3xl font-bold text-gray-900">Thông Tin Quy Hoạch</h1>
                    </div>
                    <p className="text-gray-600">
                        Tra cứu các quy hoạch theo từng lĩnh vực, khu vực và loại hình
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link
                        className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 p-6 group"
                        href="/plannings/category/cac-quy-hoach-chien-luoc"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                    Các quy hoạch chiến lược
                                </h3>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0 ml-2" />
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-4 pt-4 border-t">
                            <FileText className="w-4 h-4 mr-2" />
                            <span>1 quy hoạch</span>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
