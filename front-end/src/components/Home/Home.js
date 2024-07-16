import Head from 'next/head';
import Header from './Header';
import HeroSection from './HeroSection';
import Section from './Section';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const trendingItems = [
    {
      title: 'Lalibela',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Harar',
      description: 'Explore the Living Museum.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Axum',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
  ];

  const favoritesItems = [
    {
      title: 'Lalibela',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Harar',
      description: 'Explore the Living Museum.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Axum',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
  ];

  const recommendationsItems = [
    {
      title: 'Lalibela Tour',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Harar',
      description: 'Explore the Living Museum.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
    {
      title: 'Axum',
      description: 'Explore the rock-hewn churches of Lalibela.',
      price: '$1,200 pp (USD)',
      image: '/Haile-1.jpg',
    },
  ];

  const faqItems = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ];

  return (
    <div>
      <Head>
        <title>JourneyET - Discover Ethiopia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="grid-container container mx-auto px-6 py-12">
        <div className='flex flex-col gap-10'>
            <Section title="Trending" items={trendingItems} />
            <Section title="User's Favorites" items={favoritesItems} />
            <Section title="Recommendations" items={recommendationsItems} />
        </div>
        <section className="faq-section py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">FAQ's</h2>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item flex items-center py-2 border-b border-gray-300">
                  <div className="text-lg mr-2 greater-than">&gt;</div>
                  <div className="font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
