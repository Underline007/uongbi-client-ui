import { PageBanner } from "@/components/server";
import { ContactForm } from "@/components/client";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="flex-1">
            <PageBanner />
            <div className="min-h-screen bg-white py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Form (Client Component) */}
                        <ContactForm />

                        {/* Right Column - Info Cards (Static) */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Working Hours */}
                            <div className="bg-red-50 border border-red-200 p-6">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-red-600 flex items-center gap-2">
                                        <Clock className="w-5 h-5" />
                                        Giờ làm việc
                                    </h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Thứ 2 - Thứ 5:</span>
                                        <span className="font-medium">07:30 - 11:30, 13:30 - 17:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thứ 6:</span>
                                        <span className="font-medium">07:30 - 11:30, 13:30 - 16:30</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thứ 7, Chủ nhật:</span>
                                        <span className="font-medium text-red-600">Nghỉ</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-yellow-50 border border-yellow-200 p-6">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-red-600">Thông tin liên hệ</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2 text-sm text-gray-700">
                                        <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <span className="flex-1">
                                            Hotline: <span className="font-bold text-gray-900">0203.3881892</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700">
                                        <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <span className="flex-1">
                                            Email: <span className="font-bold text-gray-900">ubnd.pmc3@quangninh.gov.vn</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700">
                                        <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                        <span className="flex-1">
                                            Địa chỉ:{" "}
                                            <span className="font-medium text-gray-900">
                                                số 533 đường Đoan Tĩnh, khu Hải Yên 4, phường Móng Cái 3, tỉnh Quảng Ninh
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            <div className="bg-blue-50 border border-blue-200 p-6">
                                <div className="mb-4">
                                    <h3 className="text-lg font-bold text-blue-600">Lưu ý</h3>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Vui lòng cung cấp thông tin chính xác để chúng tôi có thể liên hệ lại</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Mọi thông tin góp ý sẽ được bảo mật tuyệt đối</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Chúng tôi sẽ phản hồi trong vòng 24-48 giờ làm việc</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>Đối với các trường hợp khẩn cấp, vui lòng liên hệ hotline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
