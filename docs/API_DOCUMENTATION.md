# API Documentation - Uongbi Client UI

> Tài liệu mô tả chi tiết tất cả các API endpoints cần thiết cho hệ thống.

**Base URL:** `https://api.example.com/v1`

**Authentication:** Bearer Token (JWT)

---

## Mục lục

1. [News APIs](#1-news-apis)
2. [Organization APIs](#2-organization-apis)
3. [Procedures & Services APIs](#3-procedures--services-apis)
4. [Announcements APIs](#4-announcements-apis)
5. [Planning APIs](#5-planning-apis)
6. [Election APIs](#6-election-apis)
7. [Documents APIs](#7-documents-apis)
8. [Configuration APIs](#8-configuration-apis)
9. [Forms APIs](#9-forms-apis)
10. [Analytics APIs](#10-analytics-apis)
11. [Banners APIs](#11-banners-apis)
12. [Location APIs](#12-location-apis)
13. [Menu API](#13-menu-api)

---

## Common Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Success",
  "timestamp": "2025-12-29T10:00:00.000Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  },
  "timestamp": "2025-12-29T10:00:00.000Z"
}
```

### Pagination Format
```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false
  }
}
```

---

## 1. News APIs

### 1.1 Lấy danh sách tin tức

```
GET /api/news
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng item/trang (max: 50) |
| category | string | No | - | Filter theo category slug |
| search | string | No | - | Tìm kiếm theo tiêu đề |
| sortBy | string | No | createdAt | Sắp xếp theo field |
| sortOrder | string | No | desc | asc hoặc desc |
| startDate | string | No | - | Filter từ ngày (ISO 8601) |
| endDate | string | No | - | Filter đến ngày (ISO 8601) |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên'",
      "slug": "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gioi-binh-yen",
      "description": "Mô tả ngắn về bài viết...",
      "content": "Nội dung chi tiết bài viết...",
      "thumbnail": "https://storage.example.com/images/news-1.jpg",
      "images": [
        "https://storage.example.com/images/news-1-1.jpg",
        "https://storage.example.com/images/news-1-2.jpg"
      ],
      "category": {
        "id": "cat-001",
        "name": "Tin tức tổng hợp",
        "slug": "tin-tuc-tong-hop"
      },
      "author": {
        "id": "author-001",
        "name": "Admin",
        "avatar": "https://storage.example.com/avatars/admin.jpg"
      },
      "tags": ["tin-tuc", "mong-cai"],
      "viewCount": 1250,
      "isPublished": true,
      "isFeatured": false,
      "publishedAt": "2025-12-26T06:34:00.000Z",
      "createdAt": "2025-12-26T06:00:00.000Z",
      "updatedAt": "2025-12-26T06:34:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNext": true,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/news/page.tsx`

---

### 1.2 Lấy chi tiết tin tức

```
GET /api/news/:id
```

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | ID hoặc slug của bài viết |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "694e2c8f6808578c44aa1eb5",
    "title": "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên'",
    "slug": "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gioi-binh-yen",
    "description": "Mô tả ngắn về bài viết...",
    "content": "<p>Nội dung HTML chi tiết bài viết...</p>",
    "thumbnail": "https://storage.example.com/images/news-1.jpg",
    "images": [
      "https://storage.example.com/images/news-1-1.jpg",
      "https://storage.example.com/images/news-1-2.jpg"
    ],
    "category": {
      "id": "cat-001",
      "name": "Tin tức tổng hợp",
      "slug": "tin-tuc-tong-hop"
    },
    "author": {
      "id": "author-001",
      "name": "Admin",
      "avatar": "https://storage.example.com/avatars/admin.jpg"
    },
    "tags": ["tin-tuc", "mong-cai"],
    "viewCount": 1250,
    "isPublished": true,
    "isFeatured": false,
    "publishedAt": "2025-12-26T06:34:00.000Z",
    "createdAt": "2025-12-26T06:00:00.000Z",
    "updatedAt": "2025-12-26T06:34:00.000Z",
    "relatedNews": [
      {
        "id": "694e2c8f6808578c44aa1eb6",
        "title": "Tin liên quan 1",
        "slug": "tin-lien-quan-1",
        "thumbnail": "https://storage.example.com/images/related-1.jpg",
        "publishedAt": "2025-12-25T10:00:00.000Z"
      }
    ]
  }
}
```

---

### 1.3 Lấy tin nổi bật (Featured)

```
GET /api/news/featured
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| limit | integer | No | 1 | Số lượng tin featured |

**Response:**
```json
{
  "success": true,
  "data": {
    "main": {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Tin nổi bật chính",
      "slug": "tin-noi-bat-chinh",
      "description": "Mô tả ngắn...",
      "thumbnail": "https://storage.example.com/images/featured.jpg",
      "publishedAt": "2025-12-26T06:34:00.000Z"
    },
    "sidebar": [
      {
        "id": "694e2c8f6808578c44aa1eb6",
        "title": "Tin sidebar 1",
        "thumbnail": "https://storage.example.com/images/sidebar-1.jpg",
        "publishedAt": "2025-12-25T10:00:00.000Z"
      },
      {
        "id": "694e2c8f6808578c44aa1eb7",
        "title": "Tin sidebar 2",
        "thumbnail": "https://storage.example.com/images/sidebar-2.jpg",
        "publishedAt": "2025-12-24T08:00:00.000Z"
      }
    ]
  }
}
```

**Sử dụng tại:** `src/app/page.tsx:7-22`

---

### 1.4 Lấy tin Highlights

```
GET /api/news/highlights
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| columns | integer | No | 3 | Số cột hiển thị |
| itemsPerColumn | integer | No | 3 | Số tin mỗi cột |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "items": [
        {
          "id": "news-1",
          "title": "Tin highlight 1",
          "slug": "tin-highlight-1",
          "thumbnail": "https://storage.example.com/images/hl-1.jpg",
          "publishedAt": "2025-12-26T10:00:00.000Z"
        },
        {
          "id": "news-2",
          "title": "Tin highlight 2",
          "slug": "tin-highlight-2",
          "thumbnail": "https://storage.example.com/images/hl-2.jpg",
          "publishedAt": "2025-12-25T10:00:00.000Z"
        }
      ]
    },
    {
      "column": 2,
      "items": []
    },
    {
      "column": 3,
      "items": []
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:24-40`

---

### 1.5 Lấy tin theo danh mục

```
GET /api/news/categories
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| categories | string | No | - | Danh sách category slugs (comma separated) |
| itemsPerCategory | integer | No | 5 | Số tin mỗi danh mục |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "category": {
        "id": "cat-001",
        "name": "Tin tức tổng hợp",
        "slug": "tin-tuc-tong-hop",
        "icon": "newspaper"
      },
      "featured": {
        "id": "news-1",
        "title": "Tin nổi bật danh mục",
        "slug": "tin-noi-bat-danh-muc",
        "description": "Mô tả ngắn...",
        "thumbnail": "https://storage.example.com/images/cat-featured.jpg",
        "publishedAt": "2025-12-26T10:00:00.000Z"
      },
      "items": [
        {
          "id": "news-2",
          "title": "Tin 2",
          "slug": "tin-2",
          "publishedAt": "2025-12-25T10:00:00.000Z"
        },
        {
          "id": "news-3",
          "title": "Tin 3",
          "slug": "tin-3",
          "publishedAt": "2025-12-24T10:00:00.000Z"
        }
      ],
      "totalCount": 25
    },
    {
      "category": {
        "id": "cat-002",
        "name": "Kinh tế - Chính trị",
        "slug": "kinh-te-chinh-tri",
        "icon": "chart-bar"
      },
      "featured": null,
      "items": [],
      "totalCount": 10
    },
    {
      "category": {
        "id": "cat-003",
        "name": "Văn hóa - Xã hội",
        "slug": "van-hoa-xa-hoi",
        "icon": "users"
      },
      "featured": null,
      "items": [],
      "totalCount": 15
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:49-79`

---

### 1.6 Lấy tin xây dựng Đảng

```
GET /api/news/party-building
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| columns | integer | No | 3 | Số cột |
| itemsPerColumn | integer | No | 3 | Số tin mỗi cột |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "column": 1,
      "items": [
        {
          "id": "party-1",
          "title": "Công tác xây dựng Đảng",
          "slug": "cong-tac-xay-dung-dang",
          "description": "Mô tả ngắn...",
          "thumbnail": "https://storage.example.com/images/party-1.jpg",
          "publishedAt": "2025-12-26T10:00:00.000Z"
        }
      ]
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:101-128`

---

### 1.7 Lấy tin công tác cán bộ

```
GET /api/news/staff-work
```

**Response:**
```json
{
  "success": true,
  "data": {
    "grid": [
      {
        "id": "staff-1",
        "title": "Tin công tác cán bộ 1",
        "slug": "tin-cong-tac-can-bo-1",
        "thumbnail": "https://storage.example.com/images/staff-1.jpg",
        "publishedAt": "2025-12-26T10:00:00.000Z"
      }
    ],
    "sidebar": {
      "id": "staff-sidebar",
      "title": "Tin sidebar",
      "slug": "tin-sidebar",
      "thumbnail": "https://storage.example.com/images/staff-sidebar.jpg",
      "publishedAt": "2025-12-25T10:00:00.000Z"
    }
  }
}
```

**Sử dụng tại:** `src/app/page.tsx:157-166`

---

### 1.8 Lấy tin hoạt động Đảng bộ

```
GET /api/news/party-activity
```

**Response:**
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "activity-featured",
      "title": "Hoạt động Đảng bộ nổi bật",
      "slug": "hoat-dong-dang-bo-noi-bat",
      "description": "Mô tả chi tiết...",
      "thumbnail": "https://storage.example.com/images/activity-featured.jpg",
      "publishedAt": "2025-12-26T10:00:00.000Z"
    },
    "grid": [
      {
        "id": "activity-1",
        "title": "Hoạt động 1",
        "slug": "hoat-dong-1",
        "thumbnail": "https://storage.example.com/images/activity-1.jpg",
        "publishedAt": "2025-12-25T10:00:00.000Z"
      }
    ]
  }
}
```

**Sử dụng tại:** `src/app/page.tsx:169-181`

---

### 1.9 Lấy tin chạy ticker

```
GET /api/news/ticker
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "ticker-1",
      "title": "Tin chạy ngang 1",
      "slug": "tin-chay-ngang-1",
      "url": "/news/tin-chay-ngang-1"
    },
    {
      "id": "ticker-2",
      "title": "Tin chạy ngang 2",
      "slug": "tin-chay-ngang-2",
      "url": "/news/tin-chay-ngang-2"
    }
  ]
}
```

**Sử dụng tại:** `src/components/client/InfoBar.tsx:50`

---

### 1.10 Lấy danh sách danh mục tin

```
GET /api/news/category-list
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cat-001",
      "name": "Tin tức tổng hợp",
      "slug": "tin-tuc-tong-hop",
      "icon": "newspaper",
      "description": "Tổng hợp các tin tức mới nhất",
      "newsCount": 25,
      "isActive": true,
      "order": 1
    },
    {
      "id": "cat-002",
      "name": "Kinh tế - Chính trị",
      "slug": "kinh-te-chinh-tri",
      "icon": "chart-bar",
      "description": "Tin tức về kinh tế và chính trị",
      "newsCount": 10,
      "isActive": true,
      "order": 2
    },
    {
      "id": "cat-003",
      "name": "Văn hóa - Xã hội",
      "slug": "van-hoa-xa-hoi",
      "icon": "users",
      "description": "Tin tức văn hóa xã hội",
      "newsCount": 15,
      "isActive": true,
      "order": 3
    },
    {
      "id": "cat-004",
      "name": "Gương người tốt việc tốt",
      "slug": "guong-nguoi-tot-viec-tot",
      "icon": "star",
      "description": "Những tấm gương điển hình",
      "newsCount": 8,
      "isActive": true,
      "order": 4
    },
    {
      "id": "cat-005",
      "name": "Hoạt động lãnh đạo tỉnh",
      "slug": "hoat-dong-lanh-dao-tinh",
      "icon": "building",
      "description": "Hoạt động của lãnh đạo tỉnh",
      "newsCount": 12,
      "isActive": true,
      "order": 5
    },
    {
      "id": "cat-006",
      "name": "Công tác an sinh xã hội",
      "slug": "cong-tac-an-sinh-xa-hoi",
      "icon": "heart",
      "description": "Các hoạt động an sinh xã hội",
      "newsCount": 7,
      "isActive": true,
      "order": 6
    }
  ]
}
```

---

## 2. Organization APIs

### 2.1 Lấy danh sách lãnh đạo

```
GET /api/organization/members
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| type | string | No | leadership | Loại: leadership, staff, all |
| department | string | No | - | Filter theo phòng ban |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "member-001",
      "name": "Nguyễn Phúc Vinh",
      "position": "Bí thư Đảng ủy",
      "positionLevel": 1,
      "avatar": "https://storage.example.com/avatars/member-001.jpg",
      "email": "vinh.np@quangninh.gov.vn",
      "phone": "0203.3881001",
      "department": {
        "id": "dept-001",
        "name": "Đảng ủy"
      },
      "biography": "Thông tin tiểu sử...",
      "responsibilities": [
        "Phụ trách chung công tác Đảng",
        "Chỉ đạo công tác tổ chức"
      ],
      "isActive": true,
      "order": 1
    },
    {
      "id": "member-002",
      "name": "Dương Thị Huệ",
      "position": "Phó Bí thư Thường trực Đảng ủy, Chủ tịch HĐND",
      "positionLevel": 2,
      "avatar": "https://storage.example.com/avatars/member-002.jpg",
      "email": "hue.dt@quangninh.gov.vn",
      "phone": "0203.3881002",
      "department": {
        "id": "dept-001",
        "name": "Đảng ủy"
      },
      "biography": "Thông tin tiểu sử...",
      "responsibilities": [],
      "isActive": true,
      "order": 2
    },
    {
      "id": "member-003",
      "name": "Đỗ Thị Hồng Nhung",
      "position": "Phó Bí thư Đảng ủy, Chủ tịch UBND",
      "positionLevel": 2,
      "avatar": "https://storage.example.com/avatars/member-003.jpg",
      "email": "nhung.dth@quangninh.gov.vn",
      "phone": "0203.3881003",
      "department": {
        "id": "dept-002",
        "name": "UBND Phường"
      },
      "biography": "Thông tin tiểu sử...",
      "responsibilities": [],
      "isActive": true,
      "order": 3
    },
    {
      "id": "member-004",
      "name": "Hoàng Anh Tuất",
      "position": "Chủ nhiệm Ủy ban Kiểm tra Đảng ủy",
      "positionLevel": 3,
      "avatar": "https://storage.example.com/avatars/member-004.jpg",
      "email": "tuat.ha@quangninh.gov.vn",
      "phone": "0203.3881004",
      "department": {
        "id": "dept-003",
        "name": "Ủy ban Kiểm tra"
      },
      "biography": "Thông tin tiểu sử...",
      "responsibilities": [],
      "isActive": true,
      "order": 4
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:42-47`, `src/app/about/page.tsx:160-215`

---

### 2.2 Lấy cơ cấu tổ chức

```
GET /api/organization/structure
```

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "UBND Phường Móng Cái 3",
    "description": "Cơ cấu tổ chức của UBND Phường",
    "departments": [
      {
        "id": "dept-001",
        "name": "Đảng ủy",
        "description": "Cơ quan lãnh đạo của Đảng bộ",
        "memberCount": 5,
        "head": {
          "id": "member-001",
          "name": "Nguyễn Phúc Vinh",
          "position": "Bí thư Đảng ủy"
        },
        "order": 1
      },
      {
        "id": "dept-002",
        "name": "HĐND Phường",
        "description": "Hội đồng nhân dân phường",
        "memberCount": 10,
        "head": {
          "id": "member-002",
          "name": "Dương Thị Huệ",
          "position": "Chủ tịch HĐND"
        },
        "order": 2
      },
      {
        "id": "dept-003",
        "name": "UBND Phường",
        "description": "Ủy ban nhân dân phường",
        "memberCount": 8,
        "head": {
          "id": "member-003",
          "name": "Đỗ Thị Hồng Nhung",
          "position": "Chủ tịch UBND"
        },
        "order": 3
      },
      {
        "id": "dept-004",
        "name": "Ủy ban Kiểm tra",
        "description": "Ủy ban kiểm tra Đảng ủy",
        "memberCount": 3,
        "head": {
          "id": "member-004",
          "name": "Hoàng Anh Tuất",
          "position": "Chủ nhiệm UBKT"
        },
        "order": 4
      }
    ]
  }
}
```

**Sử dụng tại:** `src/app/about/page.tsx`

---

## 3. Procedures & Services APIs

### 3.1 Lấy danh sách thủ tục hành chính

```
GET /api/procedures
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng/trang |
| category | string | No | - | Filter theo danh mục |
| search | string | No | - | Tìm kiếm theo tên |
| status | string | No | - | active, inactive |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2b856808578c44aa1eb2",
      "code": "TTHC-001",
      "name": "Đăng ký thường trú",
      "slug": "dang-ky-thuong-tru",
      "category": {
        "id": "proc-cat-001",
        "name": "Cư trú",
        "slug": "cu-tru"
      },
      "description": "Thủ tục đăng ký thường trú cho công dân",
      "processingTime": "5 ngày làm việc",
      "fee": "Miễn phí",
      "serviceLevel": "Mức độ 4",
      "onlineUrl": "https://dichvucong.quangninh.gov.vn/thu-tuc/dang-ky-thuong-tru",
      "requirements": [
        "Căn cước công dân",
        "Sổ hộ khẩu (nếu có)",
        "Giấy tờ chứng minh chỗ ở hợp pháp"
      ],
      "process": [
        {
          "step": 1,
          "title": "Nộp hồ sơ",
          "description": "Nộp hồ sơ tại bộ phận một cửa"
        },
        {
          "step": 2,
          "title": "Tiếp nhận và xử lý",
          "description": "Cán bộ tiếp nhận và xử lý hồ sơ"
        },
        {
          "step": 3,
          "title": "Trả kết quả",
          "description": "Nhận kết quả tại bộ phận một cửa"
        }
      ],
      "forms": [
        {
          "name": "Tờ khai đăng ký thường trú",
          "url": "https://storage.example.com/forms/to-khai-dang-ky-thuong-tru.pdf"
        }
      ],
      "legalBasis": [
        "Luật Cư trú 2020",
        "Nghị định 62/2021/NĐ-CP"
      ],
      "isActive": true,
      "viewCount": 500,
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-12-01T00:00:00.000Z"
    },
    {
      "id": "694e2a666808578c44aa1ead",
      "code": "TTHC-002",
      "name": "Thủ tục đăng ký khai sinh",
      "slug": "thu-tuc-dang-ky-khai-sinh",
      "category": {
        "id": "proc-cat-002",
        "name": "Hộ tịch",
        "slug": "ho-tich"
      },
      "description": "Thủ tục đăng ký khai sinh cho trẻ em",
      "processingTime": "1 ngày làm việc",
      "fee": "Miễn phí",
      "serviceLevel": "Mức độ 4",
      "onlineUrl": "https://dichvucong.quangninh.gov.vn/thu-tuc/dang-ky-khai-sinh",
      "requirements": [
        "Giấy chứng sinh",
        "CCCD của cha/mẹ",
        "Giấy đăng ký kết hôn (nếu có)"
      ],
      "process": [],
      "forms": [],
      "legalBasis": [],
      "isActive": true,
      "viewCount": 800,
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-12-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 2,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/procedures/page.tsx:64-118`

---

### 3.2 Lấy chi tiết thủ tục

```
GET /api/procedures/:id
```

**Path Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | ID hoặc slug của thủ tục |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "694e2b856808578c44aa1eb2",
    "code": "TTHC-001",
    "name": "Đăng ký thường trú",
    "slug": "dang-ky-thuong-tru",
    "category": {
      "id": "proc-cat-001",
      "name": "Cư trú",
      "slug": "cu-tru"
    },
    "description": "Thủ tục đăng ký thường trú cho công dân",
    "fullContent": "<p>Nội dung chi tiết HTML...</p>",
    "processingTime": "5 ngày làm việc",
    "fee": "Miễn phí",
    "serviceLevel": "Mức độ 4",
    "onlineUrl": "https://dichvucong.quangninh.gov.vn/thu-tuc/dang-ky-thuong-tru",
    "requirements": [
      "Căn cước công dân",
      "Sổ hộ khẩu (nếu có)",
      "Giấy tờ chứng minh chỗ ở hợp pháp"
    ],
    "process": [
      {
        "step": 1,
        "title": "Nộp hồ sơ",
        "description": "Nộp hồ sơ tại bộ phận một cửa hoặc trực tuyến"
      },
      {
        "step": 2,
        "title": "Tiếp nhận",
        "description": "Cán bộ tiếp nhận và kiểm tra hồ sơ"
      },
      {
        "step": 3,
        "title": "Xử lý",
        "description": "Thẩm định và phê duyệt hồ sơ"
      },
      {
        "step": 4,
        "title": "Trả kết quả",
        "description": "Nhận kết quả tại bộ phận một cửa hoặc qua bưu điện"
      }
    ],
    "forms": [
      {
        "id": "form-001",
        "name": "Tờ khai đăng ký thường trú",
        "url": "https://storage.example.com/forms/to-khai-dang-ky-thuong-tru.pdf",
        "fileSize": "150KB",
        "fileType": "PDF"
      }
    ],
    "legalBasis": [
      {
        "name": "Luật Cư trú 2020",
        "url": "https://thuvienphapluat.vn/van-ban/luat-cu-tru-2020"
      },
      {
        "name": "Nghị định 62/2021/NĐ-CP",
        "url": "https://thuvienphapluat.vn/van-ban/nghi-dinh-62-2021"
      }
    ],
    "relatedProcedures": [
      {
        "id": "694e2a666808578c44aa1ead",
        "name": "Đăng ký tạm trú",
        "slug": "dang-ky-tam-tru"
      }
    ],
    "faq": [
      {
        "question": "Thời gian giải quyết thủ tục là bao lâu?",
        "answer": "Thời gian giải quyết là 5 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ."
      }
    ],
    "isActive": true,
    "viewCount": 500,
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-12-01T00:00:00.000Z"
  }
}
```

---

### 3.3 Lấy hướng dẫn thủ tục

```
GET /api/procedures/guides
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| limit | integer | No | 5 | Số lượng hướng dẫn |
| featured | boolean | No | false | Chỉ lấy hướng dẫn nổi bật |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "guide-001",
      "procedureId": "694e2b856808578c44aa1eb2",
      "title": "Hướng dẫn đăng ký thường trú online",
      "slug": "huong-dan-dang-ky-thuong-tru-online",
      "description": "Hướng dẫn chi tiết các bước đăng ký thường trú trực tuyến",
      "thumbnail": "https://storage.example.com/images/guide-001.jpg",
      "content": "<p>Nội dung hướng dẫn...</p>",
      "videoUrl": "https://youtube.com/watch?v=xxx",
      "isFeatured": true,
      "viewCount": 1200,
      "publishedAt": "2025-12-01T00:00:00.000Z"
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:95-98`

---

### 3.4 Lấy danh sách dịch vụ công dân

```
GET /api/services/citizen
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "service-001",
      "name": "Có con nhỏ",
      "slug": "co-con-nho",
      "icon": "baby",
      "description": "Các dịch vụ liên quan đến trẻ em",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/co-con-nho",
      "procedureCount": 5,
      "order": 1,
      "isActive": true
    },
    {
      "id": "service-002",
      "name": "Học tập",
      "slug": "hoc-tap",
      "icon": "graduation-cap",
      "description": "Các dịch vụ liên quan đến giáo dục",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/hoc-tap",
      "procedureCount": 8,
      "order": 2,
      "isActive": true
    },
    {
      "id": "service-003",
      "name": "Việc làm",
      "slug": "viec-lam",
      "icon": "briefcase",
      "description": "Các dịch vụ liên quan đến việc làm",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/viec-lam",
      "procedureCount": 6,
      "order": 3,
      "isActive": true
    },
    {
      "id": "service-004",
      "name": "Cư trú",
      "slug": "cu-tru",
      "icon": "home",
      "description": "Các dịch vụ liên quan đến cư trú",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/cu-tru",
      "procedureCount": 4,
      "order": 4,
      "isActive": true
    },
    {
      "id": "service-005",
      "name": "Hôn nhân gia đình",
      "slug": "hon-nhan-gia-dinh",
      "icon": "heart",
      "description": "Các dịch vụ liên quan đến hôn nhân",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/hon-nhan",
      "procedureCount": 7,
      "order": 5,
      "isActive": true
    },
    {
      "id": "service-006",
      "name": "Bảo hiểm xã hội",
      "slug": "bao-hiem-xa-hoi",
      "icon": "shield",
      "description": "Các dịch vụ liên quan đến BHXH",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/bhxh",
      "procedureCount": 10,
      "order": 6,
      "isActive": true
    },
    {
      "id": "service-007",
      "name": "Nghỉ hưu",
      "slug": "nghi-huu",
      "icon": "user-check",
      "description": "Các dịch vụ cho người nghỉ hưu",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/nghi-huu",
      "procedureCount": 3,
      "order": 7,
      "isActive": true
    },
    {
      "id": "service-008",
      "name": "Qua đời",
      "slug": "qua-doi",
      "icon": "flower",
      "description": "Các dịch vụ liên quan đến khai tử",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/qua-doi",
      "procedureCount": 2,
      "order": 8,
      "isActive": true
    },
    {
      "id": "service-009",
      "name": "Khởi nghiệp",
      "slug": "khoi-nghiep",
      "icon": "rocket",
      "description": "Các dịch vụ hỗ trợ khởi nghiệp",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/khoi-nghiep",
      "procedureCount": 5,
      "order": 9,
      "isActive": true
    },
    {
      "id": "service-010",
      "name": "Y tế sức khỏe",
      "slug": "y-te-suc-khoe",
      "icon": "heart-pulse",
      "description": "Các dịch vụ y tế",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/y-te",
      "procedureCount": 8,
      "order": 10,
      "isActive": true
    },
    {
      "id": "service-011",
      "name": "Giấy tờ tùy thân",
      "slug": "giay-to-tuy-than",
      "icon": "id-card",
      "description": "Các dịch vụ về giấy tờ cá nhân",
      "externalUrl": "https://dichvucong.quangninh.gov.vn/danh-muc/giay-to",
      "procedureCount": 6,
      "order": 11,
      "isActive": true
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:81-93`

---

## 4. Announcements APIs

### 4.1 Lấy danh sách thông báo

```
GET /api/announcements
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng/trang |
| type | string | No | - | Loại thông báo |
| pinned | boolean | No | - | Chỉ lấy thông báo ghim |
| search | string | No | - | Tìm kiếm |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên'",
      "slug": "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gioi-binh-yen",
      "content": "Nội dung thông báo chi tiết...",
      "excerpt": "Tóm tắt thông báo...",
      "type": {
        "id": "type-001",
        "name": "Thông báo chung",
        "slug": "thong-bao-chung"
      },
      "attachments": [
        {
          "id": "attach-001",
          "name": "Van_ban_dinh_kem.pdf",
          "url": "https://storage.example.com/attachments/van-ban.pdf",
          "fileSize": "2.5MB",
          "fileType": "PDF"
        }
      ],
      "isPinned": true,
      "isImportant": true,
      "viewCount": 350,
      "publishedAt": "2025-12-26T06:34:00.000Z",
      "expiresAt": null,
      "createdAt": "2025-12-26T06:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5,
    "hasNext": true,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/announcements/page.tsx`

---

### 4.2 Lấy chi tiết thông báo

```
GET /api/announcements/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "694e2c8f6808578c44aa1eb5",
    "title": "Phường Móng Cái 3 ra mắt mô hình 'Biên giới bình yên'",
    "slug": "phuong-mong-cai-3-ra-mat-mo-hinh-bien-gioi-binh-yen",
    "content": "<p>Nội dung HTML chi tiết thông báo...</p>",
    "excerpt": "Tóm tắt thông báo...",
    "type": {
      "id": "type-001",
      "name": "Thông báo chung",
      "slug": "thong-bao-chung"
    },
    "attachments": [],
    "isPinned": true,
    "isImportant": true,
    "viewCount": 350,
    "publishedAt": "2025-12-26T06:34:00.000Z",
    "expiresAt": null,
    "createdAt": "2025-12-26T06:00:00.000Z",
    "relatedAnnouncements": []
  }
}
```

---

### 4.3 Lấy thông báo ghim

```
GET /api/announcements/pinned
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "694e2c8f6808578c44aa1eb5",
      "title": "Thông báo quan trọng",
      "slug": "thong-bao-quan-trong",
      "excerpt": "Tóm tắt...",
      "isPinned": true,
      "publishedAt": "2025-12-26T06:34:00.000Z"
    }
  ]
}
```

**Sử dụng tại:** `src/app/announcements/page.tsx:21-72`

---

## 5. Planning APIs

### 5.1 Lấy danh sách quy hoạch

```
GET /api/plannings
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng/trang |
| category | string | No | - | Filter theo danh mục |
| year | integer | No | - | Filter theo năm |
| status | string | No | - | active, expired, pending |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "planning-001",
      "code": "QH-2025-001",
      "name": "Quy hoạch sử dụng đất phường Móng Cái 3 giai đoạn 2025-2030",
      "slug": "quy-hoach-su-dung-dat-2025-2030",
      "category": {
        "id": "plan-cat-001",
        "name": "Các quy hoạch chiến lược",
        "slug": "quy-hoach-chien-luoc"
      },
      "description": "Quy hoạch sử dụng đất phường Móng Cái 3...",
      "content": "<p>Nội dung chi tiết...</p>",
      "thumbnail": "https://storage.example.com/images/planning-001.jpg",
      "maps": [
        {
          "id": "map-001",
          "name": "Bản đồ quy hoạch tổng thể",
          "url": "https://storage.example.com/maps/qh-tong-the.jpg",
          "type": "image"
        }
      ],
      "documents": [
        {
          "id": "doc-001",
          "name": "Quyết định phê duyệt quy hoạch",
          "url": "https://storage.example.com/docs/qd-quy-hoach.pdf",
          "fileSize": "5MB",
          "fileType": "PDF"
        }
      ],
      "effectiveDate": "2025-01-01",
      "expiryDate": "2030-12-31",
      "status": "active",
      "viewCount": 1500,
      "publishedAt": "2025-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/plannings/page.tsx`

---

### 5.2 Lấy danh mục quy hoạch

```
GET /api/plannings/categories
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "plan-cat-001",
      "name": "Các quy hoạch chiến lược",
      "slug": "quy-hoach-chien-luoc",
      "description": "Quy hoạch tổng thể và chiến lược phát triển",
      "planningCount": 1,
      "icon": "map",
      "order": 1,
      "isActive": true
    },
    {
      "id": "plan-cat-002",
      "name": "Quy hoạch sử dụng đất",
      "slug": "quy-hoach-su-dung-dat",
      "description": "Quy hoạch về sử dụng đất đai",
      "planningCount": 0,
      "icon": "land-plot",
      "order": 2,
      "isActive": true
    },
    {
      "id": "plan-cat-003",
      "name": "Quy hoạch xây dựng",
      "slug": "quy-hoach-xay-dung",
      "description": "Quy hoạch xây dựng và hạ tầng",
      "planningCount": 0,
      "icon": "building",
      "order": 3,
      "isActive": true
    }
  ]
}
```

**Sử dụng tại:** `src/app/plannings/page.tsx:23-39`

---

### 5.3 Lấy chi tiết quy hoạch

```
GET /api/plannings/:id
```

**Response:** Tương tự item trong danh sách nhưng có đầy đủ nội dung chi tiết.

---

## 6. Election APIs

### 6.1 Lấy thông tin bầu cử

```
GET /api/election-info
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng/trang |
| type | string | No | - | Loại tin bầu cử |

**Response:**
```json
{
  "success": true,
  "data": {
    "featured": {
      "id": "c6ede64a-ea4d-4cc3-b47f-cbcb2df1df2b",
      "title": "Thông báo danh sách đơn vị bầu cử và số đại biểu được bầu",
      "slug": "thong-bao-danh-sach-don-vi-bau-cu",
      "description": "Ủy ban nhân dân phường Móng Cái 3 thông báo danh sách các đơn vị bầu cử...",
      "content": "<p>Nội dung chi tiết...</p>",
      "thumbnail": "https://storage.example.com/images/election-featured.jpg",
      "type": "announcement",
      "publishedAt": "2025-12-29T04:57:00.000Z"
    },
    "items": [
      {
        "id": "election-001",
        "title": "Hướng dẫn bầu cử đại biểu HĐND",
        "slug": "huong-dan-bau-cu-dai-bieu-hdnd",
        "thumbnail": "https://storage.example.com/images/election-001.jpg",
        "type": "guide",
        "publishedAt": "2025-12-28T10:00:00.000Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 5,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/election-info/page.tsx:29-50`

---

### 6.2 Lấy chi tiết tin bầu cử

```
GET /api/election-info/:id
```

**Response:** Chi tiết bài viết bầu cử với đầy đủ nội dung.

---

## 7. Documents APIs

### 7.1 Lấy danh sách văn bản

```
GET /api/documents
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| page | integer | No | 1 | Số trang |
| limit | integer | No | 10 | Số lượng/trang |
| category | string | No | - | Loại văn bản |
| issuer | string | No | - | Cơ quan ban hành |
| year | integer | No | - | Năm ban hành |
| search | string | No | - | Tìm kiếm theo số/tên |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-001",
      "documentNumber": "15/2025/QĐ-UBND",
      "title": "Quyết định về việc ban hành quy chế làm việc",
      "slug": "quyet-dinh-15-2025-qd-ubnd",
      "category": {
        "id": "doc-cat-001",
        "name": "Quyết định",
        "slug": "quyet-dinh"
      },
      "issuer": {
        "id": "issuer-001",
        "name": "UBND Phường Móng Cái 3",
        "shortName": "UBND Phường"
      },
      "signer": {
        "name": "Đỗ Thị Hồng Nhung",
        "position": "Chủ tịch UBND"
      },
      "excerpt": "Tóm tắt nội dung văn bản...",
      "content": "<p>Nội dung chi tiết văn bản...</p>",
      "attachments": [
        {
          "id": "file-001",
          "name": "QD_15_2025_UBND.pdf",
          "url": "https://storage.example.com/documents/qd-15-2025.pdf",
          "fileSize": "1.2MB",
          "fileType": "PDF"
        }
      ],
      "effectiveDate": "2025-01-15",
      "expiryDate": null,
      "issuedDate": "2025-01-10",
      "status": "effective",
      "viewCount": 200,
      "downloadCount": 50,
      "publishedAt": "2025-01-10T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrev": false
  }
}
```

**Sử dụng tại:** `src/app/documents/page.tsx`

---

### 7.2 Lấy chi tiết văn bản

```
GET /api/documents/:id
```

**Response:** Chi tiết văn bản với đầy đủ nội dung và file đính kèm.

---

### 7.3 Lấy danh mục văn bản

```
GET /api/documents/categories
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-cat-001",
      "name": "Quyết định",
      "slug": "quyet-dinh",
      "documentCount": 25,
      "order": 1
    },
    {
      "id": "doc-cat-002",
      "name": "Nghị quyết",
      "slug": "nghi-quyet",
      "documentCount": 10,
      "order": 2
    },
    {
      "id": "doc-cat-003",
      "name": "Công văn",
      "slug": "cong-van",
      "documentCount": 50,
      "order": 3
    },
    {
      "id": "doc-cat-004",
      "name": "Thông báo",
      "slug": "thong-bao",
      "documentCount": 30,
      "order": 4
    },
    {
      "id": "doc-cat-005",
      "name": "Kế hoạch",
      "slug": "ke-hoach",
      "documentCount": 15,
      "order": 5
    }
  ]
}
```

---

## 8. Configuration APIs

### 8.1 Lấy thông tin liên hệ

```
GET /api/config/contact
```

**Response:**
```json
{
  "success": true,
  "data": {
    "organization": {
      "name": "UBND Phường Móng Cái 3",
      "fullName": "Ủy ban Nhân dân Phường Móng Cái 3",
      "taxCode": "0123456789"
    },
    "address": {
      "full": "Số 533 đường Đoan Tĩnh, khu Hải Yên 4, phường Móng Cái 3, thành phố Móng Cái, tỉnh Quảng Ninh",
      "street": "Số 533 đường Đoan Tĩnh",
      "ward": "Khu Hải Yên 4",
      "district": "Phường Móng Cái 3",
      "city": "Thành phố Móng Cái",
      "province": "Tỉnh Quảng Ninh",
      "postalCode": "200000",
      "coordinates": {
        "lat": 21.5267,
        "lng": 107.9650
      }
    },
    "phone": {
      "main": "0203.3881892",
      "hotline": "0203.3881893",
      "fax": "0203.3881894"
    },
    "email": {
      "main": "ubnd.pmc3@quangninh.gov.vn",
      "support": "hotro.pmc3@quangninh.gov.vn"
    },
    "social": {
      "facebook": "https://facebook.com/ubndpmc3",
      "zalo": "https://zalo.me/ubndpmc3",
      "youtube": null
    },
    "map": {
      "embedUrl": "https://www.google.com/maps/embed?pb=...",
      "directionsUrl": "https://goo.gl/maps/..."
    }
  }
}
```

**Sử dụng tại:** `src/components/server/Footer.tsx`, `src/app/about/page.tsx:86-141`, `src/app/contact/page.tsx:47-68`

---

### 8.2 Lấy giờ làm việc

```
GET /api/config/business-hours
```

**Response:**
```json
{
  "success": true,
  "data": {
    "schedule": [
      {
        "days": ["monday", "tuesday", "wednesday", "thursday"],
        "daysLabel": "Thứ 2 - Thứ 5",
        "sessions": [
          {
            "label": "Sáng",
            "start": "07:30",
            "end": "11:30"
          },
          {
            "label": "Chiều",
            "start": "13:30",
            "end": "17:00"
          }
        ]
      },
      {
        "days": ["friday"],
        "daysLabel": "Thứ 6",
        "sessions": [
          {
            "label": "Sáng",
            "start": "07:30",
            "end": "11:30"
          },
          {
            "label": "Chiều",
            "start": "13:30",
            "end": "16:30"
          }
        ]
      },
      {
        "days": ["saturday", "sunday"],
        "daysLabel": "Thứ 7, Chủ nhật",
        "sessions": [],
        "note": "Nghỉ"
      }
    ],
    "holidays": [
      {
        "date": "2025-01-01",
        "name": "Tết Dương lịch",
        "isClosed": true
      },
      {
        "date": "2025-01-29",
        "name": "Tết Nguyên đán",
        "isClosed": true
      }
    ],
    "note": "Trường hợp cấp bách, vui lòng liên hệ số điện thoại trực: 0203.3881893"
  }
}
```

**Sử dụng tại:** `src/app/contact/page.tsx:25-38`

---

### 8.3 Lấy thông tin website

```
GET /api/config/site-info
```

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Trang thông tin điện tử Phường Móng Cái 3",
    "shortName": "UBND Phường Móng Cái 3",
    "slogan": "Phục vụ nhân dân - Xây dựng chính quyền điện tử",
    "description": "Trang thông tin điện tử chính thức của UBND Phường Móng Cái 3",
    "logo": {
      "main": "/images/logo.png",
      "white": "/images/logo-white.png",
      "favicon": "/favicon.ico"
    },
    "banner": {
      "header": "https://storage.example.com/banners/header.jpg",
      "footer": "https://storage.example.com/banners/footer.jpg"
    },
    "copyright": "© 2025 UBND Phường Móng Cái 3. Bản quyền thuộc UBND Phường Móng Cái 3.",
    "license": "Giấy phép số: xxx/GP-TTĐT do Sở TT&TT tỉnh Quảng Ninh cấp ngày xx/xx/xxxx",
    "seo": {
      "title": "UBND Phường Móng Cái 3 - Trang thông tin điện tử",
      "description": "Trang thông tin điện tử chính thức...",
      "keywords": ["UBND", "Móng Cái", "Quảng Ninh", "dịch vụ công"],
      "ogImage": "https://storage.example.com/og-image.jpg"
    }
  }
}
```

**Sử dụng tại:** `src/components/client/Header.tsx`

---

## 9. Forms APIs

### 9.1 Lấy danh sách chủ đề liên hệ

```
GET /api/forms/contact/subjects
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "subject-001",
      "name": "Góp ý về dịch vụ hành chính",
      "value": "gop-y-dich-vu",
      "description": "Góp ý, phản hồi về chất lượng dịch vụ hành chính công",
      "order": 1,
      "isActive": true
    },
    {
      "id": "subject-002",
      "name": "Góp ý về website",
      "value": "gop-y-website",
      "description": "Góp ý về giao diện, tính năng website",
      "order": 2,
      "isActive": true
    },
    {
      "id": "subject-003",
      "name": "Góp ý về cán bộ công chức",
      "value": "gop-y-can-bo",
      "description": "Phản hồi về thái độ, chất lượng phục vụ của cán bộ",
      "order": 3,
      "isActive": true
    },
    {
      "id": "subject-004",
      "name": "Khiếu nại",
      "value": "khieu-nai",
      "description": "Gửi đơn khiếu nại",
      "order": 4,
      "isActive": true
    },
    {
      "id": "subject-005",
      "name": "Khen ngợi",
      "value": "khen-ngoi",
      "description": "Gửi lời khen ngợi, cảm ơn",
      "order": 5,
      "isActive": true
    },
    {
      "id": "subject-006",
      "name": "Đề xuất cải tiến",
      "value": "de-xuat",
      "description": "Đề xuất ý tưởng cải tiến",
      "order": 6,
      "isActive": true
    },
    {
      "id": "subject-007",
      "name": "Khác",
      "value": "khac",
      "description": "Các vấn đề khác",
      "order": 7,
      "isActive": true
    }
  ]
}
```

**Sử dụng tại:** `src/app/contact/page.tsx:126-134`

---

### 9.2 Gửi form liên hệ

```
POST /api/forms/contact
```

**Request Body:**
```json
{
  "fullName": "Nguyễn Văn A",
  "email": "nguyenvana@email.com",
  "phone": "0912345678",
  "subject": "gop-y-dich-vu",
  "message": "Nội dung góp ý...",
  "attachments": ["file-id-1", "file-id-2"],
  "captchaToken": "recaptcha-token"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "contact-001",
    "ticketNumber": "LH-2025-001234",
    "status": "pending",
    "message": "Cảm ơn bạn đã gửi góp ý. Chúng tôi sẽ phản hồi trong vòng 3 ngày làm việc."
  }
}
```

**Sử dụng tại:** `src/app/contact/page.tsx`

---

## 10. Analytics APIs

### 10.1 Lấy thống kê truy cập

```
GET /api/analytics/stats
```

**Response:**
```json
{
  "success": true,
  "data": {
    "online": {
      "count": 27,
      "label": "Đang truy cập"
    },
    "today": {
      "count": 538,
      "label": "Truy cập hôm nay"
    },
    "total": {
      "count": 7127,
      "label": "Tổng lượt truy cập"
    },
    "lastUpdated": "2025-12-29T10:00:00.000Z"
  }
}
```

**Sử dụng tại:** `src/app/page.tsx:425-448`

---

## 11. Banners APIs

### 11.1 Lấy danh sách banner

```
GET /api/banners
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| position | string | No | - | Vị trí: header, sidebar, footer |
| isActive | boolean | No | true | Chỉ lấy banner đang hoạt động |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "banner-001",
      "name": "Banner quảng cáo 1",
      "imageUrl": "https://storage.example.com/banners/banner-001.jpg",
      "linkUrl": "https://example.com/promo",
      "linkTarget": "_blank",
      "position": "sidebar",
      "altText": "Mô tả banner",
      "order": 1,
      "isActive": true,
      "startDate": "2025-01-01T00:00:00.000Z",
      "endDate": "2025-12-31T23:59:59.000Z",
      "clickCount": 150
    },
    {
      "id": "banner-002",
      "name": "Banner header",
      "imageUrl": "https://storage.example.com/banners/banner-002.jpg",
      "linkUrl": "/news/article-1",
      "linkTarget": "_self",
      "position": "header",
      "altText": "Banner header",
      "order": 1,
      "isActive": true,
      "startDate": null,
      "endDate": null,
      "clickCount": 500
    }
  ]
}
```

**Sử dụng tại:** `src/app/page.tsx:355-358, 410`, `src/components/server/PageBanner.tsx`

---

### 11.2 Lấy banner sidebar

```
GET /api/banners/sidebar
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "banner-001",
      "name": "Banner sidebar 1",
      "imageUrl": "https://storage.example.com/banners/sidebar-1.jpg",
      "linkUrl": "https://example.com",
      "linkTarget": "_blank",
      "altText": "Banner sidebar",
      "order": 1
    }
  ]
}
```

---

## 12. Location APIs

### 12.1 Lấy danh sách tỉnh/thành

```
GET /api/locations/provinces
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "province-01",
      "code": "01",
      "name": "Hà Nội",
      "slug": "ha-noi",
      "type": "thanh-pho-trung-uong"
    },
    {
      "id": "province-22",
      "code": "22",
      "name": "Quảng Ninh",
      "slug": "quang-ninh",
      "type": "tinh"
    }
  ]
}
```

**Sử dụng tại:** `src/components/client/InfoBar.tsx:7-15`

---

### 12.2 Lấy thông tin thời tiết

```
GET /api/weather
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| city | string | No | Quảng Ninh | Tên tỉnh/thành |

**Response:**
```json
{
  "success": true,
  "data": {
    "city": "Quảng Ninh",
    "temperature": {
      "current": 21,
      "unit": "°C",
      "feelsLike": 19
    },
    "condition": {
      "text": "Có mây",
      "icon": "cloudy",
      "code": "partly-cloudy"
    },
    "humidity": 75,
    "wind": {
      "speed": 15,
      "unit": "km/h",
      "direction": "Đông Bắc"
    },
    "forecast": [
      {
        "date": "2025-12-30",
        "tempHigh": 23,
        "tempLow": 18,
        "condition": "Nắng"
      }
    ],
    "lastUpdated": "2025-12-29T10:00:00.000Z"
  }
}
```

**Sử dụng tại:** `src/components/client/InfoBar.tsx:90`

---

## 13. Menu API

### 13.1 Lấy cấu trúc menu

```
GET /api/menu
```

**Query Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| position | string | No | main | main, footer, mobile |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "menu-001",
      "label": "TRANG CHỦ",
      "href": "/",
      "icon": "home",
      "badge": null,
      "children": [],
      "order": 1,
      "isActive": true
    },
    {
      "id": "menu-002",
      "label": "TỔNG QUAN",
      "href": "/about",
      "icon": "info",
      "badge": null,
      "children": [],
      "order": 2,
      "isActive": true
    },
    {
      "id": "menu-003",
      "label": "THÔNG TIN BẦU CỬ",
      "href": "/election-info",
      "icon": "vote",
      "badge": {
        "text": "MỚI",
        "variant": "destructive"
      },
      "children": [],
      "order": 3,
      "isActive": true
    },
    {
      "id": "menu-004",
      "label": "TIN TỨC",
      "href": "/news",
      "icon": "newspaper",
      "badge": null,
      "children": [],
      "order": 4,
      "isActive": true
    },
    {
      "id": "menu-005",
      "label": "VĂN BẢN",
      "href": "/documents",
      "icon": "file-text",
      "badge": null,
      "children": [],
      "order": 5,
      "isActive": true
    },
    {
      "id": "menu-006",
      "label": "HƯỚNG DẪN TTHC",
      "href": "/procedures",
      "icon": "clipboard-list",
      "badge": null,
      "children": [],
      "order": 6,
      "isActive": true
    },
    {
      "id": "menu-007",
      "label": "THÔNG TIN QUY HOẠCH",
      "href": "/plannings",
      "icon": "map",
      "badge": null,
      "children": [
        {
          "id": "menu-007-001",
          "label": "Các quy hoạch chiến lược",
          "href": "/plannings?category=chien-luoc",
          "order": 1
        },
        {
          "id": "menu-007-002",
          "label": "Quy hoạch sử dụng đất",
          "href": "/plannings?category=su-dung-dat",
          "order": 2
        }
      ],
      "order": 7,
      "isActive": true
    },
    {
      "id": "menu-008",
      "label": "THÔNG BÁO",
      "href": "/announcements",
      "icon": "bell",
      "badge": null,
      "children": [],
      "order": 8,
      "isActive": true
    }
  ]
}
```

**Sử dụng tại:** `src/data/menu.ts`

---

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Dữ liệu không hợp lệ |
| `UNAUTHORIZED` | 401 | Chưa xác thực |
| `FORBIDDEN` | 403 | Không có quyền truy cập |
| `NOT_FOUND` | 404 | Không tìm thấy resource |
| `RATE_LIMITED` | 429 | Vượt quá giới hạn request |
| `INTERNAL_ERROR` | 500 | Lỗi server |

---

## Rate Limiting

- **Public APIs:** 100 requests/phút/IP
- **Authenticated APIs:** 1000 requests/phút/user

---

## Changelog

### Version 1.0.0 (2025-12-29)
- Initial API documentation
- 37 endpoints defined

---

*Tài liệu này được tạo tự động dựa trên phân tích codebase.*
