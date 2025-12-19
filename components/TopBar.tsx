
import React from 'react';

interface TopBarProps {
  onLogout?: () => void;
  userEmail?: string;
}

const TopBar: React.FC<TopBarProps> = ({ onLogout, userEmail }) => {
  return (
    <header className="h-16 bg-surface-light dark:bg-surface-dark border-b border-[#f0f3f4] dark:border-gray-800 px-6 flex items-center justify-between shrink-0 z-10 relative">
      {/* Global Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-text-secondary">search</span>
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 border-none rounded-xl leading-5 bg-[#f0f3f4] dark:bg-gray-800 text-text-primary dark:text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-sm transition-shadow"
            placeholder="Global search for clients, pets, or services..."
            type="text"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 ml-4">
        <button className="relative p-2 rounded-xl text-text-secondary hover:bg-[#f0f3f4] dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        </button>
        <button
          onClick={onLogout}
          className="p-2 rounded-xl text-text-secondary hover:bg-pastel-red hover:text-red-500 transition-colors flex items-center gap-2"
          title="Sign Out"
        >
          <span className="material-symbols-outlined">logout</span>
        </button>
        <div className="h-8 w-[1px] bg-[#f0f3f4] dark:bg-gray-700"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-text-primary dark:text-white font-display leading-tight truncate max-w-[150px]">
              {userEmail || 'User'}
            </p>
            <p className="text-xs text-text-secondary">Administrator</p>
          </div>
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpEHaJzfs0iUAgf1NAC0WUCEElIR5rh9HvxthUOyf4yyY4_sVPI4aEQUp-yBh_q1l94XOoftNpsTgVUS01bfqvtjlQ0Li-_3em_3pc0TjStdQbwKrToIDCdFOHCcypUyysAdOEUElBXvesLPzSZxBgKkE8F2fGmAPOmecmOYVkyDztA4cxlnWE8bAQSThGNc1BeW0kvyaFADRUp3gQPGbJ9tDqOASZbaybMuggqZ2xvrxPlVvloTJE2dnbpcA_5XCco2084xOMZChJ')` }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

