import type { Comment } from '@/types/api';

export const commentsData: Comment[] = [
  {
    id: 'cmt-1',
    articleId: '1',
    name: 'Nguyễn Văn Hùng',
    content: 'Rất mong dự án sớm hoàn thành để người dân đi lại thuận tiện hơn. Đường 335 xuống cấp đã lâu rồi.',
    createdAt: '2025-12-28T17:00:00.000Z',
  },
  {
    id: 'cmt-2',
    articleId: '1',
    name: 'Trần Thị Mai',
    content: 'Cảm ơn chính quyền đã quan tâm đầu tư sửa chữa tuyến đường này. Hy vọng chất lượng thi công sẽ tốt và bền vững.',
    createdAt: '2025-12-29T08:30:00.000Z',
  },
  {
    id: 'cmt-3',
    articleId: '1',
    name: 'Lê Minh Tuấn',
    content: 'Tôi thường xuyên đi qua đoạn đường này, thấy đơn vị thi công làm việc rất tích cực. Mong sớm hoàn thành!',
    createdAt: '2025-12-29T14:15:00.000Z',
  },
];
