import { Container } from "@radix-ui/themes";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full">
            {/* Copyright Bar - Red Top */}
            <div className="bg-[#d32f2f] py-2">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white text-[11px] sm:text-[14px] font-sans">
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
                        <h2 className="text-[#d32f2f] font-bold text-lg sm:text-xl md:text-xl uppercase font-serif mb-3 leading-snug tracking-wide">
                            TRANG THÔNG TIN ĐIỆN TỬ PHƯỜNG MÓNG CÁI 3
                        </h2>

                        {/* Info Lines */}
                        <div className="text-gray-600 font-serif text-sm sm:text-sm space-y-1.5 leading-relaxed">
                            <p>
                                Địa chỉ: số 533 đường Doan Tĩnh, khu Hải Yến 4, phường Móng Cái 3, tỉnh Quảng Ninh
                            </p>
                            <p>
                                Email: ubnd.pmc3@quangninh.gov.vn - Điện thoại: 0203.3881892
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Phone Button Removed - Moved to Global Layout */}
            </div>
        </footer>
    );
}

