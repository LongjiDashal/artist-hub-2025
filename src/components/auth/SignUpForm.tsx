import React, { useState } from 'react';
import { User, DollarSign, Instagram, Twitter, Youtube, Video, Users, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FileUploadField } from './FileUploadField';
import { GenreSelect } from './GenreSelect';
import { AvailabilityToggle } from './AvailabilityToggle';
export function SignUpForm() {
  const [genre, setGenre] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [isGroup, setIsGroup] = useState(false);
  const [isLiveStreaming, setIsLiveStreaming] = useState(false);
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <motion.form initial="hidden" animate="visible" className="space-y-8 py-4" onSubmit={e => e.preventDefault()}>
      {/* Section 1: Identity */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center border-b pb-2">
          <User className="mr-2 text-indigo-500" size={20} />
          Artist Identity
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Stage Name
            </label>
            <input type="text" placeholder="The Midnight Star" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
        </div>

        <FileUploadField label="Profile Photo" accept="image/*" type="image" helperText="High quality headshot or logo (JPG, PNG)" />
      </motion.div>

      {/* Section 2: Professional Details */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center border-b pb-2">
          <Mic2 className="mr-2 text-indigo-500" size={20} />
          Professional Details
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <GenreSelect value={genre} onChange={setGenre} />

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Artist Type
            </label>
            <div className="flex p-1 bg-gray-100 rounded-xl">
              <button type="button" onClick={() => setIsGroup(false)} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!isGroup ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Individual
              </button>
              <button type="button" onClick={() => setIsGroup(true)} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${isGroup ? 'bg-white shadow-sm text-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
                Group / Band
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Average Rate per Program
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="number" placeholder="500.00" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
          </div>
        </div>
      </motion.div>

      {/* Section 3: Business & Marketing */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center border-b pb-2">
          <Users className="mr-2 text-indigo-500" size={20} />
          Business & Marketing
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Program Advertisement
          </label>
          <textarea rows={3} placeholder="Describe your performance style, set length, and what makes your show unique..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Product / Service Marketing
          </label>
          <textarea rows={3} placeholder="Do you sell merchandise, offer lessons, or provide other services? Describe them here..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" />
        </div>
      </motion.div>

      {/* Section 4: Media */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center border-b pb-2">
          <Video className="mr-2 text-indigo-500" size={20} />
          Media & Content
        </h3>

        <FileUploadField label="Upload Original Songs" accept="audio/*" type="audio" multiple={true} helperText="MP3, WAV up to 10MB per file" />

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div>
            <span className="block text-sm font-medium text-gray-900">
              Live Streaming
            </span>
            <span className="text-xs text-gray-500">
              Are you available for virtual performances?
            </span>
          </div>
          <button type="button" onClick={() => setIsLiveStreaming(!isLiveStreaming)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${isLiveStreaming ? 'bg-indigo-600' : 'bg-gray-200'}`}>
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${isLiveStreaming ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>
      </motion.div>

      {/* Section 5: Contact & Social */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center border-b pb-2">
          <Instagram className="mr-2 text-indigo-500" size={20} />
          Contact & Socials
        </h3>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Contact Email
          </label>
          <input type="email" placeholder="booking@artist.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="@instagram" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="relative">
            <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="@twitter" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div className="relative">
            <Youtube className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="YouTube Channel" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
        </div>
      </motion.div>

      {/* Section 6: Availability */}
      <motion.div variants={sectionVariants} className="space-y-5">
        <AvailabilityToggle isAvailable={isAvailable} onChange={setIsAvailable} />
      </motion.div>

      <div className="pt-4">
        <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200">
          Create Artist Profile
        </button>
        <p className="text-center text-xs text-gray-500 mt-4">
          By creating an account, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </motion.form>;
}