import Link from "next/link";
import type { HighlightColumn, HighlightItem } from "@/types/api";

interface HighlightsSectionProps {
    highlights: HighlightColumn[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
    // Flatten all items from all columns into a single list
    const allItems: HighlightItem[] = highlights.flatMap((col) => col.items);
    if (allItems.length === 0) return null;

    // Decide layout based on total item count
    const useGrid = allItems.length > 3;

    // Build rows
    const rows: HighlightItem[][] = [];
    if (useGrid) {
        // Chunk into rows of 3
        for (let i = 0; i < allItems.length; i += 3) {
            rows.push(allItems.slice(i, i + 3));
        }
    } else {
        // Each item is its own row (full-width)
        for (const item of allItems) {
            rows.push([item]);
        }
    }

    return (
        <div className="h-full">
            <div className="relative h-full">
                <div className="mb-[-16px] relative z-10 pl-4">
                    <span className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase shadow-md">
                        Tiêu điểm
                    </span>
                </div>
                <div className="bg-gray-50 p-3 lg:p-3 lg:pt-14 relative h-full flex flex-col">
                    <div className="flex flex-col flex-1">
                        {rows.map((row, rowIndex) => {
                            const colCount = row.length;
                            const gridClass =
                                colCount === 3
                                    ? "grid grid-cols-1 md:grid-cols-3 gap-0 flex-1"
                                    : colCount === 2
                                      ? "grid grid-cols-1 md:grid-cols-2 gap-0 flex-1"
                                      : "flex flex-col flex-1";

                            return (
                                <div
                                    key={rowIndex}
                                    className={gridClass}
                                >
                                    {row.map((item, colIndex) => (
                                        <div
                                            key={item.id}
                                            className={`relative px-4 py-3 flex flex-col justify-center ${
                                                colCount >= 2 && colIndex < row.length - 1
                                                    ? "md:border-r md:border-gray-300"
                                                    : ""
                                            } ${
                                                rowIndex < rows.length - 1
                                                    ? "border-b border-dashed border-gray-300"
                                                    : ""
                                            }`}
                                        >
                                            <span className="text-xs text-gray-500 block mb-1">{item.date}</span>
                                            <Link
                                                className={`${item.featured ? 'font-semibold' : ''} text-gray-900 hover:text-red-600 transition-colors text-sm leading-relaxed line-clamp-2`}
                                                href={`/news/${item.id}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
