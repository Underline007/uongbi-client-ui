# API Specification - Uongbi Client UI

## Base URL
```
Production: https://api.example.com/api
Development: http://localhost:3001/api
```

## Common Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
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
    "code": "NOT_FOUND",
    "message": "Resource not found"
  }
}
```

---

## 1. NEWS APIs

### 1.1 GET /api/news
Danh sách tin tức với phân trang và filter

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Trang hiện tại |
| limit | number | 10 | Số item mỗi trang |
| category | string | - | Filter theo category slug |
| search | string | - | Tìm kiếm theo title |
| featured | boolean | - | Chỉ lấy tin nổi bật |
| sortBy | string | createdAt | Sắp xếp theo field |
| order | string | desc | asc hoặc desc |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử...",
      "slug": "thong-bao-danh-sach-don-vi-bau-cu",
      "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội...",
      "image": "https://storage.4ship.vn/public/image/xxx.jpg",
      "category": {
        "id": "cat-1",
        "name": "Tin tức tổng hợp",
        "slug": "tin-tuc-tong-hop"
      },
      "author": "Admin",
      "views": 1250,
      "featured": true,
      "createdAt": "2025-12-29T06:34:00Z",
      "updatedAt": "2025-12-29T06:34:00Z"
    }
  ],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 10,
    "totalPages": 15
  }
}
```

---

### 1.2 GET /api/news/{id}
Chi tiết bài tin

**Path Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| id | string | ID hoặc slug của bài tin |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
    "title": "Thông báo danh sách đơn vị bầu cử...",
    "slug": "thong-bao-danh-sach-don-vi-bau-cu",
    "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội...",
    "content": "<p>Nội dung HTML đầy đủ của bài viết...</p>",
    "image": "https://storage.4ship.vn/public/image/xxx.jpg",
    "images": [
      "https://storage.4ship.vn/public/image/xxx1.jpg",
      "https://storage.4ship.vn/public/image/xxx2.jpg"
    ],
    "category": {
      "id": "cat-1",
      "name": "Tin tức tổng hợp",
      "slug": "tin-tuc-tong-hop"
    },
    "tags": ["bầu cử", "HĐND", "2026"],
    "author": "Admin",
    "views": 1250,
    "featured": true,
    "attachments": [
      {
        "id": "att-1",
        "name": "Danh_sach_don_vi_bau_cu.pdf",
        "url": "https://storage.4ship.vn/public/file/xxx.pdf",
        "size": 1024000,
        "type": "application/pdf"
      }
    ],
    "relatedNews": [
      {
        "id": "news-2",
        "title": "Tin liên quan 1",
        "image": "https://...",
        "createdAt": "2025-12-28T00:00:00Z"
      }
    ],
    "createdAt": "2025-12-29T06:34:00Z",
    "updatedAt": "2025-12-29T06:34:00Z"
  }
}
```

---

### 1.3 GET /api/news/featured
Tin nổi bật cho trang chủ

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| limit | number | 1 | Số tin nổi bật |

**Response:**
```json
{
  "success": true,
  "data": {
    "main": {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử...",
      "description": "Thực hiện Luật Bầu cử đại biểu Quốc hội...",
      "image": "https://storage.4ship.vn/public/image/xxx.jpg",
      "createdAt": "2025-12-29T06:34:00Z"
    },
    "sidebar": [
      {
        "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
        "title": "Lễ trao tặng Huy hiệu Đảng...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg"
      }
    ]
  }
}
```

---

### 1.4 GET /api/news/highlights
Tin tiêu điểm (3 cột)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "items": [
        {
          "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
          "title": "Lễ trao tặng Huy hiệu Đảng...",
          "date": "2025-12-01",
          "featured": true
        },
        {
          "id": "bb4d6d63-c06f-41a2-9c6d-9d3c295aa378",
          "title": "Hội LHPN phường Móng Cái 3...",
          "date": "2025-12-01",
          "featured": false
        }
      ]
    },
    {
      "column": 2,
      "items": [...]
    },
    {
      "column": 3,
      "items": [...]
    }
  ]
}
```

---

### 1.5 GET /api/news/categories
Tin theo danh mục (cho trang chủ)

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| slugs | string | - | Comma-separated category slugs |
| featuredLimit | number | 1 | Số tin featured mỗi category |
| itemsLimit | number | 4 | Số tin phụ mỗi category |

**Response:**
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
        "title": "Đại hội đại biểu Hội LHTN Việt Nam...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg"
      },
      "items": [
        {
          "id": "29182f47-4aa5-4327-bca3-cb2c0c9b6d5d",
          "title": "Kỳ họp thứ 5, HĐND phường Móng Cái 3..."
        }
      ]
    },
    {
      "id": "a8f02942-d0c1-4d79-8e2e-f59387762c8f",
      "name": "Kinh tế - Chính trị",
      "slug": "kinh-te-chinh-tri",
      "featured": {...},
      "items": [...]
    }
  ]
}
```

---

### 1.6 GET /api/news/party-building
Tin xây dựng Đảng (3 cột)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "featured": {
        "id": "43b0a6bf-1dde-4490-a755-e89543cd6ee1",
        "title": "Lễ trao tặng Huy hiệu Đảng...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg",
        "description": "Ngày 7/11, Đảng ủy phường Móng Cái 3..."
      },
      "secondary": {
        "id": "38dcb631-30eb-4f7f-b27f-c7832bad42f4",
        "title": "Đại hội đại biểu Đoàn TNCS...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg"
      }
    },
    {
      "column": 2,
      "featured": {...},
      "secondary": {...}
    },
    {
      "column": 3,
      "featured": {...},
      "secondary": null
    }
  ]
}
```

---

### 1.7 GET /api/news/staff-work
Tin công tác cán bộ

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| mainLimit | number | 4 | Số tin chính (có ảnh) |
| sidebarLimit | number | 5 | Số tin sidebar |

**Response:**
```json
{
  "success": true,
  "data": {
    "main": [
      {
        "id": "89798d7a-77e3-4e9f-9be5-708e9b9bd1ad",
        "title": "Đoàn công tác Văn phòng Thường trực...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg",
        "date": "2025-12-28"
      }
    ],
    "sidebar": [
      {
        "id": "57a86c30-2851-4f47-a8d1-5495c99db8b3",
        "title": "Hội nghị công bố Quyết định...",
        "date": "2025-12-28",
        "time": "05:29"
      }
    ]
  }
}
```

---

### 1.8 GET /api/news/party-activity
Tin hoạt động Đảng bộ phường

**Response:**
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "c593c91a-bf69-486b-a1f7-9f331a333e82",
      "title": "Đại hội đại biểu MTTQ phường Móng Cái 3...",
      "image": "https://storage.4ship.vn/public/image/xxx.jpg",
      "description": "Ngày 19/9, MTTQ Việt Nam phường Móng Cái 3...",
      "date": "2025-12-28"
    },
    "grid": [
      {
        "id": "1e476b69-6db3-4dc3-98ea-b8c6414d3f1c",
        "title": "Hội nghị giao ban với đội ngũ Bí thư chi bộ...",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg",
        "date": "2025-12-28"
      }
    ]
  }
}
```

---

### 1.9 GET /api/news/summary
Tóm tắt nội dung bài viết (AI-generated)

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| id | string | ID bài viết cần tóm tắt |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
    "summary": "Bài viết thông báo về danh sách 06 đơn vị bầu cử và 20 đại biểu HĐND phường Móng Cái 3 nhiệm kỳ 2026-2031...",
    "keyPoints": [
      "06 đơn vị bầu cử",
      "20 đại biểu HĐND",
      "Nhiệm kỳ 2026-2031"
    ],
    "generatedAt": "2025-12-29T10:00:00Z"
  }
}
```

---

## 2. ORGANIZATION APIs

### 2.1 GET /api/organization/members
Danh sách lãnh đạo

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| type | string | all | leadership, staff, all |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "member-1",
      "name": "Đồng chí Nguyễn Phúc Vinh",
      "avatar": "https://storage.4ship.vn/public/image/xxx.jpg",
      "position": "Bí thư Đảng ủy",
      "position2": null,
      "phone": "0203.3881xxx",
      "email": "vinh.np@quangninh.gov.vn",
      "order": 1
    },
    {
      "id": "member-2",
      "name": "Đồng chí Dương Thị Huệ",
      "avatar": null,
      "position": "Phó Bí thư Thường trực Đảng ủy",
      "position2": "Chủ tịch HĐND",
      "phone": null,
      "email": null,
      "order": 2
    }
  ]
}
```

---

## 3. PROCEDURES APIs

### 3.1 GET /api/procedures
Danh sách thủ tục hành chính

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Trang hiện tại |
| limit | number | 10 | Số item mỗi trang |
| search | string | - | Tìm kiếm theo tên |
| category | string | - | Filter theo category |

**Response:**
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

### 3.2 GET /api/procedures/{id}
Chi tiết thủ tục

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "694e2b856808578c44aa1eb2",
    "code": "TTHC-001",
    "title": "Đăng ký thường trú",
    "category": "Cư trú",
    "processingTime": "5 ngày làm việc",
    "fee": "Miễn phí",
    "level": 4,
    "legalBasis": [
      "Luật Cư trú 2020",
      "Nghị định 62/2021/NĐ-CP"
    ],
    "requiredDocuments": [
      {
        "name": "Phiếu báo thay đổi hộ khẩu, nhân khẩu",
        "template": "https://storage.4ship.vn/public/file/xxx.docx",
        "required": true
      },
      {
        "name": "Giấy tờ chứng minh chỗ ở hợp pháp",
        "template": null,
        "required": true
      }
    ],
    "process": [
      {
        "step": 1,
        "title": "Tiếp nhận hồ sơ",
        "description": "Công dân nộp hồ sơ tại bộ phận một cửa",
        "duration": "1 ngày"
      },
      {
        "step": 2,
        "title": "Thẩm định",
        "description": "Cán bộ thẩm định hồ sơ",
        "duration": "3 ngày"
      },
      {
        "step": 3,
        "title": "Trả kết quả",
        "description": "Trả sổ hộ khẩu cho công dân",
        "duration": "1 ngày"
      }
    ],
    "submissionMethods": [
      {
        "type": "online",
        "url": "https://dichvucong.gov.vn/...",
        "description": "Nộp trực tuyến qua Cổng dịch vụ công quốc gia"
      },
      {
        "type": "offline",
        "address": "Bộ phận một cửa UBND phường Móng Cái 3",
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
        "id": "694e2a666808578c44aa1ead",
        "title": "Thủ tục đăng ký khai sinh"
      }
    ],
    "status": "active",
    "createdAt": "2025-01-01T00:00:00Z",
    "updatedAt": "2025-06-15T00:00:00Z"
  }
}
```

---

## 4. SERVICES APIs

### 4.1 GET /api/services/citizen
Dịch vụ công dân (link đến dichvucong.gov.vn)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "svc-1",
      "icon": "Baby",
      "label": "Có con nhỏ",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=750",
      "order": 1
    },
    {
      "id": "svc-2",
      "icon": "GraduationCap",
      "label": "Học tập",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=751",
      "order": 2
    },
    {
      "id": "svc-3",
      "icon": "Briefcase",
      "label": "Việc làm",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=752",
      "order": 3
    },
    {
      "id": "svc-4",
      "icon": "Home",
      "label": "Cư trú và giấy tờ tùy thân",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=753",
      "order": 4
    },
    {
      "id": "svc-5",
      "icon": "Heart",
      "label": "Hôn nhân và gia đình",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=754",
      "order": 5
    },
    {
      "id": "svc-6",
      "icon": "Building2",
      "label": "Điện lực, nhà ở, đất đai",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=755",
      "order": 6
    },
    {
      "id": "svc-7",
      "icon": "Activity",
      "label": "Sức khỏe và y tế",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=756",
      "order": 7
    },
    {
      "id": "svc-8",
      "icon": "Car",
      "label": "Phương tiện và người lái",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=757",
      "order": 8
    },
    {
      "id": "svc-9",
      "icon": "Users",
      "label": "Hưu trí",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=758",
      "order": 9
    },
    {
      "id": "svc-10",
      "icon": "ClipboardList",
      "label": "Người thân qua đời",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=759",
      "order": 10
    },
    {
      "id": "svc-11",
      "icon": "Scale",
      "label": "Giải quyết khiếu kiện",
      "href": "https://dichvucong.gov.vn/p/home/dvc-chi-tiet-nhom-su-kien-cho-cong-dan.html?group=771",
      "order": 11
    }
  ]
}
```

---

## 5. ANNOUNCEMENTS APIs

### 5.1 GET /api/announcements
Danh sách thông báo

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Trang hiện tại |
| limit | number | 10 | Số item mỗi trang |
| pinned | boolean | - | Chỉ lấy thông báo ghim |
| search | string | - | Tìm kiếm |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên\"...",
      "excerpt": "Thông báo về việc ra mắt mô hình...",
      "pinned": true,
      "important": true,
      "createdAt": "2025-12-26T06:34:00Z"
    }
  ],
  "meta": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

---

### 5.2 GET /api/announcements/{id}
Chi tiết thông báo

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "694e2c8f6808578c44aa1eb5",
    "title": "Phường Móng Cái 3 ra mắt mô hình \"Biên giới bình yên\"...",
    "content": "<p>Nội dung HTML đầy đủ...</p>",
    "pinned": true,
    "important": true,
    "attachments": [
      {
        "id": "att-1",
        "name": "Thong_bao.pdf",
        "url": "https://storage.4ship.vn/public/file/xxx.pdf",
        "size": 512000,
        "type": "application/pdf"
      }
    ],
    "createdAt": "2025-12-26T06:34:00Z",
    "updatedAt": "2025-12-26T06:34:00Z"
  }
}
```

---

## 6. PLANNING APIs

### 6.1 GET /api/plannings
Danh sách quy hoạch

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Trang hiện tại |
| limit | number | 10 | Số item mỗi trang |
| category | string | - | Filter theo loại quy hoạch |
| search | string | - | Tìm kiếm |

**Response:**
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "cat-1",
        "name": "Các quy hoạch chiến lược",
        "count": 5
      },
      {
        "id": "cat-2",
        "name": "Quy hoạch đô thị",
        "count": 3
      }
    ],
    "items": [
      {
        "id": "94692871-ddb2-454f-9c83-c55664095ea3",
        "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
        "image": "https://storage.4ship.vn/public/image/xxx.jpg",
        "description": "Một trong những mục tiêu đột phá chiến lược...",
        "category": "Các quy hoạch chiến lược",
        "date": "2025-12-28"
      }
    ]
  },
  "meta": {
    "total": 8,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

---

### 6.2 GET /api/plannings/{id}
Chi tiết quy hoạch

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "94692871-ddb2-454f-9c83-c55664095ea3",
    "title": "Đẩy nhanh tiến độ thi công dự án sửa chữa đường tỉnh 335",
    "content": "<p>Nội dung HTML đầy đủ...</p>",
    "image": "https://storage.4ship.vn/public/image/xxx.jpg",
    "images": [],
    "category": "Các quy hoạch chiến lược",
    "attachments": [
      {
        "id": "att-1",
        "name": "Ban_do_quy_hoach.pdf",
        "url": "https://storage.4ship.vn/public/file/xxx.pdf",
        "size": 5120000,
        "type": "application/pdf"
      }
    ],
    "relatedPlannings": [],
    "createdAt": "2025-12-28T00:00:00Z",
    "updatedAt": "2025-12-28T00:00:00Z"
  }
}
```

---

## 7. DOCUMENTS APIs

### 7.1 GET /api/documents
Danh sách văn bản

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Trang hiện tại |
| limit | number | 10 | Số item mỗi trang |
| type | string | - | Loại văn bản (nghi-dinh, thong-tu, quyet-dinh...) |
| year | number | - | Năm ban hành |
| search | string | - | Tìm kiếm theo số hiệu hoặc trích yếu |
| issuingAgency | string | - | Cơ quan ban hành |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-1",
      "documentNumber": "15/2025/QĐ-UBND",
      "title": "Quyết định về việc phê duyệt quy hoạch chi tiết...",
      "type": "Quyết định",
      "issuingAgency": "UBND tỉnh Quảng Ninh",
      "issuedDate": "2025-06-15",
      "effectiveDate": "2025-07-01",
      "status": "effective",
      "fileUrl": "https://storage.4ship.vn/public/file/xxx.pdf",
      "fileSize": 1024000
    }
  ],
  "meta": {
    "total": 120,
    "page": 1,
    "limit": 10,
    "totalPages": 12
  }
}
```

---

### 7.2 GET /api/documents/{id}
Chi tiết văn bản

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "doc-1",
    "documentNumber": "15/2025/QĐ-UBND",
    "title": "Quyết định về việc phê duyệt quy hoạch chi tiết...",
    "content": "<p>Nội dung HTML đầy đủ...</p>",
    "type": "Quyết định",
    "issuingAgency": "UBND tỉnh Quảng Ninh",
    "signer": "Nguyễn Văn A - Chủ tịch UBND",
    "issuedDate": "2025-06-15",
    "effectiveDate": "2025-07-01",
    "expiryDate": null,
    "status": "effective",
    "legalBasis": [
      "Luật Tổ chức chính quyền địa phương 2015",
      "Luật Quy hoạch 2017"
    ],
    "replacedDocuments": [],
    "replacingDocuments": [],
    "relatedDocuments": [
      {
        "id": "doc-2",
        "documentNumber": "10/2025/QĐ-UBND",
        "title": "Quyết định liên quan..."
      }
    ],
    "attachments": [
      {
        "id": "att-1",
        "name": "Quyet_dinh_15_2025.pdf",
        "url": "https://storage.4ship.vn/public/file/xxx.pdf",
        "size": 1024000,
        "type": "application/pdf"
      }
    ],
    "createdAt": "2025-06-15T00:00:00Z",
    "updatedAt": "2025-06-15T00:00:00Z"
  }
}
```

---

## 8. CONFIGURATION APIs

### 8.1 GET /api/config/contact
Thông tin liên hệ

**Response:**
```json
{
  "success": true,
  "data": {
    "organizationName": "UBND Phường Móng Cái 3",
    "fullName": "Ủy ban nhân dân Phường Móng Cái 3",
    "address": "Số 533 đường Đoan Tĩnh, khu Hải Yên 4, phường Móng Cái 3, thành phố Móng Cái, tỉnh Quảng Ninh",
    "phone": "0203.3881892",
    "fax": "0203.3881xxx",
    "email": "ubnd.pmc3@quangninh.gov.vn",
    "hotline": "02033881892",
    "website": "https://mongcai3.quangninh.gov.vn",
    "mapUrl": "https://maps.google.com/...",
    "coordinates": {
      "lat": 21.5234,
      "lng": 107.9654
    },
    "socialMedia": {
      "facebook": "https://facebook.com/...",
      "zalo": "https://zalo.me/..."
    }
  }
}
```

---

### 8.2 GET /api/config/business-hours
Giờ làm việc

**Response:**
```json
{
  "success": true,
  "data": {
    "regular": [
      {
        "days": "Thứ 2 - Thứ 5",
        "morning": "07:30 - 11:30",
        "afternoon": "13:30 - 17:00"
      },
      {
        "days": "Thứ 6",
        "morning": "07:30 - 11:30",
        "afternoon": "13:30 - 16:30"
      }
    ],
    "publicServiceHours": {
      "days": "Thứ 2 - Thứ 6",
      "morning": "07:30 - 11:00",
      "afternoon": "13:30 - 16:30"
    },
    "closedDays": ["Thứ 7", "Chủ nhật", "Ngày lễ"],
    "note": "Nghỉ các ngày lễ theo quy định của Nhà nước"
  }
}
```

---

### 8.3 GET /api/config/site-info
Thông tin website (branding)

**Response:**
```json
{
  "success": true,
  "data": {
    "siteName": "Trang thông tin điện tử Phường Móng Cái 3",
    "shortName": "Phường Móng Cái 3",
    "tagline": "Phường Móng Cái 3 - Thành phố Móng Cái - Tỉnh Quảng Ninh",
    "logo": "https://storage.4ship.vn/public/image/logo.png",
    "favicon": "https://storage.4ship.vn/public/image/favicon.ico",
    "headerBackground": "https://storage.4ship.vn/public/image/trongdong_header.webp",
    "footerBackground": "https://storage.4ship.vn/public/image/trongdong.png",
    "coatOfArms": "https://storage.4ship.vn/public/image/coat-of-arms.png",
    "copyright": "Bản quyền thuộc về Trang thông tin điện tử Phường Móng Cái 3, thành phố Móng Cái, tỉnh Quảng Ninh",
    "country": "Việt Nam",
    "province": "Quảng Ninh",
    "district": "Móng Cái"
  }
}
```

---

## 9. FORMS APIs

### 9.1 GET /api/forms/contact/subjects
Danh sách chủ đề liên hệ

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": "subj-1", "label": "Hỏi đáp thủ tục hành chính", "order": 1 },
    { "id": "subj-2", "label": "Phản ánh, kiến nghị", "order": 2 },
    { "id": "subj-3", "label": "Góp ý xây dựng", "order": 3 },
    { "id": "subj-4", "label": "Khiếu nại, tố cáo", "order": 4 },
    { "id": "subj-5", "label": "Đăng ký lịch làm việc", "order": 5 },
    { "id": "subj-6", "label": "Hợp tác, đầu tư", "order": 6 },
    { "id": "subj-7", "label": "Khác", "order": 7 }
  ]
}
```

---

### 9.2 POST /api/forms/contact
Gửi form liên hệ

**Request Body:**
```json
{
  "fullName": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "phone": "0912345678",
  "address": "Khu Hải Yên 1, phường Móng Cái 3",
  "subjectId": "subj-1",
  "title": "Hỏi về thủ tục đăng ký khai sinh",
  "content": "Tôi muốn hỏi về thủ tục đăng ký khai sinh cho con...",
  "attachments": [
    {
      "name": "giay_to.pdf",
      "url": "https://storage.4ship.vn/public/file/xxx.pdf"
    }
  ],
  "captchaToken": "xxx"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "contact-12345",
    "trackingCode": "MC3-2025-00123",
    "status": "received",
    "message": "Phản hồi của bạn đã được ghi nhận. Mã theo dõi: MC3-2025-00123",
    "createdAt": "2025-12-29T10:30:00Z"
  }
}
```

---

## 10. ANALYTICS APIs

### 10.1 GET /api/analytics/stats
Thống kê truy cập

**Response:**
```json
{
  "success": true,
  "data": {
    "online": 27,
    "today": 538,
    "yesterday": 412,
    "thisWeek": 3250,
    "thisMonth": 12500,
    "total": 71270,
    "lastUpdated": "2025-12-29T10:30:00Z"
  }
}
```

---

## 11. BANNERS APIs

### 11.1 GET /api/banners
Tất cả banner theo vị trí

**Response:**
```json
{
  "success": true,
  "data": {
    "top_banner": {
      "display_mode": "carousel",
      "interval": 5000,
      "visible_count": 1,
      "items": [
        {
          "id": "banner-1",
          "image": "https://storage.4ship.vn/public/image/xxx.jpg",
          "link": "https://baochinhphu.vn/...",
          "alt": "Hướng tới Đại hội đại biểu toàn quốc lần thứ XIV của Đảng",
          "target": "_blank",
          "startDate": "2025-01-01",
          "endDate": "2025-12-31",
          "order": 1
        }
      ]
    },
    "sidebar_top": {
      "display_mode": "carousel",
      "interval": 8000,
      "visible_count": 1,
      "items": [
        {
          "id": "banner-2",
          "image": "https://storage.4ship.vn/public/image/xxx.jpg",
          "link": "/procedures",
          "alt": "Thủ tục hành chính",
          "target": "_self",
          "order": 1
        }
      ]
    },
    "sidebar_bottom": {
      "display_mode": "stack",
      "items": [
        {
          "id": "banner-3",
          "image": "https://storage.4ship.vn/public/image/xxx.jpg",
          "link": "https://dichvucong.gov.vn",
          "alt": "Dịch vụ công",
          "target": "_blank",
          "order": 1
        }
      ]
    },
    "in_content": {
      "display_mode": "grid",
      "columns": 2,
      "items": []
    },
    "pre_footer": {
      "display_mode": "carousel",
      "interval": 6000,
      "visible_count": 1,
      "items": []
    }
  }
}
```

---

## 12. LOCATION APIs

### 12.1 GET /api/locations/provinces
Danh sách tỉnh thành

**Response:**
```json
{
  "success": true,
  "data": [
    { "code": "01", "name": "Hà Nội" },
    { "code": "79", "name": "TP Hồ Chí Minh" },
    { "code": "22", "name": "Quảng Ninh" },
    { "code": "48", "name": "Đà Nẵng" }
  ]
}
```

---

## 13. WEATHER APIs

### 13.1 GET /api/weather
Thông tin thời tiết

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| location | string | Quảng Ninh | Tên tỉnh/thành phố |

**Response:**
```json
{
  "success": true,
  "data": {
    "location": "Quảng Ninh",
    "temperature": 21,
    "unit": "C",
    "condition": "Có mây",
    "humidity": 75,
    "wind": "12 km/h",
    "icon": "cloudy",
    "forecast": [
      {
        "date": "2025-12-30",
        "high": 24,
        "low": 18,
        "condition": "Nắng nhẹ"
      }
    ],
    "updatedAt": "2025-12-29T10:00:00Z"
  }
}
```

---

## 14. MENU APIs

### 14.1 GET /api/menu
Menu động

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "menu-1",
      "label": "TRANG CHỦ",
      "href": "/",
      "icon": null,
      "badge": null,
      "children": [],
      "order": 1
    },
    {
      "id": "menu-2",
      "label": "TỔNG QUAN",
      "href": "/about",
      "icon": null,
      "badge": null,
      "children": [
        {
          "id": "menu-2-1",
          "label": "Giới thiệu chung",
          "href": "/about",
          "order": 1
        },
        {
          "id": "menu-2-2",
          "label": "Cơ cấu tổ chức",
          "href": "/about/structure",
          "order": 2
        }
      ],
      "order": 2
    },
    {
      "id": "menu-3",
      "label": "THÔNG TIN BẦU CỬ",
      "href": "/election-info",
      "icon": null,
      "badge": {
        "text": "Mới",
        "color": "red"
      },
      "children": [],
      "order": 3
    },
    {
      "id": "menu-4",
      "label": "TIN TỨC",
      "href": "/news",
      "icon": null,
      "badge": null,
      "children": [
        {
          "id": "menu-4-1",
          "label": "Tin tức tổng hợp",
          "href": "/news?category=tin-tuc-tong-hop",
          "order": 1
        },
        {
          "id": "menu-4-2",
          "label": "Kinh tế - Chính trị",
          "href": "/news?category=kinh-te-chinh-tri",
          "order": 2
        }
      ],
      "order": 4
    },
    {
      "id": "menu-5",
      "label": "VĂN BẢN",
      "href": "/documents",
      "icon": null,
      "badge": null,
      "children": [],
      "order": 5
    },
    {
      "id": "menu-6",
      "label": "HƯỚNG DẪN TTHC",
      "href": "/procedures",
      "icon": null,
      "badge": null,
      "children": [],
      "order": 6
    },
    {
      "id": "menu-7",
      "label": "THÔNG TIN QUY HOẠCH",
      "href": "/plannings",
      "icon": null,
      "badge": null,
      "children": [],
      "order": 7
    },
    {
      "id": "menu-8",
      "label": "THÔNG BÁO",
      "href": "/announcements",
      "icon": null,
      "badge": null,
      "children": [],
      "order": 8
    }
  ]
}
```

---

## 15. PAGES APIs

### 15.1 GET /api/pages/about
Nội dung trang giới thiệu

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "page-about",
    "title": "Giới thiệu chung",
    "content": "<h2>Lịch sử hình thành</h2><p>Phường Móng Cái 3 được thành lập...</p><h2>Tầm nhìn chiến lược</h2><p>...</p>",
    "seo": {
      "title": "Giới thiệu - Phường Móng Cái 3",
      "description": "Tìm hiểu về phường Móng Cái 3...",
      "keywords": ["Móng Cái 3", "Quảng Ninh", "giới thiệu"]
    },
    "updatedAt": "2025-12-01T00:00:00Z"
  }
}
```

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `SUCCESS` | 200 | Thành công |
| `CREATED` | 201 | Tạo mới thành công |
| `BAD_REQUEST` | 400 | Request không hợp lệ |
| `UNAUTHORIZED` | 401 | Chưa xác thực |
| `FORBIDDEN` | 403 | Không có quyền |
| `NOT_FOUND` | 404 | Không tìm thấy |
| `VALIDATION_ERROR` | 422 | Lỗi validation |
| `INTERNAL_ERROR` | 500 | Lỗi server |

---

## Rate Limiting

- Public APIs: 100 requests/minute
- Authenticated APIs: 500 requests/minute

Headers trả về:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1735470000
```

---

## Versioning

API version được đặt trong URL:
```
/api/v1/news
/api/v2/news
```

Hoặc trong header:
```
Accept: application/vnd.uongbi.v1+json
```
