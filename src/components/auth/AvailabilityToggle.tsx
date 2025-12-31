import React from 'react';
import { motion } from 'framer-motion';
interface AvailabilityToggleProps {
  isAvailable: boolean;
  onChange: (value: boolean) => void;
}
export function AvailabilityToggle({
  isAvailable,
  onChange
}: AvailabilityToggleProps) {
  return <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Current Status
      </label>

      <button type="button" onClick={() => onChange(!isAvailable)} className={`relative w-full p-1 rounded-xl flex items-center transition-colors duration-300 ${isAvailable ? 'bg-green-100' : 'bg-red-100'}`}>
        <motion.div layout transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }} className={`absolute w-1/2 h-full top-0 bottom-0 rounded-xl shadow-sm border ${isAvailable ? 'left-0 bg-white border-green-200' : 'right-0 bg-white border-red-200'}`} style={{
        left: isAvailable ? '0%' : '50%',
        width: '50%'
      }} />

        <div className={`relative z-10 w-1/2 py-3 text-sm font-medium text-center transition-colors duration-200 ${isAvailable ? 'text-green-700' : 'text-gray-500'}`}>
          Available
        </div>

        <div className={`relative z-10 w-1/2 py-3 text-sm font-medium text-center transition-colors duration-200 ${!isAvailable ? 'text-red-700' : 'text-gray-500'}`}>
          Occupied
        </div>
      </button>

      <p className="text-xs text-gray-500 flex items-center space-x-1">
        <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
        <span>
          {isAvailable ? 'You are currently accepting new invitations.' : 'You are marked as busy/occupied.'}
        </span>
      </p>
    </div>;
}