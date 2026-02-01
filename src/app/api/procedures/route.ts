import { NextResponse } from 'next/server';
import { proceduresData } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  let filteredData = [...proceduresData];

  if (search) {
    filteredData = filteredData.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category) {
    filteredData = filteredData.filter(p => p.category === category);
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
