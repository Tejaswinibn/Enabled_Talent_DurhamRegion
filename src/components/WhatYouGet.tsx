import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-8 sm:py-8 lg:py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 sm:gap-4 lg:gap-6">
          {/* Left Column - Image with "What You Get" text overlay */}
          <div className="w-full lg:w-1/2 lg:max-w-lg">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/Group 1171276411.png"
                alt="What You Get"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg"
                priority
              />
              {/* "What You Get" text overlay positioned on top left of image */}
              <div className="absolute top-4 left-4 z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  What<br />You Get
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full lg:w-1/2 lg:max-w-2xl">
            <div className="max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0">
              <ul className="space-y-5 sm:space-y-6">
              {/* Feature 1 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Jobs That Matter</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Discover opportunities across industries, from startups to multinationals</p>
                </div>
              </li>
              
              {/* Feature 2 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">One Profile, Many Matches</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Build your profile once, and let employers find you</p>
                </div>
              </li>
              
              {/* Feature 3 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18V4m6 14V10m6 8v-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Growth Beyond Work</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Access training and learning programs to upgrade your skills</p>
                </div>
              </li>
              
              {/* Feature 4 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21c-4.5-4.5-9-7.5-9-11.25C3 6.04 5 4 7.5 4c1.84 0 3.34 1.13 4.5 2.8C13.16 5.13 14.66 4 16.5 4 19 4 21 6.04 21 9.75c0 3.75-4.5 6.75-9 11.25z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Support Along the Way</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Career advice, mentorship, and resources to help you succeed</p>
                </div>
              </li>
              </ul>
              
              {/* Call to Action Button - Proper size and alignment */}
              <a href="https://app.enabledtalent.com/candidate-signup/" target="_blank" rel="noopener noreferrer" className="mt-8 sm:mt-8 px-8 py-3 rounded-lg text-white font-bold text-base hover:opacity-90 transition-opacity w-fit inline-block" style={{ backgroundColor: '#1a365d' }}>
                Create Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Employers Choose Us Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4" style={{ color: '#1a365d' }}>
            Why Employers Choose Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto px-4 leading-relaxed" style={{ color: '#1a365d' }}>
            Hire Durham&apos;s Best Talent. Build Stronger Teams.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>A trusted way to connect with skilled and motivated candidates.
          </p>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1 - Wide Access */}
            <div 
              className="p-6 sm:p-8 rounded-xl text-white relative h-[240px] sm:h-[260px] lg:h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#1a365d' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Wide Access</h3>
              <p className="text-xs sm:text-sm lg:text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, lineHeight: '20px', letterSpacing: '0%' }}>Connect with diverse professionals across Durham and the region</p>
            </div>

            {/* Card 2 - Image - Professional with disability */}
            <div className="h-[240px] sm:h-[260px] lg:h-[280px] p-1 sm:p-2">
              <Image 
                src="/images/disabled-woman-in-wheelchair-looking-at-computer-2025-03-15-01-12-15-utc.png" 
                alt="Professional woman with disability working at computer" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 3 - Faster Hiring */}
            <div 
              className="p-6 sm:p-8 rounded-xl text-white relative h-[240px] sm:h-[260px] lg:h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#2d5a87' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Faster Hiring</h3>
              <p className="text-xs sm:text-sm lg:text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, lineHeight: '18px', letterSpacing: '0%', fontSize: 'calc(0.875rem - 1px)' }}>Get pre-matched with the right<br />candidates, ready to contribute</p>
            </div>

            {/* Card 4 - Image - Man in striped shirt */}
            <div className="h-[240px] sm:h-[260px] lg:h-[280px] p-1 sm:p-2">
              <Image 
                src="/images/645bd6210b74564994a286d7_MicrosoftTeams-image (1).png" 
                alt="Man in striped shirt" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 5 - Image - Man working */}
            <div className="h-[240px] sm:h-[260px] lg:h-[280px] p-1 sm:p-2">
              <Image 
                src="/images/istock-2160995080.png" 
                alt="Man working" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 6 - Inclusive Made Simple */}
            <div 
              className="p-6 sm:p-8 rounded-xl text-white relative h-[240px] sm:h-[260px] lg:h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#2d5a87' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Inclusive Made Simple</h3>
              <p className="text-xs sm:text-sm lg:text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, lineHeight: '20px', letterSpacing: '0%' }}>Resources and support for building workplaces where everyone can thrive</p>
            </div>

            {/* Card 7 - Image - Financial businesswomen */}
            <div className="h-[240px] sm:h-[260px] lg:h-[280px] p-1 sm:p-2">
              <Image 
                src="/images/financial-businesswomen-analyze-the-graph-of-the-c-2025-02-22-17-12-16-utc.png" 
                alt="Financial businesswomen" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 8 - Long-Term Value */}
            <div 
              className="p-6 sm:p-8 rounded-xl text-white relative h-[240px] sm:h-[260px] lg:h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#1a365d' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>Long-Term Value</h3>
              <p className="text-xs sm:text-sm lg:text-sm text-white" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, lineHeight: '20px', letterSpacing: '0%' }}>Hiring through Enabled Talent Durham helps you build engaged, innovative teams</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}