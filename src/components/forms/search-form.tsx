'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { searchFormSchema, type SearchFormData } from '@/lib/validations';
import { usePreferencesStore } from '@/stores/app-store';
import { cn } from '@/lib/utils';
import { trackSearch } from '@/lib/analytics';

interface SearchFormProps {
  onClose?: () => void;
  className?: string;
}

export function SearchForm({ onClose, className }: SearchFormProps) {
  const router = useRouter();
  const { recentSearches, addRecentSearch } = usePreferencesStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
      category: '',
    },
  });

  const onSubmit = (data: SearchFormData) => {
    // Track search with GA4
    trackSearch(data.query);

    addRecentSearch(data.query);
    const params = new URLSearchParams();
    params.set('q', data.query);
    if (data.category) params.set('category', data.category);
    router.push(`/search?${params.toString()}`);
    onClose?.();
  };

  const handleRecentSearch = (query: string) => {
    setValue('query', query);
    addRecentSearch(query);
    router.push(`/search?q=${encodeURIComponent(query)}`);
    onClose?.();
  };

  return (
    <div className={cn('w-full', className)}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              {...register('query')}
              className={cn(
                'w-full pl-10 pr-4 py-3 border rounded-lg',
                'focus:ring-2 focus:ring-red-500 focus:border-transparent',
                'placeholder:text-gray-400',
                errors.query ? 'border-red-500' : 'border-gray-300'
              )}
              placeholder="Tìm kiếm tin tức, thủ tục, văn bản..."
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Tìm kiếm
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {errors.query && (
          <p className="mt-1 text-sm text-red-500">{errors.query.message}</p>
        )}
      </form>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Tìm kiếm gần đây</h4>
          <div className="flex flex-wrap gap-2">
            {recentSearches.slice(0, 5).map((search, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleRecentSearch(search)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
