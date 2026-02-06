import { InfoBar } from "@/components/client";
import { PageBanner } from "@/components/server";
import { api } from "@/lib/api";
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

async function fetchHomeData() {
  const [
    featuredRes,
    highlightsRes,
    categoriesRes,
    threeCategoriesRes,
    partyBuildingRes,
    staffWorkRes,
    partyActivityRes,
    organizationRes,
    servicesRes,
    proceduresRes,
    analyticsRes,
    planningsRes,
    electionRes,
    announcementsRes,
  ] = await Promise.all([
    api.news.getFeatured(),
    api.news.getHighlights(),
    api.news.getCategories(),
    api.news.getCategories('three-categories'),
    api.news.getPartyBuilding(),
    api.news.getStaffWork(),
    api.news.getPartyActivity(),
    api.organization.getMembers(),
    api.services.getCitizenServices(),
    api.procedures.getList({ limit: 2 }),
    api.analytics.getStats(),
    api.plannings.getFeatured(),
    api.news.getElectionInfo(),
    api.announcements.getList({ pinned: true, limit: 1 }),
  ]);

  return {
    featured: featuredRes.data,
    highlights: highlightsRes.data,
    categories: categoriesRes.data,
    threeCategories: threeCategoriesRes.data,
    partyBuilding: partyBuildingRes.data,
    staffWork: staffWorkRes.data,
    partyActivity: partyActivityRes.data,
    organization: organizationRes.data,
    services: servicesRes.data,
    procedures: proceduresRes.data,
    analytics: analyticsRes.data,
    plannings: planningsRes.data,
    election: electionRes.data,
    announcements: announcementsRes.data,
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
