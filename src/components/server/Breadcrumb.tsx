import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-red-600 transition-colors">
                Trang chủ
            </Link>

            {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                    <span key={index} className="inline-flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        {isLast || !item.href ? (
                            <span className="text-gray-900 font-medium truncate max-w-[200px]">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className="hover:text-red-600 transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
