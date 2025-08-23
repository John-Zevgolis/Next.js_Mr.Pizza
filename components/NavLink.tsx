'use client';
import Link from 'next/link';
import { MenuItem } from '../types';
import { usePathname } from 'next/navigation';
import classes from './NavLink.module.scss';

export default function NavLink({
  item,
  close,
}: {
  item: MenuItem;
  close?: () => void;
}) {
  const path = usePathname();
  const standardClasses =
    'text-white text-xl lg:text-base xl:text-lg 2xl:text-xl font-bold lg:mb-0 lg:mx-4 leading-none hover:text-[#97211a] hover:[text-shadow:1px_1px_#fff] transition-all duration-300';

  const isActive =
    item.slug === ''
      ? path === '/'
      : path === `/${item.slug}` || path.startsWith(`/${item.slug}/`);

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={
        isActive ? `${standardClasses} ${classes.active}` : standardClasses
      }
    >
      {item.title}
    </Link>
  );
}
