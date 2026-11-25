import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient'; // placeholder import

/**
 * Simple hook that returns the current Supabase session.
 * In the real implementation, it would subscribe to auth state changes.
 */
export function useAuth() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Mock: fetch session once
    const fetchSession = async () => {
      // In production replace with supabase.auth.getSession()
      const mockUser = {
        id: 'student-1',
        role: 'student',
        email: 'student1@example.edu',
      };
      setUser(mockUser);
    };
    fetchSession();
  }, []);

  return { user };
}
