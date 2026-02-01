'use client';

import { QueryProvider } from './query-provider';
import { ToastProvider } from './toast-provider';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      {children}
      <ToastProvider />
    </QueryProvider>
  );
}

export { QueryProvider } from './query-provider';
export { ToastProvider } from './toast-provider';
