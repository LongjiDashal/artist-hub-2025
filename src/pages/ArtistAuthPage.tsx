import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music2 } from 'lucide-react';
import { SignInForm } from '../components/auth/SignInForm';
import { SignUpForm } from '../components/auth/SignUpForm';
export function ArtistAuthPage() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  return <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-6 font-sans">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <motion.div layout className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20 shadow-lg">
              <Music2 size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Artist Hub</h1>
            <p className="text-indigo-200 mt-2 text-sm font-medium">
              Connect. Perform. Grow.
            </p>
          </div>
        </div>

        {/* Toggle Nav */}
        <div className="flex border-b border-gray-100">
          <button onClick={() => setAuthMode('signin')} className={`flex-1 py-4 text-sm font-semibold relative transition-colors ${authMode === 'signin' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Sign In
            {authMode === 'signin' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
          </button>
          <button onClick={() => setAuthMode('signup')} className={`flex-1 py-4 text-sm font-semibold relative transition-colors ${authMode === 'signup' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Join as Artist
            {authMode === 'signup' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {authMode === 'signin' ? <motion.div key="signin" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.2
          }}>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Welcome Back
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Access your dashboard and manage your bookings
                  </p>
                </div>
                <SignInForm />
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button onClick={() => setAuthMode('signup')} className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                      Sign up now
                    </button>
                  </p>
                </div>
              </motion.div> : <motion.div key="signup" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.2
          }}>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Create Artist Profile
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Showcase your talent to the world
                  </p>
                </div>
                <SignUpForm />
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button onClick={() => setAuthMode('signin')} className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                      Sign in
                    </button>
                  </p>
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>

      <p className="mt-8 text-center text-xs text-gray-400">
        &copy; 2024 Artist Hub Platform. All rights reserved.
      </p>
    </div>;
}