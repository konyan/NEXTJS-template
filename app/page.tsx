'use client';
import BlogItem from '@/components/BlogItem/BlogItem';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';
import Cursor from '@/components/Cursor';
import Pagination from '@/components/Pagination/Pagination';
import { ThemeProvider, useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log('toggle theme', theme);
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <section className="flex flex-col items-center  pt-6 gap-4 lg:gap-20 overflow-scroll h-[1000px]">
      <div className="w-[80%] lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1 border-b border-black_2">
          <ProfileSummary />
        </div>
        <div className="flex gap-2 flex-col lg:col-span-2">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </section>
  );
}
