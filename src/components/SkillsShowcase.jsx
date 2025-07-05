import { useState } from 'react';

function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState('editing');

  const skillCategories = {
    editing: {
      title: 'Video Editing',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: 'Adobe Premiere Pro', level: 95, experience: '5+ years' },
        { name: 'Final Cut Pro', level: 90, experience: '4+ years' },
        { name: 'DaVinci Resolve', level: 85, experience: '3+ years' },
        { name: 'Avid Media Composer', level: 80, experience: '2+ years' }
      ]
    },
    motion: {
      title: 'Motion Graphics',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      skills: [
        { name: 'After Effects', level: 92, experience: '4+ years' },
        { name: 'Cinema 4D', level: 85, experience: '3+ years' },
        { name: 'Blender', level: 78, experience: '2+ years' },
        { name: 'Lottie Animations', level: 88, experience: '3+ years' }
      ]
    },
    color: {
      title: 'Color Grading',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      skills: [
        { name: 'DaVinci Resolve', level: 90, experience: '4+ years' },
        { name: 'Lumetri Color', level: 88, experience: '4+ years' },
        { name: 'Magic Bullet Suite', level: 82, experience: '3+ years' },
        { name: 'FilmConvert', level: 85, experience: '2+ years' }
      ]
    },
    audio: {
      title: 'Audio Production',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      skills: [
        { name: 'Adobe Audition', level: 85, experience: '3+ years' },
        { name: 'Pro Tools', level: 80, experience: '2+ years' },
        { name: 'Logic Pro', level: 75, experience: '2+ years' },
        { name: 'Izotope RX', level: 88, experience: '3+ years' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Skills</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Technical
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mastery across all aspects of video production, 
            from editing to post-production and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {categories.map((category) => {
                const categoryData = skillCategories[category];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeCategory === category
                        ? 'glass border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-purple-600/10'
                        : 'glass border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-yellow-500 to-purple-600 text-white'
                          : 'bg-white/10 text-gray-400'
                      }`}>
                        {categoryData.icon}
                      </div>
                      <div>
                        <div className={`font-semibold ${
                          activeCategory === category ? 'gradient-text' : 'text-white'
                        }`}>
                          {categoryData.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {categoryData.skills.length} tools
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="glass p-8 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-gray-400">Professional proficiency across industry-standard tools</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <div className="text-right">
                        <div className="text-sm font-medium gradient-text">{skill.level}%</div>
                        <div className="text-xs text-gray-400">{skill.experience}</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-800 rounded-full h-3 mb-2">
                        <div 
                          className="h-3 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>

                    {/* Proficiency Badge */}
                    <div className="mt-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        skill.level >= 90 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : skill.level >= 80
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Certifications & Training</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    'Adobe Certified Expert',
                    'DaVinci Resolve Certified',
                    'Avid Media Composer Certified'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsShowcase;