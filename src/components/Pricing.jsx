function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Service",
      description: "Simple video editing with music and basic sound effects.",
      price: "$10 - $20 per minute",
      features: [
        "Simple video editing",
        "Music addition",
        "Basic sound effects",
        "Fast delivery"
      ],
      icon: "🎬",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Professional Service",
      description: "Advanced video editing including color correction, medium visual effects, and two revisions.",
      price: "$20 - $40 per minute",
      features: [
        "Advanced video editing",
        "Color correction",
        "Medium visual effects",
        "Two free revisions",
        "High quality output"
      ],
      icon: "✨",
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      title: "Premium Service",
      description: "Comprehensive video editing including complex visual effects, motion graphics, and unlimited revisions.",
      price: "$50 - $80+ per minute",
      features: [
        "Comprehensive video editing",
        "Complex visual effects",
        "Motion graphics design",
        "Unlimited revisions",
        "Custom support",
        "Premium delivery"
      ],
      icon: "👑",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-white/20 mb-6">
            <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Pricing</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the service that fits your needs and budget - high quality at competitive prices
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group glass p-8 rounded-2xl border transition-all duration-300 fade-in ${
                plan.popular 
                  ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent scale-105' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-white text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {plan.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Plan Content */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {plan.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${plan.gradient} rounded-full`}></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 bg-gradient-to-r ${plan.gradient} rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg`}>
                  Choose This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="fade-in">
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Additional Information
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-2">
                <p>• Prices are negotiable based on project nature and duration</p>
                <p>• Special discounts for long-term projects and repeat clients</p>
                <p>• Free consultation to discuss your project requirements</p>
                <p>• Quality guarantee and on-time delivery</p>
              </div>
              <div className="mt-6">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;