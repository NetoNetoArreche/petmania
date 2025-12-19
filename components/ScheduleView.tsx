
import React from 'react';

const ScheduleView: React.FC = () => {
  const days = [
    { name: 'MON', date: '23' },
    { name: 'TUE', date: '24' },
    { name: 'WED', date: '25', isToday: true },
    { name: 'THU', date: '26' },
    { name: 'FRI', date: '27' },
    { name: 'SAT', date: '28' },
    { name: 'SUN', date: '29' }
  ];

  const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-text-primary dark:text-white mb-1">Schedule</h2>
          <p className="text-text-secondary text-sm">Manage your pet shop's appointments and staff.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex rounded-lg bg-white dark:bg-surface-dark p-1 shadow-sm border border-gray-100 dark:border-gray-700">
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Day</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-pastel-blue text-primary shadow-sm">Week</button>
            <button className="px-3 py-1.5 text-sm font-medium rounded-md text-text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Month</button>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-500/30 transition-all font-semibold text-sm">
            <span className="material-symbols-outlined text-[20px]">add</span> New Appointment
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card flex-1 min-h-[600px] overflow-hidden border border-transparent dark:border-gray-700">
        {/* Calendar Header */}
        <div className="grid grid-cols-8 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30">
          <div className="p-4 border-r border-gray-100 dark:border-gray-700 flex items-center justify-center text-[10px] font-bold text-text-secondary uppercase tracking-wider">Time</div>
          {days.map((day) => (
            <div key={day.date} className={`p-4 border-r border-gray-100 dark:border-gray-700 text-center relative transition-colors ${day.isToday ? 'bg-pastel-blue/20 dark:bg-primary/5' : 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'}`}>
              <span className={`block text-xs font-bold mb-1 ${day.isToday ? 'text-primary' : 'text-text-secondary'}`}>{day.name}</span>
              {day.isToday ? (
                <div className="inline-flex items-center justify-center size-8 rounded-full bg-primary text-white text-lg font-bold shadow-md">{day.date}</div>
              ) : (
                <span className="block text-lg font-bold text-text-primary dark:text-white">{day.date}</span>
              )}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="flex-1 overflow-y-auto relative no-scrollbar">
          <div className="grid grid-cols-8 min-h-[700px]">
            {/* Time Labels */}
            <div className="flex flex-col border-r border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-900/10">
              {hours.map((h) => (
                <div key={h} className="h-24 flex items-center justify-center text-xs text-text-secondary border-b border-gray-50 dark:border-gray-800">
                  {h}
                </div>
              ))}
            </div>

            {/* Days Columns */}
            {days.map((day, dIdx) => (
              <div key={day.date} className="relative border-r border-gray-100 dark:border-gray-700 group">
                {/* Visual Hour Lines */}
                {hours.map((_, hIdx) => (
                  <div key={hIdx} className="h-24 border-b border-gray-50 dark:border-gray-800 group-last:border-r-0"></div>
                ))}

                {/* Simulated Appointments */}
                {dIdx === 1 && (
                  <div className="absolute top-24 left-1 right-1 h-20 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-2 cursor-pointer hover:shadow-md transition-all">
                    <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase">Grooming</span>
                    <p className="text-xs font-bold text-text-primary dark:text-gray-100 mt-1 truncate">Thor (Golden)</p>
                  </div>
                )}

                {day.isToday && (
                  <>
                    <div className="absolute top-[35%] w-full flex items-center z-10">
                      <div className="size-2 rounded-full bg-red-500 -ml-1"></div>
                      <div className="h-[2px] bg-red-500 w-full opacity-50"></div>
                    </div>
                    <div className="absolute top-12 left-1 right-1 h-24 rounded-lg bg-[#E8F5E9] dark:bg-green-900/20 border-l-4 border-green-500 p-2 cursor-pointer hover:shadow-md transition-all shadow-card">
                      <span className="text-[9px] font-bold text-green-700 dark:text-green-400 uppercase">Veterinary</span>
                      <p className="text-xs font-bold text-text-primary dark:text-gray-100 mt-1 truncate">Luna (Siamese)</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleView;
