import type { Metadata } from 'next';
import { fetchItems, fetchTitle } from '../../../../cosmic';
import Item from '../../../../components/Item';

export const generateMetadata = async (): Promise<Metadata> => {
  const { title } = await fetchTitle('synodeutika');
  return {
    title: `Mr.Pizza | ${title}`,
  };
};

export default async function FixingsPage() {
  const [{ title, url }, fixings] = await Promise.all([
    fetchTitle('synodeutika'),
    fetchItems('synodeutika-items'),
  ]);

  return (
    <main className="custom-padding-top pb-16 px-3">
      <h1 className="font-bold text-center 2xl:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#97211a]">
        {title}
      </h1>
      <div className="flex flex-wrap -mx-3">
        {fixings.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-3 mt-6">
            <Item slug={url} item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
