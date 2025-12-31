import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const banners = [{
  id: 1,
  title: 'Fresh Pears',
  image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1000&auto=format&fit=crop',
  bgColor: '#f0f4f8'
}, {
  id: 2,
  title: 'Organic Citrus',
  image: 'https://images.unsplash.com/photo-1582979512210-99b6a53385f9?q=80&w=1000&auto=format&fit=crop',
  bgColor: '#fff8e1'
}, {
  id: 3,
  title: 'Summer Berries',
  image: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?q=80&w=1000&auto=format&fit=crop',
  bgColor: '#fce4ec'
}];
export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    } else if (info.offset.x > 50) {
      setCurrentIndex(prev => (prev - 1 + banners.length) % banners.length);
    }
  };
  return <div className="relative w-full h-48 overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} className="absolute inset-0 w-full h-full flex items-center justify-between px-6" style={{
        backgroundColor: banners[currentIndex].bgColor
      }} drag="x" dragConstraints={{
        left: 0,
        right: 0
      }} dragElastic={0.2} onDragEnd={handleDragEnd} initial={{
        opacity: 0,
        x: 100
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -100
      }} transition={{
        duration: 0.3
      }}>
          <div className="z-10 max-w-[50%]">
            <h2 className="text-2xl font-bold text-[#161823] leading-tight">
              {banners[currentIndex].title}
            </h2>
            <button className="mt-3 px-4 py-1.5 bg-[#161823] text-white text-xs font-medium rounded-full">
              Shop Now
            </button>
          </div>
          <img src={banners[currentIndex].image} alt={banners[currentIndex].title} className="absolute right-0 bottom-0 h-full w-2/3 object-cover object-center mask-image-gradient" style={{
          maskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
        }} />
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-20">
        {banners.map((_, index) => <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-4 bg-[#161823]' : 'w-1.5 bg-[#161823]/20'}`} />)}
      </div>
    </div>;
}