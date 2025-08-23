import { InnerItem } from '../../../../../components/InnerItem';
import { fetchItem, fetchSlugs } from '../../../../../cosmic';
import type { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const item = await fetchItem(slug);
  return {
    title: `Mr.Pizza | ${item.title}`,
    description: item.ingredients.map((ingredient) => ingredient).join(', '),
  };
};

export async function generateStaticParams() {
  const slugs = await fetchSlugs('makaronades-items');
  return slugs;
}

export default async function PastaItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await fetchItem(slug);

  return <InnerItem item={item} />;
}
