import type { BannerResponse, BannerListResponse } from '@/types/api';

/**
 * Mock data cho banners, theo đúng BannerResponse schema từ BE.
 * Sử dụng làm fallback khi API chưa sẵn sàng.
 * Endpoints:
 *   GET /api/v1/{org_code}/banners
 *   GET /api/v1/{org_code}/banners/active
 *   GET /api/v1/{org_code}/banners/by-code/{code}
 */

export const mockBanners: BannerResponse[] = [
  {
    id: 'mock-banner-1',
    title: 'Banner chào mừng Đảng Cộng sản Việt Nam',
    image_url: '/no-image.png',
    subtitle: 'Chào mừng kỷ niệm ngày thành lập Đảng Cộng sản Việt Nam',
    link_url: null,
    link_target: '_self',
    position: 'homepage',
    code: 'homepage-main',
    description: 'Banner chính trang chủ',
    display_mode: 'carousel',
    layout_width: 1600,
    layout_height: 400,
    items: [
      {
        image_url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKFaMN_T6AxlBpb4icIV2ErM2SbveF9jiL9lwQkx48iHS_7E3kgTRIARrKHJCA5a1Ju_wrg7KVx3WelTPi1PH-fsRZ5MbEBun60qTdM-lFkupJjsSDPMojQoGadQy5D1a7d250TTbz_cGEryt6DQP76W7Sa7sfFAkakljkJZ7rK8DVYw1Um2kNRQD3AFo/s16000-rw/ngay-thanh-lap-dang-3-2.jpg',
        title: 'Chào mừng kỷ niệm ngày thành lập Đảng',
        link_url: null,
        link_target: '_self',
        display_order: 1,
      },
      {
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K3smQDKfXEPHkSIm5eiZeNkLNDa8jCihMw&s',
        title: 'Phường Hà Lầm - Đổi mới và phát triển',
        link_url: null,
        link_target: '_self',
        display_order: 2,
      },
      {
        image_url: 'https://sqhx-hanoi.mediacdn.vn/91579363132710912/2026/1/4/16140-mung-dang-mung-xuan-binh-ngo-min-17675405427471325086842-0-123-575-1043-crop-1767540557096556763633.png',
        title: 'Xây dựng nông thôn mới',
        link_url: null,
        link_target: '_self',
        display_order: 3,
      },
    ],
  },
  {
    id: 'mock-banner-2',
    title: 'Dịch vụ công trực tuyến',
    image_url: 'https://quatangthanhphat.com/wp-content/uploads/2023/07/Top-banner-poster-ngay-thanh-lap-Dang-Cong-san-Viet-Nam-3-2-dep-thiet-ke-mien-phi-9.jpg',
    subtitle: 'Tra cứu và thực hiện dịch vụ công trực tuyến',
    link_url: '/dich-vu-cong',
    link_target: '_self',
    position: 'sidebar',
    code: 'sidebar-dvc',
    description: 'Banner dịch vụ công sidebar',
    display_mode: 'single',
    layout_width: 450,
    layout_height: 450,
    items: [],
  },
];

export const mockBannerListResponse: BannerListResponse = {
  items: mockBanners,
  total: mockBanners.length,
};

/**
 * Lấy mock banners theo position.
 */
export function getMockBannersByPosition(position?: string): BannerListResponse {
  if (!position) return mockBannerListResponse;
  const filtered = mockBanners.filter((b) => b.position === position);
  return { items: filtered, total: filtered.length };
}

/**
 * Lấy mock active banners theo position (mặc định 'homepage').
 */
export function getMockActiveBanners(position?: string): BannerResponse[] {
  const pos = position || 'homepage';
  return mockBanners.filter((b) => b.position === pos);
}

/**
 * Lấy mock banner theo code.
 */
export function getMockBannerByCode(code: string): BannerResponse | undefined {
  return mockBanners.find((b) => b.code === code);
}
