import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { feedbackApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import type { CreateCommentRequest, ReactionRequest, SubmitFormRequest, PaginationParams } from '@/types/api';

export function useArticleComments(articleSlug: string, params?: PaginationParams) {
  return useQuery({
    queryKey: queryKeys.feedback.comments(articleSlug, params),
    queryFn: () => feedbackApi.getComments(articleSlug, params),
    enabled: !!articleSlug,
    staleTime: 60 * 1000,
  });
}

export function useCreateComment(articleSlug: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateCommentRequest) =>
      feedbackApi.createComment(articleSlug, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.feedback.comments(articleSlug),
      });
    },
  });
}

export function useAddReaction() {
  return useMutation({
    mutationFn: ({ commentId, data }: { commentId: string; data: ReactionRequest }) =>
      feedbackApi.addReaction(commentId, data),
  });
}

export function useFeedbackForms() {
  return useQuery({
    queryKey: queryKeys.feedback.forms(),
    queryFn: () => feedbackApi.listForms(),
    staleTime: 10 * 60 * 1000,
  });
}

export function useFeedbackForm(formSlug: string) {
  return useQuery({
    queryKey: queryKeys.feedback.form(formSlug),
    queryFn: () => feedbackApi.getForm(formSlug),
    enabled: !!formSlug,
    staleTime: 10 * 60 * 1000,
  });
}

export function useSubmitForm(formId: string) {
  return useMutation({
    mutationFn: (data: SubmitFormRequest) =>
      feedbackApi.submitForm(formId, data),
  });
}
