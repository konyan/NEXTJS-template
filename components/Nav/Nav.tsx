import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const socials = [
  {
    name: 'github',
    url: 'https://github.com/konyan',
    image: '/github.svg',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/nyanlintun/',
    image: '/linkedin.svg',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/devkonyan',
    image: '/twitter.svg',
  },
];

const Nav = () => {
  return (
    <div>
      <nav className="flex w-full justify-between items-center py-4">
        <Link href="/">
          <Image src="/favicon.svg" alt="konyan' logo" width="32" height="32" />
        </Link>
        <div className="w-40 justify-between flex items-center">
          {socials.map((s) => {
            return (
              <Link href={s.url} key={s.name} className="cursor-pointer">
                <Image src={s.image} alt="search" width="20" height="20" />
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
