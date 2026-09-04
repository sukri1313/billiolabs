'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        alert(error.message);
      } else {
        alert('Account created! Logging you in...');
        const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password });
        if (!signInErr) router.push('/');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        alert(error.message);
      } else {
        router.push('/');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm border p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">{isSignUp ? 'Create Account' : 'Log In'}</h1>
        
        <input 
          type="email" 
          placeholder="Email address" 
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border p-2 rounded"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          required
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded font-semibold">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>

        <p className="text-sm text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
          <button 
            type="button" 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="text-blue-600 underline font-semibold"
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
}