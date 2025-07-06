function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Service",
      description: "Simple video editing with music and basic sound effects.",
      price: "$20 per minute",
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
      price: "$40 per minute",
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
      price: "$50 per minute",
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
                  {/* Current Price */}
                  <div className={`text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-2`}>
                    {plan.price}
                  </div>
                  {/* Old Price - Crossed Out */}
                  {index === 0 && (
                    <div className="text-lg font-semibold text-red-500 line-through">
                      $35 ❌
                    </div>
                  )}
                  {index === 1 && (
                    <div className="text-lg font-semibold text-red-500 line-through">
                      $47 ❌
                    </div>
                  )}
                  {index === 2 && (
                    <div className="text-lg font-semibold text-red-500 line-through">
                      $60+ ❌
                    </div>
                  )}
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
                <button 
                  onClick={() => {
                    const message = `Hi! I'm interested in your *${plan.title}* (${plan.price})

📋 *Service Details:*
${plan.features.map(feature => `• ${feature}`).join('\n')}

📝 *Description:* ${plan.description}

Could you please provide more information about this service and help me get started?`;
                    const whatsappUrl = `https://wa.me/212612455372?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="relative w-full py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-bold text-white hover:from-green-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-3 group overflow-hidden"
                >
                  {/* Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* WhatsApp Icon with Animation */}
                  <div className="relative z-10 flex items-center justify-center w-6 h-6 group-hover:animate-pulse">
                    <svg className="w-6 h-6 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                    </svg>
                  </div>
                  
                  {/* Text with Animation */}
                  <span className="relative z-10 text-lg font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
                    Contact on WhatsApp
                  </span>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500"></div>
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