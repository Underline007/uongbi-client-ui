import Link from "next/link";
import { Phone, Eye, TrendingUp, Users, User, Clock, Baby, GraduationCap, Briefcase, Home as HomeIcon, Heart, Building2, Activity, Car, ClipboardList, Scale } from "lucide-react";
import { InfoBar } from "@/components/client";
import { PageBanner } from "@/components/server";
import { api } from "@/lib/api";
import type { CitizenService } from "@/types/api";

// Icon mapping for citizen services
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  GraduationCap,
  Briefcase,
  Home: HomeIcon,
  Heart,
  Building2,
  Activity,
  Car,
  Users,
  ClipboardList,
  Scale,
};

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

  const {
    featured,
    highlights,
    categories,
    threeCategories,
    partyBuilding,
    staffWork,
    partyActivity,
    organization,
    services,
    procedures,
    analytics,
    plannings,
    election,
    announcements,
  } = data;

  return (
    <main className="flex-1">
      <div className="min-h-screen bg-gray-50">
        {/* InfoBar */}
        <InfoBar />
        <PageBanner />
        {/* Main Content Section */}
        <section className="edit-section bg-white pb-4 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">
              {/* Main Content - 3 columns */}
              <div className="lg:col-span-3 space-y-2 lg:space-y-8">
                {/* Featured News Section */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">
                  {/* Featured Article */}
                  <div className="lg:col-span-3">
                    <div>
                      <div className="relative">
                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                          <img
                            src={featured.main.image}
                            alt="Featured"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="pt-6">
                        <Link href={`/tin-tuc/${featured.main.id}`}>
                          <h2 className="text-xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                            {featured.main.title}
                          </h2>
                        </Link>
                        <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
                          {featured.main.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar News List */}
                  <div className="lg:col-span-2">
                    <div className="hidden lg:block overflow-y-auto scrollbar-hide space-y-0 scrollbar-thin" style={{ maxHeight: "530px" }}>
                      {featured.sidebar.map((news, index) => (
                        <Link
                          key={news.id}
                          className={`block group py-3 ${index < featured.sidebar.length - 1 ? 'border-b border-gray-200' : ''}`}
                          href={`/tin-tuc/${news.id}`}
                        >
                          <div className="flex space-x-3">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                                {news.title}
                              </h4>
                            </div>
                            <div className="w-24 h-16 bg-gray-100 shrink-0 ">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile News List */}
                    <div className="lg:hidden space-y-0">
                      {featured.sidebar.map((news, index) => (
                        <Link
                          key={news.id}
                          className={`block group py-3 ${index < featured.sidebar.length - 1 ? 'border-b border-gray-200' : ''}`}
                          href={`/tin-tuc/${news.id}`}
                        >
                          <div className="flex space-x-3">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                                {news.title}
                              </h4>
                            </div>
                            <div className="w-24 h-16 bg-gray-100 overflow-hidden shrink-0">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="pt-4 text-right">
                        <button className="text-gray-900 hover:text-red-600 font-medium text-sm underline transition-colors">
                          Xem thêm &gt;&gt;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tiêu điểm Section */}
                <div>
                  <div className="relative">
                    <div className="mb-[-16px] relative z-10 pl-4">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase shadow-md">
                        Tiêu điểm
                      </span>
                    </div>
                    <div className="bg-gray-50 p-3 lg:p-6 pt-6 lg:pt-10 relative">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
                        {highlights.map((column, colIndex) => (
                          <div key={colIndex} className={`relative ${colIndex < 2 ? 'md:pr-4' : 'md:px-4'}`}>
                            {colIndex < 2 && (
                              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
                            )}
                            {column.items.map((item, itemIndex) => (
                              <div
                                key={item.id}
                                className={`pt-4 ${itemIndex === 0 ? '' : 'pl-4 md:pl-0'} ${itemIndex === 1 ? 'border-b border-dashed border-gray-300 pb-4' : ''}`}
                              >
                                <span className="text-xs text-gray-500 block mb-2">{item.date}</span>
                                <Link
                                  className={`${item.featured ? 'font-semibold' : ''} text-gray-900 hover:text-red-600 transition-colors line-clamp-${item.featured ? '3' : '2'} text-sm leading-relaxed`}
                                  href={`/tin-tuc/${item.id}`}
                                >
                                  {item.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - 1 column */}
              <aside className="lg:col-span-1">
                <div className="space-y-6">
                  <div className="space-y-4">
                    {/* Banner Image 1 */}
                    <div className="hidden md:block">
                      <div className="space-y-4">
                        <div className="overflow-hidden">
                          <div className="overflow-hidden cursor-pointer">
                            <img
                              src="https://storage.4ship.vn/public/image/59d7ec0b-0052-418b-81d2-963b5aa99401.jpg"
                              alt="thủ tục hành chính"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thông báo */}
                    <div className="hidden md:block bg-white border border-gray-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4 pb-2">
                        <h3 className="text-base font-bold text-gray-900">THÔNG BÁO</h3>
                        <Link className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }} href="/announcements">
                          Xem thêm →
                        </Link>
                      </div>
                      <div className="space-y-0">
                        {announcements.map((announcement) => (
                          <div key={announcement.id}
                            className="py-3">
                            <div className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug " style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }}>
                              {announcement.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Liên hệ */}
                    <div className="hidden md:block bg-red-600 shadow-sm overflow-hidden">
                      <div className="bg-red-600 px-4 py-2 text-center border-b border-red-500">
                        <h2 className="text-white font-bold text-sm font-family: 'Inter', sans-serif;">LIÊN HỆ</h2>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="text-white">
                          <div className="flex items-center space-x-3">
                            <div className="bg-white p-2">
                              <Phone className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="flex-1 text-base">
                              <h3 className="font-medium mb-1 text-yellow-200 uppercase">Trực ban tại phường</h3>
                              <a href="tel:0203.3881892" className="font-bold text-yellow-200 hover:text-white transition-colors">
                                0203.3881892
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Banner Image 2 */}
                    <div className="hidden md:block">
                      <div className="space-y-4">
                        <div className="overflow-hidden">
                          <div className="overflow-hidden cursor-pointer">
                            <img
                              src="https://storage.4ship.vn/public/image/1fab35bf-1424-4800-94f7-8f3c31c603f5.jpg"
                              alt="dịch vụ công"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thống kê truy cập */}
                    <div className="hidden md:block bg-white border border-gray-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4 pb-2">
                        <h3 className="text-xl font-bold text-gray-900">THỐNG KÊ TRUY CẬP</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <Eye className="h-5 w-5 text-gray-600" />
                            <div className="text-sm text-gray-600">Đang truy cập</div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{analytics.online}</div>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-gray-600" />
                            <div className="text-sm text-gray-600">Truy cập hôm nay</div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{analytics.today}</div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-gray-600" />
                            <div className="text-sm text-gray-600">Tổng lượt truy cập</div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">{analytics.total.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Cơ cấu tổ chức Section */}
        <div className="bg-white lg:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="bg-white w-full lg:border-t border-gray-200 pt-4">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-6 bg-red-600"></div>
                    <h2 className="font-bold text-gray-900 uppercase" style={{ fontSize: "0.8rem" }}>
                      Cơ cấu tổ chức
                    </h2>
                  </div>
                </div>
                <div className="mb-0 lg:mb-6">
                  {/* Mobile Horizontal Scroll */}
                  <div className="md:hidden flex gap-3 pb-4 overflow-x-auto">
                    {organization.map((member) => (
                      <div key={member.id} className="flex-shrink-0 w-40">
                        <div className="bg-white border border-gray-200 p-2 lg:p-3 min-w-[160px] h-full hover:shadow-md transition-shadow duration-200">
                          <div className="flex flex-col items-center text-center h-full">
                            <div className="mb-2">
                              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gray-100 flex items-center justify-center border border-gray-100 rounded-full">
                                <User className="h-7 w-7 lg:h-10 lg:w-10 text-gray-600" />
                              </div>
                            </div>
                            <div className="font-bold text-gray-900 uppercase mb-1 leading-tight text-[0.65rem] lg:text-[0.7rem]">
                              {member.name}
                            </div>
                            <div className="px-1 lg:px-2 py-1 text-gray-600 leading-tight text-[0.6rem] lg:text-[0.65rem]">
                              <div>{member.position}</div>
                              {member.position2 && <div>{member.position2}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Grid */}
                  <div className="hidden md:grid gap-4 lg:gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                    {organization.map((member) => (
                      <div key={member.id} className="flex">
                        <div className="bg-white border border-gray-200 p-2 lg:p-3 h-full hover:shadow-md transition-shadow duration-200">
                          <div className="flex flex-col items-center text-center h-full">
                            <div className="mb-2">
                              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-gray-100 flex items-center justify-center border border-gray-100 rounded-full">
                                <User className="h-7 w-7 lg:h-10 lg:w-10 text-gray-600" />
                              </div>
                            </div>
                            <div className="font-bold text-gray-900 uppercase mb-1 leading-tight text-[0.65rem] lg:text-[0.7rem]">
                              {member.name}
                            </div>
                            <div className="px-1 lg:px-2 py-1 text-gray-600 leading-tight text-[0.6rem] lg:text-[0.65rem]">
                              <div>{member.position}</div>
                              {member.position2 && <div>{member.position2}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* News Categories Section */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:pt-4 lg:border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div key={category.id} className="bg-white mt-2 lg:mt-0">
                    <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                      <div className="w-1 h-6 bg-red-600 mr-3"></div>
                      <Link href={`/categories/${category.id}`}>
                        <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors">
                          {category.name}
                        </h3>
                      </Link>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                      <Link className="block group" href={`/tin-tuc/${category.featured.id}`}>
                        <div className="space-y-2">
                          <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                            <img
                              src={category.featured.image}
                              alt={category.featured.title}
                              className="w-full h-full group-hover:scale-105 transition-transform duration-200"
                              loading="lazy"
                            />
                          </div>
                          <h4 className="font-bold text-gray-900 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2" style={{ fontSize: "0.8rem" }}>
                            {category.featured.title}
                          </h4>
                        </div>
                      </Link>
                      {category.items.length > 0 && (
                        <>
                          <div className="border-t border-gray-200 pt-2"></div>
                          <div className="m-0">
                            {category.items.map((item, idx) => (
                              <Link key={item.id} className="block group" href={`/tin-tuc/${item.id}`}>
                                <div className={`py-2 ${idx < category.items.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                  <h4 className="font-medium text-gray-700 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2 m-0" style={{ fontSize: "0.8rem" }}>
                                    {item.title}
                                  </h4>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Công tác xây dựng Đảng trong sạch vững mạnh */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full bg-white">
              <section className="w-full">
                <div className="mb-3 md:mb-0 md:relative md:z-10">
                  <h3 className="inline-block bg-primary py-1.5 px-2.5 text-base font-black uppercase text-white rounded-sm w-fit md:absolute md:top-[-20px] md:left-6 md:z-[1]" style={{ fontWeight: 900 }}>
                    công tác xây dựng đảng trong sạch vững mạnh
                  </h3>
                </div>
                <div className="border border-gray-200 bg-gray-50 p-2 md:p-6 md:pt-10 lg:pt-12 relative shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {partyBuilding.map((col, colIndex) => (
                      <div key={colIndex} className="flex flex-col space-y-2 md:space-y-3">
                        <Link className="group block" href={`/tin-tuc/${col.featured.id}`}>
                          <div className="aspect-[16/12] mb-2 md:mb-3 overflow-hidden bg-gray-100">
                            <img
                              src={col.featured.image}
                              alt="Featured"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm md:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1 md:mb-2 line-clamp-2">
                            {col.featured.title}
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
                            {col.featured.description}
                          </p>
                        </Link>
                        {col.secondary && (
                          <div className="space-y-2 md:space-y-3 pt-2 md:pt-3 border-t border-gray-200">
                            <Link className="group flex gap-2 md:gap-3 pb-2 md:pb-3" href={`/tin-tuc/${col.secondary.id}`}>
                              <div className="shrink-0 w-20 md:w-28 h-11 md:h-16 overflow-hidden bg-gray-100">
                                <img
                                  src={col.secondary.image}
                                  alt="Featured"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm md:text-base font-normal text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                                  {col.secondary.title}
                                </h4>
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Gương người tốt việc tốt, Hoạt động lãnh đạo tỉnh, Công tác an sinh xã hội */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:pt-4 lg:border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {threeCategories.map((category) => (
                  <div key={category.id} className="bg-white mt-2 lg:mt-0">
                    <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                      <div className="w-1 h-6 bg-red-600 mr-3"></div>
                      <Link href={`/categories/${category.id}`}>
                        <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors" >
                          {category.name}
                        </h3>
                      </Link>
                    </div>
                    <div className="space-y-2 lg:space-y-4">
                      <Link className="block group" href={`/tin-tuc/${category.featured.id}`}>
                        <div className="space-y-2">
                          <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                            <img
                              src={category.featured.image}
                              alt={category.featured.title}
                              className="w-full h-full group-hover:scale-105 transition-transform duration-200"
                              loading="lazy"
                            />
                          </div>
                          <h4 className="font-bold text-gray-900 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2" style={{ fontSize: "0.8rem" }}>
                            {category.featured.title}
                          </h4>
                        </div>
                      </Link>
                      {category.items.length > 0 && (
                        <>
                          <div className="border-t border-gray-200 pt-2"></div>
                          <div className="m-0">
                            {category.items.map((item, idx) => (
                              <Link key={item.id} className="block group" href={`/tin-tuc/${item.id}`}>
                                <div className={`py-2 ${idx < category.items.length - 1 ? 'border-b border-gray-200' : ''}`}>
                                  <h4 className="font-medium text-gray-700 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2 m-0" style={{ fontSize: "0.8rem" }}>
                                    {item.title}
                                  </h4>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Công tác cán bộ */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="w-full">
              <div className="mb-3 lg:mb-6">
                <h3 className="text-base font-bold uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Công tác cán bộ
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {staffWork.main.map((news) => (
                      <Link key={news.id} className="group block bg-white transition-all duration-300" href={`/tin-tuc/${news.id}`}>
                        <div className="aspect-[16/10]">
                          <div className="bg-gray-100 overflow-hidden w-full h-full">
                            <img src={news.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="py-4">
                          <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                            {news.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <time>{news.date}</time>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-2">
                    {staffWork.sidebar.map((news) => (
                      <Link key={news.id} className="group block py-3 hover:bg-gray-50 transition-colors duration-200" href={`/tin-tuc/${news.id}`}>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 font-bold text-xs md:mt-0.5 shrink-0">•</span>
                          <div className="flex-1">
                            <h5 className="font-medium text-sm text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                              {news.title}
                            </h5>
                            <div className="mt-1">
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <time>{news.date}</time>
                                <span>•</span>
                                <time>{news.time}</time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Hoạt động Đảng bộ phường */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="w-full">
              <div className="mb-3 lg:mb-6">
                <h3 className="text-base font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Hoạt động Đảng bộ phường
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <Link className="group block bg-white transition-all duration-300" href={`/tin-tuc/${partyActivity.featured.id}`}>
                    <div className="aspect-[16/10]">
                      <div className="bg-gray-100 overflow-hidden w-full h-full">
                        <img src={partyActivity.featured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="py-4">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                        {partyActivity.featured.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {partyActivity.featured.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <time>{partyActivity.featured.date}</time>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:col-span-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {partyActivity.grid.map((news) => (
                      <Link key={news.id} className="group block bg-white transition-all duration-300" href={`/tin-tuc/${news.id}`}>
                        <div className="aspect-[16/10]">
                          <div className="bg-gray-100 overflow-hidden w-full h-full">
                            <img src={news.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="py-3">
                          <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                            {news.title}
                          </h5>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <time>{news.date}</time>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Thông tin quy hoạch */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section className="w-full">
              <div className="mb-3 lg:mb-6">
                <h3 className="text-base font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Thông tin quy hoạch
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-1">
                  <div className="space-y-4 h-full">
                    <Link className="group block bg-white transition-all duration-300" href={`/tin-tuc/${plannings.sidebar.id}`}>
                      <div className="aspect-[16/10]">
                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                          <img src={plannings.sidebar.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="py-3">
                        <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                          {plannings.sidebar.title}
                        </h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <time>{plannings.sidebar.date}</time>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <Link className="group block bg-white transition-all duration-300 h-full" href={`/tin-tuc/${plannings.featured.id}`}>
                    <div className="flex flex-col h-full">
                      <div className="aspect-[16/10] shrink-0">
                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                          <img src={plannings.featured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="py-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                            {plannings.featured.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {plannings.featured.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <time>{plannings.featured.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="lg:col-span-1">
                  <div className="space-y-4 h-full"></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Thông Tin Bầu Cử */}
        <div className="bg-white pt-6 pb-4 sm:pt-8 md:pt-10 lg:pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:pt-4 lg:border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white mt-2 lg:mt-0">
                  <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                    <div className="w-1 h-6 bg-red-600 mr-3"></div>
                    <Link href={`/categories/${election.id}`}>
                      <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors">
                        {election.name}
                      </h3>
                    </Link>
                  </div>
                  <div className="space-y-2 lg:space-y-4">
                    <Link className="block group" href={`/tin-tuc/${election.featured.id}`}>
                      <div className="space-y-2">
                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                          <img
                            src={election.featured.image}
                            alt={election.featured.title}
                            className="w-full h-full group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2" style={{ fontSize: "0.8rem" }}>
                          {election.featured.title}
                        </h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hướng dẫn thủ tục hành chính Section */}
        <section className="py-12 lg:py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4 uppercase">
                Hướng dẫn thủ tục hành chính
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Công dân / Doanh nghiệp tabs */}
              <div className="bg-white border border-gray-300">
                <div className="flex border-b-2 border-red-600">
                  <button className="flex-1 px-6 py-3 text-sm lg:text-lg font-bold uppercase transition-colors bg-red-600 text-white">
                    Công Dân
                  </button>
                  <button className="flex-1 px-6 py-3 text-sm lg:text-lg font-bold uppercase transition-colors bg-white text-gray-900 hover:bg-gray-50">
                    Doanh Nghiệp
                  </button>
                </div>
                <div className="p-2 md:p-6">
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => {
                      const IconComponent = iconMap[service.icon] || ClipboardList;
                      return (
                        <a
                          key={service.id}
                          href={service.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-150 p-3"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-gray-700" />
                          </div>
                          <span className="ml-3 text-gray-900 text-sm group-hover:text-gray-700">{service.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bài hướng dẫn */}
              <div className="bg-white border border-gray-300">
                <div className="bg-white border-b-2 border-red-600 px-6 py-3 flex items-center justify-between">
                  <h3 className="text-base font-bold text-gray-900 uppercase">Bài hướng dẫn</h3>
                  <Link className="text-base text-gray-400 hover:text-gray-600 transition-colors" href="/procedures">
                    Xem tất cả
                  </Link>
                </div>
                <div className="p-2 md:p-6 overflow-y-auto" style={{ maxHeight: "600px" }}>
                  <ul className="space-y-3">
                    {procedures.map((proc) => (
                      <li key={proc.id} className="flex items-start group">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-600 transition-colors"></span>
                        <Link className="flex-1" href={`/procedures/${proc.id}`}>
                          <h4 className="font-medium text-gray-900 text-sm leading-relaxed group-hover:text-red-600 transition-colors">
                            {proc.title}
                          </h4>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
