import React, { useState, useEffect } from 'react';
import { Client, Pet } from '../types';
import { supabase } from '../services/supabaseClient';
import NewClientModal from './NewClientModal';

const ClientsView: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('clients')
        .select(`
          *,
          pets (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedClients = data.map((c: any) => ({
        ...c,
        pets: c.pets.map((p: any) => ({
          ...p,
          alerts: [], // Default empty alerts for now
          history: [] // Default empty history for now
        }))
      }));

      setClients(formattedClients);
      if (formattedClients.length > 0 && !selectedClientId) {
        setSelectedClientId(formattedClients[0].id);
      }
    } catch (err) {
      console.error('Error fetching clients:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const selectedClient = clients.find(c => c.id === selectedClientId);
  const selectedPet = selectedClient?.pets[0];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.pets.some(pet => pet.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    client.phone.includes(searchQuery)
  );

  return (
    <div className="flex flex-col xl:flex-row gap-6 h-full">
      {/* Left Column: List */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        <div className="flex justify-between items-center bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-sm border border-transparent dark:border-gray-800">
          <h1 className="text-xl font-black font-display text-text-primary dark:text-white">Clients List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <span className="material-symbols-outlined text-sm">add</span> Add Client
          </button>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card border border-transparent dark:border-gray-800 p-4">
          <div className="relative mb-4">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-base">search</span>
            <input
              type="text"
              placeholder="Search client by name, pet name, or phone..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#f0f3f4] dark:bg-gray-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none text-text-primary dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-2xl"></div>
              ))
            ) : filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => setSelectedClientId(client.id)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex gap-4 ${selectedClientId === client.id
                    ? 'border-primary bg-primary/5'
                    : 'border-[#f0f3f4] dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700'
                    }`}
                >
                  <div className="size-12 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700" style={{ backgroundImage: `url('${client.image}')` }}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-text-primary dark:text-white truncate">{client.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${client.status === 'Active' || client.status === 'Frequent' ? 'bg-pastel-green text-secondary' : 'bg-pastel-red text-red-600'
                        }`}>
                        {client.status}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary flex items-center gap-1 truncate mb-1">
                      <span className="material-symbols-outlined text-sm">pets</span>
                      {client.pets[0]?.name} ({client.pets[0]?.breed})
                    </p>
                    <p className="text-xs text-text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">call</span>
                      {client.phone}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <div className="size-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-gray-400 text-3xl">person_off</span>
                </div>
                <p className="text-text-secondary">No clients found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Detail View */}
      <div className="w-full xl:w-[420px] 2xl:w-[480px] shrink-0 flex flex-col gap-4">
        {selectedClient && selectedPet ? (
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-card h-full flex flex-col border border-transparent dark:border-gray-700 overflow-hidden">
            <div className="relative h-16 bg-pastel-blue dark:bg-primary/10">
              <button className="absolute top-3 right-3 p-1.5 bg-white/50 hover:bg-white rounded-full transition-colors text-primary shadow-sm">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <div className="px-6 pb-6 -mt-8 flex flex-col flex-1 overflow-y-auto no-scrollbar relative">
              <div className="flex justify-between items-end">
                <div className="size-20 rounded-full bg-white dark:bg-surface-dark p-1 shadow-md">
                  <div
                    className="size-full rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${selectedPet.image}')` }}
                  ></div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-pastel-green text-secondary text-xs font-bold rounded-lg flex items-center gap-2 hover:bg-green-200 transition-colors">
                    <span className="material-symbols-outlined text-sm">chat</span> Message
                  </button>
                  <button className="px-4 py-1.5 bg-pastel-blue text-primary text-xs font-bold rounded-lg flex items-center gap-2 hover:bg-blue-200 transition-colors">
                    <span className="material-symbols-outlined text-sm">calendar_month</span> Book
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-2xl font-black font-display text-text-primary dark:text-white">{selectedPet.name}</h2>
                <p className="text-sm text-text-secondary">Owned by <span className="font-bold text-primary hover:underline cursor-pointer">{selectedClient.name}</span></p>
              </div>

              {/* AI Insight (Mock) */}
              <div className="mt-6 p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 dark:border-primary/20">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <span className="material-symbols-outlined text-lg">temp_preferences_custom</span>
                  <span className="text-xs font-bold uppercase tracking-wider">AI Health Assistant</span>
                </div>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  Keep a close eye on your pet's dietary needs and ensure regular checkups.
                </p>
              </div>

              {/* Pet Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { label: 'BREED', value: selectedPet.breed },
                  { label: 'AGE', value: selectedPet.age },
                  { label: 'WEIGHT', value: selectedPet.weight },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#f0f3f4] dark:bg-gray-800 p-3 rounded-xl text-center">
                    <p className="text-[9px] font-bold text-text-secondary mb-1">{stat.label}</p>
                    <p className="text-xs font-black text-text-primary dark:text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Alerts */}
              <div className="mt-6">
                <h3 className="text-xs font-bold text-text-primary dark:text-white flex justify-between items-center mb-4">
                  Alerts & Reminders
                </h3>
                {selectedPet.alerts && selectedPet.alerts.length > 0 ? (
                  selectedPet.alerts.map((alert, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-pastel-red/50 dark:bg-red-900/10 border border-pastel-red dark:border-red-900/30 rounded-xl">
                      <div className="size-8 bg-white dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                        <span className="material-symbols-outlined text-lg">warning</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-red-600">{alert.title}</p>
                        <p className="text-[10px] text-red-600/80">{alert.message}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-text-secondary text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl italic">No active alerts.</p>
                )}
              </div>

              {/* History */}
              <div className="mt-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-bold text-text-primary dark:text-white uppercase tracking-widest">Service History</h3>
                  <button className="text-[10px] font-bold text-primary hover:underline">View All</button>
                </div>

                <div className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800">
                  {selectedPet.history && selectedPet.history.length > 0 ? (
                    selectedPet.history.map((record, i) => (
                      <div key={i} className="pl-6 relative">
                        <div className="absolute left-0 top-1.5 size-4 rounded-full border-4 border-white dark:border-gray-900 bg-primary"></div>
                        <div className="flex justify-between items-start">
                          <p className="text-[10px] text-text-secondary mb-1">{record.date}</p>
                        </div>
                        <p className="text-xs font-bold text-text-primary dark:text-white">{record.serviceName}</p>
                        <p className="text-[10px] text-text-secondary">Provider: {record.provider}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-text-secondary italic pl-2">No history records found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center bg-surface-light dark:bg-surface-dark rounded-2xl border-2 border-dashed border-gray-100 dark:border-gray-800">
            <div className="text-center p-8">
              <div className="size-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-gray-400 text-3xl">info</span>
              </div>
              <p className="text-text-secondary text-sm">Select a client to view details</p>
            </div>
          </div>
        )}
      </div>

      <NewClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={fetchClients}
      />
    </div>
  );
};

export default ClientsView;
