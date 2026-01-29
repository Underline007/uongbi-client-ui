import Link from "next/link";
import { Phone, Eye, TrendingUp, Users, User, Mail, Clock, Baby, GraduationCap, Briefcase, Home as HomeIcon, Heart, Building2, Activity, Car, ClipboardList, Scale } from "lucide-react";
import { InfoBar } from "@/components/client";
import { PageBanner } from "@/components/server";

// Sample data - in production this would come from API
const featuredNews = {
  id: "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
  title: "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
  description: "Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân, Ủy ban bầu cử phường Móng Cái 3 trân trọng thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường Móng Cái 3, nhiệm kỳ 2026 – 2031.",
  image: "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
};

const sidebarNews = [
  { id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1", title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.", image: "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg" },
  { id: "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad", title: "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái", image: "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg" },
  { id: "638f523b-2a1c-4df3-91cc-038356cef0ff", title: "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030", image: "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg" },
  { id: "94692871-ddb2-454f-9c83-c55664095ea3", title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335", image: "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg" },
  { id: "2332f615-2f3f-47ef-8350-9b2bb6bda53f", title: "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025", image: "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg" },
  { id: "bdcfbd79-d020-490a-9999-8b4b765aa868", title: "Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng", image: "https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg" },
  { id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0", title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên", image: "https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg" },
];

const highlights = [
  [
    { id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1", title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.", date: "khoảng 1 tháng trước", featured: true },
    { id: "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378", title: "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương", date: "khoảng 1 tháng trước" },
    { id: "57a86c30-2851-4f47-a8d1-5495c99db8b3", title: "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ", date: "khoảng 1 tháng trước" },
  ],
  [
    { id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0", title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên", date: "khoảng 1 tháng trước", featured: true },
    { id: "5d8ed1c2-5d6a-4361-8517-daaf50003552", title: "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm", date: "khoảng 1 tháng trước" },
    { id: "c72903a5-3432-494e-90e7-af0f719adf49", title: "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt", date: "khoảng 1 tháng trước" },
  ],
  [
    { id: "d24484ab-1dda-42ab-8ffd-19e81d092d2c", title: "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị", date: "khoảng 1 tháng trước", featured: true },
    { id: "37084824-36a0-4186-8d2a-c37dca0f6cff", title: "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa", date: "khoảng 1 tháng trước" },
    { id: "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d", title: "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026", date: "khoảng 1 tháng trước" },
  ],
];

const organizationMembers = [
  { name: "Đồng chí Nguyễn Phúc Vinh", role: "Bí thư Đảng ủy" },
  { name: "Đồng chí Dương Thị Huệ", role: "Phó Bí thư Thường trực Đảng ủy", role2: "Chủ tịch HĐND" },
  { name: "Đồng chí Đỗ Thị Hồng Nhung", role: "Phó Bí thư Đảng ủy", role2: "Chủ tịch UBND" },
  { name: "Đồng chí Hoàng Anh Tuất", role: "Chủ nhiệm Ủy ban Kiểm tra Đảng ủy" },
];

const newsCategories = [
  {
    id: "3329deeb-e963-4e95-a1bd-85b9d5ab304a",
    title: "Tin tức tổng hợp",
    featured: { id: "c72903a5-3432-494e-90e7-af0f719adf49", title: "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt", image: "https://storage.4ship.vn/public/image/aaa41038-8a6b-4f6a-a43b-bffe7ef3a90e.jpeg" },
    items: [
      { id: "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d", title: "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026" },
      { id: "a5ffc20f-7456-49b5-8390-8f4cfdde0a80", title: "Kỳ họp thứ Nhất HĐND phường Móng Cái 3, Khóa I, nhiệm kỳ 2021-2026" },
      { id: "b1a37bec-6766-44b7-a46a-c5183ef73655", title: "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái" },
      { id: "668ffa49-a3f2-4561-a3dc-94c9af0f3c40", title: "Phường Móng Cái 3: Trung tâm phát triển công nghiệp và dịch vụ trọng điểm của tỉnh" },
    ],
  },
  {
    id: "a8f02942-d0c1-4d79-8e2e-f59387762c8f",
    title: "Kinh tế - Chính trị",
    featured: { id: "75993dca-4fd6-453d-a284-3746dad761b7", title: "Đại hội Hội Doanh nghiệp phường Móng Cái 3 lần thứ nhất nhiệm kỳ 2025-2030", image: "https://storage.4ship.vn/public/image/59463595-39a4-42aa-b300-8fc91f162099.jpeg" },
    items: [
      { id: "751266d8-f6ba-4e57-867e-7340b3c58127", title: "Đại hội Đại biểu Đảng bộ phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025-2030" },
    ],
  },
  {
    id: "c22e47a7-1735-44a7-a903-18de44929ec1",
    title: "Văn hóa - Xã hội",
    featured: { id: "5d8ed1c2-5d6a-4361-8517-daaf50003552", title: "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm", image: "https://storage.4ship.vn/public/image/c9a6aa5f-dff9-44a3-8f80-f1a098ebc6a9.jpeg" },
    items: [
      { id: "4f68fb5c-1808-468d-88d3-e26bf5e35515", title: "Đoàn phường và Hội LHTN phường Móng Cái 1, Móng Cái 2, Móng Cái 3 tổ chức Giải Pickleball thanh niên" },
      { id: "14d366aa-d069-4390-b5b9-677c10441190", title: "Phường Móng Cái 3: Viết nên trang sử mới trong kỷ nguyên vươn mình của dân tộc" },
      { id: "47751a01-326c-4d15-911e-685bc08c3745", title: "Quảng Ninh đẩy nhanh tiến độ xây dựng cửa khẩu thông minh" },
    ],
  },
];

const citizenProcedures = [
  { icon: Baby, label: "Có con nhỏ", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=750" },
  { icon: GraduationCap, label: "Học tập", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=751" },
  { icon: Briefcase, label: "Việc làm", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=752" },
  { icon: HomeIcon, label: "Cư trú và giấy tờ tùy thân", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=753" },
  { icon: Heart, label: "Hôn nhân và gia đình", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=754" },
  { icon: Building2, label: "Điện lực, nhà ở, đất đai", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=755" },
  { icon: Activity, label: "Sức khỏe và y tế", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=756" },
  { icon: Car, label: "Phương tiện và người lái", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=757" },
  { icon: Users, label: "Hưu trí", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=758" },
  { icon: ClipboardList, label: "Người thân qua đời", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=759" },
  { icon: Scale, label: "Giải quyết khiếu kiện", href: "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=771" },
];

const guideProcedures = [
  { id: "694e2b856808578c44aa1eb2", title: "Đăng ký thường trú" },
  { id: "694e2a666808578c44aa1ead", title: "Thủ tục đăng ký khai sinh" },
];

// Công tác xây dựng Đảng trong sạch vững mạnh - 3 columns
const partyBuildingColumns = [
  {
    featured: {
      id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
      title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.",
      image: "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg",
      description: "Ngày 7/11, Đảng ủy phường Móng Cái 3 đã long trọng tổ chức Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở và công bố Quyết định về công tác cán bộ. Đồng chí Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3."
    },
    item: { id: "38dcb631-30eb-4f7f-b27f-c7832bad42f4", title: "Đại hội đại biểu Đoàn TNCS Hồ Chí Minh phường Móng Cái 3 lần thứ nhất, nhiệm kỳ 2025 - 2030", image: "https://storage.4ship.vn/public/image/652d72d7-1de1-478e-9bf0-ad39218a09d8.jpeg" }
  },
  {
    featured: {
      id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0",
      title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên",
      image: "https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg",
      description: "Nhân dịp kỷ niệm 80 năm Cách mạng tháng Tám thành công (19/8/1945-19/8/2025) và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/9/1945- 02/9/2025), Đảng bộ phường Móng Cái 3 vinh dự có 6 đồng chí đảng viên được trao tặng Huy hiệu Đảng."
    },
    item: { id: "ca1229ac-619c-4aa1-b28b-863bc1f86689", title: "Hội Nông dân phường Móng Cái 3: Kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam", image: "http://storage.4ship.vn/public/image/6a11047b-6c8c-4f90-bbe9-cf563843f70e.jpg" }
  },
  {
    featured: {
      id: "f8af5c56-d044-475e-8972-98c78cabde57",
      title: "Hội nghị Ban Chấp hành Đảng bộ phường Móng Cái 3 lần thứ 3",
      image: "https://storage.4ship.vn/public/image/e472f627-617b-4cb7-9d93-5000c2e0a817.jpeg",
      description: "Sáng 3/10, Đảng ủy phường Móng Cái 3 tổ chức Hội nghị Ban Chấp hành Đảng bộ phường lần thứ 3 khóa I, nhiệm kỳ 2025-2030 để sơ kết công tác quý III/2025, triển khai nhiệm vụ trọng tâm công tác quý IV/2025."
    }
  }
];

// 3 categories section: Gương người tốt việc tốt, Hoạt động lãnh đạo tỉnh, Công tác an sinh xã hội
const threeCategories = [
  {
    id: "145636a4-5af0-41c2-8e86-66c43e199de3",
    title: "Gương người tốt việc tốt",
    featured: { id: "2d4f1d5a-5e37-46c8-b377-0b194e446828", title: "Tấm gương Nhà giáo Nguyễn Thị Vân và niềm vui bất ngờ ngày Bế giảng năm họ", image: "https://storage.4ship.vn/public/image/f434fbf5-ee9b-4d76-be0d-8cbc427b6f1e.jpg" },
    items: []
  },
  {
    id: "45f48d26-667a-4549-a909-2736413883bc",
    title: "Hoạt động lãnh đạo tỉnh",
    featured: { id: "bdcfbd79-d020-490a-9999-8b4b765aa868", title: "Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng", image: "https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg" },
    items: [
      { id: "37084824-36a0-4186-8d2a-c37dca0f6cff", title: "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa" }
    ]
  },
  {
    id: "58ec436a-3fcc-41ac-a97d-4d253423114b",
    title: "Công tác an sinh xã hội",
    featured: { id: "8d5cceb1-3b7e-4e14-9879-4ddccd41c1e7", title: "Phát động và tiếp nhận kinh phí ủng hộ đồng bào miền Trung,Tây Nguyên khắc phục thiệt hại do bão lũ", image: "https://storage.4ship.vn/public/image/a7f52155-c03f-4cb0-b387-b0f0119f55bf.jpeg" },
    items: [
      { id: "afa74f2a-38be-4455-8d12-4ec33cdf8f5e", title: "Trường Tiểu học Hải Yên trao 50 triệu đồng ủng hộ đồng bào bị ảnh hưởng bởi bão lũ" }
    ]
  }
];

// Công tác cán bộ - featured articles grid
const staffWorkNews = [
  { id: "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad", title: "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái", image: "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg", date: "28/12/2025" },
  { id: "638f523b-2a1c-4df3-91cc-038356cef0ff", title: "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030", image: "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg", date: "28/12/2025" },
  { id: "2332f615-2f3f-47ef-8350-9b2bb6bda53f", title: "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025", image: "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg", date: "28/12/2025" },
  { id: "d24484ab-1dda-42ab-8ffd-19e81d092d2c", title: "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị", image: "https://storage.4ship.vn/public/image/c62a3645-04ba-4d73-be3d-d5a5e68297dc.jpeg", date: "28/12/2025" }
];

const staffWorkSidebar = [
  { id: "57a86c30-2851-4f47-a8d1-5495c99db8b3", title: "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ", date: "28/12/2025", time: "05:29" }
];

// Hoạt động Đảng bộ phường
const partyActivityFeatured = {
  id: "c593c91a-bf69-486b-a1f7-9f331a333e82",
  title: "Đại hội đại biểu MTTQ phường Móng Cái 3 lần thứ I nhiệm kỳ 2025 - 2030",
  image: "https://storage.4ship.vn/public/image/6dc60fb7-486b-44d1-bbf3-67a92b3b382e.jpeg",
  description: "Ngày 19/9, MTTQ Việt Nam phường Móng Cái 3 long trọng tổ chức Đại hội đại biểu MTTQ Việt Nam lần thứ I, nhiệm kỳ 2025 - 2030.",
  date: "28/12/2025"
};

const partyActivityGrid = [
  { id: "1e476b69-6db3-4dc3-98ea-b8c6414d3f1c", title: "Hội nghị giao ban với đội ngũ Bí thư chi bộ, Trưởng thôn/khu, Trưởng Ban Công tác mặt trận thôn/khu", image: "https://storage.4ship.vn/public/image/16d81876-9a89-4ef1-bd9f-8faa960210c7.jpeg", date: "28/12/2025" },
  { id: "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378", title: "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương", image: "https://storage.4ship.vn/public/image/7f2d7d37-09da-4d59-98fc-07af1da20027.jpeg", date: "28/12/2025" },
  { id: "54217809-25df-44c7-b029-11fdecb7cfc7", title: "Đảng ủy phường Móng Cái 3: Hội nghị báo cáo viên quý IV/2025", image: "https://storage.4ship.vn/public/image/68662ca1-da3d-4826-b4b3-3da8bbde2ca1.jpeg", date: "28/12/2025" }
];

// Thông tin quy hoạch
const planningFeatured = {
  id: "94692871-ddb2-454f-9c83-c55664095ea3",
  title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
  image: "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
  description: "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
  date: "28/12/2025"
};

const planningSidebar = {
  id: "33429716-8635-4702-b27c-429087c95f69",
  title: "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái",
  image: "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
  date: "28/12/2025"
};

// Thông Tin Bầu Cử
const electionInfo = {
  id: "3480888c-c635-4bdc-b151-4fd8036d6e12",
  featured: { id: "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b", title: "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3", image: "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg" }
};

export default function Home() {
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
                            src={featuredNews.image}
                            alt="Featured"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="pt-6">
                        <Link href={`/tin-tuc/${featuredNews.id}`}>
                          <h2 className="text-xl font-bold text-gray-900 mb-4 hover:text-red-600 transition-colors">
                            {featuredNews.title}
                          </h2>
                        </Link>
                        <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
                          {featuredNews.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar News List */}
                  <div className="lg:col-span-2">
                    <div className="hidden lg:block overflow-y-auto space-y-0 scrollbar-thin" style={{ maxHeight: "530px" }}>
                      {sidebarNews.map((news, index) => (
                        <Link
                          key={news.id}
                          className={`block group py-3 ${index < sidebarNews.length - 1 ? 'border-b border-gray-200' : ''}`}
                          href={`/tin-tuc/${news.id}`}
                        >
                          <div className="flex space-x-3">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                                {news.title}
                              </h4>
                            </div>
                            <div className="w-24 h-16 bg-gray-100 overflow-hidden flex-shrink-0">
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
                      {sidebarNews.map((news, index) => (
                        <Link
                          key={news.id}
                          className={`block group py-3 ${index < sidebarNews.length - 1 ? 'border-b border-gray-200' : ''}`}
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
                            {column.map((item, itemIndex) => (
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
                        <h3 className="text-xl font-bold text-gray-900">THÔNG BÁO</h3>
                        <Link className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors" href="/announcements">
                          Xem thêm →
                        </Link>
                      </div>
                      <div className="space-y-0">
                        <div className="py-3">
                          <div className="font-semibold text-sm text-gray-900 line-clamp-2 leading-snug">
                            Phường Móng Cái 3 ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái
                          </div>
                        </div>
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
                            <div className="flex-1">
                              <h3 className="font-medium text-[10px] mb-1 text-yellow-200 uppercase">Trực ban tại phường</h3>
                              <a href="tel:0203.3881892" className="text-base font-bold text-yellow-200 hover:text-white transition-colors">
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
                          <div className="text-lg font-bold text-gray-900">27</div>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-gray-600" />
                            <div className="text-sm text-gray-600">Truy cập hôm nay</div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">538</div>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-gray-600" />
                            <div className="text-sm text-gray-600">Tổng lượt truy cập</div>
                          </div>
                          <div className="text-lg font-bold text-gray-900">7,127</div>
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
                    {organizationMembers.map((member, index) => (
                      <div key={index} className="flex-shrink-0 w-40">
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
                              <div>{member.role}</div>
                              {member.role2 && <div>{member.role2}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Grid */}
                  <div className="hidden md:grid gap-4 lg:gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                    {organizationMembers.map((member, index) => (
                      <div key={index} className="flex">
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
                              <div>{member.role}</div>
                              {member.role2 && <div>{member.role2}</div>}
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
                {newsCategories.map((category) => (
                  <div key={category.id} className="bg-white mt-2 lg:mt-0">
                    <div className="flex items-center mb-2 lg:mb-4 pb-2 lg:pb-3 border-b border-gray-200">
                      <div className="w-1 h-6 bg-red-600 mr-3"></div>
                      <Link href={`/categories/${category.id}`}>
                        <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors" style={{ fontSize: "0.8rem" }}>
                          {category.title}
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
                  <h3 className="inline-block bg-[#e23d3d] py-1.5 px-2.5 text-lg sm:text-2xl lg:text-3xl font-black uppercase text-white rounded-sm w-fit md:absolute md:top-[-20px] md:left-6 md:z-[1]" style={{ fontWeight: 900 }}>
                    công tác xây dựng đảng trong sạch vững mạnh
                  </h3>
                </div>
                <div className="border border-gray-200 bg-gray-50 p-2 md:p-6 md:pt-10 lg:pt-12 relative shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {partyBuildingColumns.map((col, colIndex) => (
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
                        {col.item && (
                          <div className="space-y-2 md:space-y-3 pt-2 md:pt-3 border-t border-gray-200">
                            <Link className="group flex gap-2 md:gap-3 pb-2 md:pb-3" href={`/tin-tuc/${col.item.id}`}>
                              <div className="flex-shrink-0 w-20 md:w-28 h-11 md:h-16 overflow-hidden bg-gray-100">
                                <img
                                  src={col.item.image}
                                  alt="Featured"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm md:text-base font-normal text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                                  {col.item.title}
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
                        <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors" style={{ fontSize: "0.8rem" }}>
                          {category.title}
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
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Công tác cán bộ
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {staffWorkNews.map((news) => (
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
                    {staffWorkSidebar.map((news) => (
                      <Link key={news.id} className="group block py-3 hover:bg-gray-50 transition-colors duration-200" href={`/tin-tuc/${news.id}`}>
                        <div className="flex items-start gap-3">
                          <span className="text-red-600 font-bold text-xs md:mt-0.5 flex-shrink-0">•</span>
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
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Hoạt động Đảng bộ phường
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <Link className="group block bg-white transition-all duration-300" href={`/tin-tuc/${partyActivityFeatured.id}`}>
                    <div className="aspect-[16/10]">
                      <div className="bg-gray-100 overflow-hidden w-full h-full">
                        <img src={partyActivityFeatured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="py-4">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                        {partyActivityFeatured.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {partyActivityFeatured.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <time>{partyActivityFeatured.date}</time>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:col-span-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {partyActivityGrid.map((news) => (
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
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-gray-900 mb-2 pb-2 border-b-2 border-red-600">
                  Thông tin quy hoạch
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-1">
                  <div className="space-y-4 h-full">
                    <Link className="group block bg-white transition-all duration-300" href={`/tin-tuc/${planningSidebar.id}`}>
                      <div className="aspect-[16/10]">
                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                          <img src={planningSidebar.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="py-3">
                        <h5 className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                          {planningSidebar.title}
                        </h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <time>{planningSidebar.date}</time>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <Link className="group block bg-white transition-all duration-300 h-full" href={`/tin-tuc/${planningFeatured.id}`}>
                    <div className="flex flex-col h-full">
                      <div className="aspect-[16/10] flex-shrink-0">
                        <div className="bg-gray-100 overflow-hidden w-full h-full">
                          <img src={planningFeatured.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="py-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">
                            {planningFeatured.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                            {planningFeatured.description}
                          </p>
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <time>{planningFeatured.date}</time>
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
                    <Link href={`/categories/${electionInfo.id}`}>
                      <h3 className="font-bold text-gray-900 uppercase hover:text-red-600 transition-colors" style={{ fontSize: "0.8rem" }}>
                        Thông Tin Bầu Cử
                      </h3>
                    </Link>
                  </div>
                  <div className="space-y-2 lg:space-y-4">
                    <Link className="block group" href={`/tin-tuc/${electionInfo.featured.id}`}>
                      <div className="space-y-2">
                        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                          <img
                            src={electionInfo.featured.image}
                            alt={electionInfo.featured.title}
                            className="w-full h-full group-hover:scale-105 transition-transform duration-200"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="font-bold text-gray-900 leading-relaxed group-hover:text-red-600 transition-colors line-clamp-2" style={{ fontSize: "0.8rem" }}>
                          {electionInfo.featured.title}
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
                    {citizenProcedures.map((proc, index) => (
                      <a
                        key={index}
                        href={proc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-150 p-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gray-100 flex items-center justify-center">
                          <proc.icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <span className="ml-3 text-gray-900 text-sm group-hover:text-gray-700">{proc.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bài hướng dẫn */}
              <div className="bg-white border border-gray-300">
                <div className="bg-white border-b-2 border-red-600 px-6 py-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900 uppercase">Bài hướng dẫn</h3>
                  <Link className="text-sm text-gray-400 hover:text-gray-600 transition-colors" href="/procedures">
                    Xem tất cả
                  </Link>
                </div>
                <div className="p-2 md:p-6 overflow-y-auto" style={{ maxHeight: "600px" }}>
                  <ul className="space-y-3">
                    {guideProcedures.map((proc) => (
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
