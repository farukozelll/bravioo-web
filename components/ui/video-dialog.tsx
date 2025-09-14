'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  src?: string;
}

export function VideoDialog({ open, onClose, title, src }: VideoDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          
          {/* Dialog */}
          <div className="fixed inset-0 z-[60] grid place-items-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-3xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? 'video-title' : undefined}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Container */}
              <div className="aspect-video w-full">
                {src ? (
                  <iframe
                    className="h-full w-full"
                    src={`${src}?rel=0&modestbranding=1&autoplay=1`}
                    title={title ?? 'Video'}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-900 text-white">
                    <p>Video yüklenemiyor</p>
                  </div>
                )}
              </div>

              {/* Title */}
              {title && (
                <div className="bg-black/90 p-4">
                  <h2 id="video-title" className="text-lg font-semibold text-white">
                    {title}
                  </h2>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
