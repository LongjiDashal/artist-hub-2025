import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function SignInForm() {
  return <motion.form initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: 20
  }} className="space-y-6 py-4" onSubmit={e => e.preventDefault()}>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input id="email" type="email" placeholder="artist@example.com" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input id="password" type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none" />
          </div>
        </div>
      </div>

      <button type="submit" className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2">
        <span>Sign In</span>
        <ArrowRight size={18} />
      </button>
    </motion.form>;
}