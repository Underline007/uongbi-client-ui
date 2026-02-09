import { useQuery } from '@tanstack/react-query';
import { documentsApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';

export function useDocSections(doc_type?: string) {
  return useQuery({
    queryKey: queryKeys.documents.sections(doc_type),
    queryFn: () => documentsApi.getSections(doc_type),
    staleTime: 10 * 60 * 1000,
  });
}

export function useDocSectionDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.documents.sectionDetail(slug),
    queryFn: () => documentsApi.getSectionBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

export function useDocumentDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.documents.detail(slug),
    queryFn: () => documentsApi.getBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

export function useDataSheetDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.documents.dataSheet(slug),
    queryFn: () => documentsApi.getDataSheet(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
