import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import { useTheme } from 'next-themes';

export const socials = [
  {
    name: 'github',
    url: 'https://github.com/konyan',
    image: '/github.svg',
    component: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.6rem"
        viewBox="0 0 480 512"
        fill="currentColor"
      >
        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
      </svg>
    ),
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nyanlintun/',
    image: '/linkedin.svg',
    component: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.6rem"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/devkonyan',
    image: '/twitter.svg',
    component: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.6rem"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
      </svg>
    ),
  },
];

const Nav: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <nav className="flex w-full justify-between items-center py-2 lg:py-4">
        <div onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Image
              src="/favicon.svg"
              alt="konyan' logo"
              width="32"
              height="32"
            />
          ) : (
            <Image
              src="/logo-dark.svg"
              alt="konyan' logo"
              width="32"
              height="32"
            />
          )}
        </div>
        <div className="w-40 justify-between flex items-center">
          {socials.map((s) => {
            return (
              <Link
                href={s.url}
                key={s.name}
                className="cursor-pointer"
                target="_blank"
              >
                {/* <Image src={s.image} alt="search" width="20" height="20" /> */}
                <span className="w-4 h-4">{s.component}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
