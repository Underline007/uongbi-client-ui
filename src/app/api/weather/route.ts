import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || 'Ha Long';

  if (!API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
  }

  try {
    // Support lat/lon format: "lat=12.0&lon=107.68"
    let url: string;
    if (query.startsWith('lat=')) {
      url = `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&lang=vi&appid=${API_KEY}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)},VN&units=metric&lang=vi&appid=${API_KEY}`;
    }

    const res = await fetch(url, { next: { revalidate: 600 } });

    if (!res.ok) {
      return NextResponse.json({ error: 'Weather API error' }, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json({
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
  }
}
