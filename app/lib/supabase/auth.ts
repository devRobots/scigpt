'use client';

import { createClient } from '@/app/lib/supabase/core/client';

export async function signInWithOAuth() {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({ provider: 'github' });
}