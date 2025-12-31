import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { NavigationButtons } from '../components/NavigationButtons';
import { Banner } from '../components/Banner';
import { CategorySection } from '../components/CategorySection';
import { ProductGrid } from '../components/ProductGrid';
import { BottomNav } from '../components/BottomNav';
import { motion } from 'framer-motion';
export function ShopHomePage() {
  return <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto min-h-screen bg-white relative shadow-2xl overflow-hidden">
        {/* Main Content */}
        <main className="px-4 pt-6 pb-24 space-y-6 overflow-y-auto h-screen scrollbar-hide">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4
        }} className="space-y-4">
            <SearchBar />
            <NavigationButtons />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.4,
          delay: 0.1
        }}>
            <Banner />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.4,
          delay: 0.2
        }}>
            <CategorySection />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.4,
          delay: 0.3
        }}>
            <ProductGrid />
          </motion.div>
        </main>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    </div>;
}