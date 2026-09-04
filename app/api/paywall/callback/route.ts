import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const therapistId = searchParams.get('therapist_id');
  const clientId = searchParams.get('client_id');
  const paymentIntentId = searchParams.get('payment_intent_id');

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  console.log('CALLBACK HIT with params:', {
    status,
    therapistId,
    clientId,
    paymentIntentId,
  });

  if (status !== 'success' || !therapistId) {
    return NextResponse.redirect(`${appUrl}?error=unlock_failed`);
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // If clientId is the placeholder zero-UUID, pass null to avoid foreign key errors
  const validClientId =
    clientId === '00000000-0000-0000-0000-000000000000' || !clientId
      ? null
      : clientId;

  const { error } = await supabaseAdmin
    .from('contact_unlocks')
    .insert([
      {
        therapist_id: therapistId,
        client_id: validClientId,
        payment_intent_id: paymentIntentId,
        payment_reference: paymentIntentId,
      },
    ]);

  if (error) {
    console.error('SUPABASE INSERT ERROR:', error);
    return NextResponse.redirect(`${appUrl}?error=unlock_failed`);
  }

  console.log('SUPABASE INSERT SUCCESS');
  return NextResponse.redirect(`${appUrl}?unlocked=${therapistId}`);
}