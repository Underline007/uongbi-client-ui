import { NextResponse } from 'next/server';
import { electionInfoData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: electionInfoData
  });
}
