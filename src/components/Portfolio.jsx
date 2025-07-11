import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import VideoModal from './VideoModal';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'featured'

  const categories = ['All', 'Featured', ...new Set(portfolioData.projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : activeFilter === 'Featured'
    ? portfolioData.projects.filter(project => project.featured)
    : portfolioData.projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
          {viewMode === 'grid' ? (
            /* Grid View */
            <div className="masonry-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
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

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full border border-white/20">
                      <span className="text-sm text-white font-medium">{project.duration}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full">
                      <span className="text-sm text-white font-medium">{project.category}</span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-20 px-2 py-1 bg-yellow-500 rounded-full">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Client Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">
                            {project.client.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">{project.client}</span>
                          <div className="text-xs text-gray-500">{project.year}</div>
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
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group glass p-6 rounded-2xl border border-white/10 card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Project Image */}
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
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full text-xs text-white font-medium">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-yellow-500 rounded-full">
                            <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                        )}
                      </div>

                      {/* Duration */}
                      <div className="absolute top-2 right-2 px-2 py-1 glass rounded-full border border-white/20">
                        <span className="text-xs text-white font-medium">{project.duration}</span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="md:col-span-2">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{project.client}</span>
                            <span>•</span>
                            <span>{project.year}</span>
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

                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Technical Details Preview */}
                      {project.techDetails && (
                        <div className="flex flex-wrap gap-2">
                          {project.techDetails.slice(0, 3).map((detail, detailIndex) => (
                            <span
                              key={detailIndex}
                              className="px-2 py-1 bg-gradient-to-r from-yellow-500/10 to-purple-600/10 border border-yellow-500/20 rounded-full text-xs text-yellow-300"
                            >
                              {detail}
                            </span>
                          ))}
                          {project.techDetails.length > 3 && (
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                              +{project.techDetails.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in">
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{portfolioData.projects.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{portfolioData.projects.filter(p => p.featured).length}</div>
            <div className="text-gray-400 text-sm">Featured Works</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{new Set(portfolioData.projects.map(p => p.category)).size}</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="text-center glass p-6 rounded-xl border border-white/10">
            <div className="text-2xl font-bold gradient-text">{new Set(portfolioData.projects.map(p => p.year)).size}</div>
            <div className="text-gray-400 text-sm">Years Active</div>
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

        {/* Video Modal */}
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
}

export default Portfolio;