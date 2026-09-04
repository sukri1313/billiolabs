'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface Profile {
  id: string;
  full_name: string;
  title: string;
  bio: string;
  location: string;
  hourly_rate: number;
  specialties: string[];
  is_verified: boolean;
  phone_number?: string;
}

function DirectoryContent() {
  const [therapists, setTherapists] = useState<Profile[]>([]);
  const [unlockedContacts, setUnlockedContacts] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    fetchTherapists();
  }, []);

  async function fetchTherapists() {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, title, bio, location, hourly_rate, specialties, is_verified')
      .eq('role', 'therapist');

    if (!error && data) {
      setTherapists(data);
    }
    setLoading(false);
  }

  const handleUnlockContact = async (therapistId: string) => {
    setProcessingId(therapistId);
    try {
      const clientId = '00000000-0000-0000-0000-000000000000';

      const res = await fetch('/api/paywall/create-bill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ therapistId, clientId }),
      });

      const data = await res.json();

      if (res.ok && data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(`Payment initialization failed: ${data.error || 'Check API keys'}`);
        setProcessingId(null);
      }
    } catch (err) {
      alert('An error occurred starting payment.');
      setProcessingId(null);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading yourSegak directory...</div>;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">yourSegak Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {therapists.map((therapist) => {
          const unlockedPhone = unlockedContacts[therapist.id];

          return (
            <div key={therapist.id} className="border rounded-xl p-5 shadow-sm bg-white space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{therapist.full_name}</h2>
                  <p className="text-sm text-gray-600">{therapist.title}</p>
                </div>
                {therapist.is_verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded font-semibold">
                    Act 775 Verified
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-700">{therapist.bio}</p>

              <div className="text-sm font-medium">
                📍 {therapist.location} | RM {therapist.hourly_rate}/hr
              </div>

              <div className="flex flex-wrap gap-1">
                {therapist.specialties?.map((spec) => (
                  <span key={spec} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t mt-3">
                {unlockedPhone ? (
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="text-xs text-green-800 font-semibold">Unlocked Direct Contact:</p>
                    <p className="text-lg font-bold text-green-900">{unlockedPhone}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => handleUnlockContact(therapist.id)}
                    disabled={processingId === therapist.id}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 rounded-lg text-sm transition"
                  >
                    {processingId === therapist.id ? 'Redirecting to Payment...' : 'Unlock Phone Number (RM 5.00)'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default function DirectoryPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading page...</div>}>
      <DirectoryContent />
    </Suspense>
  );
}