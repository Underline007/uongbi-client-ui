'use client';

import { Facebook, Twitter, MessageCircle, LinkIcon } from 'lucide-react';
import { trackSocialShare } from '@/lib/analytics';
import { toast } from 'sonner';
import Image from 'next/image';

interface ShareButtonsProps {
  contentType: 'news' | 'procedure' | 'announcement';
  itemId: string | number;
  title: string;
  url?: string;
}

/**
 * Social share buttons with GA4 tracking
 */
export function ShareButtons({ contentType, itemId, title, url }: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleShare = (platform: 'facebook' | 'twitter' | 'zalo' | 'copy') => {
    trackSocialShare(platform, contentType, itemId, title);

    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'zalo':
        window.open(
          `https://share.zalo.me/?url=${encodedUrl}&title=${encodedTitle}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'copy':
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(shareUrl).then(() => {
            toast.success('Đã sao chép liên kết!');
          }).catch(() => {
            toast.error('Không thể sao chép liên kết');
          });
        } else {
          // Fallback cho browser cũ hoặc HTTP
          const textArea = document.createElement('textarea');
          textArea.value = shareUrl;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            toast.success('Đã sao chép liên kết!');
          } catch {
            toast.error('Không thể sao chép liên kết');
          }
          document.body.removeChild(textArea);
        }
        break;
    }
  };

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="text-xs font-medium text-gray-600 mr-2">Chia sẻ:</span>
      <button
        onClick={() => handleShare('facebook')}
        className="p-1.5 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        title="Chia sẻ lên Facebook"
      >
        <Facebook className="h-3 w-3" />
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="p-1.5 bg-black text-white hover:bg-gray-800 transition-colors"
        title="Chia sẻ lên X (Twitter)"
      >
        <Twitter className="h-3 w-3" />
      </button>
      <button
        onClick={() => handleShare('zalo')}
        className="p-1.5 bg-green-400 text-white hover:bg-green-600 transition-colors"
        title="Chia sẻ lên Zalo"
      >
        <Image
        src='/zalo.svg'
        alt='Chia sẻ lên Zalo'
        width={5}
        height={5}
        className='w-3 h-3'
        />
      </button>
      <button
        onClick={() => handleShare('copy')}
        className="p-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        title="Sao chép liên kết"
      >
        <LinkIcon className="h-3 w-3" />
      </button>
    </div>
  );
}
