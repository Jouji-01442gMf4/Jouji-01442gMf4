import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = ["Developer", "Designer", "Student", "Gamer", "Creative"];

export default function TypewriterEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter logic
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    const timeout = setTimeout(() => {
      if (reverse) {
        setSubIndex((prev) => prev - 1);
      } else {
        setSubIndex((prev) => prev + 1);
      }
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    if (!reverse && subIndex === words[index].length + 1) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
  }, [subIndex, index, reverse]);

  return (
    <div className="h-8 flex items-center justify-center">
      <span className="text-xl md:text-2xl text-purple-400 font-mono tracking-wider">
        {words[index].substring(0, subIndex)}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-6 bg-purple-400 ml-1 align-middle"
        />
      </span>
    </div>
  );
}