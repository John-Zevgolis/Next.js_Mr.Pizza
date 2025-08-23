'use client';
import Image from 'next/image';
import NavLink from './NavLink';
import classes from './Header.module.scss';
import Link from 'next/link';
import SocialItems from './SocialItems';
import Hamburger from './Hamburger';
import { MenuItem } from '../types';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { useSiteContext } from '../context/SiteContext';

export default function Navigation({ menu }: { menu: MenuItem[] }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { logo, social } = useSiteContext();

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setShowMobileMenu(false);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] z-30 pt-4">
        <nav
          aria-label="main menu"
          className="h-20 bg-black relative flex px-3"
        >
          <div
            className={`${classes['left-col']} flex justify-between items-center h-full xl:pr-4 2xl:pr-6`}
          >
            <div className="hidden sm:block">
              <SocialItems social={social} />
            </div>
            <nav aria-label="desktop-menu" className="hidden lg:block">
              <ul className="flex items-center justify-end h-full">
                {menu.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <NavLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Link
            href="/"
            className={`${classes.logo} size-40 sm:size-44 md:size-48 lg:size-40 xl:size-44 2xl:size-48 bg-[#be834e] p-3 inline-block -top-2 shadow-[1px_1px_5px_#000] absolute left-2/4 -translate-x-1/2`}
          >
            <div className="h-full p-1 flex justify-center items-center border-3 border-black">
              <div>
                <span className="block text-center text-2xl md:text-3xl lg:text-2xl 2xl:text-3xl mb-1 font-bold text-[#97211a] leading-none [text-shadow:2px_2px_#000] tracking-[-2px] [word-spacing:-2px]">
                  Mr. Pizza
                </span>
                <Image
                  src={logo.url}
                  width={90}
                  height={107}
                  priority
                  alt={logo.alt}
                  className="mx-auto"
                />
              </div>
            </div>
          </Link>
          <div
            className={`${classes['right-col']} flex justify-end lg:justify-start items-center h-full ml-auto xl:pl-4 2xl:pl-6`}
          >
            <Hamburger open={openMobileMenu} />
            <nav aria-label="desktop-menu" className="hidden lg:block">
              <ul className="flex items-center h-full">
                {menu.slice(3, 6).map((item) => (
                  <li key={item.id}>
                    <NavLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
      </header>
      <Sidebar
        close={closeMobileMenu}
        active={showMobileMenu}
        menu={menu}
        social={social}
      />
    </>
  );
}
