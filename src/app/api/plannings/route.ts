import { NextResponse } from 'next/server';
import { planningsData, planningFeaturedData, planningSidebarData } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'featured') {
    return NextResponse.json({
      success: true,
      data: {
        featured: planningFeaturedData,
        sidebar: planningSidebarData
      }
    });
  }

  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const category = searchParams.get('category');

  let filteredItems = [...planningsData.items];

  if (category) {
    filteredItems = filteredItems.filter(p => p.category === category);
  }

  const total = filteredItems.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    success: true,
    data: {
      categories: planningsData.categories,
      items: paginatedItems
    },
    meta: {
      total,
      page,
      limit,
      totalPages
    }
  });
}
