function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20"
    >
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient with deep blues and purples */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>

        {/* Animated mesh gradient with tech-inspired colors */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/40 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/40 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-indigo-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-violet-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-3000"></div>
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

            <h1 className="heading-xl mb-6">
              <span className="block text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-4 drop-shadow-2xl">
                ABD EL MOUGHIT
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="gradient-text drop-shadow-2xl">
                Your ideas become reality
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              I have two years of experience in video editing using professional
              software such as Premiere Pro and After Effects, with a strong
              focus on effective visual storytelling.
            </p>

            {/* Specialties */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {[
                "Video Editing",
                "Motion Graphics",
                "Color Grading",
                "Audio Post",
              ].map((specialty, index) => (
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
                className="group relative overflow-hidden px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center text-lg">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Watch My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="group px-10 py-5 glass border-2 border-white/20 rounded-full font-bold text-white hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center text-lg">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Workspace Scene */}
          <div className="text-center fade-in">
            <div className="relative inline-block">
              {/* Main Workspace Container */}
              <div className="relative">
                {/* Gradient Border with tech colors */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 rounded-3xl blur-sm opacity-75 animate-pulse"></div>

                {/* Workspace Image */}
                <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 p-2 rounded-3xl">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F55ae42c3948f4ea59afa7f08468c0f9b%2Fedb50daa71c649e1aa004c0ce04475a3?format=webp&width=800"
                    alt="ABD EL MOUGHIT - Video Editor Workspace"
                    className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Floating Software Badge */}
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-2xl bg-gradient-to-r from-blue-900/80 to-purple-900/80">
                  <div className="text-center">
                    <div className="text-sm font-bold text-white mb-1">
                      Premiere Pro
                    </div>
                    <div className="text-xs text-gray-300 uppercase tracking-wider">
                      After Effects
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 glass p-3 rounded-xl border border-white/20 shadow-2xl bg-gradient-to-r from-indigo-900/80 to-blue-900/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-medium">
                      2+ Years Pro
                    </span>
                  </div>
                </div>

                {/* Additional Software Icons */}
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 space-y-4">
                  <div className="glass p-2 rounded-lg border border-white/10 bg-gradient-to-r from-purple-900/60 to-indigo-900/60">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Pr</span>
                    </div>
                  </div>
                  <div className="glass p-2 rounded-lg border border-white/10 bg-gradient-to-r from-blue-900/60 to-purple-900/60">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Ae</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Skills Info */}
              <div className="mt-8 glass p-6 rounded-2xl border border-white/20 max-w-sm mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  ABD EL MOUGHIT
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Passionate video editor focused on visual storytelling using
                  industry-standard software
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">2+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">Pro</div>
                    <div className="text-xs text-gray-400">Software</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold gradient-text">100%</div>
                    <div className="text-xs text-gray-400">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 fade-in">
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-300 font-semibold mb-1">
                Projects Completed
              </div>
              <div className="text-gray-500 text-sm">
                Creative video editing
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                2+
              </div>
              <div className="text-gray-300 font-semibold mb-1">
                Years Experience
              </div>
              <div className="text-gray-500 text-sm">
                Professional video editing
              </div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="heading-md gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-300 font-semibold mb-1">Commitment</div>
              <div className="text-gray-500 text-sm">Quality storytelling</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 fade-in">
          <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider text-center">
            Trusted by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Tech Innovations",
              "Rising Star Records",
              "Luxury Properties",
              "Impact Stories",
            ].map((client, index) => (
              <div
                key={index}
                className="text-gray-500 font-medium hover:text-gray-300 transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs mb-2 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-yellow-500/50 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-yellow-500 to-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with tech colors */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-br from-blue-500/40 to-blue-600/40 rounded-full animate-float shadow-lg shadow-blue-500/20"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-purple-500/40 to-purple-600/40 rounded-full animate-float delay-1000 shadow-lg shadow-purple-500/20"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-indigo-500/40 to-indigo-600/40 rounded-full animate-float delay-2000 shadow-lg shadow-indigo-500/20"></div>
      <div className="absolute bottom-60 right-10 w-7 h-7 bg-gradient-to-br from-violet-600/40 to-violet-700/40 rounded-full animate-float delay-3000 shadow-lg shadow-violet-600/20"></div>

      {/* Additional decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
}

export default Hero;
