import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(_req: NextRequest) {
  // For demo purposes we create a temporary customer portal session
  // In production, you must pass the real customer id from your DB.
  const customer = await stripe.customers.create({});
  const session = await stripe.billingPortal.sessions.create({
    customer: customer.id,
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/settings`
  });
  return NextResponse.redirect(session.url, { status: 303 });
}
