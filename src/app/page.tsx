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

// TODO: Replace mock data imports with real API calls via compositeApi.getHomepage()
// once components are updated to accept the new HomepageResponse shape.
// Example:
//   import { compositeApi } from "@/lib/api";
//   const data = await compositeApi.getHomepage({ featured_limit: 5, latest_limit: 10 });
import {
  featuredNewsData,
  highlightsData,
  newsCategoriesData,
  threeCategoriesData,
  partyBuildingData,
  staffWorkData,
  partyActivityData,
  organizationMembersData,
  citizenServicesData,
  proceduresData,
  analyticsStatsData,
  planningFeaturedData,
  planningSidebarData,
  electionInfoData,
  announcementsData,
} from '@/lib/mock-data';

async function fetchHomeData() {
  return {
    featured: featuredNewsData,
    highlights: highlightsData,
    categories: newsCategoriesData,
    threeCategories: threeCategoriesData,
    partyBuilding: partyBuildingData,
    staffWork: staffWorkData,
    partyActivity: partyActivityData,
    organization: organizationMembersData,
    services: citizenServicesData,
    procedures: proceduresData,
    analytics: { ...analyticsStatsData, lastUpdated: new Date().toISOString() },
    plannings: { featured: planningFeaturedData, sidebar: planningSidebarData },
    election: electionInfoData,
    announcements: announcementsData,
  };
}

export default async function Home() {
  const data = await fetchHomeData();

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
              <HomeSidebar announcements={data.announcements} analytics={data.analytics} />
            </div>
          </div>
        </section>

        <OrganizationSection organization={data.organization} />
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
