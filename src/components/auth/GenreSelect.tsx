import React, { useState } from 'react';
import { Check, ChevronDown, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const GENRES = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Electronic', 'R&B', 'Country', 'Classical', 'Folk', 'Metal', 'Other'];
interface GenreSelectProps {
  value: string;
  onChange: (value: string) => void;
}
export function GenreSelect({
  value,
  onChange
}: GenreSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative w-full space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Genre of Music
      </label>

      <button type="button" onClick={() => setIsOpen(!isOpen)} className={`w-full flex items-center justify-between p-3 bg-white border rounded-xl text-left transition-all duration-200
          ${isOpen ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-300 hover:border-gray-400'}
        `}>
        <div className="flex items-center space-x-2">
          <Music size={18} className="text-indigo-500" />
          <span className={value ? 'text-gray-900' : 'text-gray-400'}>
            {value || 'Select a genre'}
          </span>
        </div>
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto py-1">
            {GENRES.map(genre => <button key={genre} type="button" onClick={() => {
          onChange(genre);
          setIsOpen(false);
        }} className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-indigo-50 transition-colors">
                <span className={value === genre ? 'font-medium text-indigo-700' : 'text-gray-700'}>
                  {genre}
                </span>
                {value === genre && <Check size={16} className="text-indigo-600" />}
              </button>)}
          </motion.div>}
      </AnimatePresence>
    </div>;
}