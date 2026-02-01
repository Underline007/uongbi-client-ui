import { NextResponse } from 'next/server';
import { partyActivityData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: partyActivityData
  });
}
