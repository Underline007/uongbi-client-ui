
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function ElectionInfoPage() {
    return (
        <main className="flex-1">
            <div className="min-h-screen bg-white py-2 md:py-4 lg:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="inline-flex items-center text-[10px] md:text-sm text-gray-600 mb-2 md:mb-6">
                        <Link className="hover:text-red-600 transition-colors" href="/news">
                            Tin tức
                        </Link>
                        <span className="mx-1 md:mx-2">›</span>
                        <span className="text-gray-900 font-medium">Thông Tin Bầu Cử</span>
                    </div>

                    <section className="mb-4 md:mb-12 border-b border-gray-200 pb-4 md:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-8">
                            {/* Main Featured Article */}
                            <div className="lg:col-span-2">
                                <Link
                                    className="group block bg-white border border-gray-200 transition-all overflow-hidden h-full"
                                    href="/tin-tuc/thong-bao-danh-sach-don-vi-bau-cu-va-so-luong-dai-bieu-hoi-dong-nhan-dan-phuong-mong-cai-3"
                                >
                                    <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                                        <img
                                            src="https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg"
                                            alt="Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3"
                                            className="w-full h-full object-cover"
                                            loading="eager"
                                        />
                                    </div>
                                    <div className="p-2 md:p-2">
                                        <div className="flex items-center gap-1.5 md:gap-3 mb-1.5 md:mb-3">
                                            <span className="inline-block px-1.5 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-bold bg-red-600 text-white uppercase">
                                                Nổi bật
                                            </span>
                                            <div className="flex items-center text-gray-600 text-[10px] md:text-sm">
                                                <Calendar className="h-2.5 w-2.5 md:h-4 md:w-4 mr-0.5 md:mr-1" />
                                                29/12/2025 04:57
                                            </div>
                                        </div>
                                        <h2 className="text-base md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1.5 md:mb-3 line-clamp-2">
                                            Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3
                                        </h2>
                                        <p className="text-xs md:text-base text-gray-700 line-clamp-3 leading-relaxed">
                                            Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân, Ủy ban bầu cử phường Móng Cái 3 trân trọng thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường Móng Cái 3, nhiệm kỳ 2026 – 2031.
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {/* Sidebar - Featured Posts List */}
                            <div className="bg-gray-50 border border-gray-200 p-2 md:p-2">
                                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-2 md:mb-4 pb-1.5 md:pb-2 border-b-2 border-red-600">
                                    Bài viết nổi bật
                                </h3>
                                {/* Empty container as per HTML */}
                                <div className="space-y-0"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
