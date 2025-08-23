'use client';
import { createContext, ReactNode, useContext } from 'react';
import { Footer, Logo, SocialItem } from '../types';

export const SiteContext = createContext<{
  logo: Logo;
  social: SocialItem[];
  footer: Footer;
} | null>(null);

export default function SiteContextProvider({
  logo,
  social,
  children,
  footer,
}: {
  logo: Logo;
  social: SocialItem[];
  footer: Footer;
  children: ReactNode;
}) {
  return (
    <SiteContext.Provider value={{ logo, social, footer }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSiteContext = () => {
  const ctx = useContext(SiteContext);
  if (!ctx)
    throw new Error('useSiteContext must be used within a SiteContextProvider');
  return ctx;
};
