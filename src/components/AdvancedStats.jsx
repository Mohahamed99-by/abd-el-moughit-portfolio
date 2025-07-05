import { useState, useEffect, useRef } from 'react';

function AdvancedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    awards: 0
  });
  
  const sectionRef = useRef(null);

  const finalStats = {
    projects: 500,
    experience: 5,
    satisfaction: 98,
    awards: 12
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateStats = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        projects: Math.floor(finalStats.projects * easeOutQuart),
        experience: Math.floor(finalStats.experience * easeOutQuart),
        satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
        awards: Math.floor(finalStats.awards * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);
  };

  const stats = [
    {
      number: animatedStats.projects,
      suffix: '+',
      label: 'Projects Completed',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      number: animatedStats.experience,
      suffix: '+',
      label: 'Years Experience',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-400 to-purple-600'
    },
    {
      number: animatedStats.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-pink-400 to-pink-600'
    },
    {
      number: animatedStats.awards,
      suffix: '+',
      label: 'Awards Won',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: 'from-emerald-400 to-emerald-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative glass p-8 rounded-2xl border border-white/10 text-center card-hover"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Number */}
              <div className="relative">
                <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </span>
                <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mt-2">
                {stat.label}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-yellow-500/50 group-hover:to-purple-600/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Recent Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: 'Best Video Editor 2024', org: 'Creative Awards' },
              { title: 'Top Freelancer', org: 'Platform Excellence' },
              { title: 'Client Choice Award', org: 'Industry Recognition' },
              { title: '5-Star Rating', org: 'Customer Reviews' }
            ].map((achievement, index) => (
              <div key={index} className="glass px-6 py-3 rounded-full border border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm">{achievement.title}</div>
                    <div className="text-gray-400 text-xs">{achievement.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdvancedStats;