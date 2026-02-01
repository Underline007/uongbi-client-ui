import type { Announcement, AnnouncementDetail } from '@/types/api';

export const announcementsData: Announcement[] = [
  {
    id: "694e2c8f6808578c44aa1eb5",
    title: "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép\"",
    excerpt: "Thông báo về việc ra mắt mô hình Biên giới bình yên nhằm tăng cường công tác quản lý biên giới và đảm bảo an ninh trật tự trên địa bàn phường.",
    pinned: true,
    important: true,
    createdAt: "2025-12-26T06:34:00Z"
  },
  {
    id: "694e2d126808578c44aa1eb6",
    title: "Thông báo lịch tiếp công dân định kỳ tháng 01/2026",
    excerpt: "UBND phường Móng Cái 3 thông báo lịch tiếp công dân định kỳ tháng 01/2026.",
    pinned: true,
    important: false,
    createdAt: "2025-12-25T08:00:00Z"
  },
  {
    id: "694e2d456808578c44aa1eb7",
    title: "Thông báo về việc tổ chức Đại hội Chi bộ các khu dân cư",
    excerpt: "Đảng ủy phường thông báo kế hoạch tổ chức Đại hội Chi bộ các khu dân cư nhiệm kỳ 2025-2030.",
    pinned: false,
    important: true,
    createdAt: "2025-12-24T10:00:00Z"
  },
];

export const announcementDetailData: Record<string, AnnouncementDetail> = {
  "694e2c8f6808578c44aa1eb5": {
    id: "694e2c8f6808578c44aa1eb5",
    title: "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép\"",
    content: `<p>Ngày 26/12/2025, UBND phường Móng Cái 3 phối hợp với Đồn Biên phòng Cửa khẩu Móng Cái tổ chức Lễ ra mắt mô hình "Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép".</p>
<p>Mô hình được triển khai nhằm tăng cường công tác quản lý biên giới, đảm bảo an ninh trật tự trên địa bàn phường, đồng thời nâng cao ý thức chấp hành pháp luật của người dân trong công tác phòng chống xuất nhập cảnh trái phép.</p>
<h3>Mục tiêu của mô hình:</h3>
<ul>
<li>Xây dựng đường biên giới hòa bình, hữu nghị</li>
<li>Nâng cao ý thức cảnh giác của người dân</li>
<li>Phòng chống tội phạm xuất nhập cảnh trái phép</li>
<li>Tăng cường phối hợp giữa các lực lượng chức năng</li>
</ul>`,
    excerpt: "Thông báo về việc ra mắt mô hình Biên giới bình yên nhằm tăng cường công tác quản lý biên giới và đảm bảo an ninh trật tự trên địa bàn phường.",
    pinned: true,
    important: true,
    attachments: [
      {
        id: "att-1",
        name: "Ke_hoach_trien_khai_mo_hinh.pdf",
        url: "https://storage.4ship.vn/public/file/ke-hoach-trien-khai.pdf",
        size: 512000,
        type: "application/pdf"
      }
    ],
    createdAt: "2025-12-26T06:34:00Z",
    updatedAt: "2025-12-26T06:34:00Z"
  }
};
