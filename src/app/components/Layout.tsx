"use client"

// components/Layout.tsx

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if user is not authenticated
    if (status === 'loading') return; // Wait for session data to load
    if (!session) {
      router.push('/login');
    }
  }, [session, status, router]);

  // Render loading indicator while session status is 'loading'
  if (status === 'loading') return <div>Loading...</div>;

  // Render content if user is authenticated
  return <div>{children}</div>;
};

export default Layout;
