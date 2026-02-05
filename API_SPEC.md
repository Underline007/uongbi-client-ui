# Uongbi API Specification

## Common Response Format

### Success Response
```json
{
  "success": true,
  "data": "<T>",
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error message"
  }
}
```

---

## ARTICLES

### 1. List Articles
**GET** `/api/articles`

#### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | **Yes** | `news` \| `procedures` \| `announcements` \| `plannings` \| `documents` |
| `page` | number | No | Default: 1 |
| `limit` | number | No | Default: 10 |

**Additional parameters by category:**

##### category=news
| Parameter | Type | Description |
|-----------|------|-------------|
| `subcategory` | string | Slug danh muc (tin-tuc-tong-hop, kinh-te-chinh-tri, van-hoa-xa-hoi) |
| `search` | string | Tim kiem theo title |
| `featured` | boolean | Loc tin noi bat |
| `sortBy` | string | `createdAt` \| `views` \| `title` |
| `order` | string | `asc` \| `desc` |

##### category=procedures
| Parameter | Type | Description |
|-----------|------|-------------|
| `subcategory` | string | Danh muc TTHC (Cu tru, Ho tich,...) |
| `search` | string | Tim kiem theo title |

##### category=announcements
| Parameter | Type | Description |
|-----------|------|-------------|
| `pinned` | boolean | Loc thong bao ghim |
| `important` | boolean | Loc thong bao quan trong |
| `search` | string | Tim kiem theo title |

##### category=plannings
| Parameter | Type | Description |
|-----------|------|-------------|
| `subcategory` | string | Danh muc quy hoach |
| `search` | string | Tim kiem theo title |

##### category=documents
| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | string | Loai van ban |
| `year` | number | Nam ban hanh |
| `search` | string | Tim kiem theo title |

#### Response Body

##### category=news
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "slug": "string | null",
      "description": "string | null",
      "image": "string",
      "category": {
        "id": "string",
        "name": "string",
        "slug": "string"
      },
      "author": "string | null",
      "views": "number | null",
      "featured": "boolean | null",
      "date": "string | null",
      "createdAt": "string | null",
      "updatedAt": "string | null"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
      "slug": "thong-bao-danh-sach-don-vi-bau-cu",
      "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân...",
      "image": "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
      "category": {
        "id": "3329deeb-e963-4e95-a1bd-85b9d5ab304a",
        "name": "Tin tức tổng hợp",
        "slug": "tin-tuc-tong-hop"
      },
      "author": "Admin",
      "views": 1250,
      "featured": true,
      "date": "29/12/2025",
      "createdAt": "2025-12-29T06:34:00Z",
      "updatedAt": "2025-12-29T06:34:00Z"
    },
    {
      "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
      "title": "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở",
      "slug": "le-trao-tang-huy-hieu-dang",
      "description": "Ngày 7/11, Đảng ủy phường Móng Cái 3 đã long trọng tổ chức Lễ trao tặng Huy hiệu Đảng...",
      "image": "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg",
      "category": {
        "id": "a8f02942-d0c1-4d79-8e2e-f59387762c8f",
        "name": "Kinh tế - Chính trị",
        "slug": "kinh-te-chinh-tri"
      },
      "author": "Admin",
      "views": 856,
      "featured": false,
      "date": "07/11/2025",
      "createdAt": "2025-11-07T08:00:00Z",
      "updatedAt": "2025-11-07T08:00:00Z"
    }
  ],
  "meta": {
    "total": 45,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

##### category=procedures
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "code": "string",
      "title": "string",
      "category": "string",
      "processingTime": "string",
      "fee": "string",
      "level": "number (1-4)",
      "status": "active | inactive",
      "createdAt": "string (ISO 8601)"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2b856808578c44aa1eb2",
      "code": "TTHC-001",
      "title": "Đăng ký thường trú",
      "category": "Cư trú",
      "processingTime": "5 ngày làm việc",
      "fee": "Miễn phí",
      "level": 4,
      "status": "active",
      "createdAt": "2025-01-01T00:00:00Z"
    },
    {
      "id": "694e2a666808578c44aa1ead",
      "code": "TTHC-002",
      "title": "Thủ tục đăng ký khai sinh",
      "category": "Hộ tịch",
      "processingTime": "1 ngày làm việc",
      "fee": "Miễn phí",
      "level": 4,
      "status": "active",
      "createdAt": "2025-01-01T00:00:00Z"
    },
    {
      "id": "694e2c126808578c44aa1eb0",
      "code": "TTHC-003",
      "title": "Thủ tục đăng ký kết hôn",
      "category": "Hộ tịch",
      "processingTime": "3 ngày làm việc",
      "fee": "Miễn phí",
      "level": 4,
      "status": "active",
      "createdAt": "2025-01-01T00:00:00Z"
    },
    {
      "id": "694e2c456808578c44aa1eb1",
      "code": "TTHC-004",
      "title": "Thủ tục cấp giấy xác nhận tình trạng hôn nhân",
      "category": "Hộ tịch",
      "processingTime": "3 ngày làm việc",
      "fee": "10.000đ",
      "level": 4,
      "status": "active",
      "createdAt": "2025-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "total": 4,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

##### category=announcements
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string | null",
      "pinned": "boolean",
      "important": "boolean",
      "createdAt": "string (ISO 8601)"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép\"",
      "excerpt": "Thông báo về việc ra mắt mô hình Biên giới bình yên nhằm tăng cường công tác quản lý biên giới và đảm bảo an ninh trật tự trên địa bàn phường.",
      "pinned": true,
      "important": true,
      "createdAt": "2025-12-26T06:34:00Z"
    },
    {
      "id": "694e2d126808578c44aa1eb6",
      "title": "Thông báo lịch tiếp công dân định kỳ tháng 01/2026",
      "excerpt": "UBND phường Móng Cái 3 thông báo lịch tiếp công dân định kỳ tháng 01/2026.",
      "pinned": true,
      "important": false,
      "createdAt": "2025-12-25T08:00:00Z"
    },
    {
      "id": "694e2d456808578c44aa1eb7",
      "title": "Thông báo về việc tổ chức Đại hội Chi bộ các khu dân cư",
      "excerpt": "Đảng ủy phường thông báo kế hoạch tổ chức Đại hội Chi bộ các khu dân cư nhiệm kỳ 2025-2030.",
      "pinned": false,
      "important": true,
      "createdAt": "2025-12-24T10:00:00Z"
    }
  ],
  "meta": {
    "total": 3,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

##### category=plannings
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "string",
        "name": "string",
        "count": "number"
      }
    ],
    "items": [
      {
        "id": "string",
        "title": "string",
        "image": "string",
        "description": "string",
        "category": "string",
        "date": "string (YYYY-MM-DD)"
      }
    ]
  },
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "categories": [
      { "id": "cat-1", "name": "Các quy hoạch chiến lược", "count": 5 },
      { "id": "cat-2", "name": "Quy hoạch đô thị", "count": 3 },
      { "id": "cat-3", "name": "Quy hoạch sử dụng đất", "count": 4 }
    ],
    "items": [
      {
        "id": "94692871-ddb2-454f-9c83-c55664095ea3",
        "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
        "image": "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
        "description": "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
        "category": "Các quy hoạch chiến lược",
        "date": "2025-12-28"
      },
      {
        "id": "33429716-8635-4702-b27c-429087c95f69",
        "title": "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái 3",
        "image": "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
        "description": "Quyết định phê duyệt quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên.",
        "category": "Quy hoạch đô thị",
        "date": "2025-12-28"
      }
    ]
  },
  "meta": {
    "total": 2,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

##### category=documents
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "documentNumber": "string",
      "type": "string",
      "issuedDate": "string (YYYY-MM-DD)",
      "effectiveDate": "string (YYYY-MM-DD) | null",
      "issuer": "string",
      "attachments": [
        {
          "id": "string",
          "name": "string",
          "url": "string",
          "size": "number (bytes)",
          "type": "string (MIME type)"
        }
      ],
      "createdAt": "string (ISO 8601)"
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-001",
      "title": "Quyết định về việc công bố công khai quyết toán ngân sách năm 2024",
      "documentNumber": "15/QĐ-UBND",
      "type": "Quyết định",
      "issuedDate": "2025-01-15",
      "effectiveDate": "2025-01-15",
      "issuer": "UBND phường Móng Cái 3",
      "attachments": [
        {
          "id": "att-001",
          "name": "QD_15_UBND_2025.pdf",
          "url": "https://storage.4ship.vn/public/file/qd-15-ubnd-2025.pdf",
          "size": 524288,
          "type": "application/pdf"
        }
      ],
      "createdAt": "2025-01-15T08:00:00Z"
    },
    {
      "id": "doc-002",
      "title": "Kế hoạch triển khai công tác phổ biến, giáo dục pháp luật năm 2025",
      "documentNumber": "08/KH-UBND",
      "type": "Kế hoạch",
      "issuedDate": "2025-01-10",
      "effectiveDate": null,
      "issuer": "UBND phường Móng Cái 3",
      "attachments": [
        {
          "id": "att-002",
          "name": "KH_08_UBND_2025.pdf",
          "url": "https://storage.4ship.vn/public/file/kh-08-ubnd-2025.pdf",
          "size": 256000,
          "type": "application/pdf"
        }
      ],
      "createdAt": "2025-01-10T09:30:00Z"
    }
  ],
  "meta": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "totalPages": 3
  }
}
```

---

### 2. Article Detail
**GET** `/api/articles/{id}`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | **Yes** | Article ID (path parameter) |

#### Response Body

##### NewsDetail
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "slug": "string | null",
    "description": "string | null",
    "image": "string",
    "content": "string (HTML)",
    "category": {
      "id": "string",
      "name": "string",
      "slug": "string"
    },
    "author": "string | null",
    "views": "number | null",
    "featured": "boolean | null",
    "date": "string | null",
    "createdAt": "string | null",
    "updatedAt": "string | null",
    "images": ["string"],
    "tags": ["string"],
    "attachments": [
      {
        "id": "string",
        "name": "string",
        "url": "string",
        "size": "number",
        "type": "string"
      }
    ],
    "relatedNews": [
      {
        "id": "string",
        "title": "string",
        "image": "string"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
    "title": "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
    "slug": "thong-bao-danh-sach-don-vi-bau-cu",
    "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân...",
    "image": "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
    "content": "<p>Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân, Ủy ban bầu cử phường Móng Cái 3 trân trọng thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường Móng Cái 3, nhiệm kỳ 2026 – 2031.</p><h3>Danh sách đơn vị bầu cử:</h3><ul><li>Đơn vị bầu cử số 1: Khu Hải Yên 1</li><li>Đơn vị bầu cử số 2: Khu Hải Yên 2</li></ul>",
    "category": {
      "id": "3329deeb-e963-4e95-a1bd-85b9d5ab304a",
      "name": "Tin tức tổng hợp",
      "slug": "tin-tuc-tong-hop"
    },
    "author": "Admin",
    "views": 1250,
    "featured": true,
    "date": "29/12/2025",
    "createdAt": "2025-12-29T06:34:00Z",
    "updatedAt": "2025-12-29T06:34:00Z",
    "images": [
      "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
      "https://storage.4ship.vn/public/image/image-2.jpg"
    ],
    "tags": ["bầu cử", "HĐND", "nhiệm kỳ 2026-2031"],
    "attachments": [
      {
        "id": "att-1",
        "name": "Danh_sach_don_vi_bau_cu.pdf",
        "url": "https://storage.4ship.vn/public/file/danh-sach-don-vi-bau-cu.pdf",
        "size": 256000,
        "type": "application/pdf"
      }
    ],
    "relatedNews": [
      {
        "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
        "title": "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở",
        "image": "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg"
      },
      {
        "id": "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad",
        "title": "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái",
        "image": "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg"
      }
    ]
  }
}
```

##### ProcedureDetail
```json
{
  "success": true,
  "data": {
    "id": "string",
    "code": "string",
    "title": "string",
    "category": "string",
    "processingTime": "string",
    "fee": "string",
    "level": "number (1-4)",
    "status": "active | inactive",
    "createdAt": "string (ISO 8601)",
    "updatedAt": "string (ISO 8601)",
    "legalBasis": ["string"],
    "requiredDocuments": [
      {
        "name": "string",
        "template": "string (URL) | null",
        "required": "boolean"
      }
    ],
    "process": [
      {
        "step": "number",
        "title": "string",
        "description": "string",
        "duration": "string"
      }
    ],
    "submissionMethods": [
      {
        "type": "online | offline",
        "url": "string | undefined",
        "address": "string | undefined",
        "description": "string"
      }
    ],
    "contact": {
      "department": "string",
      "phone": "string",
      "email": "string"
    },
    "relatedProcedures": [
      {
        "id": "string",
        "title": "string"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "694e2a666808578c44aa1ead",
    "code": "TTHC-002",
    "title": "Thủ tục đăng ký khai sinh",
    "category": "Hộ tịch",
    "processingTime": "1 ngày làm việc",
    "fee": "Miễn phí",
    "level": 4,
    "status": "active",
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-06-15T00:00:00Z",
    "legalBasis": [
      "Luật Hộ tịch 2014",
      "Nghị định 123/2015/NĐ-CP"
    ],
    "requiredDocuments": [
      {
        "name": "Tờ khai đăng ký khai sinh",
        "template": "https://storage.4ship.vn/public/file/to-khai-dang-ky-khai-sinh.docx",
        "required": true
      },
      {
        "name": "Giấy chứng sinh hoặc giấy tờ thay thế",
        "template": null,
        "required": true
      },
      {
        "name": "Căn cước công dân của cha/mẹ",
        "template": null,
        "required": true
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Tiếp nhận hồ sơ",
        "description": "Công dân nộp hồ sơ tại bộ phận một cửa UBND phường",
        "duration": "Ngay khi nộp"
      },
      {
        "step": 2,
        "title": "Xử lý hồ sơ",
        "description": "Cán bộ hộ tịch kiểm tra và xử lý hồ sơ",
        "duration": "Trong ngày"
      },
      {
        "step": 3,
        "title": "Trả kết quả",
        "description": "Cấp Giấy khai sinh cho công dân",
        "duration": "Trong ngày"
      }
    ],
    "submissionMethods": [
      {
        "type": "online",
        "url": "https://dichvucong.gov.vn/p/home/dvc-tthc-chi-tiet.html?ma_thu_tuc=1.004746",
        "description": "Nộp trực tuyến qua Cổng dịch vụ công quốc gia"
      },
      {
        "type": "offline",
        "address": "Bộ phận một cửa UBND phường Móng Cái 3, số 533 đường Đoan Tĩnh",
        "description": "Nộp trực tiếp tại bộ phận một cửa"
      }
    ],
    "contact": {
      "department": "Bộ phận Tư pháp - Hộ tịch",
      "phone": "0203.3881892",
      "email": "tuphat.pmc3@quangninh.gov.vn"
    },
    "relatedProcedures": [
      {
        "id": "694e2b856808578c44aa1eb2",
        "title": "Đăng ký thường trú"
      }
    ]
  }
}
```

##### AnnouncementDetail
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "excerpt": "string | null",
    "content": "string (HTML)",
    "pinned": "boolean",
    "important": "boolean",
    "createdAt": "string (ISO 8601)",
    "updatedAt": "string (ISO 8601)",
    "attachments": [
      {
        "id": "string",
        "name": "string",
        "url": "string",
        "size": "number",
        "type": "string"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "694e2c8f6808578c44aa1eb5",
    "title": "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép\"",
    "excerpt": "Thông báo về việc ra mắt mô hình Biên giới bình yên nhằm tăng cường công tác quản lý biên giới và đảm bảo an ninh trật tự trên địa bàn phường.",
    "content": "<p>Ngày 26/12/2025, UBND phường Móng Cái 3 phối hợp với Đồn Biên phòng Cửa khẩu Móng Cái tổ chức Lễ ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái phép\".</p><p>Mô hình được triển khai nhằm tăng cường công tác quản lý biên giới, đảm bảo an ninh trật tự trên địa bàn phường.</p><h3>Mục tiêu của mô hình:</h3><ul><li>Xây dựng đường biên giới hòa bình, hữu nghị</li><li>Nâng cao ý thức cảnh giác của người dân</li><li>Phòng chống tội phạm xuất nhập cảnh trái phép</li><li>Tăng cường phối hợp giữa các lực lượng chức năng</li></ul>",
    "pinned": true,
    "important": true,
    "createdAt": "2025-12-26T06:34:00Z",
    "updatedAt": "2025-12-26T06:34:00Z",
    "attachments": [
      {
        "id": "att-1",
        "name": "Ke_hoach_trien_khai_mo_hinh.pdf",
        "url": "https://storage.4ship.vn/public/file/ke-hoach-trien-khai.pdf",
        "size": 512000,
        "type": "application/pdf"
      }
    ]
  }
}
```

##### PlanningDetail
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "image": "string (URL)",
    "description": "string",
    "content": "string (HTML)",
    "category": "string",
    "date": "string (YYYY-MM-DD)",
    "createdAt": "string (ISO 8601)",
    "updatedAt": "string (ISO 8601)",
    "attachments": [
      {
        "id": "string",
        "name": "string",
        "url": "string",
        "size": "number",
        "type": "string"
      }
    ],
    "relatedPlannings": [
      {
        "id": "string",
        "title": "string",
        "image": "string"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "94692871-ddb2-454f-9c83-c55664095ea3",
    "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
    "image": "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
    "description": "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
    "content": "<h2>Tổng quan dự án</h2><p>Dự án sửa chữa đường tỉnh 335 là một trong những công trình trọng điểm của tỉnh Quảng Ninh trong giai đoạn 2025-2030.</p><h3>Phạm vi dự án</h3><ul><li>Chiều dài tuyến: 25km</li><li>Điểm đầu: Ngã ba Hải Yên</li><li>Điểm cuối: Cửa khẩu Móng Cái</li></ul><h3>Tiến độ thực hiện</h3><p>Dự án dự kiến hoàn thành vào quý IV/2026.</p><h3>Nguồn vốn</h3><p>Tổng mức đầu tư: 500 tỷ đồng từ ngân sách tỉnh.</p>",
    "category": "Các quy hoạch chiến lược",
    "date": "2025-12-28",
    "createdAt": "2025-12-28T08:00:00Z",
    "updatedAt": "2025-12-28T08:00:00Z",
    "attachments": [
      {
        "id": "att-plan-1",
        "name": "Ban_do_quy_hoach_duong_335.pdf",
        "url": "https://storage.4ship.vn/public/file/ban-do-quy-hoach-335.pdf",
        "size": 2048000,
        "type": "application/pdf"
      },
      {
        "id": "att-plan-2",
        "name": "Quyet_dinh_phe_duyet.pdf",
        "url": "https://storage.4ship.vn/public/file/qd-phe-duyet-335.pdf",
        "size": 512000,
        "type": "application/pdf"
      }
    ],
    "relatedPlannings": [
      {
        "id": "33429716-8635-4702-b27c-429087c95f69",
        "title": "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên",
        "image": "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png"
      }
    ]
  }
}
```

##### DocumentDetail
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "documentNumber": "string",
    "type": "string",
    "issuedDate": "string (YYYY-MM-DD)",
    "effectiveDate": "string (YYYY-MM-DD) | null",
    "expiryDate": "string (YYYY-MM-DD) | null",
    "issuer": "string",
    "signer": "string",
    "signerPosition": "string",
    "summary": "string | null",
    "content": "string (HTML) | null",
    "status": "string (active|expired|replaced)",
    "createdAt": "string (ISO 8601)",
    "updatedAt": "string (ISO 8601)",
    "attachments": [
      {
        "id": "string",
        "name": "string",
        "url": "string",
        "size": "number",
        "type": "string"
      }
    ],
    "relatedDocuments": [
      {
        "id": "string",
        "title": "string",
        "documentNumber": "string",
        "type": "string"
      }
    ],
    "replacedBy": {
      "id": "string",
      "title": "string",
      "documentNumber": "string"
    } | null
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "doc-001",
    "title": "Quyết định về việc công bố công khai quyết toán ngân sách năm 2024",
    "documentNumber": "15/QĐ-UBND",
    "type": "Quyết định",
    "issuedDate": "2025-01-15",
    "effectiveDate": "2025-01-15",
    "expiryDate": null,
    "issuer": "UBND phường Móng Cái 3",
    "signer": "Trần Văn Hùng",
    "signerPosition": "Chủ tịch UBND phường",
    "summary": "Quyết định công bố công khai số liệu quyết toán ngân sách phường năm 2024 theo quy định của Luật Ngân sách nhà nước.",
    "content": "<h2>QUYẾT ĐỊNH</h2><p><strong>Về việc công bố công khai quyết toán ngân sách năm 2024</strong></p><h3>CHỦ TỊCH ỦY BAN NHÂN DÂN PHƯỜNG MÓNG CÁI 3</h3><p>Căn cứ Luật Tổ chức chính quyền địa phương ngày 19/6/2015;</p><p>Căn cứ Luật Ngân sách nhà nước ngày 25/6/2015;</p><p>Căn cứ Thông tư số 343/2016/TT-BTC ngày 30/12/2016 của Bộ Tài chính;</p><h3>QUYẾT ĐỊNH:</h3><p><strong>Điều 1.</strong> Công bố công khai số liệu quyết toán ngân sách phường năm 2024 (có biểu chi tiết kèm theo).</p><p><strong>Điều 2.</strong> Quyết định này có hiệu lực kể từ ngày ký.</p><p><strong>Điều 3.</strong> Công chức Tài chính - Kế toán, các bộ phận có liên quan chịu trách nhiệm thi hành Quyết định này./.</p>",
    "status": "active",
    "createdAt": "2025-01-15T08:00:00Z",
    "updatedAt": "2025-01-15T08:00:00Z",
    "attachments": [
      {
        "id": "att-doc-1",
        "name": "QD_15_UBND_2025.pdf",
        "url": "https://storage.4ship.vn/public/file/qd-15-ubnd-2025.pdf",
        "size": 524288,
        "type": "application/pdf"
      },
      {
        "id": "att-doc-2",
        "name": "Bieu_quyet_toan_NS_2024.xlsx",
        "url": "https://storage.4ship.vn/public/file/bieu-quyet-toan-ns-2024.xlsx",
        "size": 128000,
        "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    ],
    "relatedDocuments": [
      {
        "id": "doc-002",
        "title": "Quyết định về việc công bố công khai dự toán ngân sách năm 2025",
        "documentNumber": "16/QĐ-UBND",
        "type": "Quyết định"
      },
      {
        "id": "doc-003",
        "title": "Báo cáo tình hình thực hiện ngân sách năm 2024",
        "documentNumber": "25/BC-UBND",
        "type": "Báo cáo"
      }
    ],
    "replacedBy": null
  }
}
```

---

### 3. Featured Articles
**GET** `/api/articles/featured`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | **Yes** | `news` \| `plannings` |
| `limit` | number | No | Default: 5 (for sidebar) |

#### Response Body

##### category=news
```json
{
  "success": true,
  "data": {
    "main": {
      "id": "string",
      "title": "string",
      "description": "string",
      "image": "string (URL)",
      "createdAt": "string (ISO 8601)"
    },
    "sidebar": [
      {
        "id": "string",
        "title": "string",
        "image": "string (URL)"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "main": {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
      "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân, Ủy ban bầu cử phường Móng Cái 3 trân trọng thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường Móng Cái 3, nhiệm kỳ 2026 – 2031.",
      "image": "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg",
      "createdAt": "2025-12-29T06:34:00Z"
    },
    "sidebar": [
      {
        "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
        "title": "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.",
        "image": "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg"
      },
      {
        "id": "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad",
        "title": "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái",
        "image": "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg"
      },
      {
        "id": "638f523b-2a1c-4df3-91cc-038356cef0ff",
        "title": "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030",
        "image": "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg"
      },
      {
        "id": "94692871-ddb2-454f-9c83-c55664095ea3",
        "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
        "image": "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg"
      },
      {
        "id": "2332f615-2f3f-47ef-8350-9b2bb6bda53f",
        "title": "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025",
        "image": "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg"
      }
    ]
  }
}
```

##### category=plannings
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "string",
      "title": "string",
      "image": "string (URL)",
      "description": "string",
      "category": "string",
      "date": "string (YYYY-MM-DD)"
    },
    "sidebar": {
      "id": "string",
      "title": "string",
      "image": "string (URL)",
      "description": "string",
      "category": "string",
      "date": "string (YYYY-MM-DD)"
    }
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "94692871-ddb2-454f-9c83-c55664095ea3",
      "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
      "image": "https://storage.4ship.vn/public/image/57577e22-6922-4281-97c0-9124e776617e.jpeg",
      "description": "Một trong những mục tiêu đột phá chiến lược nhằm phát triển khu kinh tế cửa khẩu quốc tế Móng Cái là hạ tầng giao thông.",
      "category": "Các quy hoạch chiến lược",
      "date": "2025-12-28"
    },
    "sidebar": {
      "id": "33429716-8635-4702-b27c-429087c95f69",
      "title": "QUYẾT ĐỊNH V/v phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên tại phường Móng Cái 3",
      "image": "https://storage.4ship.vn/public/image/f8671ce1-c16b-4a59-bc4d-d2c1cd606b2b.png",
      "description": "Quyết định phê duyệt quy hoạch chi tiết tỷ lệ 1/500 Cụm công nghiệp Hải Yên.",
      "category": "Quy hoạch đô thị",
      "date": "2025-12-28"
    }
  }
}
```

---

### 4. Highlights
**GET** `/api/articles/highlights`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | No | Default: `news` |

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "column": "number (1-3)",
      "items": [
        {
          "id": "string",
          "title": "string",
          "date": "string",
          "featured": "boolean | undefined"
        }
      ]
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "items": [
        {
          "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
          "title": "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.",
          "date": "khoảng 1 tháng trước",
          "featured": true
        },
        {
          "id": "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378",
          "title": "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương",
          "date": "khoảng 1 tháng trước"
        },
        {
          "id": "57a86c30-2851-4f47-a8d1-5495c99db8b3",
          "title": "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ",
          "date": "khoảng 1 tháng trước"
        }
      ]
    },
    {
      "column": 2,
      "items": [
        {
          "id": "c0f757a5-ef03-4ae7-8e33-4c47074060f0",
          "title": "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên",
          "date": "khoảng 1 tháng trước",
          "featured": true
        },
        {
          "id": "5d8ed1c2-5d6a-4361-8517-daaf50003552",
          "title": "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm",
          "date": "khoảng 1 tháng trước"
        },
        {
          "id": "c72903a5-3432-494e-90e7-af0f719adf49",
          "title": "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt",
          "date": "khoảng 1 tháng trước"
        }
      ]
    },
    {
      "column": 3,
      "items": [
        {
          "id": "d24484ab-1dda-42ab-8ffd-19e81d092d2c",
          "title": "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị",
          "date": "khoảng 1 tháng trước",
          "featured": true
        },
        {
          "id": "37084824-36a0-4186-8d2a-c37dca0f6cff",
          "title": "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa",
          "date": "khoảng 1 tháng trước"
        },
        {
          "id": "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d",
          "title": "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026",
          "date": "khoảng 1 tháng trước"
        }
      ]
    }
  ]
}
```

---

### 5. Categories List
**GET** `/api/articles/categories`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | **Yes** | `news` \| `procedures` \| `plannings` |
| `type` | string | No | `three-categories` (chi cho news) |

#### Response Body

##### category=news
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "slug": "string",
      "featured": {
        "id": "string",
        "title": "string",
        "image": "string (URL)"
      },
      "items": [
        {
          "id": "string",
          "title": "string"
        }
      ]
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "3329deeb-e963-4e95-a1bd-85b9d5ab304a",
      "name": "Tin tức tổng hợp",
      "slug": "tin-tuc-tong-hop",
      "featured": {
        "id": "c72903a5-3432-494e-90e7-af0f719adf49",
        "title": "Đại hội đại biểu Hội LHTN Việt Nam phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025 – 2029 thành công tốt",
        "image": "https://storage.4ship.vn/public/image/aaa41038-8a6b-4f6a-a43b-bffe7ef3a90e.jpeg"
      },
      "items": [
        { "id": "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d", "title": "Kỳ họp thứ 5, HĐND phường Móng Cái 3 khóa I, nhiệm kỳ 2021 - 2026" },
        { "id": "a5ffc20f-7456-49b5-8390-8f4cfdde0a80", "title": "Kỳ họp thứ Nhất HĐND phường Móng Cái 3, Khóa I, nhiệm kỳ 2021-2026" },
        { "id": "b1a37bec-6766-44b7-a46a-c5183ef73655", "title": "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên – xã, phường không xuất nhập cảnh trái" },
        { "id": "668ffa49-a3f2-4561-a3dc-94c9af0f3c40", "title": "Phường Móng Cái 3: Trung tâm phát triển công nghiệp và dịch vụ trọng điểm của tỉnh" }
      ]
    },
    {
      "id": "a8f02942-d0c1-4d79-8e2e-f59387762c8f",
      "name": "Kinh tế - Chính trị",
      "slug": "kinh-te-chinh-tri",
      "featured": {
        "id": "75993dca-4fd6-453d-a284-3746dad761b7",
        "title": "Đại hội Hội Doanh nghiệp phường Móng Cái 3 lần thứ nhất nhiệm kỳ 2025-2030",
        "image": "https://storage.4ship.vn/public/image/59463595-39a4-42aa-b300-8fc91f162099.jpeg"
      },
      "items": [
        { "id": "751266d8-f6ba-4e57-867e-7340b3c58127", "title": "Đại hội Đại biểu Đảng bộ phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025-2030" }
      ]
    },
    {
      "id": "c22e47a7-1735-44a7-a903-18de44929ec1",
      "name": "Văn hóa - Xã hội",
      "slug": "van-hoa-xa-hoi",
      "featured": {
        "id": "5d8ed1c2-5d6a-4361-8517-daaf50003552",
        "title": "Phường Móng Cái 3 kỷ niệm 80 năm Ngày truyền thống của lực lượng Công an nhân dân Việt Nam và 20 năm",
        "image": "https://storage.4ship.vn/public/image/c9a6aa5f-dff9-44a3-8f80-f1a098ebc6a9.jpeg"
      },
      "items": [
        { "id": "4f68fb5c-1808-468d-88d3-e26bf5e35515", "title": "Đoàn phường và Hội LHTN phường Móng Cái 1, Móng Cái 2, Móng Cái 3 tổ chức Giải Pickleball thanh niên" },
        { "id": "14d366aa-d069-4390-b5b9-677c10441190", "title": "Phường Móng Cái 3: Viết nên trang sử mới trong kỷ nguyên vươn mình của dân tộc" },
        { "id": "47751a01-326c-4d15-911e-685bc08c3745", "title": "Quảng Ninh đẩy nhanh tiến độ xây dựng cửa khẩu thông minh" }
      ]
    }
  ]
}
```

##### category=news (type=three-categories)
**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "145636a4-5af0-41c2-8e86-66c43e199de3",
      "name": "Gương người tốt việc tốt",
      "slug": "guong-nguoi-tot-viec-tot",
      "featured": {
        "id": "2d4f1d5a-5e37-46c8-b377-0b194e446828",
        "title": "Tấm gương Nhà giáo Nguyễn Thị Vân và niềm vui bất ngờ ngày Bế giảng năm họ",
        "image": "https://storage.4ship.vn/public/image/f434fbf5-ee9b-4d76-be0d-8cbc427b6f1e.jpg"
      },
      "items": []
    },
    {
      "id": "45f48d26-667a-4549-a909-2736413883bc",
      "name": "Hoạt động lãnh đạo tỉnh",
      "slug": "hoat-dong-lanh-dao-tinh",
      "featured": {
        "id": "bdcfbd79-d020-490a-9999-8b4b765aa868",
        "title": "Toàn văn Bài phát biểu chỉ đạo của đồng chí Chủ tịch UBND tỉnh Quảng Ninh tại Đại hội Đại biểu Đảng",
        "image": "https://storage.4ship.vn/public/image/7f664e31-4df0-468c-befa-0f5bfb50bfd2.jpeg"
      },
      "items": [
        { "id": "37084824-36a0-4186-8d2a-c37dca0f6cff", "title": "Đồng chí Bí thư Tỉnh ủy, Trưởng đoàn Đại biểu Quốc hội tỉnh Quảng Ninh kiểm tra tuyến biên giới, cửa" }
      ]
    },
    {
      "id": "58ec436a-3fcc-41ac-a97d-4d253423114b",
      "name": "Công tác an sinh xã hội",
      "slug": "cong-tac-an-sinh-xa-hoi",
      "featured": {
        "id": "8d5cceb1-3b7e-4e14-9879-4ddccd41c1e7",
        "title": "Phát động và tiếp nhận kinh phí ủng hộ đồng bào miền Trung,Tây Nguyên khắc phục thiệt hại do bão lũ",
        "image": "https://storage.4ship.vn/public/image/a7f52155-c03f-4cb0-b387-b0f0119f55bf.jpeg"
      },
      "items": [
        { "id": "afa74f2a-38be-4455-8d12-4ec33cdf8f5e", "title": "Trường Tiểu học Hải Yên trao 50 triệu đồng ủng hộ đồng bào bị ảnh hưởng bởi bão lũ" }
      ]
    }
  ]
}
```

##### category=procedures
```json
{
  "success": true,
  "data": ["string"]
}
```

**Example:**
```json
{
  "success": true,
  "data": ["Cư trú", "Hộ tịch", "Đất đai", "Xây dựng", "Lao động - Thương binh và Xã hội"]
}
```

##### category=plannings
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "count": "number"
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    { "id": "cat-1", "name": "Các quy hoạch chiến lược", "count": 5 },
    { "id": "cat-2", "name": "Quy hoạch đô thị", "count": 3 },
    { "id": "cat-3", "name": "Quy hoạch sử dụng đất", "count": 4 }
  ]
}
```

---

### 6. Party Building
**GET** `/api/articles/party-building`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "column": "number (1-3)",
      "featured": {
        "id": "string",
        "title": "string",
        "image": "string (URL)",
        "description": "string"
      },
      "secondary": {
        "id": "string",
        "title": "string",
        "image": "string (URL)"
      } | null
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "featured": {
        "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
        "title": "Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở.",
        "image": "https://storage.4ship.vn/public/image/8dd7729b-901d-42a3-b1bc-258aab8d0733.jpeg",
        "description": "Ngày 7/11, Đảng ủy phường Móng Cái 3 đã long trọng tổ chức Lễ trao tặng Huy hiệu Đảng, công bố Quyết định thành lập các chi, đảng bộ cơ sở và công bố Quyết định về công tác cán bộ. Đồng chí Nguyễn Phúc Vinh, Bí thư Đảng ủy phường Móng Cái 3."
      },
      "secondary": {
        "id": "38dcb631-30eb-4f7f-b27f-c7832bad42f4",
        "title": "Đại hội đại biểu Đoàn TNCS Hồ Chí Minh phường Móng Cái 3 lần thứ nhất, nhiệm kỳ 2025 - 2030",
        "image": "https://storage.4ship.vn/public/image/652d72d7-1de1-478e-9bf0-ad39218a09d8.jpeg"
      }
    },
    {
      "column": 2,
      "featured": {
        "id": "c0f757a5-ef03-4ae7-8e33-4c47074060f0",
        "title": "Đảng ủy phường Móng Cái 3 trao huy hiệu Đảng đợt 02/9 cho 6 đảng viên",
        "image": "https://storage.4ship.vn/public/image/87753d97-d1a2-45ac-80cb-b649912b0748.jpeg",
        "description": "Nhân dịp kỷ niệm 80 năm Cách mạng tháng Tám thành công (19/8/1945-19/8/2025) và Quốc khánh nước Cộng hòa xã hội chủ nghĩa Việt Nam (02/9/1945- 02/9/2025), Đảng bộ phường Móng Cái 3 vinh dự có 6 đồng chí đảng viên được trao tặng Huy hiệu Đảng."
      },
      "secondary": {
        "id": "ca1229ac-619c-4aa1-b28b-863bc1f86689",
        "title": "Hội Nông dân phường Móng Cái 3: Kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam",
        "image": "http://storage.4ship.vn/public/image/6a11047b-6c8c-4f90-bbe9-cf563843f70e.jpg"
      }
    },
    {
      "column": 3,
      "featured": {
        "id": "f8af5c56-d044-475e-8972-98c78cabde57",
        "title": "Hội nghị Ban Chấp hành Đảng bộ phường Móng Cái 3 lần thứ 3",
        "image": "https://storage.4ship.vn/public/image/e472f627-617b-4cb7-9d93-5000c2e0a817.jpeg",
        "description": "Sáng 3/10, Đảng ủy phường Móng Cái 3 tổ chức Hội nghị Ban Chấp hành Đảng bộ phường lần thứ 3 khóa I, nhiệm kỳ 2025-2030 để sơ kết công tác quý III/2025, triển khai nhiệm vụ trọng tâm công tác quý IV/2025."
      },
      "secondary": null
    }
  ]
}
```

---

### 7. Staff Work
**GET** `/api/articles/staff-work`

#### Response Body
```json
{
  "success": true,
  "data": {
    "main": [
      {
        "id": "string",
        "title": "string",
        "image": "string (URL)",
        "date": "string (DD/MM/YYYY)"
      }
    ],
    "sidebar": [
      {
        "id": "string",
        "title": "string",
        "date": "string (DD/MM/YYYY)",
        "time": "string (HH:mm)"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "main": [
      {
        "id": "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad",
        "title": "Đoàn công tác Văn phòng Thường trực Ban Chỉ đạo 389 Quốc gia khảo sát địa bàn thành phố Móng Cái",
        "image": "https://storage.4ship.vn/public/image/da4d69a2-6735-42a1-b4c9-455d54334413.jpg",
        "date": "28/12/2025"
      },
      {
        "id": "638f523b-2a1c-4df3-91cc-038356cef0ff",
        "title": "Đại hội Chi bộ Cơ quan Đảng phường Móng Cái 3 lần thứ I, nhiệm kỳ 2025–2030",
        "image": "https://storage.4ship.vn/public/image/93239d1d-ca4c-491d-a25e-4ce2cb9d6090.jpeg",
        "date": "28/12/2025"
      },
      {
        "id": "2332f615-2f3f-47ef-8350-9b2bb6bda53f",
        "title": "Phường Móng Cái 3 bồi dưỡng, tập huấn lý luận chính trị hè năm 2025",
        "image": "https://storage.4ship.vn/public/image/bf5cf486-5822-4f60-8b69-b75539cb5996.jpeg",
        "date": "28/12/2025"
      },
      {
        "id": "d24484ab-1dda-42ab-8ffd-19e81d092d2c",
        "title": "Phường Móng Cái 3 tổng kết công tác tổ chức, phục vụ Đại hội và quán triệt triển khai thực hiện nghị",
        "image": "https://storage.4ship.vn/public/image/c62a3645-04ba-4d73-be3d-d5a5e68297dc.jpeg",
        "date": "28/12/2025"
      }
    ],
    "sidebar": [
      {
        "id": "57a86c30-2851-4f47-a8d1-5495c99db8b3",
        "title": "Hội nghị công bố Quyết định về công nhận tiểu đội dân quân thường trực và Quyết định công tác cán bộ",
        "date": "28/12/2025",
        "time": "05:29"
      }
    ]
  }
}
```

---

### 8. Party Activity
**GET** `/api/articles/party-activity`

#### Response Body
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "string",
      "title": "string",
      "image": "string (URL)",
      "description": "string",
      "date": "string (DD/MM/YYYY)"
    },
    "grid": [
      {
        "id": "string",
        "title": "string",
        "image": "string (URL)",
        "date": "string (DD/MM/YYYY)"
      }
    ]
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "c593c91a-bf69-486b-a1f7-9f331a333e82",
      "title": "Đại hội đại biểu MTTQ phường Móng Cái 3 lần thứ I nhiệm kỳ 2025 - 2030",
      "image": "https://storage.4ship.vn/public/image/6dc60fb7-486b-44d1-bbf3-67a92b3b382e.jpeg",
      "description": "Ngày 19/9, MTTQ Việt Nam phường Móng Cái 3 long trọng tổ chức Đại hội đại biểu MTTQ Việt Nam lần thứ I, nhiệm kỳ 2025 - 2030.",
      "date": "28/12/2025"
    },
    "grid": [
      {
        "id": "1e476b69-6db3-4dc3-98ea-b8c6414d3f1c",
        "title": "Hội nghị giao ban với đội ngũ Bí thư chi bộ, Trưởng thôn/khu, Trưởng Ban Công tác mặt trận thôn/khu",
        "image": "https://storage.4ship.vn/public/image/16d81876-9a89-4ef1-bd9f-8faa960210c7.jpeg",
        "date": "28/12/2025"
      },
      {
        "id": "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378",
        "title": "Hội LHPN phường Móng Cái 3 gặp mặt kỷ niệm và công bố thành lập CLB nữ Doanh nghiệp- tiểu thương",
        "image": "https://storage.4ship.vn/public/image/7f2d7d37-09da-4d59-98fc-07af1da20027.jpeg",
        "date": "28/12/2025"
      },
      {
        "id": "54217809-25df-44c7-b029-11fdecb7cfc7",
        "title": "Đảng ủy phường Móng Cái 3: Hội nghị báo cáo viên quý IV/2025",
        "image": "https://storage.4ship.vn/public/image/68662ca1-da3d-4826-b4b3-3da8bbde2ca1.jpeg",
        "date": "28/12/2025"
      }
    ]
  }
}
```

---

### 9. Election Info
**GET** `/api/articles/election`

#### Response Body
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "slug": "string",
    "featured": {
      "id": "string",
      "title": "string",
      "image": "string (URL)"
    }
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "3480888c-c635-4bdc-b151-4fd8036d6e12",
    "name": "Thông Tin Bầu Cử",
    "slug": "thong-tin-bau-cu",
    "featured": {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử và số lượng đại biểu Hội đồng nhân dân phường Móng Cái 3",
      "image": "https://storage.4ship.vn/public/image/9ec81a3d-b673-468f-b24a-176b17cb5799.jpg"
    }
  }
}
```

---

### 10. Summary AI
**GET** `/api/articles/{id}/summary`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | **Yes** | Article ID (path parameter) |

#### Response Body
```json
{
  "success": true,
  "data": {
    "summary": "string",
    "keyPoints": ["string"],
    "generatedAt": "string (ISO 8601)"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "summary": "Ủy ban bầu cử phường Móng Cái 3 thông báo danh sách 06 đơn vị bầu cử và số lượng 20 đại biểu Hội đồng nhân dân phường nhiệm kỳ 2026-2031. Đây là bước chuẩn bị quan trọng cho cuộc bầu cử đại biểu HĐND các cấp.",
    "keyPoints": [
      "06 đơn vị bầu cử được thành lập",
      "20 đại biểu HĐND phường sẽ được bầu",
      "Nhiệm kỳ 2026-2031",
      "Thực hiện theo Luật Bầu cử đại biểu Quốc hội và HĐND"
    ],
    "generatedAt": "2025-12-29T10:00:00Z"
  }
}
```

---

## ORGANIZATION

### Members
**GET** `/api/organization/members`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "avatar": "string (URL) | null",
      "position": "string",
      "position2": "string | null",
      "phone": "string | null",
      "email": "string | null",
      "order": "number"
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "member-001",
      "name": "Nguyễn Phúc Vinh",
      "avatar": "https://storage.4ship.vn/public/image/avatar-001.jpg",
      "position": "Bí thư Đảng ủy phường",
      "position2": "Chủ tịch HĐND phường",
      "phone": "0203.3881891",
      "email": "vinhpn@quangninh.gov.vn",
      "order": 1
    },
    {
      "id": "member-002",
      "name": "Trần Văn Hùng",
      "avatar": "https://storage.4ship.vn/public/image/avatar-002.jpg",
      "position": "Phó Bí thư Đảng ủy",
      "position2": "Chủ tịch UBND phường",
      "phone": "0203.3881892",
      "email": "hungtv@quangninh.gov.vn",
      "order": 2
    },
    {
      "id": "member-003",
      "name": "Lê Thị Hương",
      "avatar": null,
      "position": "Phó Chủ tịch UBND phường",
      "position2": null,
      "phone": "0203.3881893",
      "email": "huonglt@quangninh.gov.vn",
      "order": 3
    }
  ]
}
```

---

## SERVICES

### Citizen Services
**GET** `/api/services/citizen`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "icon": "string",
      "label": "string",
      "href": "string (URL)",
      "order": "number"
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "svc-001",
      "icon": "FileText",
      "label": "Dịch vụ công trực tuyến",
      "href": "https://dichvucong.quangninh.gov.vn",
      "order": 1
    },
    {
      "id": "svc-002",
      "icon": "Search",
      "label": "Tra cứu hồ sơ",
      "href": "https://dichvucong.quangninh.gov.vn/tracuu",
      "order": 2
    },
    {
      "id": "svc-003",
      "icon": "MessageSquare",
      "label": "Phản ánh kiến nghị",
      "href": "https://pakn.quangninh.gov.vn",
      "order": 3
    },
    {
      "id": "svc-004",
      "icon": "Calendar",
      "label": "Đặt lịch hẹn",
      "href": "/dat-lich-hen",
      "order": 4
    }
  ]
}
```

---

## CONFIG

### Contact Info
**GET** `/api/config/contact`

#### Response Body
```json
{
  "success": true,
  "data": {
    "organizationName": "string",
    "fullName": "string",
    "address": "string",
    "phone": "string",
    "fax": "string | undefined",
    "email": "string",
    "hotline": "string",
    "website": "string (URL)",
    "mapUrl": "string (URL) | undefined",
    "coordinates": {
      "lat": "number",
      "lng": "number"
    },
    "socialMedia": {
      "facebook": "string (URL) | undefined",
      "zalo": "string (URL) | undefined"
    }
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "organizationName": "UBND phường Móng Cái 3",
    "fullName": "Ủy ban nhân dân phường Móng Cái 3",
    "address": "Số 533 đường Đoan Tĩnh, phường Móng Cái 3, thành phố Móng Cái, tỉnh Quảng Ninh",
    "phone": "0203.3881891",
    "fax": "0203.3881890",
    "email": "ubnd.pmc3@quangninh.gov.vn",
    "hotline": "1900.1234",
    "website": "https://mongcai3.quangninh.gov.vn",
    "mapUrl": "https://maps.google.com/maps?q=21.5234,107.9654",
    "coordinates": {
      "lat": 21.5234,
      "lng": 107.9654
    },
    "socialMedia": {
      "facebook": "https://facebook.com/ubndpmc3",
      "zalo": "https://zalo.me/ubndpmc3"
    }
  }
}
```

---

### Business Hours
**GET** `/api/config/business-hours`

#### Response Body
```json
{
  "success": true,
  "data": {
    "weekdays": {
      "morning": "string",
      "afternoon": "string"
    },
    "saturday": {
      "morning": "string | null",
      "afternoon": "string | null"
    },
    "sunday": "string | null",
    "holidays": "string"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "weekdays": {
      "morning": "07:00 - 11:30",
      "afternoon": "13:30 - 17:00"
    },
    "saturday": {
      "morning": "07:00 - 11:30",
      "afternoon": null
    },
    "sunday": null,
    "holidays": "Nghỉ theo quy định của Nhà nước"
  }
}
```

---

### Site Info
**GET** `/api/config/site-info`

#### Response Body
```json
{
  "success": true,
  "data": {
    "siteName": "string",
    "shortName": "string",
    "tagline": "string",
    "logo": "string (URL)",
    "favicon": "string (URL)",
    "headerBackground": "string (URL)",
    "footerBackground": "string (URL)",
    "coatOfArms": "string (URL)",
    "copyright": "string",
    "country": "string",
    "province": "string",
    "district": "string"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "siteName": "Cổng thông tin điện tử phường Móng Cái 3",
    "shortName": "Phường Móng Cái 3",
    "tagline": "Phục vụ nhân dân - Xây dựng quê hương",
    "logo": "https://storage.4ship.vn/public/image/logo-pmc3.png",
    "favicon": "https://storage.4ship.vn/public/image/favicon.ico",
    "headerBackground": "https://storage.4ship.vn/public/image/header-bg.jpg",
    "footerBackground": "https://storage.4ship.vn/public/image/footer-bg.jpg",
    "coatOfArms": "https://storage.4ship.vn/public/image/quoc-huy.png",
    "copyright": "Bản quyền thuộc UBND phường Móng Cái 3",
    "country": "Việt Nam",
    "province": "Quảng Ninh",
    "district": "Móng Cái"
  }
}
```

---

## FORMS

### Contact Subjects
**GET** `/api/forms/contact/subjects`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string | null"
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "subj-1",
      "name": "Hỏi về thủ tục hành chính",
      "description": "Các câu hỏi liên quan đến thủ tục hành chính tại phường"
    },
    {
      "id": "subj-2",
      "name": "Phản ánh, kiến nghị",
      "description": "Phản ánh tình hình, kiến nghị đề xuất"
    },
    {
      "id": "subj-3",
      "name": "Góp ý về cổng thông tin",
      "description": "Góp ý cải thiện cổng thông tin điện tử"
    },
    {
      "id": "subj-4",
      "name": "Khác",
      "description": null
    }
  ]
}
```

---

### Submit Contact Form
**POST** `/api/forms/contact`

#### Request Body
```json
{
  "fullName": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (required)",
  "address": "string (required)",
  "subjectId": "string (required)",
  "title": "string (required)",
  "content": "string (required)",
  "attachments": [
    {
      "name": "string",
      "url": "string (URL)"
    }
  ],
  "captchaToken": "string (required)"
}
```

**Example Request:**
```json
{
  "fullName": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "phone": "0912345678",
  "address": "Khu Hải Yên 1, phường Móng Cái 3",
  "subjectId": "subj-1",
  "title": "Hỏi về thủ tục đăng ký khai sinh",
  "content": "Tôi muốn hỏi về thủ tục đăng ký khai sinh cho con. Cần chuẩn bị những giấy tờ gì và thời gian xử lý là bao lâu?",
  "attachments": [
    {
      "name": "giay_to.pdf",
      "url": "https://storage.4ship.vn/public/file/xxx.pdf"
    }
  ],
  "captchaToken": "03AGdBq24..."
}
```

#### Response Body
```json
{
  "success": true,
  "data": {
    "id": "string",
    "ticketNumber": "string",
    "message": "string",
    "createdAt": "string (ISO 8601)"
  }
}
```

**Example Response:**
```json
{
  "success": true,
  "data": {
    "id": "contact-001",
    "ticketNumber": "PMC3-2025-00123",
    "message": "Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ phản hồi trong vòng 3 ngày làm việc.",
    "createdAt": "2025-12-29T10:30:00Z"
  }
}
```

---

## ANALYTICS

### Stats
**GET** `/api/analytics/stats`

#### Response Body
```json
{
  "success": true,
  "data": {
    "online": "number",
    "today": "number",
    "yesterday": "number",
    "thisWeek": "number",
    "thisMonth": "number",
    "total": "number",
    "lastUpdated": "string (ISO 8601)"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "online": 45,
    "today": 1250,
    "yesterday": 1180,
    "thisWeek": 8500,
    "thisMonth": 35000,
    "total": 1250000,
    "lastUpdated": "2025-12-29T10:30:00Z"
  }
}
```

---

## BANNERS

### Get All Banners
**GET** `/api/banners`

> API trả về tất cả banners được nhóm theo vị trí (position). FE sẽ filter theo `positionId` để render đúng vị trí.

#### Position IDs (FE & BE định nghĩa)
| Position ID | Vị trí | Kích thước | Ghi chú |
|-------------|--------|------------|---------|
| `top_banner` | Dưới navbar | Full-width | Carousel cho nhiều banner |
| `sidebar_top` | Sidebar trên | 300x250 | Stack hoặc carousel |
| `sidebar_middle` | Sidebar giữa | 300x250 | Giữa các widget |
| `sidebar_bottom` | Sidebar dưới | 300x600 | Sticky khi scroll |
| `in_content` | Giữa content | Full-width | Giữa các section tin tức |
| `pre_footer` | Trước footer | Full-width | Pre-footer banner |

#### Display Modes
| Mode | Description |
|------|-------------|
| `carousel` | Tự động chuyển slide theo interval |
| `random` | Hiển thị ngẫu nhiên 1 banner mỗi lần load |
| `stack` | Hiển thị tất cả banner xếp chồng |
| `single` | Chỉ hiển thị 1 banner (priority cao nhất) |

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "positionId": "string",
      "positionName": "string",
      "displayMode": "string (carousel|random|stack|single)",
      "interval": "number (ms) | null",
      "width": "string | null",
      "height": "string | null",
      "sticky": "boolean",
      "banners": [
        {
          "id": "string",
          "title": "string",
          "image": "string (URL)",
          "imageAlt": "string",
          "link": "string (URL) | null",
          "linkTarget": "string (_self|_blank)",
          "content": "string (HTML) | null",
          "priority": "number",
          "startDate": "string (YYYY-MM-DD) | null",
          "endDate": "string (YYYY-MM-DD) | null",
          "active": "boolean"
        }
      ]
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "positionId": "top_banner",
      "positionName": "Banner đầu trang",
      "displayMode": "carousel",
      "interval": 5000,
      "width": "100%",
      "height": "400px",
      "sticky": false,
      "banners": [
        {
          "id": "banner-001",
          "title": "Chào mừng năm mới 2026",
          "image": "https://storage.4ship.vn/public/image/banner-newyear.jpg",
          "imageAlt": "Banner chào mừng năm mới 2026",
          "link": "/tin-tuc/chao-mung-nam-moi-2026",
          "linkTarget": "_self",
          "content": null,
          "priority": 1,
          "startDate": "2025-12-25",
          "endDate": "2026-01-15",
          "active": true
        },
        {
          "id": "banner-002",
          "title": "Bầu cử đại biểu HĐND 2026",
          "image": "https://storage.4ship.vn/public/image/banner-baucu.jpg",
          "imageAlt": "Banner bầu cử đại biểu HĐND 2026",
          "link": "/thong-tin-bau-cu",
          "linkTarget": "_self",
          "content": null,
          "priority": 2,
          "startDate": "2026-01-01",
          "endDate": "2026-05-31",
          "active": true
        }
      ]
    },
    {
      "positionId": "sidebar_top",
      "positionName": "Sidebar trên",
      "displayMode": "stack",
      "interval": null,
      "width": "300px",
      "height": "auto",
      "sticky": false,
      "banners": [
        {
          "id": "banner-003",
          "title": "Cổng dịch vụ công Quốc gia",
          "image": "https://storage.4ship.vn/public/image/banner-dvc.png",
          "imageAlt": "Cổng dịch vụ công Quốc gia",
          "link": "https://dichvucong.gov.vn",
          "linkTarget": "_blank",
          "content": "<p class='text-sm text-center mt-2'>Tra cứu và thực hiện thủ tục hành chính trực tuyến</p>",
          "priority": 1,
          "startDate": null,
          "endDate": null,
          "active": true
        },
        {
          "id": "banner-004",
          "title": "Hệ thống phản ánh kiến nghị",
          "image": "https://storage.4ship.vn/public/image/banner-pakn.png",
          "imageAlt": "Hệ thống phản ánh kiến nghị",
          "link": "https://pakn.quangninh.gov.vn",
          "linkTarget": "_blank",
          "content": "<p class='text-sm text-center mt-2'>Gửi phản ánh, kiến nghị đến cơ quan nhà nước</p>",
          "priority": 2,
          "startDate": null,
          "endDate": null,
          "active": true
        }
      ]
    },
    {
      "positionId": "sidebar_bottom",
      "positionName": "Sidebar dưới",
      "displayMode": "carousel",
      "interval": 8000,
      "width": "300px",
      "height": "600px",
      "sticky": true,
      "banners": [
        {
          "id": "banner-005",
          "title": "Thủ tục hành chính",
          "image": "https://storage.4ship.vn/public/image/banner-tthc.png",
          "imageAlt": "Thủ tục hành chính",
          "link": "/thu-tuc-hanh-chinh",
          "linkTarget": "_self",
          "content": null,
          "priority": 1,
          "startDate": null,
          "endDate": null,
          "active": true
        },
        {
          "id": "banner-006",
          "title": "Lịch tiếp công dân",
          "image": "https://storage.4ship.vn/public/image/banner-lich-tiep-cd.png",
          "imageAlt": "Lịch tiếp công dân",
          "link": "/lich-tiep-cong-dan",
          "linkTarget": "_self",
          "content": null,
          "priority": 2,
          "startDate": null,
          "endDate": null,
          "active": true
        }
      ]
    },
    {
      "positionId": "in_content",
      "positionName": "Giữa nội dung",
      "displayMode": "single",
      "interval": null,
      "width": "100%",
      "height": "auto",
      "sticky": false,
      "banners": [
        {
          "id": "banner-007",
          "title": "Quảng Ninh - Điểm đến hấp dẫn",
          "image": "https://storage.4ship.vn/public/image/banner-quangninh.jpg",
          "imageAlt": "Quảng Ninh điểm đến hấp dẫn",
          "link": "https://dulich.quangninh.gov.vn",
          "linkTarget": "_blank",
          "content": null,
          "priority": 1,
          "startDate": null,
          "endDate": null,
          "active": true
        }
      ]
    },
    {
      "positionId": "pre_footer",
      "positionName": "Trước footer",
      "displayMode": "stack",
      "interval": null,
      "width": "100%",
      "height": "auto",
      "sticky": false,
      "banners": [
        {
          "id": "banner-008",
          "title": "Đường dây nóng",
          "image": "https://storage.4ship.vn/public/image/banner-hotline.png",
          "imageAlt": "Đường dây nóng",
          "link": "tel:19001234",
          "linkTarget": "_self",
          "content": "<div class='text-center'><p class='font-bold text-lg'>Đường dây nóng</p><p class='text-2xl text-red-600'>1900 1234</p></div>",
          "priority": 1,
          "startDate": null,
          "endDate": null,
          "active": true
        }
      ]
    }
  ]
}
```

#### FE Usage
```typescript
// Lấy tất cả banners 1 lần
const { data: allBanners } = useBanners();

// Filter theo position khi render
const topBanners = allBanners?.find(p => p.positionId === 'top_banner');
const sidebarTopBanners = allBanners?.find(p => p.positionId === 'sidebar_top');
```

---

## LOCATIONS

### Provinces
**GET** `/api/locations/provinces`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "code": "string"
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    { "id": "01", "name": "Hà Nội", "code": "HN" },
    { "id": "22", "name": "Quảng Ninh", "code": "QN" },
    { "id": "79", "name": "Hồ Chí Minh", "code": "HCM" }
  ]
}
```

---

## WEATHER

### Get Weather
**GET** `/api/weather`

#### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | No | Location code or name |

#### Response Body
```json
{
  "success": true,
  "data": {
    "location": "string",
    "temperature": "number (Celsius)",
    "condition": "string",
    "icon": "string (URL)",
    "humidity": "number (%)",
    "wind": "number (km/h)",
    "updatedAt": "string (ISO 8601)"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "location": "Móng Cái, Quảng Ninh",
    "temperature": 18,
    "condition": "Nhiều mây",
    "icon": "https://storage.4ship.vn/public/image/weather-cloudy.png",
    "humidity": 75,
    "wind": 12,
    "updatedAt": "2025-12-29T10:00:00Z"
  }
}
```

---

## MENU

### Navigation Menu
**GET** `/api/menu`

#### Response Body
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "label": "string",
      "href": "string (URL)",
      "icon": "string | null",
      "order": "number",
      "children": [
        {
          "id": "string",
          "label": "string",
          "href": "string (URL)",
          "order": "number"
        }
      ] | null
    }
  ]
}
```

**Example:**
```json
{
  "success": true,
  "data": [
    {
      "id": "menu-001",
      "label": "Trang chủ",
      "href": "/",
      "icon": "Home",
      "order": 1,
      "children": null
    },
    {
      "id": "menu-002",
      "label": "Giới thiệu",
      "href": "/gioi-thieu",
      "icon": "Info",
      "order": 2,
      "children": [
        { "id": "menu-002-1", "label": "Lịch sử hình thành", "href": "/gioi-thieu/lich-su", "order": 1 },
        { "id": "menu-002-2", "label": "Cơ cấu tổ chức", "href": "/gioi-thieu/co-cau-to-chuc", "order": 2 },
        { "id": "menu-002-3", "label": "Lãnh đạo qua các thời kỳ", "href": "/gioi-thieu/lanh-dao", "order": 3 }
      ]
    },
    {
      "id": "menu-003",
      "label": "Tin tức",
      "href": "/tin-tuc",
      "icon": "Newspaper",
      "order": 3,
      "children": [
        { "id": "menu-003-1", "label": "Tin tức tổng hợp", "href": "/tin-tuc/tin-tuc-tong-hop", "order": 1 },
        { "id": "menu-003-2", "label": "Kinh tế - Chính trị", "href": "/tin-tuc/kinh-te-chinh-tri", "order": 2 },
        { "id": "menu-003-3", "label": "Văn hóa - Xã hội", "href": "/tin-tuc/van-hoa-xa-hoi", "order": 3 }
      ]
    },
    {
      "id": "menu-004",
      "label": "Thủ tục hành chính",
      "href": "/thu-tuc-hanh-chinh",
      "icon": "FileText",
      "order": 4,
      "children": null
    },
    {
      "id": "menu-005",
      "label": "Liên hệ",
      "href": "/lien-he",
      "icon": "Phone",
      "order": 5,
      "children": null
    }
  ]
}
```

---

## PAGES

### About Page
**GET** `/api/pages/about`

#### Response Body
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "content": "string (HTML)",
    "image": "string (URL) | null",
    "updatedAt": "string (ISO 8601)"
  }
}
```

**Example:**
```json
{
  "success": true,
  "data": {
    "id": "page-about",
    "title": "Giới thiệu phường Móng Cái 3",
    "content": "<h2>Lịch sử hình thành</h2><p>Phường Móng Cái 3 được thành lập theo Nghị quyết số 1234/NQ-UBTVQH ngày 01/01/2020 của Ủy ban Thường vụ Quốc hội.</p><h2>Vị trí địa lý</h2><p>Phường Móng Cái 3 nằm ở phía Đông thành phố Móng Cái, tỉnh Quảng Ninh, tiếp giáp với Trung Quốc qua cửa khẩu quốc tế Móng Cái.</p><h2>Dân số và diện tích</h2><p>Diện tích: 25,6 km²<br>Dân số: 35.000 người</p>",
    "image": "https://storage.4ship.vn/public/image/about-pmc3.jpg",
    "updatedAt": "2025-12-01T00:00:00Z"
  }
}
```

---

## Data Types Reference

### Attachment
```typescript
interface Attachment {
  id: string;
  name: string;
  url: string;
  size: number; // bytes
  type: string; // MIME type
}
```

### ApiMeta
```typescript
interface ApiMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
```

### ApiResponse
```typescript
interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: ApiMeta;
}
```

### ApiError
```typescript
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}
```
