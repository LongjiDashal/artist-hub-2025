import React, { useState, useRef } from 'react';
import { Upload, X, FileAudio, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface FileUploadFieldProps {
  label: string;
  accept: string;
  multiple?: boolean;
  type: 'image' | 'audio';
  helperText?: string;
}
export function FileUploadField({
  label,
  accept,
  multiple = false,
  type,
  helperText
}: FileUploadFieldProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => multiple ? [...prev, ...newFiles] : newFiles);
    }
  };
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => multiple ? [...prev, ...newFiles] : newFiles);
    }
  };
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };
  return <div className="w-full space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onClick={() => fileInputRef.current?.click()} className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center space-y-2
          ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'}`}>
        <input ref={fileInputRef} type="file" accept={accept} multiple={multiple} onChange={handleFileSelect} className="hidden" />

        <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
          {type === 'image' ? <ImageIcon size={24} /> : <FileAudio size={24} />}
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-semibold text-indigo-600">Click to upload</span>{' '}
          or drag and drop
        </div>

        {helperText && <p className="text-xs text-gray-400">{helperText}</p>}
      </div>

      <AnimatePresence>
        {files.length > 0 && <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="space-y-2 mt-3">
            {files.map((file, index) => <motion.div key={`${file.name}-${index}`} initial={{
          opacity: 0,
          x: -10
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          height: 0
        }} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500">
                    {type === 'image' ? <ImageIcon size={16} /> : <FileAudio size={16} />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button onClick={e => {
            e.stopPropagation();
            removeFile(index);
          }} className="p-1 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-colors">
                  <X size={16} />
                </button>
              </motion.div>)}
          </motion.div>}
      </AnimatePresence>
    </div>;
}