'use client'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full min-h-[100vh] bg-dark flex flex-col justify-center items-center text-beige">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
          Hi, I&apos;m<br />
          Negm
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 tracking-wide">
          SOFTWARE ENGINEER
        </h2>
      </motion.div>
    </section>
  );
} 