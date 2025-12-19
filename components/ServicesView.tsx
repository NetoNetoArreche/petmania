
import React from 'react';
import { SERVICES, PACKAGES } from '../mockData';

const ServicesView: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-black font-display text-text-primary dark:text-white tracking-tight mb-2">Service Catalog</h1>
        <p className="text-text-secondary dark:text-gray-400 font-body text-base max-w-2xl">Manage individual services and create promotional packages to increase your sales.</p>
      </div>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined">soap</span>
          </div>
          <h2 className="text-xl font-bold font-display text-text-primary dark:text-white">Individual Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 relative border border-transparent hover:border-primary/20">
              {service.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div className="size-12 rounded-2xl bg-pastel-blue dark:bg-primary/20 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                </div>
                <button className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
              </div>
              <h3 className="text-lg font-bold font-display text-text-primary dark:text-white mb-1">{service.name}</h3>
              <p className="text-text-secondary text-sm mb-4 leading-snug">{service.description}</p>
              <div className="flex items-end justify-between border-t border-gray-50 dark:border-gray-700 pt-4 mt-auto">
                <div>
                  <span className="block text-xs text-text-secondary font-semibold mb-0.5 uppercase">Price</span>
                  <span className="text-xl font-black text-primary">R$ {service.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-1 text-text-secondary bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  <span className="text-xs font-bold">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-secondary/10 rounded-lg text-secondary">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <h2 className="text-xl font-bold font-display text-text-primary dark:text-white">Promotional Packages</h2>
          </div>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="group bg-surface-light dark:bg-surface-dark rounded-xl p-0 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
              <div className={`h-1.5 w-full ${pkg.themeColor === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div className={`${pkg.themeColor === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} text-xs font-bold px-3 py-1 rounded-full`}>
                    {pkg.discountTag}
                  </div>
                  <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">edit</span></button>
                </div>
                <h3 className="text-lg font-bold font-display text-text-primary dark:text-white mb-1">{pkg.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{pkg.description}</p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4 space-y-2">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text-primary dark:text-gray-200">
                      <span className={`material-symbols-outlined ${pkg.themeColor === 'primary' ? 'text-primary' : 'text-secondary'} text-lg icon-filled`}>check_circle</span>
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-secondary line-through decoration-red-400">R$ {pkg.originalPrice.toFixed(2)}</span>
                    <span className="text-2xl font-black text-text-primary dark:text-white">R$ {pkg.discountedPrice.toFixed(2)}</span>
                  </div>
                  <button className="bg-background-light dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-text-primary dark:text-white p-2 rounded-lg transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Button */}
          <div className="group rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary bg-transparent hover:bg-primary/5 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer min-h-[340px]">
            <div className="size-16 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 flex items-center justify-center mb-4 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary">add_circle</span>
            </div>
            <h3 className="text-lg font-bold font-display text-text-primary dark:text-white mb-2">Create New Package</h3>
            <p className="text-text-secondary text-sm max-w-[200px]">Combine services and offer discounts to build customer loyalty.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
