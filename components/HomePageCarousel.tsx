'use client';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Banner } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import classes from './HomePageCarousel.module.scss';

export default function HomePageCarousel({ banners }: { banners: Banner[] }) {
  return (
    <main className={classes.wrapper}>
      <Swiper
        navigation
        pagination={{ type: 'bullets', clickable: true }}
        grabCursor
        speed={500}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        fadeEffect={{ crossFade: true }}
        effect="fade"
        loop={true}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="min-h-screen h-full flex justify-center items-center relative text-center">
              <Image
                alt={item.title}
                className="absolute -z-10 inset-0 object-cover"
                src={item.image}
                fill
              />
              <div className="custom-padding-top custom-padding-bottom relative">
                {item.thumbnail && (
                  <Image
                    src={item.thumbnail}
                    width={344}
                    height={341}
                    className={`${classes.tada} max-w-64 sm:max-w-72 md:max-w-80 lg:max-w-72 xl:max-w-80 2xl:max-w-none`}
                    alt="Offer"
                  />
                )}
                {!item.thumbnail && (
                  <>
                    <h1
                      className={`${classes['animate-heading']} mb-6 text-white font-medium text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
                    >
                      {item.title}
                    </h1>
                    <Link
                      className={`${classes['animate-btn']} custom-btn overflow-hidden text-white hover:text-[#97211a] rounded-sm px-8 sm:px-12 py-3 sm:py-4 font-bold relative inline-block bg-[#97211a] xl:text-lg`}
                      href={`/${item.url}`}
                    >
                      <span className="z-10 relative">ΠΕΡΙΣΣΟΤΕΡΑ</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
