import { NextResponse } from 'next/server';
import { analyticsStatsData } from '@/lib/mock-data';

export async function GET() {
  // Update lastUpdated to current time
  const data = {
    ...analyticsStatsData,
    lastUpdated: new Date().toISOString()
  };

  return NextResponse.json({
    success: true,
    data
  });
}
