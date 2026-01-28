export const menuItems = [
    { label: "TRANG CHỦ", href: "/", active: true },
    { label: "TỔNG QUAN", href: "/about" },
    { label: "THÔNG TIN BẦU CỬ", href: "/election-info", badge: "MỚI" },
    { label: "TIN TỨC", href: "/news" },
    { label: "VĂN BẢN", href: "/documents" },
    { label: "HƯỚNG DẪN TTHC", href: "/procedures" },
    {
        label: "THÔNG TIN QUY HOẠCH",
        href: "/plannings",
        submenu: [
            { label: "Các quy hoạch chiến lược", href: "/plannings?type=strategic" },
            { label: "Xem tất cả quy hoạch", href: "/plannings" },
        ]
    },
    { label: "THÔNG BÁO", href: "/announcements" },
];
