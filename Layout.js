import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      <Navbar />
      {/* Global background gradients */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950" />
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />
      
      <main className="relative z-10">
        {children}
      </main>

      <footer className="py-8 text-center text-neutral-500 text-sm relative z-20 border-t border-neutral-900/50 mt-20">
        <p>&copy; {new Date().getFullYear()} Jouji Okache Ogar. All rights reserved.</p>
      </footer>
    </div>
  );
}