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
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Check if a menu item is active based on current pathname
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative bg-white border-b border-gray-200 transition-all duration-300" style={{ fontFamily: 'var(--font-merriweather), Merriweather, serif' }}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-8 pb-0 pt-3 sm:pt-4 relative">
                    {menuItems.map((item) => {
                        // Special handling for dropdown menu
                        if (item.submenu) {
                            return (
                                <div key={item.href} className="relative pb-3" ref={dropdownRef}>
                                    <div className="relative group dropdown-menu">
                                        <button
                                            className="font-medium hover:text-red-600 transition-colors flex items-center whitespace-nowrap text-xs sm:text-sm lg:text-base focus:outline-none"
                                            style={{ color: 'rgb(55, 65, 81)' }}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            {item.label}
                                            <ChevronDown className={`ml-0.5 sm:ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Dropdown Content */}
                                        {isDropdownOpen && (
                                            <div className="dropdown-content absolute top-full left-0 z-[9999] mt-2 min-w-max">
                                                <div className="bg-white border border-gray-200 overflow-hidden max-h-[80vh] overflow-y-auto shadow-lg rounded-md">
                                                    <div className="w-64 py-2">
                                                        {item.submenu.map((sub, index) => (
                                                            <Link
                                                                key={sub.href}
                                                                href={sub.href}
                                                                className="block px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                                                                onClick={() => setIsDropdownOpen(false)}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex-1">
                                                                        <div className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                                                                            {sub.label}
                                                                        </div>
                                                                    </div>
                                                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        // Regular menu items
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative pb-3 hover:text-red-700 transition-colors whitespace-nowrap text-xs sm:text-sm lg:text-base ${isActive(item.href)
                                        ? "font-bold text-red-600 border-b-2 border-red-600"
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
                    <div className="flex-1"></div>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex-1 overflow-x-auto overflow-y-visible scrollbar-hide-only -mb-px">
                            <div className="flex items-center space-x-4 px-1">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`relative py-3 hover:text-red-700 transition-colors whitespace-nowrap text-xs ${isActive(item.href)
                                                ? "font-bold text-red-600 border-b-2 border-red-600"
                                                : "font-medium hover:text-red-600"
                                            } ${item.badge ? "pr-8" : ""}`}
                                        style={isActive(item.href) ? {} : { color: 'rgb(55, 65, 81)' }}
                                    >
                                        {item.label}
                                        {item.badge && (
                                            <span className="absolute -top-1 right-0 bg-red-500 text-white text-[9px] px-1 py-0.5 rounded font-bold shadow-sm">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <button
                            className="ml-3 p-2 text-gray-700 hover:text-red-600 transition-colors"
                            aria-label="Toggle mobile menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50">
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
        </div>
    );
}
