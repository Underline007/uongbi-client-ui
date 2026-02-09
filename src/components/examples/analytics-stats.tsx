'use client';

import { Eye, TrendingUp, Users, Calendar } from 'lucide-react';
import { useAnalyticsStats } from '@/hooks/api';
import { formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface AnalyticsStatsProps {
  className?: string;
}

export function AnalyticsStatsClient({ className }: AnalyticsStatsProps) {
  const { data, isLoading, error } = useAnalyticsStats();

  if (isLoading) {
    return (
      <div className={cn('bg-white border border-gray-200 p-4 shadow-sm', className)}>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={cn('bg-white border border-gray-200 p-4 shadow-sm', className)}>
        <p className="text-gray-500 text-sm">Không thể tải thống kê</p>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stats = data as any;

  return (
    <div className={cn('bg-white border border-gray-200 p-4 shadow-sm', className)}>
      <div className="flex items-center justify-between mb-4 pb-2">
        <h3 className="text-xl font-bold text-gray-900">THỐNG KÊ TRUY CẬP</h3>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Eye className="h-5 w-5 text-green-600" />
            <div className="text-sm text-gray-600">Đang truy cập</div>
          </div>
          <div className="text-lg font-bold text-green-600">{formatNumber(stats.online)}</div>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <div className="text-sm text-gray-600">Hôm nay</div>
          </div>
          <div className="text-lg font-bold text-blue-600">{formatNumber(stats.today)}</div>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-purple-600" />
            <div className="text-sm text-gray-600">Tháng này</div>
          </div>
          <div className="text-lg font-bold text-purple-600">{formatNumber(stats.thisMonth)}</div>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-red-600" />
            <div className="text-sm text-gray-600">Tổng cộng</div>
          </div>
          <div className="text-lg font-bold text-red-600">{formatNumber(stats.total)}</div>
        </div>
      </div>
    </div>
  );
}
