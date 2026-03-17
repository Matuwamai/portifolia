import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaPlay, FaTimes } from "react-icons/fa";

const ProjectModal = ({
  isOpen,
  onClose,
  project,
  mediaIndex,
  setMediaIndex,
}) => {
  if (!isOpen || !project) return null;

  const allMedia = [
    ...(project.screenshots || []),
    ...(project.videos
      ? project.videos.map((v) => ({ type: "video", url: v }))
      : []),
  ];

  const currentMedia = allMedia[mediaIndex];

  const nextMedia = () => {
    setMediaIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <HiX size={24} />
          </button>

          {/* Media display */}
          <div className="relative h-[70vh] bg-black">
            {currentMedia?.type === "video" ? (
              <video
                src={currentMedia.url}
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={currentMedia?.url}
                alt={`${project.title} screenshot ${mediaIndex + 1}`}
                className="w-full h-full object-contain"
              />
            )}

            {/* Navigation arrows */}
            {allMedia.length > 1 && (
              <>
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <HiChevronLeft size={24} />
                </button>
                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <HiChevronRight size={24} />
                </button>
              </>
            )}

            {/* Media counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
              {mediaIndex + 1} / {allMedia.length}
            </div>
          </div>

          {/* Media thumbnails */}
          {allMedia.length > 1 && (
            <div className="p-4 bg-gray-800 flex gap-2 overflow-x-auto">
              {allMedia.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setMediaIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    idx === mediaIndex
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  {media.type === "video" ? (
                    <div className="relative w-full h-full bg-gray-700 flex items-center justify-center">
                      <FaPlay className="text-white/50" />
                    </div>
                  ) : (
                    <img
                      src={media.url}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
