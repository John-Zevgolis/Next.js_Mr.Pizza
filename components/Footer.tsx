'use client';
import SocialItems from './SocialItems';
import classes from './Footer.module.scss';
import Image from 'next/image';
import { useSiteContext } from '../context/SiteContext';

export default function Footer() {
  const { logo, social, footer } = useSiteContext();

  return (
    <footer className={`${classes.footer} py-24 px-3 bg-black text-white`}>
      <div className="flex flex-wrap -mx-3">
        <div className="px-3 w-full sm:w-1/2 lg:w-1/4 mb-12 lg:mb-0">
          <Image
            src={logo.url}
            width={164}
            height={195}
            priority
            alt={logo.alt}
            className="mx-auto"
          />
        </div>
        {footer.contact.map(([key, value]) => (
          <div
            key={key}
            className="px-3 w-full sm:w-1/2 lg:w-1/4 text-center mb-12 lg:mb-0"
          >
            <div dangerouslySetInnerHTML={{ __html: value }}></div>
            {key === 'address' && (
              <>
                <p>{footer.address}</p>
                <div className="flex justify-center">
                  <SocialItems social={social} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
