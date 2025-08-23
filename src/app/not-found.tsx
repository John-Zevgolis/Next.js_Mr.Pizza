'use client';
import Image from 'next/image';
import { useSiteContext } from '../../context/SiteContext';
import Link from 'next/link';

export default function NotFound() {
  const { logo } = useSiteContext();

  return (
    <main className="min-h-screen flex justify-center items-center px-3">
      <div className="py-12 text-center">
        <Image
          src={logo.url}
          width={164}
          height={195}
          priority
          alt={logo.alt}
          className="mx-auto"
        />
        <h1 className="font-bold text-center mb-2 text-7xl sm:text-8xl xl:text-9xl text-[#97211a]">
          404
        </h1>
        <h2 className="font-medium text-2xl sm:text-3xl xl:text-4xl mb-6">
          Η σελίδα δεν βρέθηκε
        </h2>
        <Link
          className="custom-btn overflow-hidden text-white border-2 border-[#97211a] hover:text-[#97211a] rounded-sm px-8 sm:px-12 py-3 sm:py-4 font-bold relative inline-block bg-[#97211a] xl:text-lg"
          href="/"
        >
          <span className="z-10 relative">ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ</span>
        </Link>
      </div>
    </main>
  );
}
