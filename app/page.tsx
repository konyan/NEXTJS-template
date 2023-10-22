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
      <div>
        <div className="w-[80%] flex justify-center h-full m-auto flex-col mt-2">
          <Nav />
        </div>
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
              <Pagination /> {/* hide in mobile device */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
