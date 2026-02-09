'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { feedbackApi } from '@/lib/api';
import { CommentForm } from './CommentForm';

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentListProps {
  articleId: string;
}

function formatCommentDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

export function CommentList({ articleId }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    feedbackApi.getComments(articleId).then((res: { data: Comment[] }) => {
      setComments(res.data);
    });
  }, [articleId]);

  const handleCommentAdded = (newComment: Comment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <MessageCircle className="h-5 w-5" />
        Bình luận ({comments.length})
      </h3>

      {/* Comment list */}
      {comments.length > 0 && (
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold text-sm">
                {getInitial(comment.author_name)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm text-gray-900">
                    {comment.author_name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatCommentDate(comment.created_at)}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Comment form */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-base font-semibold text-gray-900 mb-4">
          Để lại bình luận
        </h4>
        <CommentForm articleId={articleId} onCommentAdded={handleCommentAdded} />
      </div>
    </div>
  );
}
