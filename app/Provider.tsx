'use client';

import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {};
    if (pathname) {
      handleRouteChange(pathname);
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Cursor />
      <div className="pb-4">
        <div className="lg:w-[80%] w-full px-4 flex justify-center h-full m-auto flex-col mt-2">
          <Nav />
        </div>
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
