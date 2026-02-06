'use client';

import { trackOutboundLink } from '@/lib/analytics';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface OutboundLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/**
 * Link component that tracks outbound link clicks
 * Use this for external links (links to other domains)
 */
export function OutboundLink({
  href,
  children,
  onClick,
  ...props
}: OutboundLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackOutboundLink(href);

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
