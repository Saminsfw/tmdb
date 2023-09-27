import { FaSearch } from 'react-icons/fa';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Header
        logo={{
          url: '/',
          imgSrc: '/logo.svg',
          altText: 'Header Logo',
        }}
        menu={{
          links: [
            { text: 'Movies', url: '/movies' },
            { text: 'Tv Shows', url: '/tvshows' },
            { text: 'People', url: '/people' },
            { text: 'More', url: '/more' },
          ],
        }}
        ActionIcon={FaSearch}
      />
      Homepage
    </main>
  );
}
