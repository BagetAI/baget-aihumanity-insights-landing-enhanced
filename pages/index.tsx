import React from 'react';
import Head from 'next/head';
import { BookExcerpts } from '../components/BookExcerpts';
import { PhilosophyPrompt } from '../components/PhilosophyPrompt';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>AIHumanity Insights – The Future of AI and Humanity</title>
        <meta name="description" content="Explore the ethical and humanistic revolution of AI with insights from the forthcoming book 'AIHumanity Insights'." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200">
        <header className="text-center pt-16 px-4">
          <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 leading-tight">
            Explore the Ethical and Humanistic AI Revolution
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-400 mb-8">
            Join the journey to understand how AI reshapes humanity, ethics, and our future. Pre-order the book now and be part of thoughtful dialogue.
          </p>
          {/* Existing email capture or pre-order form can remain here or integrated below */}
        </header>

        {/* New content sections added below */}
        <BookExcerpts />
        <PhilosophyPrompt />

        <section className="text-center py-12 px-4">
          <a
            href="/preorder"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-4 rounded shadow-lg transition"
            aria-label="Pre-order your copy of AIHumanity Insights"
          >
            Pre-Order Your Copy
          </a>
        </section>

        <footer className="text-center py-8 text-gray-500 text-sm">
          &copy; 2024 AIHumanity Insights. Contact: jefroykin@gmail.com
        </footer>
      </main>
    </>
  );
};

export default HomePage;
