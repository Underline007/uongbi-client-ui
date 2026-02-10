import { cache } from 'react';
import { organizationApi } from '@/lib/api';
import type { OrganizationResponse } from '@/types/api';

// React cache ensures a single fetch per render pass across all server components
export const getOrganization = cache(async (): Promise<OrganizationResponse | null> => {
  try {
    return await organizationApi.get();
  } catch {
    return null;
  }
});
