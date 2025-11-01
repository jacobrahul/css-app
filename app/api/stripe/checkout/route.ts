import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const price = (form.get('price') as string) || process.env.STRIPE_PRICE_MONTHLY!;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/settings?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?status=cancelled`,
      allow_promotion_codes: true,
      subscription_data: { trial_period_days: 7 },
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (e:any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
