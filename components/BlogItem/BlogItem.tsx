import Chip from '../Chip/Chip';

const BlogItem = () => {
  return (
    <article className="border-b border-gray-700 pb-6">
      <p className="text-sm font-thin">September 24,2020</p>
      <div className="mt-4 flex w-full justify-between items-center pt-3 pb-4">
        <h2 className="text-2xl font-medium">My First Blog Post</h2>
        <div className="w-40 flex justify-end">
          <Chip title="React" />
        </div>
      </div>
    </article>
  );
};

export default BlogItem;