import type {
  FeaturedNews,
  HighlightColumn,
  NewsCategory,
  PartyBuildingColumn,
  StaffWorkData,
  PartyActivityData,
  NewsItem,
} from '@/types/api';

export const featuredNewsData: FeaturedNews = {
  main: {
    id: "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
    title: "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
    description: "Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân, Ủy ban bầu cử phường Móng Cái 3 trân trọng thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường Móng Cái 3, nhiệm kỳ 2026 – 2031.",
    image: "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
    createdAt: "2025-12-29T06:34:00Z"
  },
  sidebar: [
    { id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1", title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.", image: "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg" },
    { id: "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad", title: "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái", image: "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg" },
    { id: "638f523b-2a1c-4df3-91cc-038356cef0ff", title: "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030", image: "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg" },
    { id: "94692871-ddb2-454f-9c83-c55664095ea3", title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335", image: "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg" },
    { id: "2332f615-2f3f-47ef-8350-9b2bb6bda53f", title: "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025", image: "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg" },
    { id: "bdcfbd79-d020-490a-9999-8b4b765aa868", title: "Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng", image: "https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg" },
    { id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0", title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên", image: "https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg" },
  ]
};

export const highlightsData: HighlightColumn[] = [
  {
    column: 1,
    items: [
      { id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1", title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.", date: "khoảng 1 tháng trước", featured: true },
      { id: "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378", title: "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương", date: "khoảng 1 tháng trước" },
      { id: "57a86c30-2851-4f47-a8d1-5495c99db8b3", title: "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ", date: "khoảng 1 tháng trước" },
    ]
  },
  {
    column: 2,
    items: [
      { id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0", title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên", date: "khoảng 1 tháng trước", featured: true },
      { id: "5d8ed1c2-5d6a-4361-8517-daaf50003552", title: "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm", date: "khoảng 1 tháng trước" },
      { id: "c72903a5-3432-494e-90e7-af0f719adf49", title: "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt", date: "khoảng 1 tháng trước" },
    ]
  },
  {
    column: 3,
    items: [
      { id: "d24484ab-1dda-42ab-8ffd-19e81d092d2c", title: "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị", date: "khoảng 1 tháng trước", featured: true },
      { id: "37084824-36a0-4186-8d2a-c37dca0f6cff", title: "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa", date: "khoảng 1 tháng trước" },
      { id: "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d", title: "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026", date: "khoảng 1 tháng trước" },
    ]
  }
];

export const newsCategoriesData: NewsCategory[] = [
  {
    id: "3329deeb-e963-4e95-a1bd-85b9d5ab304a",
    name: "Tin tức tổng hợp",
    slug: "tin-tuc-tong-hop",
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
    name: "Kinh tế - Chính trị",
    slug: "kinh-te-chinh-tri",
    featured: { id: "75993dca-4fd6-453d-a284-3746dad761b7", title: "Đại hội Hội Doanh nghiệp phường Móng Cái 3 lần thứ nhất nhiệm kỳ 2025-2030", image: "https://storage.4ship.vn/public/image/59463595-39a4-42aa-b300-8fc91f162099.jpeg" },
    items: [
      { id: "751266d8-f6ba-4e57-867e-7340b3c58127", title: "Đại hội Đại biểu Đảng bộ phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025-2030" },
    ],
  },
  {
    id: "c22e47a7-1735-44a7-a903-18de44929ec1",
    name: "Văn hóa - Xã hội",
    slug: "van-hoa-xa-hoi",
    featured: { id: "5d8ed1c2-5d6a-4361-8517-daaf50003552", title: "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm", image: "https://storage.4ship.vn/public/image/c9a6aa5f-dff9-44a3-8f80-f1a098ebc6a9.jpeg" },
    items: [
      { id: "4f68fb5c-1808-468d-88d3-e26bf5e35515", title: "Đoàn phường và Hội LHTN phường Móng Cái 1, Móng Cái 2, Móng Cái 3 tổ chức Giải Pickleball thanh niên" },
      { id: "14d366aa-d069-4390-b5b9-677c10441190", title: "Phường Móng Cái 3: Viết nên trang sử mới trong kỷ nguyên vươn mình của dân tộc" },
      { id: "47751a01-326c-4d15-911e-685bc08c3745", title: "Quảng Ninh đẩy nhanh tiến độ xây dựng cửa khẩu thông minh" },
    ],
  },
];

export const threeCategoriesData: NewsCategory[] = [
  {
    id: "145636a4-5af0-41c2-8e86-66c43e199de3",
    name: "Gương người tốt việc tốt",
    slug: "guong-nguoi-tot-viec-tot",
    featured: { id: "2d4f1d5a-5e37-46c8-b377-0b194e446828", title: "Tấm gương Nhà giáo Nguyễn Thị Vân và niềm vui bất ngờ ngày Bế giảng năm họ", image: "https://storage.4ship.vn/public/image/f434fbf5-ee9b-4d76-be0d-8cbc427b6f1e.jpg" },
    items: []
  },
  {
    id: "45f48d26-667a-4549-a909-2736413883bc",
    name: "Hoạt động lãnh đạo tỉnh",
    slug: "hoat-dong-lanh-dao-tinh",
    featured: { id: "bdcfbd79-d020-490a-9999-8b4b765aa868", title: "Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng", image: "https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg" },
    items: [
      { id: "37084824-36a0-4186-8d2a-c37dca0f6cff", title: "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa" }
    ]
  },
  {
    id: "58ec436a-3fcc-41ac-a97d-4d253423114b",
    name: "Công tác an sinh xã hội",
    slug: "cong-tac-an-sinh-xa-hoi",
    featured: { id: "8d5cceb1-3b7e-4e14-9879-4ddccd41c1e7", title: "Phát động và tiếp nhận kinh phí ủng hộ đồng bào miền Trung,Tây Nguyên khắc phục thiệt hại do bão lũ", image: "https://storage.4ship.vn/public/image/a7f52155-c03f-4cb0-b387-b0f0119f55bf.jpeg" },
    items: [
      { id: "afa74f2a-38be-4455-8d12-4ec33cdf8f5e", title: "Trường Tiểu học Hải Yên trao 50 triệu đồng ủng hộ đồng bào bị ảnh hưởng bởi bão lũ" }
    ]
  }
];

export const partyBuildingData: PartyBuildingColumn[] = [
  {
    column: 1,
    featured: {
      id: "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
      title: "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.",
      image: "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg",
      description: "Ngày 7/11, Đảng ủy phường Móng Cái 3 đã long trọng tổ chức Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở và công bố Quyết định về công tác cán bộ. Đồng chí Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3."
    },
    secondary: { id: "38dcb631-30eb-4f7f-b27f-c7832bad42f4", title: "Đại hội đại biểu Đoàn TNCS Hồ Chí Minh phường Móng Cái 3 lần thứ nhất, nhiệm kỳ 2025 - 2030", image: "https://storage.4ship.vn/public/image/652d72d7-1de1-478e-9bf0-ad39218a09d8.jpeg" }
  },
  {
    column: 2,
    featured: {
      id: "c0f757a5-ef03-4ae7-8e33-4c47074060f0",
      title: "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên",
      image: "https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg",
      description: "Nhân dịp kỷ niệm 80 năm Cách mạng tháng Tám thành công (19/8/1945-19/8/2025) và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/9/1945- 02/9/2025), Đảng bộ phường Móng Cái 3 vinh dự có 6 đồng chí đảng viên được trao tặng Huy hiệu Đảng."
    },
    secondary: { id: "ca1229ac-619c-4aa1-b28b-863bc1f86689", title: "Hội Nông dân phường Móng Cái 3: Kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam", image: "http://storage.4ship.vn/public/image/6a11047b-6c8c-4f90-bbe9-cf563843f70e.jpg" }
  },
  {
    column: 3,
    featured: {
      id: "f8af5c56-d044-475e-8972-98c78cabde57",
      title: "Hội nghị Ban Chấp hành Đảng bộ phường Móng Cái 3 lần thứ 3",
      image: "https://storage.4ship.vn/public/image/e472f627-617b-4cb7-9d93-5000c2e0a817.jpeg",
      description: "Sáng 3/10, Đảng ủy phường Móng Cái 3 tổ chức Hội nghị Ban Chấp hành Đảng bộ phường lần thứ 3 khóa I, nhiệm kỳ 2025-2030 để sơ kết công tác quý III/2025, triển khai nhiệm vụ trọng tâm công tác quý IV/2025."
    },
    secondary: null
  }
];

export const staffWorkData: StaffWorkData = {
  main: [
    { id: "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad", title: "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái", image: "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg", date: "28/12/2025" },
    { id: "638f523b-2a1c-4df3-91cc-038356cef0ff", title: "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030", image: "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg", date: "28/12/2025" },
    { id: "2332f615-2f3f-47ef-8350-9b2bb6bda53f", title: "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025", image: "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg", date: "28/12/2025" },
    { id: "d24484ab-1dda-42ab-8ffd-19e81d092d2c", title: "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị", image: "https://storage.4ship.vn/public/image/c62a3645-04ba-4d73-be3d-d5a5e68297dc.jpeg", date: "28/12/2025" }
  ],
  sidebar: [
    { id: "57a86c30-2851-4f47-a8d1-5495c99db8b3", title: "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ", date: "28/12/2025", time: "05:29" }
  ]
};

export const partyActivityData: PartyActivityData = {
  featured: {
    id: "c593c91a-bf69-486b-a1f7-9f331a333e82",
    title: "Đại hội đại biểu MTTQ phường Móng Cái 3 lần thứ I nhiệm kỳ 2025 - 2030",
    image: "https://storage.4ship.vn/public/image/6dc60fb7-486b-44d1-bbf3-67a92b3b382e.jpeg",
    description: "Ngày 19/9, MTTQ Việt Nam phường Móng Cái 3 long trọng tổ chức Đại hội đại biểu MTTQ Việt Nam lần thứ I, nhiệm kỳ 2025 - 2030.",
    date: "28/12/2025"
  },
  grid: [
    { id: "1e476b69-6db3-4dc3-98ea-b8c6414d3f1c", title: "Hội nghị giao ban với đội ngũ Bí thư chi bộ, Trưởng thôn/khu, Trưởng Ban Công tác mặt trận thôn/khu", image: "https://storage.4ship.vn/public/image/16d81876-9a89-4ef1-bd9f-8faa960210c7.jpeg", date: "28/12/2025" },
    { id: "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378", title: "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương", image: "https://storage.4ship.vn/public/image/7f2d7d37-09da-4d59-98fc-07af1da20027.jpeg", date: "28/12/2025" },
    { id: "54217809-25df-44c7-b029-11fdecb7cfc7", title: "Đảng ủy phường Móng Cái 3: Hội nghị báo cáo viên quý IV/2025", image: "https://storage.4ship.vn/public/image/68662ca1-da3d-4826-b4b3-3da8bbde2ca1.jpeg", date: "28/12/2025" }
  ]
};

export const electionInfoData = {
  id: "3480888c-c635-4bdc-b151-4fd8036d6e12",
  name: "Thông Tin Bầu Cử",
  slug: "thong-tin-bau-cu",
  featured: {
    id: "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
    title: "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
    image: "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg"
  }
};
