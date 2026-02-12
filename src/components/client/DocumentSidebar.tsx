"use client";

import { useState } from "react";
import { ChevronRight, FolderOpen, FolderClosed } from "lucide-react";
import type { DocSectionFullTreeNodeResponse } from "@/types/api";

interface DocumentSidebarProps {
    sections: DocSectionFullTreeNodeResponse[];
    selectedSlug: string | null;
    onSelect: (slug: string | null) => void;
    totalCount: number;
}

function TreeNode({
    node,
    level,
    selectedSlug,
    onSelect,
}: {
    node: DocSectionFullTreeNodeResponse;
    level: number;
    selectedSlug: string | null;
    onSelect: (slug: string | null) => void;
}) {
    const hasChildren = node.children && node.children.length > 0;
    const [expanded, setExpanded] = useState(level === 0);
    const isSelected = selectedSlug === node.slug;

    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    onSelect(isSelected ? null : node.slug);
                    if (hasChildren && !isSelected) setExpanded(true);
                }}
                className={`w-full flex items-center gap-2 py-2 px-3 text-left text-sm rounded-lg transition-colors duration-150 cursor-pointer
                    ${isSelected
                        ? "bg-red-50 text-red-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                style={{ paddingLeft: `${level * 16 + 12}px` }}
            >
                {hasChildren && (
                    <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setExpanded(!expanded);
                        }}
                    />
                )}
                {!hasChildren && <span className="w-3.5 shrink-0" />}
                {expanded || isSelected ? (
                    <FolderOpen className="w-4 h-4 shrink-0 text-amber-500" />
                ) : (
                    <FolderClosed className="w-4 h-4 shrink-0 text-gray-400" />
                )}
                <span className="flex-1 min-w-0 truncate">{node.name}</span>
                {node.published_document_count > 0 && (
                    <span className={`text-xs shrink-0 px-1.5 py-0.5 rounded-full ${isSelected ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"}`}>
                        {node.published_document_count}
                    </span>
                )}
            </button>
            {hasChildren && expanded && (
                <div>
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            level={level + 1}
                            selectedSlug={selectedSlug}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export function DocumentSidebar({ sections, selectedSlug, onSelect, totalCount }: DocumentSidebarProps) {
    return (
        <nav className="space-y-1">
            <button
                type="button"
                onClick={() => onSelect(null)}
                className={`w-full flex items-center gap-2 py-2 px-3 text-left text-sm rounded-lg transition-colors duration-150 cursor-pointer
                    ${selectedSlug === null
                        ? "bg-red-50 text-red-700 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
            >
                <span className="w-3.5 shrink-0" />
                <FolderOpen className="w-4 h-4 shrink-0 text-amber-500" />
                <span className="flex-1 min-w-0">Tất cả văn bản</span>
                <span className={`text-xs shrink-0 px-1.5 py-0.5 rounded-full ${selectedSlug === null ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"}`}>
                    {totalCount}
                </span>
            </button>
            {sections.map((section) => (
                <TreeNode
                    key={section.id}
                    node={section}
                    level={0}
                    selectedSlug={selectedSlug}
                    onSelect={onSelect}
                />
            ))}
        </nav>
    );
}
