'use client';

import { createClient } from '@/app/lib/supabase/core/client';
import { MouseEvent } from 'react';

export async function signInWithOAuth(e: MouseEvent<HTMLButtonElement>) {
  e.preventDefault();
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({ provider: 'github' });
}