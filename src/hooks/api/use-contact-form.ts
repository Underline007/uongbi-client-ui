import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import type { ContactFormData } from '@/lib/validations';

interface ContactFormResponse {
  id: string;
  trackingCode: string;
  status: string;
  message: string;
  createdAt: string;
}

// Submit contact form
export function useSubmitContactForm() {
  return useMutation({
    mutationFn: (data: ContactFormData) =>
      api.post<ContactFormResponse>('/forms/contact', data),
    onError: (error) => {
      console.error('Contact form submission failed:', error);
    },
  });
}

// Fetch contact subjects
export function useContactSubjects() {
  return useMutation({
    mutationFn: () =>
      api.get<Array<{ id: string; label: string; order: number }>>('/forms/contact/subjects'),
  });
}
