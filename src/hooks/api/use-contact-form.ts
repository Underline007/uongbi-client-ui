// DEPRECATED: Contact form now uses feedback API
import { useMutation } from '@tanstack/react-query';
import { feedbackApi } from '@/lib/api';

export function useSubmitContactForm() {
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      feedbackApi.submitForm('contact', {
        data,
        submitter_name: data.fullName as string,
        submitter_email: data.email as string,
        submitter_phone: data.phone as string,
      }),
  });
}
