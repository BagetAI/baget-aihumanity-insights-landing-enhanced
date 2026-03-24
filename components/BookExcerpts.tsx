import React from 'react';

const excerpts = [
  {
    id: 1,
    title: "AI as a Mirror to Humanity",
    text: `"Artificial intelligence does not develop in isolation from us; it reflects our deepest values, fears, and hopes. As we design AI, we are ultimately designing a projection of humanity itself — its ethics, its ambitions, and its limitations."`
  },
  {
    id: 2,
    title: "Ethics Beyond Algorithms",
    text: `"The future of AI hinges not on technological breakthroughs alone, but on embedding moral responsibility and ethical inquiry deeply into every line of code and policy decision, ensuring AI benefits all of humanity equitably."`
  },
  {
    id: 3,
    title: "Co-Evolution of Consciousness",
    text: `"As AI advances, it challenges the definition of consciousness and compels us to redefine human identity in an AI-augmented world — a co-evolution that may amplify human empathy and wisdom if guided wisely."`
  }
];

export const BookExcerpts: React.FC = () => {
  return (
    <section aria-labelledby="excerpts-heading" className="max-w-4xl mx-auto my-16 px-4">
      <h2 id="excerpts-heading" className="text-3xl font-bold text-cyan-400 mb-8 text-center">Insights from "AIHumanity Insights"</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {excerpts.map(({ id, title, text }) => (
          <article
            key={id}
            className="bg-gray-900 bg-opacity-60 border border-cyan-500 rounded-lg p-6 shadow-lg hover:shadow-cyan-600 transition-shadow cursor-default"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">{title}</h3>
            <p className="text-gray-300 italic text-sm leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
