import React from 'react';
import { LogoSlot } from '../../components/LogoSlot';

export const PresidentDashboard: React.FC = () => {
  return (
    <div className="p-8 bg-paper min-h-screen text-ink">
      <h1 className="text-3xl font-bold mb-6">President Dashboard</h1>
      <section className="mb-8">
        <button className="px-4 py-2 bg-coral text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Create New Event
        </button>
      </section>
      {/* Placeholder cards for upcoming events */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
          <h2 className="font-bold text-lg mb-2">Art Talk – 12 Nov</h2>
          <p className="text-sm">Status: Pending approval</p>
        </div>
        <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
          <h2 className="font-bold text-lg mb-2">Tech Hackathon – 15 Nov</h2>
          <p className="text-sm">Status: Ready</p>
        </div>
      </div>
    </div>
  );
};
