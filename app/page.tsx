import BlogItem from '@/components/BlogItem/BlogItem';
import Nav from '@/components/Nav/Nav';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';

export default function Home() {
  return (
    <div className="flex justify-center w-[80%] m-auto flex-col mt-8">
      <Nav />
      <section className="grid grid-cols-3 mt-8 gap-20">
        <div className="col-span-1">
          <ProfileSummary />
        </div>
        <div className="col-span-2">
          <BlogItem />
        </div>
      </section>
    </div>
  );
}
