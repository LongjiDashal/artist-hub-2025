import React from 'react';
import { Search } from 'lucide-react';
export function SearchBar() {
  return <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input type="text" placeholder="Search" className="w-full py-3 pl-10 pr-4 bg-[#f5f5f5] text-[#161823] placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#161823]/10 transition-all" />
    </div>;
}