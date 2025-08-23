'use client';
import { RefObject, useEffect, useRef } from 'react';
import classes from './Sidebar.module.scss';
import { MenuItem, SocialItem } from '../types';
import NavLink from './NavLink';
import SocialItems from './SocialItems';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Sidebar({
  active,
  close,
  menu,
  social,
}: {
  active: boolean;
  close: () => void;
  menu: MenuItem[];
  social: SocialItem[];
}) {
  return (
    <>
      <div
        className={`${classes.overlay} ${
          active ? classes['active-overlay'] : ''
        } fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ease-in-out`}
        onClick={close}
      />
      <div
        className={`${classes.sidebar} ${
          active ? classes['active-sidebar'] : ''
        } lg:hidden fixed top-0 left-0 z-50 bg-black w-full h-full overflow-auto max-w-[320px] -translate-x-full transition-transform duration-300 ease-in-out px-8 py-12`}
      >
        <div className="flex justify-end mb-6">
          <button
            aria-label="close menu"
            onClick={close}
            className="text-white text-3xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <SocialItems close={close} social={social} />
        <nav className="mt-12" aria-label="mobile-menu">
          <ul>
            {menu.map((item) => (
              <li className="mb-4" key={item.id}>
                <NavLink close={close} item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
