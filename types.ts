export interface MenuItem {
  id: string;
  slug: string;
  title: string;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
  thumbnail: string;
  url: string | null;
}

export interface CosmicBanner {
  id: string;
  title: string;
  thumbnail: string;
  metadata: {
    slide: {
      imgix_url: string;
    };
    url: string;
  };
}

export interface Logo {
  alt: string;
  url: string;
}

export interface SocialItem {
  id: string;
  name: string;
  url: string;
}

export interface CosmicSocialItem {
  id: string;
  slug: string;
  metadata: {
    url: string;
  };
}

export interface CosmicItem {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  metadata: InnerItemType & { has_overlay: string };
}

export interface Item {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  hasOverlay: string;
}

export interface Footer {
  address: string;
  contact: [string, string][];
}

export interface Yliko {
  title: string;
  items: string[];
}

export interface InnerItemType {
  title: string;
  banner: string;
  ingredients: string[];
  ingredientsMenu: Yliko[];
}

export type CosmicIngredients = {
  id: string;
  slug: string;
  title: string;
  content: string;
  bucket: string;
  created_at: string;
  created_by: string;
  modified_at: string;
  created: string;
  status: string;
  thumbnail: string;
  published_at: string;
  modified_by: string;
  publish_at: string | null;
  unpublish_at: string | null;
  type: string;
  metadata: {
    ingredients: { item: string }[];
  };
};
