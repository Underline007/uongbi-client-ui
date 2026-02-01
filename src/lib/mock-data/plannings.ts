import type { PlanningsData, PlanningItem } from '@/types/api';

export const planningsData: PlanningsData = {
  categories: [
    { id: "cat-1", name: "Các quy hoạch chiến lược", count: 5 },
    { id: "cat-2", name: "Quy hoạch đô thị", count: 3 },
    { id: "cat-3", name: "Quy hoạch sử dụng đất", count: 4 },
  ],
  items: [
    {
      id: "94692871-ddb2-454f-9c83-c55664095ea3",
      title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
      image: "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
      description: "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
      category: "Các quy hoạch chiến lược",
      date: "2025-12-28"
    },
    {
      id: "33429716-8635-4702-b27c-429087c95f69",
      title: "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái 3",
      image: "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
      description: "Quyết định phê duyệt quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên.",
      category: "Quy hoạch đô thị",
      date: "2025-12-28"
    }
  ]
};

export const planningFeaturedData: PlanningItem = {
  id: "94692871-ddb2-454f-9c83-c55664095ea3",
  title: "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
  image: "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
  description: "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
  category: "Các quy hoạch chiến lược",
  date: "2025-12-28"
};

export const planningSidebarData: PlanningItem = {
  id: "33429716-8635-4702-b27c-429087c95f69",
  title: "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái 3",
  image: "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
  description: "Quyết định phê duyệt quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên.",
  category: "Quy hoạch đô thị",
  date: "2025-12-28"
};
