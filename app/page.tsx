'use client';
import BlogItem from '@/components/BlogItem/BlogItem';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';

export default function Home() {
  return (
    <section className="flex flex-col items-center  pt-6 gap-4 lg:gap-20 overflow-scroll h-[1000px]">
      <div className="w-[80%] lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1">
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
