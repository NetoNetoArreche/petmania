
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './components/DashboardView';
import ClientsView from './components/ClientsView';
import ServicesView from './components/ServicesView';
import InventoryView from './components/InventoryView';
import ScheduleView from './components/ScheduleView';
import AuthView from './components/AuthView';
import { ViewType } from './types';
import { supabase } from './services/supabaseClient';
import { Session } from '@supabase/supabase-js';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <DashboardView />;
      case 'Clients':
        return <ClientsView />;
      case 'Services':
        return <ServicesView />;
      case 'Inventory':
        return <InventoryView />;
      case 'Schedule':
        return <ScheduleView />;
      default:
        return <DashboardView />;
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="size-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return <AuthView />;
  }

  return (
    <div className="flex w-full h-full bg-background-light dark:bg-background-dark text-text-primary dark:text-gray-100">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onLogout={handleLogout} userEmail={session.user.email} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-8 no-scrollbar">
          <div className="max-w-[1600px] mx-auto h-full">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};


export default App;
