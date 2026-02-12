import Link from "next/link";
import { Clock } from "lucide-react";
import { Breadcrumb } from "@/components/server";

export default function NewsPage() {
    return (
        <main className="flex-1">
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Breadcrumb items={[
                        { label: "Tin tức" },
                    ]} />
                    <div className="w-full bg-white">
                        <div className="w-full bg-white">
                            <div className="space-y-2 lg:space-y-12">
                                <div className="space-y-2 lg:space-y-12">
                                    {/* Tin tức tổng hợp */}
                                    <div className="w-full">
                                        <section className="w-full">
                                            <div className="mb-3 lg:mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Tin tức tổng hợp</h3>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2 space-y-6">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/dai-hoi-dai-bieu-hoi-lhtn-viet-nam-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2029-thanh-cong-tot">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/aaa41038-8a6b-4f6a-a43b-bffe7ef3a90e.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-4">
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt</h4>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-26T12:32:17.287000">26/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/ky-hop-thu-5-hdnd-phuong-mong-cai-3-khoa-i-nhiem-ky-2021-2026">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/3ae9df3a-08b2-4ade-98ff-634f33b6d7a9.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-4">
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026</h4>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-26T12:29:10.687000">26/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/ky-hop-thu-nhat-hdnd-phuong-mong-cai-3-khoa-i-nhiem-ky-2021-2026">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/d65aa7a8-69e4-4e35-aa2f-18fee7707f50.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-4">
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">Kỳ họp thứ Nhất HĐND phường Móng Cái 3, Khóa I, nhiệm kỳ 2021-2026</h4>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T13:21:32.535000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/phuong-mong-cai-3-ra-mat-mo-hinh-bien-gio-i-bi-nh-yen-xa-phuo-ng-khong-xua-t-nha-p-ca-nh-tra-i">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/a9518693-c087-4de6-8f6c-432b6236d047.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-4">
                                                                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái</h4>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T12:13:16.654000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="lg:col-span-1">
                                                    <div className="space-y-2">
                                                        <Link className="group block py-3 hover:bg-gray-50 transition-colors duration-200" href="/news/phuong-mong-cai-3-trung-tam-phat-trien-cong-nghiep-va-dich-vu-trong-diem-cua-tinh">
                                                            <div className="flex items-start gap-3">
                                                                <span className="text-red-600 font-bold text-xs md:mt-0.5 flex-shrink-0">•</span>
                                                                <div className="flex-1">
                                                                    <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight">Phường Móng Cái 3: Trung tâm phát triển công nghiệp và dịch vụ trọng điểm của tỉnh</h5>
                                                                    <div className="mt-1">
                                                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                            <time dateTime="2025-12-25T12:07:21.608000">25/12/2025</time>
                                                                            <span>•</span>
                                                                            <time dateTime="2025-12-25T12:07:21.608000">12:07</time>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    {/* Kinh tế - Chính trị */}
                                    <div className="w-full">
                                        <section className="w-full">
                                            <div className="mb-3 lg:mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Kinh tế - Chính trị</h3>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="md:col-span-1">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/dai-hoi-hoi-doanh-nghiep-phuong-mong-cai-3-lan-thu-nhat-nhiem-ky-2025-2030">
                                                        <div className="aspect-[16/10]">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/59463595-39a4-42aa-b300-8fc91f162099.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div className="py-4">
                                                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">Đại hội Hội Doanh nghiệp phường Móng Cái 3 lần thứ nhất nhiệm kỳ 2025-2030</h3>
                                                            <p className="text-gray-600 text-sm line-clamp-2 mb-2 font-inter">Ngày 28/11, Hội doanh nghiệp phường Móng Cái 3 long trọng tổ chức Đại hội lần thứ nhất, nhiệm kỳ 2025-2030.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:16:56.024000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="md:col-span-1">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/dai-hoi-dai-bieu-dang-bo-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2030">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/68306c43-b1ff-45fb-92d1-7d2e51a98693.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-3">
                                                                <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">Đại hội Đại biểu Đảng bộ phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025-2030</h5>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T13:24:02.394000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    {/* Văn hóa - Xã hội */}
                                    <div className="w-full">
                                        <section className="w-full">
                                            <div className="mb-3 lg:mb-6">
                                                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Văn hóa - Xã hội</h3>
                                            </div>
                                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                                                <div className="lg:col-span-1">
                                                    <div className="space-y-4 h-full">
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/doan-phuong-va-hoi-lhtn-phuong-mong-cai-1-mong-cai-2-mong-cai-3-to-chuc-giai-pickleball-thanh-nien">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/a6550b09-6ad5-4c7d-831f-a85aa88abe7b.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-3">
                                                                <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">Đoàn phường và Hội LHTN phường Móng Cái 1, Móng Cái 2, Móng Cái 3 tổ chức Giải Pickleball thanh niên</h5>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T13:25:45.772000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/phuong-mong-cai-3-viet-nen-trang-su-moi-trong-ky-nguyen-vuon-minh-cua-dan-toc">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/4d052271-efc1-4d56-8688-da2f93fadc64.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-3">
                                                                <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">Phường Móng Cái 3: Viết nên trang sử mới trong kỷ nguyên vươn mình của dân tộc</h5>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T12:15:37.482000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group block bg-white transition-all duration-300" href="/news/quang-ninh-day-nhanh-tien-do-xay-dung-cua-khau-thong-minh">
                                                            <div className="aspect-[16/10]">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/d7dac18d-5b3b-4651-a59c-36b23aab02f0.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-3">
                                                                <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">Quảng Ninh đẩy nhanh tiến độ xây dựng cửa khẩu thông minh</h5>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <Clock className="h-3 w-3" />
                                                                    <time dateTime="2025-12-25T12:17:17.500000">25/12/2025</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="lg:col-span-3">
                                                    <Link className="group block bg-white transition-all duration-300 h-full" href="/news/phuong-mong-cai-3-ky-niem-80-nam-ngay-truyen-thong-cua-luc-luong-cong-an-nhan-dan-viet-nam-va-20-nam">
                                                        <div className="flex flex-col h-full">
                                                            <div className="aspect-[16/10] flex-shrink-0">
                                                                <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                    <img src="https://storage.4ship.vn/public/image/c9a6aa5f-dff9-44a3-8f80-f1a098ebc6a9.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                </div>
                                                            </div>
                                                            <div className="py-6 flex-1 flex flex-col">
                                                                <div className="flex-1">
                                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm</h3>
                                                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 font-inter">Chiều 16/8, phường Móng Cái 3 long trọng tổ chức Lễ kỷ niệm 80 năm Ngày truyền thống Công an nhân dân Việt Nam.</p>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                        <Clock className="h-3 w-3" />
                                                                        <time dateTime="2025-12-28T05:13:11.347000">28/12/2025</time>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="lg:col-span-1">
                                                    <div className="space-y-4 h-full"></div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>

                                {/* Second group of sections */}
                                <div className="space-y-2 lg:space-y-12 mt-2 lg:mt-16">
                                    {/* Công tác xây dựng đảng & Gương người tốt */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">công tác xây dựng đảng trong sạch vững mạnh</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/le-trao-tang-huy-hieu-dang-cong-bo-quyet-dinh-thanh-lap-cac-chi-dang-bo-co-so">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Ngày 7/11, Đảng ủy phường Móng Cái 3 đã long trọng tổ chức Lễ trao tặng Huy hiệu Đảng.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:00:07.597000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/dang-uy-phuong-mong-cai-3-trao-huy-hieu-dang-dot-02-9-cho-6-dang-vien">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Nhân dịp kỷ niệm 80 năm Cách mạng tháng Tám thành công.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:25:15.625000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:25:15.625000">16:25</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/hoi-nghi-ban-chap-hanh-dang-bo-phuong-mong-cai-3-lan-thu-3">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/e472f627-617b-4cb7-9d93-5000c2e0a817.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Hội nghị Ban Chấp hành Đảng bộ phường Móng Cái 3 lần thứ 3</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Sáng 3/10, Đảng ủy phường Móng Cái 3 tổ chức Hội nghị Ban Chấp hành.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:18:05.273000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:18:05.273000">16:18</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/dai-hoi-dai-bieu-doan-tncs-ho-chi-minh-phuong-mong-cai-3-lan-thu-nhat-nhiem-ky-2025-2030">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/652d72d7-1de1-478e-9bf0-ad39218a09d8.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Đại hội đại biểu Đoàn TNCS Hồ Chí Minh phường Móng Cái 3 lần thứ nhất</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 11/10, Đoàn TNCS Hồ Chí Minh phường Móng Cái 3 tổ chức đại hội.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:15:38.211000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:15:38.211000">16:15</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/hoi-nong-dan-phuong-mong-cai-3-ky-niem-95-nam-ngay-thanh-lap-hoi-nong-dan-viet-nam-14-10-1930-14">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/6a11047b-6c8c-4f90-bbe9-cf563843f70e.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Hội Nông dân phường Móng Cái 3: Kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 14/10, Hội Nông dân phường Móng Cái 3 long trọng tổ chức Hội nghị kỷ niệm.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-25T12:46:24.625000">25/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-25T12:46:24.625000">12:46</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Gương người tốt việc tốt</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/tam-guong-nha-giao-nguyen-thi-van-va-niem-vui-bat-ngo-ngay-be-giang-nam-ho">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/f434fbf5-ee9b-4d76-be0d-8cbc427b6f1e.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Tấm gương Nhà giáo Nguyễn Thị Vân và niềm vui bất ngờ ngày Bế giảng năm họ</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Sự việc diễn ra vào lúc 17h00, ngày 25/5/2022, trên đường đi từ Hải Đông về nhà.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T15:28:44.420000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    {/* Hoạt động lãnh đạo tỉnh & Công tác an sinh xã hội */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Hoạt động lãnh đạo tỉnh</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/toan-van-bai-phat-bieu-chi-dao-cua-dong-chi-chu-tich-ubnd-tinh-quang-ninh-tai-dai-hoi-dai-bieu-dang">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Trong ngày làm việc thứ hai Đại hội đại biểu Đảng bộ phường Móng Cái 3 lần thứ I.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:27:16.995000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/dong-chi-bi-thu-tinh-uy-truong-doan-dai-bieu-quoc-hoi-tinh-quang-ninh-kiem-tra-tuyen-bien-gioi-cua">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/11c7518a-8e1b-41b1-a2da-54c026fbb95b.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 16/12, đồng chí Quản Minh Cường cùng đoàn công tác của Tỉnh ủy đã kiểm tra.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-26T12:30:41.265000">26/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-26T12:30:41.265000">12:30</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Công tác an sinh xã hội</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/phat-dong-va-tiep-nhan-kinh-phi-ung-ho-dong-bao-mien-trung-tay-nguyen-khac-phuc-thiet-hai-do-bao-lu">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/5dcf36dd-1de4-4e02-abfd-7a9d9cd2f740.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Phát động và tiếp nhận kinh phí ủng hộ đồng bào miền Trung, Tây Nguyên khắc phục thiệt hại do bão lũ</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Thực hiện Lời kêu gọi của Ban Thường trực Ủy ban T.W MTTQ Việt Nam.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T05:56:53.298000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/truong-tieu-hoc-hai-yen-trao-50-trieu-dong-ung-ho-dong-bao-bi-anh-huong-boi-bao-lu">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/6d013b86-ccaa-478d-82f1-6e2d185d26ab.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Trường Tiểu học Hải Yên trao 50 triệu đồng ủng hộ đồng bào bị ảnh hưởng bởi bão lũ</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 15/10, Ban Thường trực Ủy ban MTTQ phường Móng Cái 3 đã tổ chức tiếp nhận.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-25T13:14:09.643000">25/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-25T13:14:09.643000">13:14</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    {/* Công tác cán bộ & Hoạt động Đảng bộ phường */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Công tác cán bộ</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/doan-cong-tac-van-phong-thuong-truc-ban-chi-dao-389-quoc-gia-khao-sat-dia-ban-thanh-pho-mong-cai">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Đoàn công tác đã khảo sát tại khu vực Đầu Tán, cửa khẩu cảng Vạn Gia.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:41:32.087000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/dai-hoi-chi-bo-co-quan-dang-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2030">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Chiều 11/7, Chi bộ Cơ quan Đảng phường Móng Cái 3 long trọng tổ chức Đại hội.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:40:19.454000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:40:19.454000">16:40</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/phuong-mong-cai-3-boi-duong-tap-huan-ly-luan-chinh-tri-he-nam-2025">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 25/8, phường Móng Cái 3 tổ chức Hội nghị bồi dưỡng, tập huấn.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:29:42.753000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:29:42.753000">16:29</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/phuong-mong-cai-3-tong-ket-cong-tac-to-chuc-phuc-vu-dai-hoi-va-quan-triet-trien-khai-thuc-hien-nghi">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/c62a3645-04ba-4d73-be3d-d5a5e68297dc.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Chiều 29/8, Đảng bộ phường Móng Cái 3 tổ chức hội nghị triển khai Nghị quyết.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:24:14.682000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:24:14.682000">16:24</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/hoi-nghi-cong-bo-quyet-dinh-ve-cong-nhan-tieu-doi-dan-quan-thuong-truc-va-quyet-dinh-cong-tac-can-bo">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/9feaed73-d96c-44a8-9a54-8ba13a9f5b30.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 14/11, phường Móng Cái 3 đã tổ chức Hội nghị công bố Quyết định.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T05:29:06.754000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T05:29:06.754000">05:29</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Hoạt động Đảng bộ phường</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/dai-hoi-dai-bieu-mttq-phuong-mong-cai-3-lan-thu-i-nhiem-ky-2025-2030">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/6dc60fb7-486b-44d1-bbf3-67a92b3b382e.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Đại hội đại biểu MTTQ phường Móng Cái 3 lần thứ I nhiệm kỳ 2025 - 2030</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Ngày 19/9, MTTQ Việt Nam phường Móng Cái 3 long trọng tổ chức Đại hội đại biểu.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:22:36.029000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/hoi-nghi-giao-ban-voi-doi-ngu-bi-thu-chi-bo-truong-thon-khu-truong-ban-cong-tac-mat-tran-thon-khu">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/16d81876-9a89-4ef1-bd9f-8faa960210c7.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Hội nghị giao ban với đội ngũ Bí thư chi bộ, Trưởng thôn/khu</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 2/10, phường Móng Cái 3 tổ chức hội nghị giao ban.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:20:24.566000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:20:24.566000">16:20</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/hoi-lhpn-phuong-mong-cai-3-gap-mat-ky-niem-va-cong-bo-thanh-lap-clb-nu-doanh-nghiep-tieu-thuong">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/73f18f41-2f16-41d3-944a-72e81f8f4fac.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 20/10, Hội Liên hiệp phụ nữ phường Móng Cái 3 tổ chức gặp mặt kỷ niệm.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T06:18:02.546000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T06:18:02.546000">06:18</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/dang-uy-phuong-mong-cai-3-hoi-nghi-bao-cao-vien-quy-iv-2025">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/68662ca1-da3d-4826-b4b3-3da8bbde2ca1.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">Đảng ủy phường Móng Cái 3: Hội nghị báo cáo viên quý IV/2025</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">Ngày 13/11, Đảng ủy phường Móng Cái 3 tổ chức hội nghị báo cáo viên.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T05:37:33.458000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T05:37:33.458000">05:37</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                    {/* Thông tin quy hoạch & Thông Tin Bầu Cử */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Thông tin quy hoạch</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/day-nhanh-tien-do-thi-cong-du-an-sua-chua-duong-tinh-335">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-28T16:33:33.485000">28/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="space-y-3">
                                                        <Link className="group flex items-start gap-3 py-2 hover:bg-gray-50 transition-colors duration-200" href="/news/quyet-dinh-v-v-phe-duyet-quy-hoach-chi-tiet-ty-le-1-500-cum-cong-nghiep-hai-yen-tai-phuong-mong-cai">
                                                            <div className="flex-shrink-0 w-36 h-24 bg-gray-100 overflow-hidden">
                                                                <img src="https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-1">QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên</h5>
                                                                <p className="text-gray-600 text-xs line-clamp-2 mb-1 font-inter">QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên.</p>
                                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                    <time dateTime="2025-12-28T16:09:57.666000">28/12/2025</time>
                                                                    <span>•</span>
                                                                    <time dateTime="2025-12-28T16:09:57.666000">16:09</time>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="w-full">
                                            <section className="w-full">
                                                <div className="mb-3 lg:mb-6">
                                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600 font-inter">Thông Tin Bầu Cử</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <Link className="group block bg-white transition-all duration-300" href="/news/thong-bao-danh-sach-don-vi-bau-cu-va-so-luong-dai-bieu-hoi-dong-nhan-dan-phuong-mong-cai-3">
                                                        <div className="aspect-[16/9] mb-2">
                                                            <div className="bg-gray-100 overflow-hidden w-full h-full">
                                                                <img src="https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors mb-1 text-sm">Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3</h4>
                                                            <p className="text-gray-600 text-xs line-clamp-2 mb-2 font-inter">Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân.</p>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <Clock className="h-3 w-3" />
                                                                <time dateTime="2025-12-29T04:57:43.907000">29/12/2025</time>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
