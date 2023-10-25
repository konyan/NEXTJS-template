import { formatDate } from 'pliny/utils/formatDate.js';
import Chip from '../Chip/Chip';
import siteMetadata from '@/data/siteMetadata';

interface BlogItemProps {
  title: string;
  date: string;
  tags: string[];
  onClick: () => void;
}

const BlogItem: React.FC<BlogItemProps> = ({ title, date, tags, onClick }) => {
  return (
    <article
      className="border-b py-3 cursor-pointer lg:hover-2"
      onClick={onClick}
    >
      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
      <div className="flex-col lg:flex-row mt-4 flex w-full lg:justify-between items-start pt-1 gap-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <div className="flex lg:justify-end flex-start gap-2 lg:w-40 lg:flex-wrap w-full">
          {tags.map((t) => (
            <Chip title={t} key={t} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
