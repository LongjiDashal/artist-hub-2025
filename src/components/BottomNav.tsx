import React, { useState } from 'react';
import { Home, Search, ShoppingCart, Bell, User } from 'lucide-react';
export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  const tabs = [{
    id: 'home',
    icon: Home,
    label: 'Home'
  }, {
    id: 'explore',
    icon: Search,
    label: 'Explore'
  }, {
    id: 'cart',
    icon: ShoppingCart,
    label: 'Cart'
  }, {
    id: 'notifications',
    icon: Bell,
    label: 'Alerts'
  }, {
    id: 'profile',
    icon: User,
    label: 'Profile'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 pb-safe z-50">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative flex flex-col items-center justify-center space-y-1 w-12">
              <Icon className={`h-6 w-6 transition-colors duration-200 ${isActive ? 'text-[#161823] fill-[#161823]' : 'text-gray-400'}`} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && <span className="absolute -bottom-2 w-1 h-1 bg-[#161823] rounded-full" />}
            </button>;
      })}
      </div>
    </div>;
}