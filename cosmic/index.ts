import { createBucketClient } from '@cosmicjs/sdk';
import {
  Banner,
  CosmicBanner,
  CosmicSocialItem,
  Logo,
  MenuItem,
  Item,
  SocialItem,
  Footer,
  CosmicIngredients,
  InnerItemType,
  CosmicItem,
} from '../types';

const cosmic = createBucketClient({
  bucketSlug: process.env.BUCKET_SLUG as string,
  readKey: process.env.READ_KEY as string,
});

export const fetchLogo = async (): Promise<Logo> => {
  const item = await cosmic.media
    .findOne({
      id: '64987fd77df15a13847d748e',
    })
    .props(['imgix_url', 'alt_text']);

  return {
    url: item.media.imgix_url,
    alt: item.media.alt_text,
  };
};

export const fetchSocial = async (): Promise<SocialItem[]> => {
  const items = await cosmic.objects
    .find({ type: 'social' })
    .props(['id', 'slug', 'metadata']);

  const social: SocialItem[] = items.objects.map((item: CosmicSocialItem) => {
    return {
      id: item.id,
      name: item.slug,
      url: item.metadata.url,
    };
  });

  return social;
};

export const fetchMenu = async (): Promise<MenuItem[]> => {
  const items = await Promise.all([
    cosmic.objects.find({ type: 'home' }).props(['id', 'slug', 'title']),
    cosmic.objects.find({ type: 'pizza' }).props(['id', 'slug', 'title']),
    cosmic.objects.find({ type: 'makaronades' }).props(['id', 'slug', 'title']),
    cosmic.objects.find({ type: 'synodeutika' }).props(['id', 'slug', 'title']),
    cosmic.objects
      .find({ type: 'timokatalogos' })
      .props(['id', 'slug', 'title']),
    cosmic.objects.find({ type: 'epikoinwnia' }).props(['id', 'slug', 'title']),
  ]);

  const menu: MenuItem[] = items.map((item) => {
    if (item.objects[0].slug.includes('home')) {
      item.objects[0].slug = '';
    }
    return item.objects[0];
  });

  return menu;
};

export const fetchFooter = async (): Promise<Footer> => {
  const item = await cosmic.objects
    .findOne({ type: 'epikoinwnia' })
    .props(['metadata']);

  return {
    address: item.object.metadata.address,
    contact: Object.entries(
      item.object.metadata.contact_info.find((item: string) => item)
    ),
  };
};

export const fetchBanners = async (): Promise<Banner[]> => {
  const items = await cosmic.objects
    .find({ type: 'banners' })
    .props(['id', 'title, thumbnail, metadata']);

  const banners: Banner[] = items.objects.map((item: CosmicBanner) => {
    return {
      id: item.id,
      title: item.title,
      image: item.metadata.slide.imgix_url,
      thumbnail: item.thumbnail,
      url: item.metadata.url,
    };
  });

  return banners;
};

export const fetchItems = async (type: string): Promise<Item[]> => {
  const items = await cosmic.objects
    .find({ type })
    .props(['id', 'title', 'slug', 'thumbnail', 'metadata'])
    .depth(0);

  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return items.objects.map((item: CosmicItem) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      thumbnail: item.thumbnail,
      hasOverlay: item.metadata.has_overlay,
    };
  });
};

export const fetchItem = async (slug: string): Promise<InnerItemType> => {
  const item = await cosmic.objects
    .findOne({ slug })
    .props(['title', 'metadata'])
    .depth(1);

  return {
    title: item.object.title,
    banner: item.object.metadata.banner?.imgix_url,
    ingredients: item.object.metadata.ingredients.map(
      (ingredient: { item: string }) => ingredient.item
    ),
    ingredientsMenu:
      item.object.metadata.ylika_items &&
      item.object.metadata.ylika_items.length > 0
        ? item.object.metadata.ylika_items.map((yliko: CosmicIngredients) => {
            return {
              title: yliko.title,
              items: yliko.metadata.ingredients.map(
                (ingredient) => ingredient.item
              ),
            };
          })
        : [],
  };
};

export const fetchSlugs = async (type: string): Promise<{ slug: string }[]> => {
  const items = await cosmic.objects.find({ type }).props(['slug']);

  return items.objects.map((item: Item) => item);
};

export const fetchTitle = async (
  type: string
): Promise<{ title: string; url: string }> => {
  const item = await cosmic.objects.findOne({ type }).props(['title', 'slug']);

  return {
    title: item.object.title,
    url: item.object.slug,
  };
};

export const fetchContent = async (
  type: string
): Promise<{ title: string; content: string }> => {
  const item = await cosmic.objects
    .findOne({ type })
    .props(['title', 'content']);

  return item.object;
};
