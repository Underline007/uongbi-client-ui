import { NextResponse } from 'next/server';
import { contactInfoData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: contactInfoData
  });
}
