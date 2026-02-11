# Báo cáo tích hợp API Backend - Frontend


## 1. Danh sách API endpoints

### 1.1 Organization API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/{org_code}` | GET | Lấy thông tin tổ chức/phường (tên, địa chỉ, SĐT, email, logo) |

### 1.2 Articles API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/articles` | GET | Danh sách bài viết (phân trang, lọc category/tag) |
| `/articles/latest` | GET | Bài viết mới nhất (limit) |
| `/articles/popular` | GET | Bài viết phổ biến (limit) |
| `/articles/featured` | GET | Bài viết nổi bật |
| `/articles/search?q=` | GET | Tìm kiếm bài viết (full-text) |
| `/articles/{slug}` | GET | Chi tiết bài viết (tăng lượt xem) |
| `/articles/{slug}/related` | GET | Bài viết liên quan |

### 1.3 Categories API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/categories` | GET | Danh sách chuyên mục (nested tree) |
| `/categories/tree` | GET | Cây chuyên mục (depth param) |
| `/categories/{slug}` | GET | Chi tiết chuyên mục |
| `/categories/{slug}/articles` | GET | Bài viết theo chuyên mục (phân trang) |
| `/categories/{slug}/page` | GET | Trang chuyên mục (category + articles + subcategories) |

### 1.4 Banners API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/banners` | GET | Danh sách banner (lọc theo position) |
| `/banners/active` | GET | Banner đang hoạt động (trong khoảng ngày) |
| `/banners/by-code/{code}` | GET | Lấy banner theo code |

### 1.5 Links API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/links` | GET | Danh sách liên kết (partner/government/other) |
| `/links/category/{category}` | GET | Liên kết theo nhóm |

### 1.6 Tags API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/tags` | GET | Danh sách tags (sắp xếp theo số bài viết) |
| `/tags/{tag}/articles` | GET | Bài viết theo tag |

### 1.7 Pages API (Trang tĩnh)
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/pages` | GET | Danh sách trang tĩnh |
| `/pages/{slug}` | GET | Chi tiết trang tĩnh |

### 1.8 Documents API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/documents/sections` | GET | Danh mục tài liệu (lọc theo doc_type) |
| `/documents/sections/{slug}` | GET | Chi tiết danh mục tài liệu |
| `/documents/{slug}` | GET | Chi tiết tài liệu |
| `/documents/data-sheets/{slug}` | GET | Chi tiết data sheet |

### 1.9 Search API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/search?q=` | GET | Tìm kiếm toàn cục (articles + categories) |

### 1.10 Feedback API
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/feedback/articles/{slug}/comments` | GET | Danh sách bình luận bài viết |
| `/feedback/articles/{slug}/comments` | POST | Tạo bình luận (giới hạn 5/phút) |
| `/feedback/comments/{id}/reactions` | POST | Thêm reaction (giới hạn 10/phút) |
| `/feedback/forms` | GET | Danh sách form góp ý |
| `/feedback/forms/{slug}` | GET | Chi tiết form |
| `/feedback/forms/{id}/submit` | POST | Gửi form (giới hạn 3/phút) |

### 1.11 Composite API (Dữ liệu tổng hợp)
| Endpoint | Method | Mô tả |
|----------|--------|-------|
| `/homepage` | GET | Dữ liệu trang chủ (org, articles, banners, menus) |
| `/categories/{slug}/page` | GET | Trang chuyên mục tổng hợp |
| `/archive` | GET | Lưu trữ theo tháng/năm |
| `/sitemap` | GET | Sitemap cho SEO |
| `/statistics` | GET | Thống kê tổng hợp |

---

## 2. API đã được tích hợp

### 2.1 Trang chủ (`src/app/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `compositeApi.getHomepage()` | Server component | Lấy dữ liệu tổng hợp: bài nổi bật, mới nhất, phổ biến, theo chuyên mục |
| `categoriesApi.getArticles("thong-bao")` | Server component | Lấy danh sách thông báo cho sidebar |
| `organizationApi.get()` | Via `getOrganization()` | Lấy tên, SĐT phường hiển thị ở sidebar liên hệ |

**Components sử dụng data:**
- `FeaturedNews` — bài viết nổi bật
- `HighlightsSection` — tin mới
- `HomeSidebar` — thông báo, thống kê, liên hệ
- `NewsCategoryGrid` — tin theo chuyên mục
- `PartyBuildingSection`, `StaffWorkSection`, `PartyActivitySection` — các mục tin
- `PlanningSection`, `ElectionSection` — quy hoạch, bầu cử
- `ProceduresSection` — dịch vụ công (data cứng từ `mock-data/services.ts`)

### 2.2 Chi tiết tin tức (`src/app/news/[slug]/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `articlesApi.getBySlug(slug)` | Server component | Lấy nội dung bài viết |
| `articlesApi.getRelated(slug, 3)` | Server component | Bài viết liên quan (sidebar) |
| `categoriesApi.getTree()` | Server component | Danh sách chuyên mục (sidebar) |
| `articlesApi.getLatest(8)` | Server component | Bài viết khác (cuối trang) |

### 2.3 Chi tiết thông báo (`src/app/announcements/[slug]/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `articlesApi.getBySlug(slug)` | Server component | Nội dung thông báo |
| `articlesApi.getRelated(slug, 3)` | Server component | Thông báo liên quan |
| `articlesApi.getLatest(4)` | Server component | Thông báo khác |

### 2.4 Danh sách thông báo (`src/app/announcements/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `categoriesApi.getArticles("thong-bao")` | Server component | Danh sách bài thuộc chuyên mục "thong-bao" |

### 2.5 Chi tiết thủ tục (`src/app/procedures/[slug]/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `articlesApi.getBySlug(slug)` | Server component | Nội dung hướng dẫn |
| `articlesApi.getRelated(slug, 5)` | Server component | Hướng dẫn liên quan |
| `articlesApi.getLatest(5)` | Server component | Hướng dẫn khác |

### 2.6 Tài liệu (`src/app/documents/page.tsx`, `src/app/documents/[slug]/page.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `documentsApi.getSections()` | Server component | Danh mục tài liệu |
| `documentsApi.getSectionBySlug(slug)` | Server component | Chi tiết danh mục |
| `documentsApi.getBySlug(slug)` | Server component | Chi tiết tài liệu |

### 2.7 Banner (`src/components/server/PageBanner.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `bannersApi.getActive()` | Async server component | Lấy banner đang active hiển thị đầu trang |

**Hiển thị tại:** Tất cả các trang (homepage, about, announcements, procedures, plannings, documents, contact)

### 2.8 InfoBar (`src/components/client/InfoBar.tsx`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `articlesApi.getLatest(10)` | Client useEffect | Ticker tin mới (tự chuyển mỗi 5s) |

**Lưu ý:** Thời tiết gọi OpenWeatherMap qua `/api/weather` (Next.js API route)

### 2.9 Thông tin tổ chức (`src/lib/organization.ts`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `organizationApi.get()` | React `cache()` | Lấy tên, địa chỉ, SĐT, email, logo |

**Hiển thị tại:**
- `Header` — tên phường, logo
- `Footer` — tên, địa chỉ, email, SĐT
- `FloatingPhoneButton` — SĐT đường dây nóng
- `HomeSidebar` — SĐT liên hệ
- `contact/page.tsx` — thông tin liên hệ
- `about/page.tsx` — sidebar thông tin

### 2.10 Bình luận (`src/components/comments/`)

| API | Hàm gọi | Mục đích |
|-----|---------|----------|
| `feedbackApi.getComments(articleSlug)` | Client useEffect | Lấy danh sách bình luận |
| `feedbackApi.createComment(articleSlug, data)` | Client form submit | Gửi bình luận mới |

**Hiển thị tại:** `news/[slug]/page.tsx`

---

## 3. API chưa được tích hợp

| API | Endpoints | Lý do / Ghi chú |
|-----|-----------|-----------------|
| **linksApi** | `/links`, `/links/category/{category}` | Chưa có UI hiển thị liên kết đối tác/chính phủ. Có thể thêm vào footer hoặc trang riêng. |
| **tagsApi** | `/tags`, `/tags/{tag}/articles` | Chưa có UI tag cloud hoặc lọc bài theo tag. Có thể thêm vào sidebar hoặc trang tìm kiếm. |
| **pagesApi** | `/pages`, `/pages/{slug}` | Chưa có trang tĩnh. Trang about đang hardcode nội dung, có thể chuyển sang dùng pagesApi. |
| **searchApi** | `/search?q=` | Component `SearchInput` tồn tại nhưng chưa gọi API. Hiện chưa có trang kết quả tìm kiếm. |
| **feedbackApi.addReaction** | `/feedback/comments/{id}/reactions` | Chưa có nút like/dislike cho bình luận. |
| **feedbackApi.listForms / getForm / submitForm** | `/feedback/forms/*` | Chưa tích hợp hệ thống form khảo sát. `ContactForm` đang dùng logic riêng. |
| **compositeApi.getArchive** | `/archive` | Chưa có trang lưu trữ bài viết theo tháng/năm. |
| **compositeApi.getSitemap** | `/sitemap` | Chưa tích hợp sitemap động cho SEO. |
| **compositeApi.getStatistics** | `/statistics` | Sidebar thống kê đang dùng data random, chưa gọi API thực. |
| **bannersApi.list** | `/banners` | Chỉ dùng `getActive()`. `list()` và `getByCode()` chưa dùng. |
| **bannersApi.getByCode** | `/banners/by-code/{code}` | Chưa dùng. Có thể dùng để nhúng banner cụ thể vào các vị trí khác nhau. |
| **documentsApi.getDataSheet** | `/documents/data-sheets/{slug}` | Chưa có UI hiển thị data sheet. |
| **categoriesApi.list** | `/categories` | Chỉ dùng `getTree()`. `list()` chưa gọi trực tiếp. |
| **categoriesApi.getBySlug** | `/categories/{slug}` | Chưa gọi trực tiếp (dùng `getPage` hoặc `getArticles` thay thế). |

---

## 4. Data cứng (Mock/Hardcode) còn lại

| Vị trí | Nội dung | Ghi chú |
|--------|----------|---------|
| `src/lib/mock-data/services.ts` | 11 dịch vụ công dân (link dichvucong.gov.vn) | **Giữ nguyên** — data cố định, không có API tương ứng |
| `src/app/about/page.tsx` | Nội dung giới thiệu phường, cơ cấu tổ chức | Có thể chuyển sang `pagesApi` hoặc giữ hardcode |
| `src/lib/homepage-adapters.ts` | `analytics: transformToAnalytics()` | Đang random số. Nên dùng `compositeApi.getStatistics()` |
| `src/app/contact/page.tsx` | Giờ làm việc, lưu ý | Data cố định, hợp lý giữ hardcode |
| `src/components/client/InfoBar.tsx` | Danh sách 63 tỉnh thành + mapping OpenWeatherMap | Data cố định cho widget thời tiết |

---

## 5. Sơ đồ trang - API

```
Trang chủ (/)
├── compositeApi.getHomepage()
├── categoriesApi.getArticles("thong-bao")
├── organizationApi.get()
├── bannersApi.getActive()          [PageBanner]
├── articlesApi.getLatest(10)       [InfoBar ticker]
└── /api/weather                    [OpenWeatherMap proxy]

Chi tiết tin (/news/[slug])
├── articlesApi.getBySlug(slug)
├── articlesApi.getRelated(slug, 3)
├── categoriesApi.getTree()
├── articlesApi.getLatest(8)
├── feedbackApi.getComments(slug)   [CommentList]
└── feedbackApi.createComment()     [CommentForm]

Thông báo (/announcements)
└── categoriesApi.getArticles("thong-bao")

Chi tiết thông báo (/announcements/[slug])
├── articlesApi.getBySlug(slug)
├── articlesApi.getRelated(slug, 3)
└── articlesApi.getLatest(4)

Thủ tục (/procedures/[slug])
├── articlesApi.getBySlug(slug)
├── articlesApi.getRelated(slug, 5)
└── articlesApi.getLatest(5)

Tài liệu (/documents)
├── documentsApi.getSections()
└── documentsApi.getSectionBySlug()

Chi tiết tài liệu (/documents/[slug])
└── documentsApi.getBySlug(slug)

Giới thiệu (/about)
└── organizationApi.get()

Liên hệ (/contact)
└── organizationApi.get()

Layout (mọi trang)
├── organizationApi.get()           [Header, Footer, FloatingPhoneButton]
└── bannersApi.getActive()          [PageBanner]
```
