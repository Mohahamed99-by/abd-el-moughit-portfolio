import { portfolioData } from "../data/portfolioData";

function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-black to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">
              About Me
            </span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Crafting Visual Stories That
            <span className="gradient-text"> Inspire & Engage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a professional video editor with over 3 years of experience in
            video editing and visual content creation. I work professionally
            with Adobe Premiere Pro and After Effects, specializing in producing
            marketing videos, social media content, motion graphics, and
            high-quality visual effects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Section */}
          <div className="fade-in">
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">My Goal</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My goal is to transform ideas into engaging videos that speak
                  to the audience and leave a strong visual impact. I believe
                  that every frame tells a story, and every edit shapes an
                  emotion that resonates with viewers.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through my expertise in Adobe Premiere Pro and After Effects,
                  I create content that not only meets professional standards
                  but also delivers memorable experiences across marketing
                  campaigns, social media platforms, and visual storytelling
                  projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    3+
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div className="glass p-6 rounded-xl border border-white/10 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    100+
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 fade-in">
          <div className="glass p-12 rounded-3xl border border-white/10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                My Philosophy
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                "Great video editing isn't just about cutting clips
                together—it's about understanding the rhythm of storytelling,
                the psychology of visual flow, and the art of emotional timing.
                Every project is an opportunity to create something
                extraordinary."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
