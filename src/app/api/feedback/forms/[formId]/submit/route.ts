import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const ORG_CODE = process.env.NEXT_PUBLIC_ORG_CODE;

// Rate limit: 3 submissions per minute per IP
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;
  const ip = getClientIp(request);

  // Check rate limit
  const { allowed, remaining, retryAfterMs } = rateLimit(
    `form-submit:${ip}`,
    { limit: RATE_LIMIT, windowMs: RATE_WINDOW_MS }
  );

  if (!allowed) {
    const retryAfterSeconds = Math.ceil(retryAfterMs / 1000);
    return NextResponse.json(
      {
        detail: `Bạn đã gửi quá nhiều lần. Vui lòng chờ ${retryAfterSeconds} giây rồi thử lại.`,
        retry_after: retryAfterSeconds,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfterSeconds),
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
        },
      }
    );
  }

  // Proxy to backend
  try {
    const body = await request.json();
    const backendUrl = `${API_URL}/api/v1/${ORG_CODE}/feedback/forms/${formId}/submit`;

    const backendRes = await fetch(backendUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json().catch(() => null);

    return NextResponse.json(data, {
      status: backendRes.status,
      headers: {
        'X-RateLimit-Limit': String(RATE_LIMIT),
        'X-RateLimit-Remaining': String(remaining),
      },
    });
  } catch {
    return NextResponse.json(
      { detail: 'Không thể kết nối đến máy chủ.' },
      { status: 502 }
    );
  }
}
