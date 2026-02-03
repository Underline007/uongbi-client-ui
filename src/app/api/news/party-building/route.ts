import { NextResponse } from 'next/server';
import { partyBuildingData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: partyBuildingData
  });
}
