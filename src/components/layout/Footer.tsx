import { Container } from "@radix-ui/themes";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full">
            {/* Copyright Bar - Red Top */}
            <div className="bg-[#d32f2f] py-2">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white text-[11px] sm:text-[13px] font-sans">
                        Bản quyền thuộc về Trang thông tin điện tử Phường Móng Cái 3. Đã đăng ký ghi rõ nguồn khi sử dụng thông tin tại website này.
                    </p>
                </div>
            </div>

            {/* Main Footer Section - White Bottom */}
            <div className="relative border-t border-gray-200 py-6 sm:py-10 overflow-hidden">
                {/* Background Pattern */}
                <Image
                    src="/images/trongdong.png"
                    alt="Background Pattern"
                    fill
                    className="absolute inset-0 object-cover"
                />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Title */}
                        <h2 className="text-[#d32f2f] font-bold text-lg sm:text-x md:text-2xl uppercase font-serif mb-3 leading-snug tracking-wide">
                            TRANG THÔNG TIN ĐIỆN TỬ PHƯỜNG MÓNG CÁI 3
                        </h2>

                        {/* Info Lines */}
                        <div className="text-gray-600 font-serif text-sm sm:text-[15px] space-y-1.5 leading-relaxed">
                            <p>
                                Địa chỉ: số 533 đường Doan Tĩnh, khu Hải Yến 4, phường Móng Cái 3, tỉnh Quảng Ninh
                            </p>
                            <p>
                                Email: ubnd.pmc3@quangninh.gov.vn - Điện thoại: 0203.3881892
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Phone Button */}
                <div className="fixed bottom-4 left-4 z-50">
                    <a
                        href="tel:02033881892"
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#dc2626] text-white rounded shadow-md hover:bg-red-700 transition-transform hover:scale-105"
                        title="Gọi điện"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

