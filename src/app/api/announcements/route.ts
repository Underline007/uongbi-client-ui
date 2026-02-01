import { NextResponse } from 'next/server';
import { announcementsData } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const pinned = searchParams.get('pinned');

  let filteredData = [...announcementsData];

  if (pinned === 'true') {
    filteredData = filteredData.filter(a => a.pinned);
  }

  const total = filteredData.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedData = filteredData.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    success: true,
    data: paginatedData,
    meta: {
      total,
      page,
      limit,
      totalPages
    }
  });
}
