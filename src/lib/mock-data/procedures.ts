import type { Procedure, ProcedureDetail } from '@/types/api';

export const proceduresData: Procedure[] = [
  {
    id: "694e2b856808578c44aa1eb2",
    code: "TTHC-001",
    title: "Đăng ký thường trú",
    category: "Cư trú",
    processingTime: "5 ngày làm việc",
    fee: "Miễn phí",
    level: 4,
    status: "active",
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: "694e2a666808578c44aa1ead",
    code: "TTHC-002",
    title: "Thủ tục đăng ký khai sinh",
    category: "Hộ tịch",
    processingTime: "1 ngày làm việc",
    fee: "Miễn phí",
    level: 4,
    status: "active",
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: "694e2c126808578c44aa1eb0",
    code: "TTHC-003",
    title: "Thủ tục đăng ký kết hôn",
    category: "Hộ tịch",
    processingTime: "3 ngày làm việc",
    fee: "Miễn phí",
    level: 4,
    status: "active",
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: "694e2c456808578c44aa1eb1",
    code: "TTHC-004",
    title: "Thủ tục cấp giấy xác nhận tình trạng hôn nhân",
    category: "Hộ tịch",
    processingTime: "3 ngày làm việc",
    fee: "10.000đ",
    level: 4,
    status: "active",
    createdAt: "2025-01-01T00:00:00Z"
  },
];

export const procedureDetailData: Record<string, ProcedureDetail> = {
  "694e2b856808578c44aa1eb2": {
    id: "694e2b856808578c44aa1eb2",
    code: "TTHC-001",
    title: "Đăng ký thường trú",
    category: "Cư trú",
    processingTime: "5 ngày làm việc",
    fee: "Miễn phí",
    level: 4,
    status: "active",
    legalBasis: [
      "Luật Cư trú 2020",
      "Nghị định 62/2021/NĐ-CP"
    ],
    requiredDocuments: [
      {
        name: "Phiếu báo thay đổi hộ khẩu, nhân khẩu",
        template: "https://storage.4ship.vn/public/file/phieu-bao-thay-doi-ho-khau.docx",
        required: true
      },
      {
        name: "Giấy tờ chứng minh chỗ ở hợp pháp",
        template: null,
        required: true
      },
      {
        name: "Căn cước công dân hoặc Chứng minh nhân dân",
        template: null,
        required: true
      }
    ],
    process: [
      {
        step: 1,
        title: "Tiếp nhận hồ sơ",
        description: "Công dân nộp hồ sơ tại bộ phận một cửa UBND phường",
        duration: "1 ngày"
      },
      {
        step: 2,
        title: "Thẩm định hồ sơ",
        description: "Cán bộ thẩm định tính hợp lệ của hồ sơ",
        duration: "3 ngày"
      },
      {
        step: 3,
        title: "Trả kết quả",
        description: "Trả kết quả đăng ký thường trú cho công dân",
        duration: "1 ngày"
      }
    ],
    submissionMethods: [
      {
        type: "online",
        url: "https://dichvucong.gov.vn/p/home/dvc-tthc-chi-tiet.html?ma_thu_tuc=1.000893",
        description: "Nộp trực tuyến qua Cổng dịch vụ công quốc gia"
      },
      {
        type: "offline",
        address: "Bộ phận một cửa UBND phường Móng Cái 3, số 533 đường Đoan Tĩnh",
        description: "Nộp trực tiếp tại bộ phận một cửa"
      }
    ],
    contact: {
      department: "Bộ phận Tư pháp - Hộ tịch",
      phone: "0203.3881892",
      email: "tuphat.pmc3@quangninh.gov.vn"
    },
    relatedProcedures: [
      {
        id: "694e2a666808578c44aa1ead",
        title: "Thủ tục đăng ký khai sinh"
      }
    ],
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-06-15T00:00:00Z"
  },
  "694e2a666808578c44aa1ead": {
    id: "694e2a666808578c44aa1ead",
    code: "TTHC-002",
    title: "Thủ tục đăng ký khai sinh",
    category: "Hộ tịch",
    processingTime: "1 ngày làm việc",
    fee: "Miễn phí",
    level: 4,
    status: "active",
    legalBasis: [
      "Luật Hộ tịch 2014",
      "Nghị định 123/2015/NĐ-CP"
    ],
    requiredDocuments: [
      {
        name: "Tờ khai đăng ký khai sinh",
        template: "https://storage.4ship.vn/public/file/to-khai-dang-ky-khai-sinh.docx",
        required: true
      },
      {
        name: "Giấy chứng sinh hoặc giấy tờ thay thế",
        template: null,
        required: true
      },
      {
        name: "Căn cước công dân của cha/mẹ",
        template: null,
        required: true
      }
    ],
    process: [
      {
        step: 1,
        title: "Tiếp nhận hồ sơ",
        description: "Công dân nộp hồ sơ tại bộ phận một cửa UBND phường",
        duration: "Ngay khi nộp"
      },
      {
        step: 2,
        title: "Xử lý hồ sơ",
        description: "Cán bộ hộ tịch kiểm tra và xử lý hồ sơ",
        duration: "Trong ngày"
      },
      {
        step: 3,
        title: "Trả kết quả",
        description: "Cấp Giấy khai sinh cho công dân",
        duration: "Trong ngày"
      }
    ],
    submissionMethods: [
      {
        type: "online",
        url: "https://dichvucong.gov.vn/p/home/dvc-tthc-chi-tiet.html?ma_thu_tuc=1.004746",
        description: "Nộp trực tuyến qua Cổng dịch vụ công quốc gia"
      },
      {
        type: "offline",
        address: "Bộ phận một cửa UBND phường Móng Cái 3, số 533 đường Đoan Tĩnh",
        description: "Nộp trực tiếp tại bộ phận một cửa"
      }
    ],
    contact: {
      department: "Bộ phận Tư pháp - Hộ tịch",
      phone: "0203.3881892",
      email: "tuphat.pmc3@quangninh.gov.vn"
    },
    relatedProcedures: [
      {
        id: "694e2b856808578c44aa1eb2",
        title: "Đăng ký thường trú"
      }
    ],
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-06-15T00:00:00Z"
  }
};
