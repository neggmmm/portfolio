import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="w-full min-h-[100vh] bg-beige flex flex-col justify-center items-center py-12">
      <h2 className="text-3xl font-bold mb-8 text-charcoal w-full max-w-5xl text-left">Experience</h2>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <div className="bg-dark rounded-xl p-6 text-beige shadow-lg">
          <div className="text-xl font-bold mb-2">Frontend Developer @ ExampleCorp</div>
          <div className="text-grayish mb-1">2022 - Present</div>
          <div>Building modern UIs with React and Tailwind CSS. Led a team of 4 engineers.</div>
        </div>
        <div className="bg-dark rounded-xl p-6 text-beige shadow-lg">
          <div className="text-xl font-bold mb-2">Web Developer Intern @ WebStart</div>
          <div className="text-grayish mb-1">2021 - 2022</div>
          <div>Worked on landing pages and small business websites. Learned best practices in accessibility and performance.</div>
        </div>
      </div>
    </section>
  );
} 