import Header from '@/components/Header'
import WhyEnabledAfrica from '@/components/WhyEnabledAfrica'
import PromotionalBanner from '@/components/PromotionalBanner'
import WhatYouGet from '@/components/WhatYouGet'
import AboutUs from '@/components/AboutUs'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-0" style={{ margin: 0, padding: 0 }}>
                {/* Hero Section */}
                <section className="relative w-full" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', marginTop: 0, marginBottom: 0, backgroundColor: '#1a365d', minHeight: '500px' }}>
                  {/* Text and Button Content */}
                  <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 text-center" style={{ fontFamily: "Plus Jakarta Sans" }}>
                      Durham&apos;s Premier Talent<br />
                      Connection
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-7 max-w-xs sm:max-w-lg md:max-w-xl leading-relaxed text-center" style={{ fontFamily: "Plus Jakarta Sans" }}>
                      Building accessible futures<br />
                      through jobs, skills, and innovation
                    </p>
                    <a href="https://app.enabledtalent.com/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg shadow-lg w-fit hover:opacity-90 transition-opacity inline-block" style={{ backgroundColor: '#2d5a87' }}>
                      Get Started Now
                    </a>
                  </div>
                </section>

        {/* Why EnabledAfrica Section */}
        <WhyEnabledAfrica />
        
        {/* Promotional Banner Section */}
        <PromotionalBanner />
        
        {/* What You Get Section */}
        <WhatYouGet />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Our Story Section */}
        <OurStory />
      </main>
    </>
  )
}