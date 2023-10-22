import BlogItem from '@/components/BlogItem/BlogItem';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';
import Cursor from '@/components/Cursor';
import Pagination from '@/components/Pagination/Pagination';

export default function Home() {
  return (
    <div>
      <Cursor />
      <div className="flex justify-center w-[80%] m-auto flex-col mt-2">
        <Nav />
        <section className="grid grid-cols-3 mt-6 gap-20">
          <div className="col-span-1">
            <ProfileSummary />
          </div>
          <div className="col-span-2 flex gap-2 flex-col">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <Pagination />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
