import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function PortfolioFromAPI() {
  const [projects] = useState(portfolioData.projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [videoLoading, setVideoLoading] = useState(false);

  const categories = ['All', 'Featured', ...new Set(projects.map(project => project.category).filter(Boolean))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (project.video) {
      setVideoLoading(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setVideoLoading(false);
  };

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning various industries and creative challenges. 
            Each project represents a unique story brought to life through careful editing and post-production.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 fade-in">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white shadow-lg shadow-yellow-500/25'
                    : 'glass border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
                {category === 'Featured' && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">View:</span>
            <div className="flex bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Projects Display */}
        <div className="fade-in">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-xl text-gray-400 mb-4">No projects available yet</div>
              <p className="text-gray-500">Check back soon for new content!</p>
            </div>
          ) : viewMode === 'grid' ? (
            /* Grid View */
            <div className="masonry-grid">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Media */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => openModal(project)}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300"
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>

                    {/* Video Available Indicator */}
                    {project.video && (
                      <div className="absolute bottom-4 left-4 px-2 py-1 bg-red-600 rounded-full flex items-center">
                        <svg className="w-3 h-3 text-white mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span className="text-xs text-white font-medium">Video</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    {project.category && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full">
                        <span className="text-sm text-white font-medium">{project.category}</span>
                      </div>
                    )}

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-500 rounded-full">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Project Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">{project.category}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => openModal(project)}
                        className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-yellow-500 group-hover:to-purple-600 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group glass p-6 rounded-2xl border border-white/10 card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Project Media */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-48 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => openModal(project)}
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300"
                        >
                          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-2 left-2 flex gap-2">
                        {project.category && (
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full text-xs text-white font-medium">
                            {project.category}
                          </span>
                        )}
                        {project.featured && (
                          <span className="px-2 py-1 bg-yellow-500 rounded-full">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                        )}
                      </div>

                      {/* Video Available Indicator */}
                      {project.video && (
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-red-600 rounded-full flex items-center">
                          <svg className="w-3 h-3 text-white mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          <span className="text-xs text-white font-medium">Video</span>
                        </div>
                      )}

                                          </div>

                    {/* Project Info */}
                    <div className="md:col-span-2">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{project.category}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => openModal(project)}
                          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>

                      </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 fade-in">
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{projects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{projects.filter(p => p.featured).length}</div>
            <div className="text-gray-400 text-sm">Featured Works</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{new Set(projects.map(p => p.category).filter(Boolean)).size}</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="glass p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate to bring your vision to life with professional video editing 
              and post-production services.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Project Details Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                {selectedProject.video ? (
                  <div className="relative">
                    {/* Loading Indicator */}
                    {videoLoading && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-lg mb-6">
                        <div className="text-center text-white">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
                          <p className="text-sm">Loading video...</p>
                        </div>
                      </div>
                    )}
                    
                    <video
                      src={selectedProject.video}
                      controls
                      className="w-full rounded-lg mb-6 bg-black"
                      poster={selectedProject.thumbnail}
                      preload="metadata"
                      style={{ maxHeight: '70vh' }}
                      onLoadStart={() => {
                        console.log('Video loading started:', selectedProject.video);
                        setVideoLoading(true);
                      }}
                      onCanPlay={() => {
                        console.log('Video can play:', selectedProject.video);
                        setVideoLoading(false);
                      }}
                      onLoadedData={() => {
                        console.log('Video loaded:', selectedProject.video);
                        setVideoLoading(false);
                      }}
                      onError={(e) => {
                        console.error('Video failed to load:', selectedProject.video, e);
                        setVideoLoading(false);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    <div 
                      className="w-full rounded-lg mb-6 bg-gray-800 flex items-center justify-center p-8 text-gray-400"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg font-medium">Video not available</p>
                        <p className="text-sm">File: {selectedProject.video}</p>
                        <p className="text-xs text-gray-500 mt-2">Check browser console for details</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full rounded-lg mb-6"
                  />
                )}
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-6">Project Details</h4>
                  <div className="inline-flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Category:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">
                        {selectedProject.category}
                      </span>
                    </div>
                    {selectedProject.featured && (
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Status:</span>
                        <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PortfolioFromAPI;
