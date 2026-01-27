import Image from "next/image";

export function PageBanner() {
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex items-center py-3 sm:py-4">
                <a 
                    href="https://baochinhphu.vn/chu-de/huong-toi-dai-hoi-dai-bieu-toan-quoc-lan-thu-xiv-cua-dang-206.htm" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full hover:opacity-90 transition-opacity"
                >
                    <Image
                        src="/images/992a5543-e511-47bf-88fb-6ddac5f44214.jpg" 
                        alt="Hướng tới Đại hội đại biểu toàn quốc lần thứ XIV của Đảng" 
                        width={1280}
                        height={200}
                        className="w-full h-auto object-contain" 
                        style={{ maxHeight: "200px" }}
                        priority
                    />
                </a>
            </div>
        </div>
    );
}
