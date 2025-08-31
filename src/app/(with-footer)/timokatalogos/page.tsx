import type { Metadata } from 'next';
import { fetchContent, fetchTitle } from '../../../../cosmic';

export const generateMetadata = async (): Promise<Metadata> => {
  const { title } = await fetchTitle('timokatalogos');
  return {
    title: `Mr.Pizza | ${title}`,
  };
};

export default async function MenuPage() {
  const item = await fetchContent('timokatalogos');

  return (
    <main className="custom-padding-top pb-16 px-3 w-full sm:max-w-none lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
      <h1 className="font-bold text-center mb-6 2xl:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#97211a]">
        {item.title}
      </h1>
      <div
        className="menu py-6 md:py-12 px-4 sm:px-6 md:px-12 rounded-sm bg-[#97211a] text-white"
        dangerouslySetInnerHTML={{ __html: item.content }}
      ></div>
    </main>
  );
}
