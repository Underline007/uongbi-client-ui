import { NextResponse } from 'next/server';
import { newsCategoriesData, threeCategoriesData } from '@/lib/mock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'three-categories') {
    return NextResponse.json({
      success: true,
      data: threeCategoriesData
    });
  }

  return NextResponse.json({
    success: true,
    data: newsCategoriesData
  });
}
