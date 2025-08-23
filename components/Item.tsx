'use client';
import Link from 'next/link';
import { Item as PizzaItem } from '../types';
import classes from './Item.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Item({
  item,
  slug,
}: {
  item: PizzaItem;
  slug: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/${slug}/${item.slug}`}
        className={`${classes.box} ${
          item.hasOverlay === 'YES' ? classes.animate : ''
        } relative overflow-hidden block`}
      >
        <Image
          fill
          src={item.thumbnail}
          alt={item.hasOverlay === 'YES' ? '' : item.title}
          className="absolute inset-0 object-cover transition-transform duration-300 ease-out"
        />
        {item.hasOverlay === 'YES' && (
          <div className="absolute text-center flex justify-center items-center inset-0 bg-black/40">
            <span
              dangerouslySetInnerHTML={{ __html: item.title }}
              className="[text-shadow:2px_2px_#000] block text-white text-2xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold"
            ></span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
