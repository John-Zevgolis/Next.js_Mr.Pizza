'use client';
import Link from 'next/link';
import { SocialItem } from '../types';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import classes from './SocialItems.module.scss';
config.autoAddCss = false;

type IconName = 'pizza-button' | 'contact-button';

const getIcon = {
  'pizza-button': faPizzaSlice,
  'contact-button': faPhone,
};

export default function SocialItems({
  social,
  close,
}: {
  social: SocialItem[];
  close?: () => void;
}) {
  return (
    <nav className="" aria-label="socialItem">
      <ul className="flex">
        {social.map((item) => (
          <li key={item.id} className="mr-3">
            <Link
              onClick={close}
              aria-label={item.name}
              href={item.url}
              className={`${classes.social} text-white overflow-hidden flex justify-center items-center rounded-full text-lg size-10 border-2 border-white relative transition-all duration-300`}
            >
              <FontAwesomeIcon
                className="relative"
                icon={getIcon[`${item.name as IconName}`]}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
