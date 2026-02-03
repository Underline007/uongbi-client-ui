import { NextResponse } from 'next/server';
import { organizationMembersData } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: organizationMembersData
  });
}
