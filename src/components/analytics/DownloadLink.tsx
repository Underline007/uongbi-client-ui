'use client';

import { trackDocumentDownload } from '@/lib/analytics';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface DownloadLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  fileName: string;
  fileType?: string;
  children: ReactNode;
}

/**
 * Extract file extension from URL or filename
 */
function getFileExtension(url: string): string {
  const match = url.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
  return match ? match[1].toLowerCase() : 'unknown';
}

/**
 * Link component that tracks document downloads
 * Use this for downloadable files (PDF, DOC, XLS, etc.)
 */
export function DownloadLink({
  href,
  fileName,
  fileType,
  children,
  onClick,
  ...props
}: DownloadLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const extension = fileType || getFileExtension(href);
    trackDocumentDownload(fileName, extension);

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      download={fileName}
      {...props}
    >
      {children}
    </a>
  );
}
