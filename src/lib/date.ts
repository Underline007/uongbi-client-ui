import {
  format,
  formatDistanceToNow,
  parseISO,
  isValid,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';
import { vi } from 'date-fns/locale';

// Format date to Vietnamese locale
export function formatDate(date: string | Date, formatStr = 'dd/MM/yyyy'): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(parsedDate)) return '';
  return format(parsedDate, formatStr, { locale: vi });
}

// Format date with time
export function formatDateTime(date: string | Date): string {
  return formatDate(date, 'HH:mm - dd/MM/yyyy');
}

// Format to full Vietnamese date
export function formatFullDate(date: string | Date): string {
  return formatDate(date, "EEEE, 'ngày' dd 'tháng' MM 'năm' yyyy");
}

// Get relative time (e.g., "2 giờ trước")
export function getRelativeTime(date: string | Date): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(parsedDate)) return '';

  const now = new Date();
  const diffMinutes = differenceInMinutes(now, parsedDate);
  const diffHours = differenceInHours(now, parsedDate);
  const diffDays = differenceInDays(now, parsedDate);

  if (diffMinutes < 1) {
    return 'Vừa xong';
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} phút trước`;
  }
  if (diffHours < 24) {
    return `${diffHours} giờ trước`;
  }
  if (diffDays < 7) {
    return `${diffDays} ngày trước`;
  }
  if (diffDays < 30) {
    return `${Math.floor(diffDays / 7)} tuần trước`;
  }
  if (diffDays < 365) {
    return `khoảng ${Math.floor(diffDays / 30)} tháng trước`;
  }
  return `${Math.floor(diffDays / 365)} năm trước`;
}

// Format distance to now using date-fns
export function formatDistanceFromNow(date: string | Date): string {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(parsedDate)) return '';
  return formatDistanceToNow(parsedDate, { addSuffix: true, locale: vi });
}

// Check if date is today
export function isToday(date: string | Date): boolean {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(parsedDate)) return false;
  const today = new Date();
  return (
    parsedDate.getDate() === today.getDate() &&
    parsedDate.getMonth() === today.getMonth() &&
    parsedDate.getFullYear() === today.getFullYear()
  );
}

// Check if date is this week
export function isThisWeek(date: string | Date): boolean {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(parsedDate)) return false;
  return differenceInDays(new Date(), parsedDate) <= 7;
}

// Format for API requests (ISO)
export function toISOString(date: Date): string {
  return date.toISOString();
}

// Parse date string safely
export function parseDate(dateStr: string): Date | null {
  const parsed = parseISO(dateStr);
  return isValid(parsed) ? parsed : null;
}
