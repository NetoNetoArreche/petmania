
import React from 'react';

const DashboardView: React.FC = () => {
  const stats = [
    { label: 'Total Clients', value: '1,254', trend: '+5%', icon: 'group', color: 'primary', bg: 'pastel-blue' },
    { label: 'New Pets This Week', value: '12', trend: '+2%', icon: 'pets', color: 'secondary', bg: 'pastel-green' },
    { label: 'Active Appointments', value: '45', trend: '+10%', icon: 'schedule', color: 'orange-500', bg: 'orange-50' }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="rounded-xl p-6 bg-surface-light dark:bg-surface-dark shadow-card border border-transparent dark:border-gray-700 flex flex-col gap-1 group hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between">
              <p className="text-text-secondary dark:text-gray-400 text-sm font-medium font-display">{stat.label}</p>
              <span className={`material-symbols-outlined text-${stat.color} bg-${stat.bg} dark:bg-opacity-20 p-1.5 rounded-lg text-xl`}>{stat.icon}</span>
            </div>
            <div className="flex items-end gap-2 mt-2">
              <p className="text-2xl font-bold text-text-primary dark:text-white font-display">{stat.value}</p>
              <span className="text-secondary text-xs font-bold mb-1 bg-pastel-green dark:bg-green-900/30 px-1.5 py-0.5 rounded">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Simplified Visualization Card */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card p-6 border border-transparent dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold font-display text-text-primary dark:text-white">Most Requested Services</h3>
              <p className="text-sm text-text-secondary">Weekly Overview</p>
            </div>
          </div>
          <div className="h-[250px] flex items-end justify-around gap-4 px-4 pb-2">
            {[85, 45, 60, 30, 50].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                <div 
                  className="w-full bg-pastel-blue dark:bg-primary/10 rounded-t-lg transition-all duration-500 group-hover:bg-primary/20" 
                  style={{ height: `${h}%` }}
                >
                  <div className="w-full h-full bg-primary rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-[10px] font-semibold text-text-secondary uppercase">
                  {['Bath', 'Trim', 'Checkup', 'Hotel', 'Vaccine'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / Highlights */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-r from-primary to-blue-400 rounded-xl shadow-card p-6 text-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform origin-top-right transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display mb-1">Add New Client</h3>
                <p className="text-blue-50 text-sm opacity-90">Quickly register a new owner and their pet.</p>
              </div>
              <button className="bg-white text-primary hover:bg-blue-50 font-bold py-2 px-4 rounded-lg shadow-sm transition-colors">
                Add Now
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary to-green-400 rounded-xl shadow-card p-6 text-white relative overflow-hidden group">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform origin-top-right transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold font-display mb-1">Stock Check</h3>
                <p className="text-green-50 text-sm opacity-90">Identify low stock items in your inventory.</p>
              </div>
              <button className="bg-white text-secondary hover:bg-green-50 font-bold py-2 px-4 rounded-lg shadow-sm transition-colors">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
