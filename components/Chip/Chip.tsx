interface ChipProps {
  title: string;
}

const Chip: React.FC<ChipProps> = ({ title }) => {
  return (
    <strong className="text-xs font-extralight w-12 rounded h-6 justify-center items-center bg-gray-500 text-gray-50 flex">
      {title}
    </strong>
  );
};
export default Chip;
