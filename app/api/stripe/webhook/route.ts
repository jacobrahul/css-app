import { NextRequest, NextResponse } from 'next/server';

export async function POST(_req: NextRequest) {
  // Placeholder webhook to avoid 404 during deploy.
  return NextResponse.json({ ok: true });
}
