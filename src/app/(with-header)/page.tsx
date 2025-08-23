import HomePageCarousel from '../../../components/HomePageCarousel';
import { fetchBanners } from '../../../cosmic';

export default async function Home() {
  const banners = await fetchBanners();

  return <HomePageCarousel banners={banners} />;
}
