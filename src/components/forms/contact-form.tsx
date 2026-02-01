'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { useSubmitContactForm } from '@/hooks/api';
import { cn } from '@/lib/utils';

const contactSubjects = [
  { id: 'subj-1', label: 'Hỏi đáp thủ tục hành chính' },
  { id: 'subj-2', label: 'Phản ánh, kiến nghị' },
  { id: 'subj-3', label: 'Góp ý xây dựng' },
  { id: 'subj-4', label: 'Khiếu nại, tố cáo' },
  { id: 'subj-5', label: 'Đăng ký lịch làm việc' },
  { id: 'subj-6', label: 'Hợp tác, đầu tư' },
  { id: 'subj-7', label: 'Khác' },
];

export function ContactForm() {
  const submitMutation = useSubmitContactForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      subjectId: '',
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await submitMutation.mutateAsync(data);
      toast.success('Gửi thành công!', {
        description: `Mã theo dõi của bạn: ${result.data.trackingCode}`,
      });
      reset();
    } catch {
      toast.error('Có lỗi xảy ra', {
        description: 'Vui lòng thử lại sau.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className={cn(
              'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="Nguyễn Văn A"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={cn(
              'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
              errors.phone ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="0912345678"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
              errors.email ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Địa chỉ
          </label>
          <input
            id="address"
            type="text"
            {...register('address')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Số nhà, đường, phường..."
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subjectId" className="block text-sm font-medium text-gray-700 mb-1">
          Chủ đề <span className="text-red-500">*</span>
        </label>
        <select
          id="subjectId"
          {...register('subjectId')}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
            errors.subjectId ? 'border-red-500' : 'border-gray-300'
          )}
        >
          <option value="">-- Chọn chủ đề --</option>
          {contactSubjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.label}
            </option>
          ))}
        </select>
        {errors.subjectId && (
          <p className="mt-1 text-sm text-red-500">{errors.subjectId.message}</p>
        )}
      </div>

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Tiêu đề <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          {...register('title')}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent',
            errors.title ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Tiêu đề nội dung liên hệ"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Nội dung <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          rows={6}
          {...register('content')}
          className={cn(
            'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none',
            errors.content ? 'border-red-500' : 'border-gray-300'
          )}
          placeholder="Nhập nội dung chi tiết..."
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting || submitMutation.isPending}
          className={cn(
            'px-6 py-3 bg-red-600 text-white font-medium rounded-md',
            'hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors duration-200'
          )}
        >
          {isSubmitting || submitMutation.isPending ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
            'Gửi liên hệ'
          )}
        </button>
      </div>
    </form>
  );
}
