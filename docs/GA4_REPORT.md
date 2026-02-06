# BÁO CÁO TÌNH TRẠNG GOOGLE ANALYTICS 4

**Project:** Trang Thông Tin Điện Tử - UBND Phường
**Ngày tạo:** 2026-02-06
**Measurement ID:** `G-G80S4ZGW4H`

---

## 1. TỔNG QUAN

| Thông tin | Giá trị |
|-----------|---------|
| **Measurement ID** | `G-G80S4ZGW4H` |
| **Biến môi trường** | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **Trạng thái** | Đã cấu hình và hoạt động |
| **Môi trường** | Chỉ hoạt động ở Production |

---

## 2. KIẾN TRÚC HỆ THỐNG

### 2.1 Cấu trúc thư mục

```
src/
├── lib/analytics/
│   ├── gtag.ts          # Core GA4 utilities
│   ├── events.ts        # Event tracking functions
│   └── index.ts         # Module exports
│
├── components/analytics/
│   ├── GoogleAnalytics.tsx   # GA4 script loader
│   ├── PageTracker.tsx       # SPA navigation tracking
│   ├── ArticleTracker.tsx    # Article engagement tracking
│   ├── WebVitals.tsx         # Core Web Vitals
│   ├── ShareButtons.tsx      # Social share tracking
│   ├── SummaryButton.tsx     # AI summary button tracking
│   ├── OutboundLink.tsx      # External link tracking
│   ├── DownloadLink.tsx      # Download tracking
│   └── index.ts              # Component exports
```

### 2.2 Integration Points (layout.tsx)

```tsx
<GoogleAnalytics />    // Load GA4 script
<PageTracker />        // Track SPA navigation
<WebVitals />          // Track Core Web Vitals
```

---

## 3. EVENTS TRACKING

### 3.1 Automatic Events (Tự động)

| Event | Trigger | Components |
|-------|---------|------------|
| `page_view` | Navigation giữa các trang | `PageTracker` |
| `first_visit` | User mới lần đầu truy cập | `GoogleAnalytics` |
| `web_vitals` | Page load (LCP, FCP, CLS, INP, TTFB) | `WebVitals` |

### 3.2 Content View Events

| Event | Content Type | Trang | Trạng thái |
|-------|--------------|-------|------------|
| `view_item` | `news` | `/news/[slug]` | ✅ Active |
| `view_item` | `procedure` | `/procedures/[slug]` | ✅ Active |
| `view_item` | `announcement` | `/announcements/[slug]` | ✅ Active |
| `view_item` | `document` | `/documents/[slug]` | ⏳ Chưa có trang |
| `view_item` | `planning` | `/plannings/[slug]` | ⏳ Chưa có trang |

### 3.3 Engagement Events

| Event | Description | Parameters | Trạng thái |
|-------|-------------|------------|------------|
| `article_read` | Thời gian đọc bài | `engagement_time_sec`, `scroll_depth_percent`, `content_type`, `item_id` | ✅ Active |
| `scroll` | Scroll milestones | `percent_scrolled` (25/50/75/100) | ✅ Active |
| `search` | Tìm kiếm | `search_term` | ✅ Active |
| `share` | Chia sẻ bài viết | `method`, `content_type`, `item_id` | ✅ Active |
| `click` (outbound) | Click link ngoài | `link_url`, `link_domain` | ✅ Active |
| `file_download` | Tải file | `file_name`, `file_extension` | ✅ Available |
| `contact_form_submit` | Gửi form liên hệ | `subject` | ✅ Active |
| `click_summary` | Click nút tóm tắt AI | `article_id`, `article_title` | ✅ Active |

### 3.4 Performance Events (Web Vitals)

| Event | Metrics | Good | Needs Improvement | Poor |
|-------|---------|------|-------------------|------|
| `web_vitals` | LCP | ≤2500ms | 2500-4000ms | >4000ms |
| `web_vitals` | FCP | ≤1800ms | 1800-3000ms | >3000ms |
| `web_vitals` | CLS | ≤0.1 | 0.1-0.25 | >0.25 |
| `web_vitals` | INP | ≤200ms | 200-500ms | >500ms |
| `web_vitals` | TTFB | ≤800ms | 800-1800ms | >1800ms |

---

## 4. TRACKING COVERAGE

### 4.1 Trang có Article Tracking

| Trang | View | Read Time | Scroll Depth | Share |
|-------|------|-----------|--------------|-------|
| `/news/[slug]` | ✅ | ✅ | ✅ | ✅ |
| `/procedures/[slug]` | ✅ | ✅ | ✅ | ✅ |
| `/announcements/[slug]` | ✅ | ✅ | ✅ | ✅ |

### 4.2 Trang có Outbound Link Tracking

| Trang/Component | Links tracked |
|-----------------|---------------|
| `/about` | Google Maps |
| `PageBanner` | baochinhphu.vn |
| `ProceduresSection` | Citizen services (external) |

### 4.3 Forms có Tracking

| Form | Event | Location |
|------|-------|----------|
| Contact Form | `contact_form_submit` | `/contact` |
| Document Search | `search` | `/documents` |
| Search Form | `search` | Header |

---

## 5. USER SEGMENTATION

### 5.1 User Properties

| Property | Values | Storage |
|----------|--------|---------|
| `user_type` | `new` / `returning` | localStorage |
| `first_visit_date` | ISO date string | localStorage |

### 5.2 User Type Logic

```
Lần đầu truy cập → user_type: "new" → Lưu vào localStorage
Lần sau truy cập → user_type: "returning"
```

Mỗi event đều gửi kèm `user_type` để phân tích hành vi theo nhóm người dùng.

---

## 6. PERFORMANCE OPTIMIZATIONS

| Optimization | Implementation | Benefit |
|--------------|----------------|---------|
| Scroll Throttling | 150ms delay | Giảm ~90% scroll events |
| Duplicate Prevention | `hasTrackedReadTime` flag | Tránh duplicate events |
| Safe Storage | `safeLocalStorage()` với try-catch | Không crash khi localStorage bị block |
| Beacon API | `sendBeacon` cho exit events | Đảm bảo events được gửi khi rời trang |
| Passive Listeners | `{ passive: true }` cho scroll | Cải thiện scroll performance |

---

## 7. CUSTOM DIMENSIONS & METRICS

### 7.1 Custom Dimensions cần tạo trong GA4 (Event-scoped)

| Parameter Name | GA4 Display Name | Scope |
|----------------|------------------|-------|
| `content_type` | Content Type | Event |
| `user_type` | User Type | Event |
| `item_id` | Item ID | Event |
| `item_name` | Item Name | Event |
| `metric_name` | Web Vital Name | Event |
| `metric_rating` | Web Vital Rating | Event |
| `link_domain` | Link Domain | Event |

### 7.2 Custom Metrics cần tạo trong GA4

| Parameter Name | GA4 Display Name | Unit |
|----------------|------------------|------|
| `engagement_time_sec` | Article Read Time | Seconds |
| `scroll_depth_percent` | Scroll Depth | Percent |
| `metric_value` | Web Vital Value | Standard |

### Hướng dẫn tạo Custom Dimensions/Metrics:

1. Vào **GA4 Admin** → **Custom definitions**
2. Click **Create custom dimension** hoặc **Create custom metric**
3. Điền thông tin theo bảng trên
4. Chọn **Scope: Event**
5. Save

---

## 8. ĐIỂM MẠNH

| # | Điểm mạnh | Mô tả |
|---|-----------|-------|
| 1 | **Comprehensive Tracking** | Đầy đủ các events quan trọng cho website tin tức |
| 2 | **Performance Optimized** | Throttle, debounce, sendBeacon |
| 3 | **User Segmentation** | Phân biệt new/returning users |
| 4 | **Web Vitals** | Track đầy đủ Core Web Vitals |
| 5 | **Error Handling** | Safe localStorage, graceful fallbacks |
| 6 | **SPA Support** | PageTracker cho client-side navigation |
| 7 | **DRY Code** | Consolidated view tracking functions |
| 8 | **Type Safety** | Full TypeScript support |

---

## 9. HẠN CHẾ & KHUYẾN NGHỊ

### 9.1 Chưa triển khai

| Tính năng | Ưu tiên | Ghi chú |
|-----------|---------|---------|
| Cookie Consent Banner | 🔴 Cao | Cần thiết cho GDPR/PDPA compliance |
| Document detail pages | 🟡 Trung bình | Cần tạo `/documents/[slug]` để track |
| Planning detail pages | 🟡 Trung bình | Cần tạo `/plannings/[slug]` để track |
| Newsletter tracking | 🟢 Thấp | Nếu có newsletter form |
| 404 Error tracking | 🟢 Thấp | Track not found pages |

### 9.2 Khuyến nghị cải thiện

1. **Thêm Cookie Consent Banner**
   - Tuân thủ GDPR/PDPA
   - Chỉ load GA4 sau khi user đồng ý

2. **Tạo trang chi tiết cho documents và plannings**
   - Sử dụng `ArticleTracker` đã có sẵn
   - Track thời gian đọc và scroll depth

3. **Setup GA4 Conversions**
   - Đánh dấu `contact_form_submit` là conversion
   - Đánh dấu `file_download` là conversion

4. **Tạo Custom Reports trong GA4**
   - Báo cáo theo content type
   - Báo cáo engagement theo user type

5. **Setup Alerts**
   - Cảnh báo khi traffic giảm đột ngột
   - Cảnh báo khi Web Vitals xấu đi

---

## 10. HƯỚNG DẪN XEM DỮ LIỆU TRONG GA4

### 10.1 Realtime

```
GA4 → Reports → Realtime → Event count by Event name
```

Xem các events đang được gửi trong thời gian thực.

### 10.2 Engagement Reports

```
GA4 → Reports → Engagement → Events
```

Xem tổng quan các events:
- `view_item` - Lượt xem bài viết
- `article_read` - Thời gian đọc
- `scroll` - Scroll depth
- `share` - Chia sẻ
- `search` - Tìm kiếm

### 10.3 Custom Exploration

```
GA4 → Explore → Free form
```

Tạo báo cáo tùy chỉnh:
- **Dimensions:** `content_type`, `item_name`, `user_type`
- **Metrics:** `Event count`, `engagement_time_sec`

### 10.4 Web Vitals Report

```
GA4 → Explore → Free form
- Dimension: metric_name, metric_rating
- Metric: Event count, metric_value (average)
- Filter: Event name = web_vitals
```

---

## 11. API FUNCTIONS REFERENCE

### 11.1 Core Functions (`@/lib/analytics`)

```typescript
// Page tracking
pageview(url: string): void

// Event tracking
event(action: string, params?: Record<string, unknown>, useBeacon?: boolean): void

// User functions
getUserType(): 'new' | 'returning'
initUserTracking(): void

// Utilities
throttle<T>(func: T, limit: number): T
debounce<T>(func: T, wait: number): T
```

### 11.2 Event Functions (`@/lib/analytics`)

```typescript
// Content views
trackNewsView(newsId, newsTitle): void
trackProcedureView(procedureId, procedureTitle): void
trackAnnouncementView(announcementId, announcementTitle): void
trackDocumentView(documentId, documentTitle): void
trackPlanningView(planningId, planningTitle): void

// Engagement
trackArticleReadTime(articleId, articleTitle, contentType, readTimeSeconds, scrollDepthPercent): void
trackScrollDepth(depth: 25|50|75|100, articleId?, articleTitle?, contentType?): void
trackSearch(searchTerm): void
trackSocialShare(platform, contentType, itemId, itemTitle?): void

// Interactions
trackOutboundLink(url): void
trackDocumentDownload(fileName, fileType?): void
trackContactFormSubmit(subject): void
trackButtonClick(buttonName, location?): void
trackSummaryButtonClick(articleId, articleTitle): void

// Performance
trackWebVitals(metric: { name, value, rating, id }): void
trackError(errorType, errorMessage, errorStack?): void
```

### 11.3 Components (`@/components/analytics`)

```tsx
<GoogleAnalytics />      // GA4 script loader
<PageTracker />          // SPA navigation tracking
<WebVitals />            // Core Web Vitals tracking
<ArticleTracker type="news" id={id} title={title}>
  {children}
</ArticleTracker>
<ShareButtons contentType="news" itemId={id} title={title} />
<OutboundLink href="https://...">Link</OutboundLink>
<DownloadLink href="/file.pdf" fileName="Document">Download</DownloadLink>
```

---

## 12. FILES REFERENCE

| File | Mô tả | Lines |
|------|-------|-------|
| `src/lib/analytics/gtag.ts` | Core utilities, throttle, debounce, sendBeacon | ~180 |
| `src/lib/analytics/events.ts` | Event tracking functions | ~285 |
| `src/lib/analytics/index.ts` | Module exports | ~40 |
| `src/components/analytics/ArticleTracker.tsx` | Article engagement tracking | ~158 |
| `src/components/analytics/WebVitals.tsx` | Core Web Vitals tracking | ~160 |
| `src/components/analytics/PageTracker.tsx` | SPA navigation tracking | ~25 |
| `src/components/analytics/GoogleAnalytics.tsx` | GA4 script loader | ~34 |
| `src/components/analytics/ShareButtons.tsx` | Social share buttons | ~80 |
| `src/components/analytics/OutboundLink.tsx` | External link wrapper | ~35 |
| `src/components/analytics/DownloadLink.tsx` | Download link wrapper | ~45 |

---

## 13. CHANGELOG

| Ngày | Thay đổi |
|------|----------|
| 2026-02-06 | Tối ưu performance (throttle, debounce, sendBeacon) |
| 2026-02-06 | Thêm Web Vitals tracking |
| 2026-02-06 | Thêm trackError function |
| 2026-02-06 | Thêm OutboundLink, DownloadLink components |
| 2026-02-06 | Thêm PageTracker cho SPA navigation |
| 2026-02-06 | Thêm ArticleTracker cho announcements |
| 2026-02-06 | Consolidate view tracking functions (DRY) |

---

**Báo cáo được tạo tự động bởi Claude Code**
