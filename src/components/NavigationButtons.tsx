import React from 'react';
import { Heart, Clock, UserCheck, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
interface NavButtonProps {
  icon: React.ElementType;
  label: string;
}
function NavButton({
  icon: Icon,
  label
}: NavButtonProps) {
  return <motion.button whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.95
  }} className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
      <Icon className="h-4 w-4 text-[#161823]" />
      <span className="text-sm font-medium text-[#161823]">{label}</span>
    </motion.button>;
}
export function NavigationButtons() {
  return <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
      <NavButton icon={Heart} label="Favorites" />
      <NavButton icon={Clock} label="History" />
      <NavButton icon={UserCheck} label="Following" />
      <NavButton icon={FileText} label="Orders" />
    </div>;
}