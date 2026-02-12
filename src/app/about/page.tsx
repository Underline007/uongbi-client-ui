import { PageBanner, Breadcrumb } from "@/components/server";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { OutboundLink } from "@/components/analytics";
import { getOrganization } from "@/lib/organization";

export default async function AboutPage() {
    const org = await getOrganization();
    return (
        <main className="flex-1">
            <div className="min-h-screen bg-white">
                <PageBanner />
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={[
                        { label: "Giới thiệu" },
                    ]} />
                    <div className="space-y-12">

                        {/* Giới thiệu chung Section */}
                        <section className="bg-white w-full">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="py-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                                        <h2 className="text-2xl font-bold text-gray-900">Giới thiệu chung</h2>
                                    </div>
                                </div>
                                <div className="pb-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
                                        {/* Main Content */}
                                        <div className="max-w-none text-gray-700 leading-relaxed space-y-4">
                                            <h1 className="text-base">
                                                <span className="text-sm">
                                                    Ủy ban Nhân dân phường Móng Cái 3 là cơ quan hành chính nhà nước tại địa phương, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân. Đơn vị chính thức được thành lập và đi vào hoạt động từ ngày 01/07/2025, trực thuộc thành phố Móng Cái, tỉnh Quảng Ninh.
                                                </span>
                                            </h1>
                                            <div>
                                                Điều này hình thành của phường Móng Cái 3 đánh dấu một bước ngoặt quan trọng trong chiến lược phát triển đô thị vùng biên, hướng tới xây dựng một chính quyền kiến tạo, liêm chính và phục vụ.
                                            </div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                <b>1. HÌNH THÀNH VÀ VỊ THẾ CHIẾN LƯỢC</b>
                                            </div>
                                            <div>
                                                <b><i>Bối cảnh thành lập</i></b>
                                            </div>
                                            <div>
                                                Thực hiện chủ trương sắp xếp đơn vị hành chính cấp xã giai đoạn 2023 - 2025, phường Móng Cái 3 được thành lập dựa trên sự sáp nhập nguyên trạng toàn bộ diện tích tự nhiên và dân số của 02 đơn vị tiền thân giàu truyền thống:
                                            </div>
                                            <div>Phường Hải Yên (cũ): Trung tâm công nghiệp, logistics năng động.</div>
                                            <div>Xã Hải Đông (cũ): Vùng đất giàu tiềm năng nông nghiệp, quỹ đất rộng và lợi thế phát triển ven biển.</div>
                                            <div>Việc sáp nhập này giúp tập trung nguồn lực quản lý vào một đầu mối thống nhất, tinh gọn, mở rộng không gian phát triển đô thị hiện đại.</div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                <b><i>Quy mô và Vị thế</i></b>
                                            </div>
                                            <div>Sau sáp nhập, phường Móng Cái 3 sở hữu những lợi thế vượt trội:</div>
                                            <div>Diện tích tự nhiên: Khoảng 90,03 km² (thuộc nhóm phường có diện tích lớn nhất thành phố).</div>
                                            <div>Vị trí địa lý: Cửa ngõ kết nối trực tiếp với các trục giao thông huyết mạch và khu vực cửa khẩu. Đây là &quot;vùng đệm&quot; chiến lược cho sự phát triển Công nghiệp - Dịch vụ của thành phố.</div>
                                            <div>Trụ sở làm việc: Đặt tại trụ sở Đảng ủy - HĐND - UBND phường Hải Yên (cũ).</div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                <b>2. TẦM NHÌN VÀ NHIỆM VỤ TRỌNG TÂM</b>
                                            </div>
                                            <div>Với cơ cấu kinh tế đa dạng &quot;Công nghiệp - Dịch vụ - Nông nghiệp sinh thái&quot;, UBND phường Móng Cái 3 tập trung vào các mũi nhọn:</div>
                                            <div>Quản lý Công nghiệp & Logistics: Phát huy lợi thế có Khu công nghiệp Hải Yên trên địa bàn, phường chú trọng hỗ trợ giải phóng mặt bằng, đảm bảo an ninh trật tự, tạo môi trường thuận lợi nhất cho các doanh nghiệp FDI và trong nước.</div>
                                            <div>Phát triển Đô thị & Nông thôn mới: Điều hành quá trình đô thị hóa tại khu vực Hải Đông cũ; nâng cấp hạ tầng (điện, đường, nước); duy trì và nhân rộng các mô hình nông nghiệp công nghệ cao.</div>
                                            <div>Cải cách hành chính & Chuyển đổi số: Nâng cao chất lượng phục vụ tại bộ phận &quot;Một cửa&quot;, đẩy mạnh chuyển đổi số để người dân từ cả hai khu vực cũ tiếp cận dịch vụ công nhanh chóng, minh bạch.</div>
                                            <div>
                                                <br />
                                            </div>
                                            <div>
                                                <b>3. CHỨC NĂNG, NHIỆM VỤ VÀ QUYỀN HẠN</b>
                                            </div>
                                            <div>Căn cứ Luật Tổ chức Chính quyền địa phương năm 2025 (Điều 22, Điều 25), UBND phường Móng Cái 3 thực hiện các chức năng, nhiệm vụ quyền hạn sau:</div>
                                            <div>Tổ chức thực hiện Nghị quyết: Xây dựng, trình HĐND cùng cấp ban hành nghị quyết về kinh tế - xã hội, an ninh - quốc phòng (theo khoản 1, 2, 3 Điều 24 Luật này) và tổ chức triển khai thực hiện hiệu quả.</div>
                                            <div>Liên kết vùng: Chủ động hợp tác phát triển kinh tế, hạ tầng đô thị, giao thông, môi trường với các phường lân cận; đảm bảo sự phát triển đồng bộ, hài hòa giữa các khu vực đô thị.</div>
                                            <div>Quản lý Tài chính - Ngân sách: Thực hiện thu phí, lệ phí trên địa bàn theo đúng quy định pháp luật và phân cấp của tỉnh.</div>
                                            <div>Thúc đẩy Kinh tế Đô thị: Triển khai các chính sách khuyến khích thương mại, dịch vụ, tài chính; ưu tiên phát triển khoa học công nghệ, đổi mới sáng tạo và chuyển đổi số phù hợp với đặc thù đô thị.</div>
                                            <div>Chỉnh trang Đô thị: Tổ chức thực hiện các chương trình cải tạo, chỉnh trang đô thị theo phân cấp của UBND cấp tỉnh, hướng tới diện mạo phường văn minh, hiện đại.</div>
                                        </div>

                                        {/* Sidebar */}
                                        <div className="space-y-6">
                                            <div className="space-y-4">
                                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 hover:border-red-300 transition-all cursor-pointer">
                                                    {org?.address ? (
                                                        <OutboundLink
                                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(org.address)}`}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                            <div className="flex-1">
                                                                <p className="text-sm font-medium text-gray-500 mb-1">Địa chỉ</p>
                                                                <p className="text-gray-900 font-medium">{org.address}</p>
                                                                <p className="text-xs text-blue-600 mt-1 font-medium">Nhấn để chỉ đường</p>
                                                            </div>
                                                        </OutboundLink>
                                                    ) : (
                                                        <div className="flex items-start space-x-3">
                                                            <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                            <div className="flex-1">
                                                                <p className="text-sm font-medium text-gray-500 mb-1">Địa chỉ</p>
                                                                <p className="text-gray-900 font-medium">-</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                    <div className="flex items-start space-x-3">
                                                        <Phone className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-gray-500 mb-1">Điện thoại</p>
                                                            {org?.phone ? (
                                                                <a href={`tel:${org.phone.replace(/\./g, '')}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                                                    {org.phone}
                                                                </a>
                                                            ) : (
                                                                <span className="text-gray-900 font-medium">-</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                    <div className="flex items-start space-x-3">
                                                        <Mail className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                                                            {org?.email ? (
                                                                <a href={`mailto:${org.email}`} className="text-blue-600 hover:text-blue-800 font-medium break-all">
                                                                    {org.email}
                                                                </a>
                                                            ) : (
                                                                <span className="text-gray-900 font-medium">-</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                                    <div className="flex items-start space-x-3">
                                                        <Phone className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-red-600 mb-2">Đường dây nóng</p>
                                                            <div className="space-y-2">
                                                                <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-red-100">
                                                                    <div>
                                                                        <div className="font-medium text-red-900 text-sm">Đường dây chính</div>
                                                                        <div className="text-xs text-red-600">Trực ban tại {org?.name || 'phường'}</div>
                                                                    </div>
                                                                    {org?.phone ? (
                                                                        <a href={`tel:${org.phone.replace(/\./g, '')}`} className="text-red-700 hover:text-red-900 font-bold">
                                                                            {org.phone}
                                                                        </a>
                                                                    ) : (
                                                                        <span className="text-red-700 font-bold">-</span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Cơ cấu tổ chức Section */}
                        <section className="bg-white w-full">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="py-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                                        <h2 className="text-2xl font-bold text-gray-900">Cơ cấu tổ chức</h2>
                                    </div>
                                </div>
                                <div className="pb-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {/* Member 1 */}
                                        <div>
                                            <div className="bg-white rounded-lg border-2 border-gray-200 p-3 min-w-[160px] hover:shadow-md transition-shadow duration-200">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="mb-2">
                                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-100">
                                                            <User className="h-6 w-6 text-gray-600" />
                                                        </div>
                                                    </div>
                                                    <h3 className="font-bold text-red-600 uppercase text-xs mb-1 leading-tight">Đồng chí Nguyễn Phúc Vinh</h3>
                                                    <div className="px-2 py-1 text-xs font-semibold text-amber-600 leading-tight">Bí thư Đảng ủy</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Member 2 */}
                                        <div>
                                            <div className="bg-white rounded-lg border-2 border-gray-200 p-3 min-w-[160px] hover:shadow-md transition-shadow duration-200">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="mb-2">
                                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-100">
                                                            <User className="h-6 w-6 text-gray-600" />
                                                        </div>
                                                    </div>
                                                    <h3 className="font-bold text-red-600 uppercase text-xs mb-1 leading-tight">Đồng chí Dương Thị Huệ</h3>
                                                    <div className="px-2 py-1 text-xs font-semibold text-amber-600 leading-tight">Phó Bí thư Thường trực Đảng ủy, Chủ tịch HĐND</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Member 3 */}
                                        <div>
                                            <div className="bg-white rounded-lg border-2 border-gray-200 p-3 min-w-[160px] hover:shadow-md transition-shadow duration-200">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="mb-2">
                                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-100">
                                                            <User className="h-6 w-6 text-gray-600" />
                                                        </div>
                                                    </div>
                                                    <h3 className="font-bold text-red-600 uppercase text-xs mb-1 leading-tight">Đồng chí Đỗ Thị Hồng Nhung</h3>
                                                    <div className="px-2 py-1 text-xs font-semibold text-amber-600 leading-tight">Phó Bí thư Đảng ủy, Chủ tịch UBND</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Member 4 */}
                                        <div>
                                            <div className="bg-white rounded-lg border-2 border-gray-200 p-3 min-w-[160px] hover:shadow-md transition-shadow duration-200">
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="mb-2">
                                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-100">
                                                            <User className="h-6 w-6 text-gray-600" />
                                                        </div>
                                                    </div>
                                                    <h3 className="font-bold text-red-600 uppercase text-xs mb-1 leading-tight">Đồng chí Hoàng Anh Tuất</h3>
                                                    <div className="px-2 py-1 text-xs font-semibold text-amber-600 leading-tight">Chủ nhiệm Ủy ban Kiểm tra Đảng ủy</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
