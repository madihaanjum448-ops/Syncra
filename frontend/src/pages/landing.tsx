import React from 'react';
import '../index.css';
import { LogoSlot } from '../components/LogoSlot';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-paper min-h-screen text-ink">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b-2 border-ink">
        <div className="flex items-center">
          <LogoSlot slot="college" className="h-8 w-8 mr-2" />
          <span className="font-bold text-xl">Campus Syncra</span>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="#how-it-works" className="hover:underline">How it works</Link></li>
          <li><Link to="#clubs" className="hover:underline">Clubs</Link></li>
          <li><Link to="#events" className="hover:underline">Events</Link></li>
          <li><Link to="#presidents" className="hover:underline">For presidents</Link></li>
          <li><Link to="#faculty" className="hover:underline">For faculty</Link></li>
        </ul>
        <div className="flex space-x-2">
          <Link to="/auth" className="px-3 py-1 bg-coral text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">Log in</Link>
          <Link to="/auth" className="px-3 py-1 bg-paper text-ink border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">Sign up</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Your campus events, all in one place</h1>
        <p className="text-lg mb-6">Browse, register, and never miss a clash again.</p>
        <div className="flex justify-center gap-4">
          <Link to="/auth" className="px-5 py-2 bg-coral text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">Student login</Link>
          <Link to="/auth" className="px-5 py-2 bg-mint text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">Club/Faculty login</Link>
        </div>
        {/* Ticket‑style next event card */}
        <div className="mt-8 inline-block bg-paper border-2 border-ink rounded-xl p-4 shadow-hard max-w-sm mx-auto">
          <h2 className="font-semibold text-lg mb-2">Next up: <span className="text-coral">Hackathon – Mars AI</span></h2>
          <p className="text-sm">Tomorrow, 10 AM – Main Auditorium</p>
        </div>
      </section>

      {/* Live strip marquee */}
      <div className="bg-ink text-paper py-2 overflow-x-hidden whitespace-nowrap">
        <marquee>Happening now: <span className="font-bold text-coral">Live Coding Jam</span> – Seats left: <span className="underline">27</span></marquee>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">How it works (students)</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Browse events on the calendar.</li>
          <li>Scan the QR to register instantly.</li>
          <li>Event lands in your Google Calendar (mocked).</li>
        </ol>
      </section>

      {/* Agent capabilities */}
      <section className="py-12 px-6 bg-paper">
        <h2 className="text-2xl font-semibold mb-4 text-ink">What the agent does</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Clash resolution</h3>
            <p>Detects time & venue conflicts and proposes alternatives.</p>
          </li>
          <li className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Collab matching</h3>
            <p>Suggests similar events across clubs for joint promotion.</p>
          </li>
          <li className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Deadline nudges</h3>
            <p>Reminds presidents & students of registration cut‑offs.</p>
          </li>
          <li className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Volunteer calls</h3>
            <p>Notifies students when clubs need help.</p>
          </li>
        </ul>
      </section>

      {/* Upcoming events preview */}
      <section id="events" className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming events (public)</h2>
        <p className="text-sm italic">(Static preview – real data will be loaded from Supabase)</p>
        {/* Placeholder cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Art Talk</h3>
            <p className="text-sm">Art Club • 12 Nov • Auditorium A</p>
          </div>
          <div className="p-4 border-2 border-ink rounded-lg shadow-hard">
            <h3 className="font-bold mb-2">Tech Hackathon</h3>
            <p className="text-sm">Tech Club • 15 Nov • Lab 3</p>
          </div>
        </div>
      </section>

      {/* Clubs showcase */}
      <section id="clubs" className="py-12 px-6 bg-paper">
        <h2 className="text-2xl font-semibold mb-4 text-ink">Clubs</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Example club card */}
          <div className="p-4 border-2 border-ink rounded-lg shadow-hard flex items-center space-x-3">
            <LogoSlot slot="art" className="h-12 w-12" />
            <div>
              <h3 className="font-bold">Art Club</h3>
              <p className="text-sm">Creativity unleashed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t-2 border-ink">
        <LogoSlot slot="college" className="h-6 w-6 inline-block mb-2" />
        <p className="text-sm">© 2026 Syncra • <a href="mailto:support@example.edu" className="underline">support@example.edu</a></p>
        <p className="text-xs mt-2">Privacy note: data stored in Supabase with RLS.</p>
      </footer>
    </div>
  );
}
