function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-900"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-yellow-400/25 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-purple-600/25 to-transparent rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
        {/* Status Badge */}
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full border border-white/20 shadow-2xl">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="text-sm text-gray-200 font-medium tracking-wider uppercase">
              Available for New Projects
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="mb-6">
              <span className="text-lg md:text-xl text-gray-400 font-medium tracking-wide uppercase mb-4 block">
                Professional Video Editor
              </span>
            </div>
            
            <h1 className="heading-xl mb-8">
              <span className="block text-white mb-4 drop-shadow-2xl">
                Cinematic
              </span>
              <span className="block gradient-text drop-shadow-2xl">
                Storytelling
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming raw footage into
              <span className="gradient-text font-semibold"> compelling visual narratives </span>
              that captivate audiences and drive measurable results for brands worldwide
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {['Video Editing', 'Motion Graphics', 'Color Grading', 'Audio Post'].map((specialty, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass border border-white/20 rounded-full text-sm text-gray-300 hover:text-white hover:border-yellow-500/30 transition-all duration-300"
                >
                  {specialty}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <a
                href="#portfolio"
                className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full font-bold text-white shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center text-lg">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="group px-10 py-5 glass border-2 border-white/20 rounded-full font-bold text-white hover:bg-white/10 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center text-lg">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Collaborate
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="text-center fade-in">
            <div className="relative inline-block">
              {/* Main Image Container */}
              <div className="relative">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-purple-600 to-yellow-500 rounded-3xl blur-sm opacity-75 animate-pulse"></div>
                
                {/* Image */}
                <div className="relative bg-gradient-to-br from-slate-900 to-black p-2 rounded-3xl">
                  <img
                    src="/api/placeholder/400/500"
                    alt="Professional Video Editor"
                    className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">5+</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider">Years Pro</div>
                  </div>
                </div>

                {/* Floating Achievement */}
                <div className="absolute -top-4 -left-4 glass p-3 rounded-xl border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-medium">500+ Projects</span>
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div className="mt-8 glass p-6 rounded-2xl border border-white/20 max-w-sm mx-auto">
                <h3 className="text-xl font-bold text-white mb-2">Your Name</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Award-winning video editor specializing in cinematic storytelling and brand narratives
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">98%</div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">50+</div>
                    <div className="text-xs text-gray-400">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">24h</div>
                    <div className="text-xs text-gray-400">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 fade-in">
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-300 font-semibold mb-1">Projects Completed</div>
              <div className="text-gray-500 text-sm">Across multiple industries</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-gray-300 font-semibold mb-1">Years Experience</div>
              <div className="text-gray-500 text-sm">Professional video editing</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-300 font-semibold mb-1">Client Satisfaction</div>
              <div className="text-gray-500 text-sm">5-star rated projects</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 fade-in">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider text-center">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Tech Innovations', 'Rising Star Records', 'Luxury Properties', 'Impact Stories'].map((client, index) => (
              <div key={index} className="text-gray-500 font-medium hover:text-gray-300 transition-colors duration-300">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-yellow-500/50 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-yellow-500 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-br from-yellow-500/40 to-yellow-600/40 rounded-full animate-float shadow-lg shadow-yellow-500/20"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-purple-500/40 to-purple-600/40 rounded-full animate-float delay-1000 shadow-lg shadow-purple-500/20"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-yellow-400/40 to-yellow-500/40 rounded-full animate-float delay-2000 shadow-lg shadow-yellow-400/20"></div>
      <div className="absolute bottom-60 right-10 w-7 h-7 bg-gradient-to-br from-purple-600/40 to-purple-700/40 rounded-full animate-float delay-3000 shadow-lg shadow-purple-600/20"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
}

export default Hero;