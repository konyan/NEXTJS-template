import Chip from '../Chip/Chip';

const BlogItem = () => {
  return (
    <article className="border-b pb-6 cursor-pointer hover-2">
      <p className="text-sm font-base">စက်တင်ဘာ ၁၂, ၂၀၂၃</p>
      <div className="mt-4 flex w-full justify-between items-center pt-1">
        <h2 className="text-2xl font-bold">နေလို့မှ ကောင်းရဲ့လား</h2>
        <div className="w-40 flex justify-end">
          <Chip title="React" />
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
