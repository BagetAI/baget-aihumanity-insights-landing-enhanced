import React, { useState } from 'react';

const prompts = [
  {
    id: 1,
    question: "If AI reflects our values, what does your preferred AI say about humanity?",
  },
  {
    id: 2,
    question: "What ethical principle should guide AI development above all else?",
  },
  {
    id: 3,
    question: "How can AI help us better understand our own consciousness?",
  },
];

export const PhilosophyPrompt: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<number | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSelectPrompt = (id: number) => {
    setSelectedPrompt(id);
    setUserAnswer("");
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(userAnswer.trim().length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <section aria-labelledby="prompt-heading" className="max-w-3xl mx-auto my-16 px-4">
      <h2 id="prompt-heading" className="text-3xl font-bold text-cyan-400 mb-8 text-center">Philosophy Dialogue – Your Voice Matters</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          {prompts.map((p) => (
            <button
              key={p.id}
              className={`px-4 py-2 rounded border border-cyan-500 text-cyan-300 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors ${selectedPrompt === p.id ? 'bg-cyan-600' : ''}`}
              onClick={() => handleSelectPrompt(p.id)}
              aria-pressed={selectedPrompt === p.id}
            >
              {p.question}
            </button>
          ))}
        </div>

        {selectedPrompt && !submitted && (
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <label htmlFor="userAnswer" className="block mb-2 text-cyan-300 font-medium">
              Share your thoughts:
            </label>
            <textarea
              id="userAnswer"
              rows={4}
              className="w-full rounded bg-gray-800 border border-cyan-500 p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              required
              aria-required="true"
            />
            <button
              type="submit"
              className="mt-3 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 rounded text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            >
              Submit
            </button>
          </form>
        )}

        {submitted && (
          <div className="mt-6 text-cyan-300 font-medium text-center">
            Thank you for sharing your insights! Your engagement enriches the community.
          </div>
        )}
      </div>
    </section>
  );
};
