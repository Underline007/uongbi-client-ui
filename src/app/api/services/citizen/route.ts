import { NextResponse } from 'next/server';
import { citizenServicesData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: citizenServicesData
  });
}
