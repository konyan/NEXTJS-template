import Header from '../Header/Header';

const ProfileSummary = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <p className="text-lg font-thin pr-6 mb-8 font-en">
          A developer fueled by creativity and passion. I thrive on turning
          ideas into user-friendly applications, creating seamless digital
          experiences through clean and efficient code.
        </p>
      </div>
      <div>
        <button className="text-sm w-full font-base text-left hover:font-bold font-en py-4">
          EXPLORE ME
          <small className="w-6 h-6 rounded bg-white inline-flex justify-center items-center ml-4 f">
            <svg
              width="4"
              height="8"
              viewBox="0 0 4 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0522708 0.768491C0.0188171 0.730943 -1.2282e-07 0.679832 -1.13187e-07 0.626512C-1.03554e-07 0.573193 0.0188171 0.522082 0.0522708 0.484534L0.426899 0.0605983C0.458966 0.0219333 0.503738 8.52407e-08 0.550597 9.317e-08C0.597456 1.01099e-07 0.642227 0.0219333 0.674295 0.0605984L3.92225 3.73604C3.97197 3.79224 3.99994 3.86848 4 3.94801L4 4.05199C3.99994 4.13152 3.97197 4.20776 3.92225 4.26396L0.674293 7.9394C0.642226 7.97807 0.597454 8 0.550595 8C0.503736 8 0.458965 7.97807 0.426897 7.9394L0.0522696 7.51547C0.0188159 7.47792 -1.34174e-06 7.42681 -1.33211e-06 7.37349C-1.32248e-06 7.32017 0.0188159 7.26906 0.0522696 7.23151L2.90793 4L0.0522708 0.768491Z"
                fill="#474747"
              />
            </svg>
          </small>
        </button>
      </div>
    </div>
  );
};

export default ProfileSummary;
