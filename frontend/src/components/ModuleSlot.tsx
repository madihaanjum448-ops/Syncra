import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Generic placeholder for a future module.
 * `id` corresponds to the module's registered name.
 * It renders a "Coming soon" card with a link to the future route.
 */
export const ModuleSlot: React.FC<{ id: string }> = ({ id }) => {
  const titles: Record<string, string> = {
    instagram_insights: 'Instagram Insights (president + faculty)',
    feedback_forms: 'Feedback Forms & Guest Feedback (president + faculty)',
    event_reports: 'Event Reports / Score (president + faculty)',
    club_health_report: 'Club Health Report (president + faculty)',
  };

  const routeMap: Record<string, string> = {
    instagram_insights: '/president/instagram-insights',
    feedback_forms: '/president/feedback-forms',
    event_reports: '/president/event-reports',
    club_health_report: '/president/club-health',
  };

  const title = titles[id] || 'Coming soon';
  const route = routeMap[id] || '#';

  return (
    <div className="p-6 bg-paper border-2 border-ink rounded-xl shadow-hard text-center max-w-sm mx-auto my-4">
      <h2 className="text-xl font-semibold mb-2 text-ink">{title}</h2>
      <p className="text-sm mb-4">Placeholder – teammate will implement this module.</p>
      {route !== '#' && (
        <Link to={route} className="inline-block px-3 py-1 bg-coral text-paper border-2 border-ink rounded-lg shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--ink)] transition-all">
          Go to preview
        </Link>
      )}
    </div>
  );
};
