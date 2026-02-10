import { bannersApi } from "@/lib/api";
import { BannerDisplay } from "@/components/client/BannerDisplay";
import type { BannerResponse } from "@/types/api";

export async function PageBanner() {
    let banners: BannerResponse[] = [];

    try {
        banners = await bannersApi.getActive();
    } catch (error) {
        // API failed — render nothing
        return null;
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
