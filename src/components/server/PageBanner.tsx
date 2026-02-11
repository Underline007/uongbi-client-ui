import { bannersApi } from "@/lib/api";
import { BannerDisplay } from "@/components/client/BannerDisplay";
import { getMockActiveBanners } from "@/lib/mock-data/banners";
import type { BannerResponse } from "@/types/api";

interface PageBannerProps {
    position?: string;
}

export async function PageBanner({ position = "homepage" }: PageBannerProps) {
    let banners: BannerResponse[] = [];

    try {
        banners = await bannersApi.getActive(position);
    } catch {
        console.warn('[PageBanner] API không khả dụng, sử dụng mock data');
    }

    if (banners.length === 0) {
        banners = getMockActiveBanners(position);
    }

    if (banners.length === 0) return null;

    return (
        <div className="w-full">
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className="flex flex-col items-center py-3 sm:py-4 gap-3">
                        {banners.map((banner) => (
                            <BannerDisplay key={banner.id} banner={banner} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
