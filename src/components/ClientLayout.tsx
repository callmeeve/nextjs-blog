'use client';

import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = !['/login', '/register'].includes(pathname) && !pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      {showNavbar && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}