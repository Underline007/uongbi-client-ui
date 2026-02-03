'use client';

import { FileText } from 'lucide-react';
import { trackSummaryButtonClick } from '@/lib/analytics';

interface SummaryButtonProps {
  articleId: string | number;
  articleTitle: string;
  onClick?: () => void;
}

/**
 * Summary button with GA4 tracking
 */
export function SummaryButton({ articleId, articleTitle, onClick }: SummaryButtonProps) {
  const handleClick = () => {
    trackSummaryButtonClick(articleId, articleTitle);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-purple-100 text-purple-700 hover:bg-purple-200"
      title={`Tóm tắt: ${articleTitle}`}
    >
      <FileText className="h-4 w-4" />
      <span className="text-xs sm:text-sm font-medium">
        <span className="sm:hidden">Tóm tắt</span>
        <span className="hidden sm:inline">Tóm tắt nội dung</span>
      </span>
    </button>
  );
}
