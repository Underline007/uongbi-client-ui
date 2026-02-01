import { NextResponse } from 'next/server';
import { siteInfoData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: siteInfoData
  });
}
