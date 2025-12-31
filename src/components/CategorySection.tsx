import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const categories = [{
  id: 1,
  title: 'Fruits',
  image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=300&auto=format&fit=crop'
}, {
  id: 2,
  title: 'Vegetables',
  image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=300&auto=format&fit=crop'
}, {
  id: 3,
  title: 'Organic',
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=300&auto=format&fit=crop'
}, {
  id: 4,
  title: 'Mushrooms',
  image: 'https://images.unsplash.com/photo-1504472418-b3508590cad3?q=80&w=300&auto=format&fit=crop'
}, {
  id: 5,
  title: 'Dairy',
  image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=300&auto=format&fit=crop'
}];
export function CategorySection() {
  return <div className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-lg font-bold text-[#161823]">Categories</h3>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {categories.map(category => <motion.div key={category.id} whileTap={{
        scale: 0.95
      }} className="flex flex-col items-center space-y-2 min-w-[80px]">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-[#161823]">
              {category.title}
            </span>
          </motion.div>)}
      </div>
    </div>;
}