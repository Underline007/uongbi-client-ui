import { InfoBar } from "@/components/client";
import { PageBanner } from "@/components/server";
import {
  FeaturedNews,
  HighlightsSection,
  HomeSidebar,
  OrganizationSection,
  NewsCategoryGrid,
  PartyBuildingSection,
  StaffWorkSection,
  PartyActivitySection,
  PlanningSection,
  ElectionSection,
  ProceduresSection,
} from "@/components/home";
import { compositeApi, categoriesApi } from "@/lib/api";
import { transformHomepageData } from "@/lib/homepage-adapters";
import { getOrganization } from "@/lib/organization";

async function fetchHomeData() {
  try {
    const homepageData = await compositeApi.getHomepage({
      featured_limit: 5,
      latest_limit: 10,
      popular_limit: 5,
      articles_per_category: 4,
    });

    return transformHomepageData(homepageData);
  } catch (error) {
    console.error('Failed to fetch homepage data from API:', error);
    return null;
  }
}

export default async function Home() {
  const [data, org, announcementsRes] = await Promise.all([
    fetchHomeData(),
    getOrganization(),
    categoriesApi.getArticles("thong-bao", { page: 1, page_size: 5 }).catch(() => null),
  ]);

  if (!data) {
    return (
      <main className="flex-1">
        <div className="min-h-screen bg-gray-50">
          <InfoBar />
          <PageBanner />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-gray-500">
            Không thể tải dữ liệu. Vui lòng thử lại sau.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gray-50">
        <InfoBar />
        <PageBanner />

        {/* Main Content Section */}
        <section className="edit-section bg-white pb-4 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">
              <div className="lg:col-span-3 space-y-2 lg:space-y-8">
                <FeaturedNews featured={data.featured} />
                <HighlightsSection highlights={data.highlights} />
              </div>
              <HomeSidebar announcements={announcementsRes?.data ?? []} analytics={data.analytics} orgName={org?.name} orgPhone={org?.phone} />
            </div>
          </div>
        </section>

        {/* <OrganizationSection organization={data.organization} /> */}
        <NewsCategoryGrid categories={data.categories} />
        <PartyBuildingSection partyBuilding={data.partyBuilding} />
        <NewsCategoryGrid categories={data.threeCategories} />
        <StaffWorkSection staffWork={data.staffWork} />
        <PartyActivitySection partyActivity={data.partyActivity} />
        <PlanningSection plannings={data.plannings} />
        <ElectionSection election={data.election} />
        <ProceduresSection services={data.services} procedures={data.procedures} />
      </div>
    </main>
  );
}
