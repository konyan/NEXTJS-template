import Image from 'next/image';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-600 border-none">
      <div className="w-24 h-24 absolute left-1/2 -top-14 rounded-full">
        <Image src="/circle.svg" alt="cirlce" fill />
      </div>
      <footer className="flex justify-center items-center w-full pt-8 pb-4">
        <p className="text-sm text-center font-thin">
          © 2024 Konyan &apos; s Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
