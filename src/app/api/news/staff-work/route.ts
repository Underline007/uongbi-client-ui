import { NextResponse } from 'next/server';
import { staffWorkData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: staffWorkData
  });
}
