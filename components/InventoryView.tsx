
import React from 'react';
import { PRODUCTS } from '../mockData';

const InventoryView: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pastel-blue dark:bg-primary/10 rounded-xl p-6 shadow-card flex flex-col relative overflow-hidden group">
          <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-9xl text-primary">inventory_2</span>
          </div>
          <p className="text-text-secondary text-sm font-medium mb-1">Total Items in Stock</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-text-primary dark:text-white">1,240</h3>
            <span className="text-xs font-medium text-secondary bg-white/60 px-2 py-0.5 rounded-full mb-1">+12%</span>
          </div>
        </div>

        <div className="bg-[#FFEBEE] dark:bg-red-900/10 rounded-xl p-6 shadow-card flex flex-col relative overflow-hidden group">
          <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-9xl text-red-500">warning</span>
          </div>
          <p className="text-text-secondary text-sm font-medium mb-1">Low Stock Alerts</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-text-primary dark:text-white">4</h3>
            <span className="text-xs font-medium text-red-500 bg-white/60 px-2 py-0.5 rounded-full mb-1">Action Needed</span>
          </div>
        </div>

        <div className="bg-pastel-green dark:bg-green-900/10 rounded-xl p-6 shadow-card flex flex-col relative overflow-hidden group">
          <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-9xl text-secondary">payments</span>
          </div>
          <p className="text-text-secondary text-sm font-medium mb-1">Today's Sales</p>
          <div className="flex items-end gap-2">
            <h3 className="text-3xl font-bold text-text-primary dark:text-white">R$ 1.250</h3>
            <span className="text-xs font-medium text-secondary bg-white/60 px-2 py-0.5 rounded-full mb-1">+5% vs yesterday</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-card border border-transparent dark:border-gray-700">
            <div className="relative w-full sm:max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-lg">search</span>
              <input className="block w-full pl-9 pr-3 py-2.5 border-none rounded-lg bg-[#f0f3f4] dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary/50 transition-all placeholder-text-secondary dark:text-white outline-none" placeholder="Search product..." type="text"/>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-light dark:bg-gray-800 border border-[#f0f3f4] dark:border-gray-700 rounded-lg text-sm font-medium text-text-primary dark:text-white hover:bg-[#f0f3f4] dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-lg">filter_list</span> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark rounded-lg text-sm font-bold text-white shadow-md transition-all ml-auto sm:ml-0">
                <span className="material-symbols-outlined text-lg">add</span> New Product
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className={`bg-surface-light dark:bg-surface-dark rounded-xl shadow-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 border ${product.stock <= product.lowStockThreshold ? 'border-red-200 dark:border-red-900' : 'border-transparent dark:border-gray-700 hover:border-primary/20'}`}>
                <div className="h-48 bg-gray-100 dark:bg-gray-800 relative bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}>
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur text-xs font-bold text-text-primary dark:text-white px-2 py-1 rounded-md shadow-sm uppercase">{product.category}</span>
                  </div>
                  {product.stock <= product.lowStockThreshold && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-md shadow-sm border border-red-200 flex items-center gap-1 animate-pulse">
                        <span className="material-symbols-outlined text-[14px]">warning</span> Low Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div>
                    <h3 className="font-bold text-text-primary dark:text-white text-lg leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-xs text-text-secondary mt-1">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#f0f3f4] dark:border-gray-700 mt-1">
                    <div className="flex flex-col">
                      <span className="text-xs text-text-secondary font-medium uppercase">Price</span>
                      <span className="text-secondary font-bold text-lg">R$ {product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-text-secondary font-medium uppercase">Stock</span>
                      <div className={`flex items-center gap-1 text-sm font-bold ${product.stock <= product.lowStockThreshold ? 'text-red-500' : 'text-text-primary dark:text-white'}`}>
                        {product.stock} un.
                        <span className={`size-2 rounded-full ${product.stock <= product.lowStockThreshold ? 'bg-red-500' : 'bg-secondary'}`}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Mini List (Best Sellers) */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-card p-6 sticky top-4 border border-transparent dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-text-primary dark:text-white">Best Sellers</h3>
              <button className="text-primary text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { name: 'Petisco Bifinho', sales: '150', trend: '+12%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqyoG7l9z_XwcEpm99C679fTPQV3e3Icb29OJSBg16x2mSrkIPWL6HK7HSDy3MiwFqM9VAeHm1wfwV_2PD55LFXTkLrVF-QxwIYOy9mvYi-NY-yoAZkBk9tl9UnK3dITzXeii8IYFyqKWuac1uqDdIJAH1gECEb-iBND_AhgG2CWkpleJc3hjoDhEMnQg-thdgJuFiUZZvGP0X9Uu5PoZ_vpEQd_K2vyACC6HIP7K2Q_nzEhqNCcZgKYTPEZNyPK-vnqyWPeRPUN-z' },
                { name: 'Areia Sanitária', sales: '120', trend: '+8%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6yxyEgC5fa-vSG5j9VM9NgGx1FYcyu2ZqFQppfcJbUguYzrhqJJfDYOYp17xXNIH0TmbktJX9zTAiKAKJgSk0I0WMffSxtRgfvKqN1hYlgV5oXVfUsVBOgJyc_71p0VSt6h8ozk7qGpEobzjqpofgpfvnLMD4bCqqM_49v70vtO_miijrEwGGSXHyvb3sGUCowmiMWY3sA4pgvt-96TshRAbSoYF3ig3zuTE06pjUbf3gkjNhW6ezOfdNeENM5CF-9O6mWFbgNUaf' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="font-bold text-text-secondary text-lg w-4">{i+1}</div>
                  <div className="size-12 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${item.img}')` }}></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-text-primary dark:text-white truncate">{item.name}</h4>
                    <p className="text-xs text-text-secondary">{item.sales} sold</p>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-pastel-green dark:bg-green-900/30 px-2 py-1 rounded">{item.trend}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#f0f3f4] dark:border-gray-700">
              <h4 className="text-sm font-bold text-text-primary dark:text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">lightbulb</span> Tips of the Day
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                Products in the <span className="font-bold text-primary">Toys</span> category have 30% more sales on Fridays. Prepare your stock!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryView;
