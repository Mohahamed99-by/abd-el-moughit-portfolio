import { portfolioData } from '../data/portfolioData';

function Services() {
  const iconMap = {
    '🎬': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    '✨': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    '📈': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    '💝': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Services</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Professional Video
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, I offer comprehensive video production and post-production 
            services tailored to meet your unique creative and business objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {portfolioData.services.map((service, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-2xl border border-white/10 card-hover fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon] || service.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group/btn">
                  <span className="flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              My Creative Process
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A streamlined workflow designed to deliver exceptional results while keeping you 
              involved every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your vision, goals, and requirements through detailed consultation.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating a comprehensive strategy and timeline for your project.'
              },
              {
                step: '03',
                title: 'Production',
                description: 'Bringing your vision to life with expert editing and post-production.'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final review, revisions, and delivery of your polished video content.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold gradient-text">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-600/50"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{process.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              What Clients Say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.testimonials.map((testimonial, index) => (
              <div key={index} className="glass p-6 rounded-2xl border border-white/10 card-hover">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-500 text-xs">{testimonial.company}</div>
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

export default Services;