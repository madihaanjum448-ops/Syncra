import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoSlot } from '../components/LogoSlot';
import { useAuth } from '../utils/useAuth';

/**
 * Persistent left sidebar for the Student portal.
 * Collapses to a bottom tab bar on mobile via Tailwind's responsive classes.
 */
export const StudentSidebar: React.FC = () => {
  const { user } = useAuth(); // { role, email, ... }
  const location = useLocation();
  const navItems = [
    { name: 'Home', to: '/app', icon: 'home' },
    { name: 'My Events', to: '/app/my-events', icon: 'calendar' },
    { name: 'Certificates', to: '/app/certificates', icon: 'award' },
    { name: 'Explore Clubs', to: '/app/clubs', icon: 'users' },
    { name: 'Notifications', to: '/app/notifications', icon: 'bell' },
    { name: 'Profile', to: '/app/profile', icon: 'user' },
  ];

  return (
    <nav className="hidden md:flex flex-col w-64 h-screen bg-paper border-r-2 border-ink p-4">
      <div className="flex items-center mb-8">
        <LogoSlot slot="college" className="h-10 w-10 mr-2" />
        <span className="text-xl font-bold text-ink">Syncra</span>
      </div>
      <ul className="flex-1 space-y-2">
        {navItems.map(item => (
          <li key={item.name}>
            <Link
              to={item.to}
              className={`flex items-center px-3 py-2 rounded-lg hover:bg-coral hover:text-paper transition-colors ${location.pathname.startsWith(item.to) ? 'bg-coral text-paper' : 'text-ink'}`}
            >
              {/* Simple Lucide icons – replace with proper import in real code */}
              <span className={`lucide-${item.icon} mr-2`}></span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <button className="mt-4 px-3 py-2 bg-mint text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all" onClick={() => {/* logout placeholder */}}>
        Logout
      </button>
    </nav>
  );
};
