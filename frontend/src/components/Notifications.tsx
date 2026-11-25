import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  created_at: string;
}

export const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Placeholder fetch – replace with real Supabase RPC or REST call
    const fetchNotifications = async () => {
      // Mock data
      const mock: Notification[] = [
        {
          id: 'n1',
          title: 'Registration deadline',
          message: 'Your event registration deadline is tomorrow.',
          read: false,
          created_at: new Date().toISOString(),
        },
        {
          id: 'n2',
          title: 'Volunteer call',
          message: 'Art Club needs volunteers for setup.',
          read: true,
          created_at: new Date().toISOString(),
        },
      ];
      setNotifications(mock);
    };
    fetchNotifications();
  }, []);

  const markRead = async (id: string) => {
    // In real code POST to /api/v1/notifications/mark-read/:id
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <div className="p-4 bg-paper border-2 border-ink rounded-lg shadow-hard max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-ink">Notifications</h2>
      <ul className="space-y-3">
        {notifications.map((n) => (
          <li key={n.id} className={`p-2 border border-ink rounded ${n.read ? 'bg-paper' : 'bg-coral text-paper'}`}>
            <h3 className="font-bold">{n.title}</h3>
            <p className="text-sm">{n.message}</p>
            <button
              className="mt-1 text-sm underline"
              onClick={() => markRead(n.id)}
              disabled={n.read}
            >
              Mark as read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
