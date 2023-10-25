import Button from '../Button/Button';
import Header from '../Header/Header';

const ProfileSummary = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <p className="text-lg font-thin lg:pr-6 mb-4 font-en dark:text-white text-black">
          A developer fueled by creativity and passion. I thrive on turning
          ideas into user-friendly applications, creating seamless digital
          experiences through clean and efficient code.
        </p>
      </div>
      <div className="mb-4">
        <Button
          className=""
          label="explore me"
          onClick={() => {
            window.open('https://konyan.me/', '_blank');
          }}
        />
      </div>
    </div>
  );
};

export default ProfileSummary;
