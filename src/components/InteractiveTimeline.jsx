import { useState } from 'react';

function InteractiveTimeline() {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2019,
      title: 'Started Journey',
      description: 'Began learning video editing with basic software and personal projects.',
      achievements: ['First video edit', 'YouTube channel launch', 'Basic color grading'],
      icon: '🌱'
    },
    {
      year: 2020,
      title: 'Skill Development',
      description: 'Mastered advanced editing techniques and started freelancing.',
      achievements: ['Adobe Premiere Pro certification', 'First paid client', '50+ projects completed'],
      icon: '📚'
    },
    {
      year: 2021,
      title: 'Professional Growth',
      description: 'Expanded services to include motion graphics and color grading.',
      achievements: ['After Effects mastery', 'Corporate clients', 'Team collaborations'],
      icon: '🚀'
    },
    {
      year: 2022,
      title: 'Industry Recognition',
      description: 'Won first industry award and established studio brand.',
      achievements: ['Best Video Editor Award', 'Studio establishment', '200+ projects'],
      icon: '🏆'
    },
    {
      year: 2023,
      title: 'Market Leader',
      description: 'Became a recognized name in video editing with premium clients.',
      achievements: ['Premium client base', 'International projects', 'Mentor role'],
      icon: '👑'
    },
    {
      year: 2024,
      title: 'Innovation Focus',
      description: 'Leading with cutting-edge techniques and AI-enhanced workflows.',
      achievements: ['AI integration', 'Advanced workflows', '500+ projects'],
      icon: '🔮'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Journey</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            My Professional
            <span className="gradient-text"> Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From passionate beginner to industry professional - explore the milestones 
            that shaped my video editing career.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Timeline</h3>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeYear === item.year
                        ? 'glass border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-purple-600/10'
                        : 'glass border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                        activeYear === item.year
                          ? 'bg-gradient-to-r from-yellow-500 to-purple-600'
                          : 'bg-white/10'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className={`font-bold ${
                          activeYear === item.year ? 'gradient-text' : 'text-white'
                        }`}>
                          {item.year}
                        </div>
                        <div className="text-gray-400 text-sm">{item.title}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-2">
            {timelineData.map((item) => (
              <div
                key={item.year}
                className={`transition-all duration-500 ${
                  activeYear === item.year
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8 absolute pointer-events-none'
                }`}
              >
                {activeYear === item.year && (
                  <div className="glass p-8 rounded-2xl border border-white/10">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold gradient-text">{item.year}</h3>
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-4">Key Achievements</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {item.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Career Progress</span>
                        <span>{Math.round(((item.year - 2019) / (2024 - 2019)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${((item.year - 2019) / (2024 - 2019)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Be Part of My Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's create the next milestone together with your video project.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveTimeline;