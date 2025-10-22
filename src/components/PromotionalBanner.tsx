export default function PromotionalBanner() {
  return (
    <>
      {/* Promotional Banner */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* Background Image - No dark overlay as per Figma */}
            <img 
              src="/images/banner-background.png" 
              alt="Background" 
              className="w-full h-[280px] sm:h-[320px] lg:h-[400px] object-cover"
            />
            
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 lg:px-6">
              <div className="text-center max-w-lg mx-auto">
                {/* Logo */}
                <div className="mb-4">
                  <img 
                    src="/images/Group 1171276407.png" 
                    alt="Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto"
                  />
                </div>
                
                {/* Main Text - Exact Figma layout and specifications */}
                <div className="mb-6 max-w-full lg:w-[593px] lg:h-[96px] px-4 lg:px-0">
                  <h2 className="text-white text-center text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] leading-tight" style={{ 
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}>
                  Join as Talent or Employer<br />
                  and be part of Durham&apos;s future
                  </h2>
                </div>
                
                {/* CTA Button - Orange color as per design */}
                <button className="text-white font-semibold px-6 py-2 sm:px-7 sm:py-2.5 lg:px-8 lg:py-3 rounded-lg text-sm sm:text-base lg:text-base transition-all duration-200 hover:scale-105" style={{ backgroundColor: '#F95206', boxShadow: '0 4px 14px rgba(249, 82, 6, 0.3)' }}>
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 text-center">
          {/* Colorful Slogan - Exact design colors */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight px-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            <span style={{ color: '#DC2626' }}>
              Your Skills.
            </span>
            {' '}
            <span style={{ color: '#EA580C' }}>
              Your Future.
            </span>
            {' '}
            <span style={{ color: '#059669' }}>
              Your Durham.
            </span>
          </h1>
          
          {/* Sub-text */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4 font-normal" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Find opportunities that match your potential
          </p>
        </div>
      </section>
    </>
  )
}