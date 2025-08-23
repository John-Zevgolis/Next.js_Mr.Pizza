import { fetchMenu } from '../cosmic';
import Navigation from './Navigation';

export default async function Header() {
  const menu = await fetchMenu();

  return <Navigation menu={menu} />;
}
