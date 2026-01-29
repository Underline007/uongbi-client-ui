"use client";

export function FloatingPhoneButton() {
    return (
        <div style={{ position: 'fixed', left: '20px', bottom: '20px', zIndex: 9999 }}>
            <a
                href="tel:02033881892"
                className="block bg-red-600 hover:bg-red-700 text-white p-3 shadow-lg transition-all duration-300 transform hover:scale-110 rounded-none sm:rounded-none"
                title="Đường dây nóng"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-6 w-6">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            </a>
        </div>
    );
}
