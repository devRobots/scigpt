'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="flex flex-row mx-auto h-screen">
      <section className="basis-1/2 flex flex-col space-y-6 p-24">
        <header>
          <h1 className="text-7xl font-extrabold">SciGPT</h1>
          <h2 className="text-2xl">
            ¡Conocimiento ilimitado a golpe de tecla!
          </h2>
        </header>
        <nav>
          <ul className="flex">
            <li className="mr-3">
              <a
                className="inline-block border border-stone-500 rounded py-1 px-3 bg-stone-500 text-white"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block border border-white rounded hover:border-gray-200 text-stone-500 hover:bg-gray-200 py-1 px-3"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-xl font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit perferendis magni nobis cupiditate illum dolor est
          temporibus, odio repudiandae quam deserunt non laborum aliquid
          reiciendis. Pariatur necessitatibus labore amet.
        </p>
      </section>
      <section className="basis-1/2 pt-12 px-12">
        <article className="bg-stone-100 p-12 rounded-t-2xl shadow-xl h-full">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              <span className="font-bold">
                {m.role === 'user' ? 'Tú: ' : 'Assistant: '}
              </span>
              <p className="text-nowrap">{m.content}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <input
              className="fixed bottom-0 w-full min-w-0 max-w-2xl p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </article>
      </section>
    </main>
  );
}
