"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { menuItems } from "@/data/menu";

export function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Check if a menu item is active based on current pathname
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    const handleToggleDropdown = () => {
        if (!isDropdownOpen && triggerRef.current && containerRef.current) {
            const btnRect = triggerRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            setDropdownPos({
                left: btnRect.left - containerRect.left,
                top: btnRect.bottom - containerRect.top + 4,
            });
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (
                triggerRef.current?.contains(target) ||
                dropdownRef.current?.contains(target)
            ) return;
            setIsDropdownOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative bg-white border-b border-gray-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Navigation */}
                <div className="flex items-center">
                    {/* Navbar - always visible, clipped if overflow */}
                    <nav className="flex-1 min-w-0 overflow-hidden pt-3">
                        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8 pb-3">
                            {menuItems.map((item) => {
                                if (item.submenu) {
                                    return (
                                        <div key={item.href} className="relative">
                                            <button
                                                ref={triggerRef}
                                                className="font-medium hover:text-red-600 transition-colors flex items-center whitespace-nowrap text-xs sm:text-sm lg:text-base focus:outline-none"
                                                style={{ color: 'rgb(55, 65, 81)' }}
                                                onClick={handleToggleDropdown}
                                            >
                                                {item.label}
                                                <ChevronDown className={`ml-0.5 sm:ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative hover:text-red-700 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base ${isActive(item.href)
                                                ? "font-bold text-red-600 border-b-2 border-red-600 pb-[10px]"
                                                : "font-medium hover:text-red-600"
                                            } ${item.badge ? "pr-10" : ""}`}
                                        style={isActive(item.href) ? {} : { color: 'rgb(55, 65, 81)' }}
                                    >
                                        {item.label}
                                        {item.badge && (
                                            <span className="absolute -top-2 right-0 bg-red-500 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Hamburger - only visible below 1024px */}
                    <button
                        className="lg:hidden flex-shrink-0 ml-3 p-2 text-gray-700 hover:text-red-600 transition-colors"
                        aria-label="Toggle mobile menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Submenu dropdown for quy hoạch */}
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute z-[9999] min-w-max"
                        style={{ left: dropdownPos.left, top: dropdownPos.top }}
                    >
                        <div className="bg-white border border-gray-200 overflow-hidden max-h-[80vh] overflow-y-auto shadow-lg rounded-md">
                            <div className="w-64 py-2">
                                {menuItems
                                    .filter((item) => item.submenu)
                                    .flatMap((item) => item.submenu!)
                                    .map((sub) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="block px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                                                    {sub.label}
                                                </div>
                                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50">
                        <div className="py-2">
                            {menuItems.map((item) => (
                                <div key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-3 text-sm ${isActive(item.href)
                                                ? "font-bold text-red-600 bg-red-50"
                                                : "font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                        {item.badge && (
                                            <span className="ml-2 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                    {item.submenu && (
                                        <div className="bg-gray-50 pl-4">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-4 py-2.5 text-sm text-gray-600 hover:text-red-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
