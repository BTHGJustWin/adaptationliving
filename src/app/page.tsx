'use client';

import Hero from '@/components/Hero';

export default function Page() {
  return (
    // Exactly one viewport tall, and no scroll on the home screen
    <main className="relative h-[100svh] w-full overflow-hidden bg-transparent">
      <Hero />
    </main>
  );
}



