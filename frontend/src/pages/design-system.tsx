import React from 'react';
import '../index.css';

export default function DesignSystem() {
  return (
    <div className="p-8 bg-paper min-h-screen">
      <h1 className="text-3xl font-bold text-ink mb-6">Design System Demo</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">Colors</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-paper mr-4 border-2 border-ink"></span>
            <span className="text-ink">Paper – var(--paper)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-ink mr-4"></span>
            <span className="text-ink">Ink – var(--ink)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-coral mr-4"></span>
            <span className="text-ink">Coral – var(--coral)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-marigold mr-4"></span>
            <span className="text-ink">Marigold – var(--marigold)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-mint mr-4"></span>
            <span className="text-ink">Mint – var(--mint)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-periwinkle mr-4"></span>
            <span className="text-ink">Periwinkle – var(--periwinkle)</span>
          </div>
          <div className="flex items-center p-4 border-ink rounded-lg">
            <span className="w-8 h-8 bg-blush mr-4"></span>
            <span className="text-ink">Blush – var(--blush)</span>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">Buttons</h2>
        <button className="px-4 py-2 bg-coral text-paper border-ink border-2 rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Primary Button
        </button>
        <button className="ml-4 px-4 py-2 bg-paper text-ink border-ink border-2 rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Secondary
        </button>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-ink mb-4">Badge (Sticker‑style)</h2>
        <span className="inline-block px-3 py-1 bg-mint text-paper rounded-xl transform rotate-1 shadow-hard">
          Sample Badge
        </span>
      </section>
    </div>
  );
}
