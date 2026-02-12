import { PageBanner, Breadcrumb } from "@/components/server";
import { SearchInput } from "@/components/client";
import Link from "next/link";

export default function ProceduresPage() {
    return (
        <main className="flex-1">
            <div className="min-h-screen">
                <PageBanner />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4 lg:py-8">
                    <Breadcrumb items={[
                        { label: "Thủ tục hành chính" },
                    ]} />
                    {/* Header */}
                    <div className="mb-3 md:mb-6">
                        <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                            Hướng dẫn thủ tục hành chính
                        </h1>
                        <p className="text-xs md:text-base text-gray-600">
                            Tra cứu quy trình, tải biểu mẫu và xem hướng dẫn chi tiết các thủ tục hành chính
                        </p>
                    </div>

                    {/* Search (Client Component) */}
                    <SearchInput
                        placeholder="Tìm kiếm thủ tục, dịch vụ..."
                        accentColor="red"
                    />

                    {/* Procedures Table */}
                    <div className="bg-white border border-slate-200 shadow-sm mb-4 md:mb-8">
                        {/* Table Header */}
                        <div className="bg-gradient-to-r from-slate-50 to-slate-50/50 border-b border-slate-200 px-3 md:px-6 py-2 md:py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-sm md:text-xl font-bold text-slate-900">Thủ tục hành chính</h2>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] md:text-sm text-gray-600">Tổng: 2 thủ tục</span>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-2 md:px-6 py-2 md:py-3 text-left text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            STT
                                        </th>
                                        <th className="px-2 md:px-6 py-2 md:py-3 text-left text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Tên thủ tục
                                        </th>
                                        <th className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-3 text-left text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Thời gian xử lý
                                        </th>
                                        <th className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-3 text-left text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Tài liệu
                                        </th>
                                        <th className="px-2 md:px-6 py-2 md:py-3 text-center text-[10px] md:text-xs font-bold text-slate-700 uppercase tracking-wider">
                                            Thao tác
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-red-50/30 transition-colors duration-200">
                                        <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-[10px] md:text-sm text-slate-600">
                                            1
                                        </td>
                                        <td className="px-2 md:px-6 py-2 md:py-4">
                                            <Link className="block group" href="/procedures/694e2b856808578c44aa1eb2">
                                                <span className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                                                    Đăng ký thường trú
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-4 whitespace-nowrap">
                                            <span className="text-slate-400 text-xs md:text-sm">--</span>
                                        </td>
                                        <td className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3 text-[10px] md:text-xs"></div>
                                        </td>
                                        <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-center">
                                            <Link
                                                className="inline-flex items-center justify-center px-2 md:px-3 py-1 md:py-1.5 bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 text-[10px] md:text-xs font-semibold"
                                                href="/procedures/694e2b856808578c44aa1eb2"
                                            >
                                                Xem
                                            </Link>
                                        </td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr className="hover:bg-red-50/30 transition-colors duration-200">
                                        <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-[10px] md:text-sm text-slate-600">
                                            2
                                        </td>
                                        <td className="px-2 md:px-6 py-2 md:py-4">
                                            <Link className="block group" href="/procedures/694e2a666808578c44aa1ead">
                                                <span className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                                                    Thủ tục đăng ký khai sinh
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-4 whitespace-nowrap">
                                            <span className="text-slate-400 text-xs md:text-sm">--</span>
                                        </td>
                                        <td className="hidden lg:table-cell px-2 md:px-6 py-2 md:py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3 text-[10px] md:text-xs"></div>
                                        </td>
                                        <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-center">
                                            <Link
                                                className="inline-flex items-center justify-center px-2 md:px-3 py-1 md:py-1.5 bg-red-100 hover:bg-red-200 text-red-600 transition-all duration-200 text-[10px] md:text-xs font-semibold"
                                                href="/procedures/694e2a666808578c44aa1ead"
                                            >
                                                Xem
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
