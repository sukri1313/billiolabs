import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    
    if (!apiKey) {
      console.error('Missing STRIPE_SECRET_KEY in environment variables.');
      return NextResponse.json(
        { error: 'Stripe Secret Key is missing in .env.local.' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(apiKey);
    const body = await request.json();
    
    // Safely support either clientId or userId from the request
    const therapistId = body.therapistId;
    const clientId = body.clientId || body.userId;

    if (!therapistId || !clientId) {
      return NextResponse.json(
        { error: 'Missing therapistId or clientId' },
        { status: 400 }
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'myr',
            product_data: {
              name: 'Therapist Contact Unlock',
              description: 'Unlock direct contact details for therapist',
            },
            unit_amount: 500, // RM 5.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/api/paywall/callback?status=success&therapist_id=${therapistId}&client_id=${clientId}&payment_intent_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}?error=cancelled`,
    });

    return NextResponse.json({ paymentUrl: session.url });
  } catch (error: any) {
    console.error('Stripe Checkout session error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}