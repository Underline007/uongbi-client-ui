"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
    placeholder?: string;
    accentColor?: "red" | "blue";
    onSearch?: (query: string) => void;
}

export function SearchInput({
    placeholder = "Tìm kiếm...",
    accentColor = "red",
    onSearch,
}: SearchInputProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch?.(value);
    };

    const focusColorClass = accentColor === "red"
        ? "group-focus-within:text-red-500 focus:ring-red-500/20 focus:border-red-500"
        : "group-focus-within:text-blue-500 focus:ring-blue-500/20 focus:border-blue-500";

    const iconFocusClass = accentColor === "red"
        ? "group-focus-within:text-red-500"
        : "group-focus-within:text-blue-500";

    return (
        <div className="mb-3 md:mb-6">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-2 md:pl-4 flex items-center pointer-events-none">
                    <Search className={`h-4 w-4 md:h-5 md:w-5 text-slate-400 ${iconFocusClass} transition-colors`} />
                </div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleChange}
                    className={`block w-full pl-8 md:pl-12 pr-8 md:pr-12 py-2 md:py-3 text-xs md:text-base border border-slate-300 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 ${focusColorClass} transition-all duration-300`}
                />
            </div>
        </div>
    );
}
