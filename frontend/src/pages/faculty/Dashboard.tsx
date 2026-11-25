import React from 'react';
import { LogoSlot } from '../../components/LogoSlot';

export const FacultyDashboard: React.FC = () => {
  return (
    <div className="p-8 bg-paper min-h-screen text-ink">
      <h1 className="text-3xl font-bold mb-6">Faculty Dashboard</h1>
      <section className="mb-8">
        <button className="px-4 py-2 bg-mint text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Approve President Accounts
        </button>
        <button className="ml-4 px-4 py-2 bg-coral text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Review Budgets
        </button>
      </section>
      {/* Placeholder lists */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
          <h2 className="font-bold mb-2">Pending President Requests</h2>
          <p className="text-sm italic">(none – mock data)</p>
        </div>
        <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
          <h2 className="font-bold mb-2">Budget Approvals</h2>
          <p className="text-sm italic">(none – mock data)</p>
        </div>
      </div>
    </div>
  );
};
