import Head from 'next/head';
import Header from './Header';
import HeroSection from './HeroSection';
import Section from './Section';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const trendingItems = [
    {
      title: 'Lalibela',
      description: 'known for its distinctive rock-hewn churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians.',
      price: '$1,200 pp (USD)',
      image: '/lalibela.jpg',
    },
    {
      title: 'Harar',
      description: 'Surrounded by a centuries-old defensive wall that has several large gates, including Duke\'s Gate.',
      price: '$1,200 pp (USD)',
      image: '/Harar.jpg',
    },
    {
      title: 'Axum',
      description: 'Known for its tall, carved obelisks, relics of the ancient Kingdom of Axum.',
      price: '$1,200 pp (USD)',
      image: '/axum.jpg',
    },
  ];

  const favoritesItems = [
    {
      title: 'Lalibela',
      description: 'known for its distinctive rock-hewn churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians.',
      price: '$1,200 pp (USD)',
      image: '/lalibela.jpg',
    },
    {
      title: 'Harar',
      description: 'Surrounded by a centuries-old defensive wall that has several large gates, including Duke\'s Gate',
      price: '$1,200 pp (USD)',
      image: '/Harar.jpg',
    },
    {
      title: 'Axum',
      description: 'Known for its tall, carved obelisks, relics of the ancient Kingdom of Axum.',
      price: '$1,200 pp (USD)',
      image: '/axum.jpg',
    },
  ];

  const recommendationsItems = [
    {
      title: 'Lalibela Tour',
      description: 'known for its distinctive rock-hewn churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians.',
      price: '$1,200 pp (USD)',
      image: '/lalibela.jpg',
    },
    {
      title: 'Harar',
      description: 'Surrounded by a centuries-old defensive wall that has several large gates, including Duke\'s Gate',
      price: '$1,200 pp (USD)',
      image: '/Harar.jpg',
    },
    {
      title: 'Axum',
      description: 'Known for its tall, carved obelisks, relics of the ancient Kingdom of Axum.',
      price: '$1,200 pp (USD)',
      image: '/axum.jpg',
    },
  ];

  const faqItems = [
    'Is Ethiopia good for tourists?',
    'Is it safe to travel to Ethiopia today?',
    'Why do people visit Ethiopia?',
    'What is beautiful about Ethiopia?',
    'Are people friendly in Ethiopia?',
  ];

  return (
    <div>
      <Head>
        <title>JourneyET - Discover Ethiopia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="grid-container container-home mx-auto px-6 py-12">
        <div className='flex flex-col gap-10'>
            <Section title="Trending" items={trendingItems} />
            <Section title="User's Favorites" items={favoritesItems} />
            <Section title="Recommendations" items={recommendationsItems} />
        </div>
        <section className="faq-section py-16">
          <div className="container-home mx-auto px-6">
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