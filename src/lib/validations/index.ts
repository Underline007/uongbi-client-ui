import { z } from 'zod';

// Common validation patterns
const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reusable field schemas
export const phoneSchema = z.string()
  .regex(phoneRegex, 'Số điện thoại không hợp lệ')
  .or(z.literal(''));

export const emailSchema = z.string()
  .regex(emailRegex, 'Email không hợp lệ')
  .or(z.literal(''));

export const requiredString = (fieldName: string) =>
  z.string().min(1, `${fieldName} là bắt buộc`);

export const optionalString = z.string().optional().or(z.literal(''));

// Contact Form Schema
export const contactFormSchema = z.object({
  fullName: requiredString('Họ và tên')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(100, 'Họ tên không được quá 100 ký tự'),
  email: z.string()
    .min(1, 'Email là bắt buộc')
    .email('Email không hợp lệ'),
  phone: z.string()
    .min(1, 'Số điện thoại là bắt buộc')
    .regex(phoneRegex, 'Số điện thoại không hợp lệ (VD: 0912345678)'),
  address: optionalString,
  subjectId: requiredString('Chủ đề'),
  title: requiredString('Tiêu đề')
    .min(10, 'Tiêu đề phải có ít nhất 10 ký tự')
    .max(200, 'Tiêu đề không được quá 200 ký tự'),
  content: requiredString('Nội dung')
    .min(20, 'Nội dung phải có ít nhất 20 ký tự')
    .max(5000, 'Nội dung không được quá 5000 ký tự'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Search Form Schema
export const searchFormSchema = z.object({
  query: z.string().min(2, 'Từ khóa tìm kiếm phải có ít nhất 2 ký tự'),
  category: optionalString,
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
});

export type SearchFormData = z.infer<typeof searchFormSchema>;

// Procedure Search Schema
export const procedureSearchSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  page: z.number().min(1).optional().default(1),
  limit: z.number().min(1).max(100).optional().default(10),
});

export type ProcedureSearchData = z.infer<typeof procedureSearchSchema>;

// News Filter Schema
export const newsFilterSchema = z.object({
  page: z.number().min(1).optional().default(1),
  limit: z.number().min(1).max(50).optional().default(10),
  category: z.string().optional(),
  search: z.string().optional(),
  featured: z.boolean().optional(),
  sortBy: z.enum(['createdAt', 'views', 'title']).optional().default('createdAt'),
  order: z.enum(['asc', 'desc']).optional().default('desc'),
});

export type NewsFilterData = z.infer<typeof newsFilterSchema>;

// Feedback Form Schema
export const feedbackFormSchema = z.object({
  fullName: requiredString('Họ và tên')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự'),
  email: z.string()
    .min(1, 'Email là bắt buộc')
    .email('Email không hợp lệ'),
  phone: phoneSchema,
  rating: z.number()
    .min(1, 'Vui lòng chọn đánh giá')
    .max(5, 'Đánh giá không hợp lệ'),
  feedback: requiredString('Nội dung góp ý')
    .min(10, 'Nội dung phải có ít nhất 10 ký tự')
    .max(2000, 'Nội dung không được quá 2000 ký tự'),
});

export type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z.string()
    .min(1, 'Email là bắt buộc')
    .email('Email không hợp lệ'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Comment Form Schema
export const commentFormSchema = z.object({
  name: requiredString('Họ tên')
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ tên không được quá 50 ký tự'),
  content: requiredString('Nội dung')
    .min(5, 'Nội dung phải có ít nhất 5 ký tự')
    .max(1000, 'Nội dung không được quá 1000 ký tự'),
});

export type CommentFormData = z.infer<typeof commentFormSchema>;

// Login Schema (for future admin panel)
export const loginSchema = z.object({
  username: requiredString('Tên đăng nhập')
    .min(3, 'Tên đăng nhập phải có ít nhất 3 ký tự'),
  password: requiredString('Mật khẩu')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  remember: z.boolean().optional().default(false),
});

export type LoginFormData = z.infer<typeof loginSchema>;
