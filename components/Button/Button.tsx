import classNames from 'classnames';

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  onClick?: () => void;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'border-none outline-none text-sm  dark:text-white text-black font-base text-left hover:font-bold font-en py-4 uppercase',
        className
      )}
    >
      {label}
      <small className="w-6 h-6 rounded dark:bg-white bg-black inline-flex justify-center items-center ml-4 f">
        <svg
          width="4"
          height="8"
          viewBox="0 0 4 8"
          fill="currentColor"
          className="dark:text-black text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.0522708 0.768491C0.0188171 0.730943 -1.2282e-07 0.679832 -1.13187e-07 0.626512C-1.03554e-07 0.573193 0.0188171 0.522082 0.0522708 0.484534L0.426899 0.0605983C0.458966 0.0219333 0.503738 8.52407e-08 0.550597 9.317e-08C0.597456 1.01099e-07 0.642227 0.0219333 0.674295 0.0605984L3.92225 3.73604C3.97197 3.79224 3.99994 3.86848 4 3.94801L4 4.05199C3.99994 4.13152 3.97197 4.20776 3.92225 4.26396L0.674293 7.9394C0.642226 7.97807 0.597454 8 0.550595 8C0.503736 8 0.458965 7.97807 0.426897 7.9394L0.0522696 7.51547C0.0188159 7.47792 -1.34174e-06 7.42681 -1.33211e-06 7.37349C-1.32248e-06 7.32017 0.0188159 7.26906 0.0522696 7.23151L2.90793 4L0.0522708 0.768491Z" />
        </svg>
      </small>
    </button>
  );
};
export default Button;
