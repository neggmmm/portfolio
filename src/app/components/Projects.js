import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-[95vh] bg-beige flex flex-col justify-center items-center py-12">
      <h2 className="text-3xl font-bold mb-8 text-charcoal w-full max-w-5xl text-left">Projects</h2>
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-5xl justify-center items-center">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-dark rounded-xl p-6 flex flex-col items-center w-64 h-64 shadow-lg">
            <div className="w-full h-24 bg-grayish rounded mb-6" />
            <div className="text-beige text-xl font-semibold mb-4">Project {n}</div>
            <button className="bg-beige text-dark px-6 py-2 rounded font-bold mt-auto">View</button>
          </div>
        ))}
      </div>
    </section>
  );
} 