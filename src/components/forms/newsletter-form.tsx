'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';
import { newsletterSchema, type NewsletterData } from '@/lib/validations';
import { cn } from '@/lib/utils';

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', data);
      toast.success('Đăng ký thành công!', {
        description: 'Bạn sẽ nhận được thông tin mới nhất qua email.',
      });
      reset();
    } catch {
      toast.error('Có lỗi xảy ra', {
        description: 'Vui lòng thử lại sau.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            {...register('email')}
            className={cn(
              'w-full pl-10 pr-4 py-2 border rounded-md',
              'focus:ring-2 focus:ring-red-500 focus:border-transparent',
              'placeholder:text-gray-400',
              errors.email ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="Nhập email của bạn"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'px-4 py-2 bg-red-600 text-white font-medium rounded-md',
            'hover:bg-red-700 transition-colors',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'whitespace-nowrap'
          )}
        >
          {isSubmitting ? 'Đang gửi...' : 'Đăng ký'}
        </button>
      </div>
      {errors.email && (
        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
      )}
    </form>
  );
}
