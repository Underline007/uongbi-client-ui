export const menuItems = [
    { label: "TRANG CHỦ", href: "/", active: true },
    { label: "TỔNG QUAN", href: "/about" },
    { label: "THÔNG TIN BẦU CỬ", href: "/election-info", badge: "MỚI" },
    { label: "TIN TỨC", href: "/news" },
    { label: "VĂN BẢN", href: "/documents" },
    { label: "HƯỚNG DẪN TTHC", href: "/administrative-procedures" },
    {
        label: "THÔNG TIN QUY HOẠCH",
        href: "/planning-info",
        submenu: [
            { label: "Các quy hoạch chiến lược", href: "/planning-info?type=strategic" },
            { label: "Xem tất cả quy hoạch", href: "/planning-info" },
        ]
    },
    { label: "THÔNG BÁO", href: "/announcements" },
];
