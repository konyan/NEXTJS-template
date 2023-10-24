'use client';
import BlogItem from '@/components/BlogItem/BlogItem';
import ProfileSummary from '@/components/ProfileSummary/ProfileSummary';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from 'contentlayer/generated';
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { useRouter } from 'next/navigation';

const MAX_POSTS = 5;

export default function Home() {
  const sortedPosts = sortPosts(allBlogs);
  const posts = allCoreContent(sortedPosts);
  console.log('CORE', posts);
  console.log('SORT', sortedPosts);

  const router = useRouter();

  return (
    <section className="flex flex-col items-center  pt-6 gap-4 lg:gap-20">
      <div className="w-full px-4 lg:w-[80%] lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1">
          <ProfileSummary />
        </div>
        <div className="flex gap-2 flex-col lg:col-span-2">
          {posts.slice(0, MAX_POSTS).map((post: any) => {
            console.log('POST', post);
            return (
              <BlogItem
                key={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
                onClick={() => router.push(`/blog/${post.slug}`)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
