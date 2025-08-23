'use client';
import Image from 'next/image';
import { InnerItemType } from '../types';
import classes from './InnerItem.module.scss';
import { motion } from 'framer-motion';

export function InnerItem({ item }: { item: InnerItemType }) {
  let mainClasses;
  let boxClasses;

  if (item.ingredientsMenu.length > 0) {
    mainClasses = '';
    boxClasses = 'pb-12 md:max-w-none';
  } else {
    mainClasses = 'flex items-center';
    boxClasses = 'custom-padding-bottom md:max-w-[720px]';
  }

  return (
    <main
      className={`${classes.item} ${mainClasses} relative min-h-screen overflow-hidden`}
    >
      {item.banner && (
        <Image
          className="object-cover inset-0 absolute -z-10"
          fill
          src={item.banner}
          alt={item.title}
        />
      )}
      <div
        className={`${boxClasses} custom-padding-top relative px-3 w-full sm:max-w-[540px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span
            className="bg-[#97211a] leading-none text-white rounded-sm font-bold inline-block text-2xl md:text-3xl xl:text-4xl px-6 py-3"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></span>
        </motion.h1>
        {item.ingredientsMenu.length === 0 && (
          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            className={`${classes.ingredients} flex flex-col md:flex-row rounded-sm`}
          >
            {item.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className="border border-black/10 bg-white py-2 px-4"
              >
                {ingredient}
              </li>
            ))}
          </motion.ul>
        )}
        {item.ingredientsMenu.length > 0 && (
          <div className="flex flex-wrap -mx-3">
            {item.ingredientsMenu.map((mainIngredient, mainIngredientIndex) => (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.3 + mainIngredientIndex * 0.05,
                }}
                viewport={{ once: true }}
                key={mainIngredientIndex}
                className="w-full md:w-1/3 mb-6 md:mb-0 px-3"
              >
                <div className="bg-white rounded-sm">
                  <h2 className="p-4 font-medium text-xl">{item.title}</h2>
                  <ul>
                    {mainIngredient.items.map((ingredient, ingredientIndex) => (
                      <li
                        className="border border-[rgba(0,0,0,0.125)] py-2 px-4"
                        key={ingredientIndex}
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
