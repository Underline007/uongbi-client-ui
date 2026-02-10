'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { commentFormSchema, type CommentFormData } from '@/lib/validations';
import { feedbackApi } from '@/lib/api';
import { cn } from '@/lib/utils';

interface CommentFormProps {
  articleSlug: string;
  onCommentAdded: (comment: { id: string; author_name: string; content: string; created_at: string }) => void;
}

export function CommentForm({ articleSlug, onCommentAdded }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      name: '',
      content: '',
    },
  });

  const onSubmit = async (data: CommentFormData) => {
    try {
      const result = await feedbackApi.createComment(articleSlug, {
        author_name: data.name,
        content: data.content,
      }) as Record<string, unknown>;
      onCommentAdded({
        id: (result?.id as string) || crypto.randomUUID(),
        author_name: (result?.author_name as string) || data.name,
        content: (result?.content as string) || data.content,
        created_at: (result?.created_at as string) || new Date().toISOString(),
      });
      toast.success('Bình luận đã được gửi!');
      reset();
    } catch {
      toast.error('Có lỗi xảy ra', {
        description: 'Vui lòng thử lại sau.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="comment-name" className="block text-sm font-medium text-gray-700 mb-1">
          Họ tên <span className="text-red-500">*</span>
        </label>
        <input
          id="comment-name"
          type="text"
          {...register('name')}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
            errors.name ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Nhập họ tên của bạn"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="comment-content" className="block text-sm font-medium text-gray-700 mb-1">
          Nội dung <span className="text-red-500">*</span>
        </label>
        <textarea
          id="comment-content"
          rows={4}
          {...register('content')}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none',
            errors.content ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Viết bình luận của bạn..."
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'px-6 py-2 bg-red-600 text-white font-medium rounded-md',
            'hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-200'
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Đang gửi...
            </span>
          ) : (
            'Gửi bình luận'
          )}
        </button>
      </div>
    </form>
  );
}
