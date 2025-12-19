
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const navItems = [
    { name: 'Dashboard', icon: 'home', type: 'Dashboard' as ViewType },
    { name: 'Schedule', icon: 'calendar_today', type: 'Schedule' as ViewType },
    { name: 'Clients', icon: 'group', type: 'Clients' as ViewType },
    { name: 'Inventory', icon: 'inventory_2', type: 'Inventory' as ViewType },
    { name: 'Services', icon: 'content_cut', type: 'Services' as ViewType },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-surface-light dark:bg-surface-dark border-r border-[#f0f3f4] dark:border-gray-800 flex flex-col justify-between transition-all duration-300 z-20">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-[#f0f3f4] dark:border-gray-800">
          <div className="text-primary size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">pets</span>
          </div>
          <h1 className="hidden lg:block ml-3 text-lg font-bold tracking-tight text-text-primary dark:text-white font-display">PetControl</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <button
              key={item.type}
              onClick={() => onViewChange(item.type)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl group transition-colors ${
                activeView === item.type
                  ? 'bg-pastel-blue dark:bg-primary/20 text-primary'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-text-secondary dark:text-gray-400'
              }`}
            >
              <span className={`material-symbols-outlined ${activeView === item.type ? 'icon-filled' : ''}`}>
                {item.icon}
              </span>
              <span className={`hidden lg:block text-sm font-medium ${activeView === item.type ? '' : 'group-hover:text-text-primary dark:group-hover:text-white'}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-[#f0f3f4] dark:border-gray-800">
        <button className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 group transition-colors text-text-secondary dark:text-gray-400 w-full">
          <span className="material-symbols-outlined group-hover:text-primary">settings</span>
          <span className="hidden lg:block text-sm font-medium group-hover:text-text-primary dark:group-hover:text-white">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
