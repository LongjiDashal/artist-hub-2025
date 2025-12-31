import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
const products = [{
  id: 1,
  brand: 'Organic Farm',
  name: 'Fresh Radishes',
  price: '$4.99',
  image: 'https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?q=80&w=500&auto=format&fit=crop'
}, {
  id: 2,
  brand: 'Nature Best',
  name: 'Shiitake Mushrooms',
  price: '$8.50',
  image: 'https://images.unsplash.com/photo-1504472418-b3508590cad3?q=80&w=500&auto=format&fit=crop'
}, {
  id: 3,
  brand: 'Sweet Valley',
  name: 'Rainier Cherries',
  price: '$12.99',
  image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=500&auto=format&fit=crop'
}, {
  id: 4,
  brand: 'Green Earth',
  name: 'Baby Spinach',
  price: '$3.49',
  image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=500&auto=format&fit=crop'
}, {
  id: 5,
  brand: 'Fresh Pick',
  name: 'Red Apples',
  price: '$5.99',
  image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=500&auto=format&fit=crop'
}, {
  id: 6,
  brand: 'Root Farms',
  name: 'Organic Carrots',
  price: '$2.99',
  image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=500&auto=format&fit=crop'
}];
export function ProductGrid() {
  return <div className="space-y-3 pb-24">
      <div className="flex items-center justify-between px-1">
        <h3 className="text-lg font-bold text-[#161823]">Popular Now</h3>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map(product => <motion.div key={product.id} whileHover={{
        y: -4
      }} whileTap={{
        scale: 0.98
      }} className="group cursor-pointer">
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 mb-3 relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-[#161823]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-medium">
                {product.brand}
              </p>
              <h4 className="text-sm font-semibold text-[#161823] line-clamp-1">
                {product.name}
              </h4>
              <p className="text-sm font-bold text-[#161823]">
                {product.price}
              </p>
            </div>
          </motion.div>)}
      </div>
    </div>;
}