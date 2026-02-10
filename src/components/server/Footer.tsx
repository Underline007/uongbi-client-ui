import Image from "next/image";
import type { OrganizationResponse } from "@/types/api";

interface FooterProps {
    org?: OrganizationResponse | null;
}

export function Footer({ org }: FooterProps) {
    const name = org?.name || "UBND Phường";
    const address = org?.address;
    const email = org?.email;
    const phone = org?.phone;

    return (
        <footer className="w-full">
            {/* Copyright Bar - Red Top */}
            <div className="bg-[#d32f2f] py-2">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white text-[11px] sm:text-[14px] font-sans">
                        Bản quyền thuộc về Trang thông tin điện tử phường {name}. Đã đăng ký ghi rõ nguồn khi sử dụng thông tin tại website này.
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
                            TRANG THÔNG TIN ĐIỆN TỬ PHƯỜNG {name.toUpperCase()}
                        </h2>

                        {/* Info Lines */}
                        <div className="text-gray-600 font-serif text-sm sm:text-sm space-y-1.5 leading-relaxed">
                            <p>Địa chỉ: {address || "-"}</p>
                            <p>
                                Email: {email || "-"} - Điện thoại: {phone || "-"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
