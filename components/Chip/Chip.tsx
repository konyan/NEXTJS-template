import classNames from 'classnames';

interface ChipProps {
  title: string;
  rounded?: boolean;
}

const Chip: React.FC<ChipProps> = ({ title, rounded }) => {
  return (
    <strong
      className={classNames(
        'text-xs font-extralight px-2 py-[3px] rounded justify-center items-center bg-gray text-black text-gray-50 flex',
        rounded && 'rounded-full py-3 px-4'
      )}
    >
      #{title}
    </strong>
  );
};
export default Chip;
