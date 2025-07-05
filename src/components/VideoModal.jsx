import { useState, useEffect } from 'react';

function VideoModal({ isOpen, onClose, project }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
      // Simulate video loading
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4 glass rounded-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400">{project.category} • {project.duration}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
                <p className="text-white">Loading video...</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <button className="w-20 h-20 bg-yellow-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-500/30 hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
              <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm">Client:</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm">Duration:</span>
                  <span className="text-white font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm">Category:</span>
                  <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-full text-sm text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technical Details</h4>
              <div className="space-y-3">
                {project.techDetails?.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </div>
                )) || (
                  <>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">4K Resolution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Color Grading</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Motion Graphics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Audio Enhancement</span>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300">
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;