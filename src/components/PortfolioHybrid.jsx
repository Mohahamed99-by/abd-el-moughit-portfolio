import { useState, useEffect } from 'react';
import axios from 'axios';

function PortfolioHybrid() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log('🔍 Fetching projects from API...');
      setApiStatus('connecting');
      
      const response = await axios.get('http://localhost:5000/api/projects', {
        timeout: 5000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log('✅ API Response:', response.data);
      setProjects(response.data || []);
      setError('');
      setApiStatus('connected');
    } catch (error) {
      console.error('❌ Error fetching projects:', error);
      setApiStatus('failed');
      
      if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
        setError('Backend server is not running');
      } else if (error.response) {
        setError(`Server error: ${error.response.status}`);
      } else if (error.request) {
        setError('No response from server');
      } else {
        setError(`Connection failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = () => {
    switch (apiStatus) {
      case 'connected': return 'text-green-400';
      case 'failed': return 'text-red-400';
      case 'connecting': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = () => {
    switch (apiStatus) {
      case 'connected': return `✅ Connected - ${projects.length} projects found`;
      case 'failed': return `❌ Connection failed`;
      case 'connecting': return `🔄 Connecting...`;
      default: return '🔍 Checking connection...';
    }
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
          </p>
        </div>

        {/* API Status Display */}
        <div className="mb-12 text-center">
          <div className="glass p-4 rounded-lg border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">API Connection Status</h3>
            <p className={`text-sm ${getStatusColor()}`}>
              {getStatusText()}
            </p>
            {error && (
              <div className="mt-2">
                <p className="text-red-400 text-sm">{error}</p>
                <button
                  onClick={() => {
                    setError('');
                    setLoading(true);
                    setApiStatus('checking');
                    fetchProjects();
                  }}
                  className="mt-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-600 text-white rounded-full text-sm hover:scale-105 transition-all duration-300"
                >
                  Retry Connection
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Projects Display */}
        <div className="fade-in">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-xl text-white mb-4">Loading projects...</div>
              <div className="animate-spin w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
            </div>
          ) : projects.length > 0 ? (
            /* Real Projects from API */
            <div className="masonry-grid">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover"
                >
                  {/* Project Media */}
                  <div className="relative overflow-hidden">
                    {project.thumbnail_url ? (
                      <img
                        src={project.thumbnail_url}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <video
                        src={project.video_url}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => e.target.pause()}
                      />
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
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                    )}
                    <div className="text-xs text-green-400">
                      ✅ Loaded from API
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Fallback Demo Projects */
            <div>
              <div className="text-center mb-8">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-w-2xl mx-auto">
                  <p className="text-yellow-400 text-sm">
                    📝 No projects found in database. Showing demo content below.
                  </p>
                </div>
              </div>
              
              <div className="masonry-grid">
                {/* Demo Project 1 */}
                <div className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-r from-yellow-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Demo Video 1</span>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full">
                      <span className="text-sm text-white font-medium">Commercial</span>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-500 rounded-full">
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Sample Commercial Project</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      This is a demo project showing how your portfolio will look when you add real projects.
                    </p>
                    <div className="text-xs text-blue-400">
                      🎬 Demo Content
                    </div>
                  </div>
                </div>

                {/* Demo Project 2 */}
                <div className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Demo Video 2</span>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full">
                      <span className="text-sm text-white font-medium">Event</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Sample Event Video</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Another demo project to show the portfolio layout and design.
                    </p>
                    <div className="text-xs text-blue-400">
                      🎬 Demo Content
                    </div>
                  </div>
                </div>

                {/* Demo Project 3 */}
                <div className="group relative overflow-hidden rounded-2xl glass border border-white/10 card-hover">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-green-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Demo Video 3</span>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500/80 to-purple-600/80 rounded-full">
                      <span className="text-sm text-white font-medium">Promo</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Sample Promo Video</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Third demo project showing promotional video content.
                    </p>
                    <div className="text-xs text-blue-400">
                      🎬 Demo Content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-16 text-center fade-in">
          <div className="glass p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              How to Add Real Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">1. Start Backend Server</h4>
                <code className="bg-gray-800 px-3 py-2 rounded text-sm text-gray-300 block">
                  cd admin-backend<br/>
                  npm run dev
                </code>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">2. Access Admin Panel</h4>
                <p className="text-gray-300 text-sm">
                  Go to <a href="/admin" className="text-yellow-400 hover:underline">/admin</a> and login with password: <code className="bg-gray-800 px-2 py-1 rounded">admin123</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioHybrid;