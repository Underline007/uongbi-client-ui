import { NextResponse } from 'next/server';
import { procedureDetailData } from '@/lib/mock-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const procedure = procedureDetailData[id];

  if (!procedure) {
    return NextResponse.json({
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: 'Procedure not found'
      }
    }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    data: procedure
  });
}
