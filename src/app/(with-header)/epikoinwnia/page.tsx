import type { Metadata } from 'next';
import Map from '../../../../components/Map';
import { fetchTitle } from '../../../../cosmic';

export const generateMetadata = async (): Promise<Metadata> => {
  const { title } = await fetchTitle('epikoinwnia');
  return {
    title: `Mr.Pizza | ${title}`,
  };
};

export default async function ContactPage() {
  const { title } = await fetchTitle('epikoinwnia');

  return (
    <main className="custom-padding-top">
      <h1 className="font-bold text-center mb-6 2xl: mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#97211a]">
        {title}
      </h1>
      <Map />
    </main>
  );
}
