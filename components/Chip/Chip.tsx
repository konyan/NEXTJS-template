import classNames from 'classnames';
import styles from './Chip.module.css';

interface ChipProps {
  title: string;
  rounded?: boolean;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, rounded, onClick }) => {
  return (
    <strong
      onClick={onClick}
      className={classNames(
        styles.hoverShadow,
        'cursor-pointer text-xs font-extralight px-2 py-[3px] rounded justify-center items-center bg-black text-white dark:bg-gray dark:text-black text-gray-50 flex',
        rounded && 'rounded-full py-3 px-4'
      )}
    >
      #{title}
    </strong>
  );
};
export default Chip;
