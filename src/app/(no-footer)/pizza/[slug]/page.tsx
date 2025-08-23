import { fetchItem, fetchSlugs } from '../../../../../cosmic';
import { InnerItem } from '../../../../../components/InnerItem';
import type { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const item = await fetchItem(slug);

  const description =
    item.ingredientsMenu.length > 0
      ? item.ingredientsMenu.map((ingredient) => ingredient.title).join(', ')
      : item.ingredients.map((ingredient) => ingredient).join(', ');

  return {
    title: `Mr.Pizza | ${item.title}`,
    description,
  };
};

export const generateStaticParams = async () => {
  return await fetchSlugs('pizza-items');
};

export default async function PizzaItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await fetchItem(slug);

  return <InnerItem item={item} />;
}
