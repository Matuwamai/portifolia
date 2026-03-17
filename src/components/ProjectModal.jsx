import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

const ProjectModal = ({
  isOpen,
  onClose,
  project,
  mediaIndex,
  setMediaIndex,
}) => {
  // Add effect to log when modal opens
  useEffect(() => {
    if (isOpen && project) {
      console.log("Modal opened with project:", project.title);
      console.log("Media index:", mediaIndex);
      console.log("Screenshots:", project.screenshots);
      console.log("Videos:", project.videos);
    }
  }, [isOpen, project, mediaIndex]);

  if (!isOpen || !project) return null;

  // Safely create allMedia array
  const screenshots = project.screenshots || [];
  const videos = project.videos || [];

  const allMedia = [
    ...screenshots.map((url) => ({ type: "image", url })),
    ...videos.map((url) => ({ type: "video", url })),
  ];

  console.log("All media:", allMedia); // Debug log

  // Ensure mediaIndex is valid
  const validMediaIndex =
    mediaIndex >= 0 && mediaIndex < allMedia.length ? mediaIndex : 0;

  const currentMedia = allMedia[validMediaIndex];

  const nextMedia = () => {
    setMediaIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const handleThumbnailClick = (idx) => {
    console.log("Thumbnail clicked:", idx);
    setMediaIndex(idx);
  };

  // If no media, don't render
  if (allMedia.length === 0) {
    console.log("No media available for project:", project.title);
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
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
                  key={currentMedia.url}
                  src={currentMedia.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  key={currentMedia?.url}
                  src={currentMedia?.url}
                  alt={`${project.title} screenshot ${validMediaIndex + 1}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.error("Image failed to load:", currentMedia?.url);
                    e.target.src =
                      "https://via.placeholder.com/1200x800/1a1a2e/ffffff?text=Image+Not+Found";
                  }}
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
                {validMediaIndex + 1} / {allMedia.length}
              </div>
            </div>

            {/* Media thumbnails */}
            {allMedia.length > 1 && (
              <div className="p-4 bg-gray-800 flex gap-2 overflow-x-auto">
                {allMedia.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      idx === validMediaIndex
                        ? "border-blue-500"
                        : "border-transparent hover:border-blue-500/50"
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
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/100x80/1a1a2e/ffffff?text=Error";
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
