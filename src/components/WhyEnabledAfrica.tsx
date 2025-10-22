import Image from "next/image";

export default function WhyEnabledAfrica() {
  return (
    <section id="why-enabled-durham" className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold" style={{ color: '#1a365d' }}>
            Why Enabled Talent Durham?
          </h2>
        </div>

        {/* Four Cards Grid - 1 row x 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 - Local Durham Network */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1a365d' }}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-3" style={{ color: 'white' }}>
                Local Durham Network
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-center" style={{ color: 'white', maxWidth: '200px', margin: '0 auto' }}>
                One platform connecting people and employers across Durham and the region.
              </p>
            </div>
          </div>

          {/* Card 2 - Skills First Matching */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#2d5a87' }}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-3" style={{ color: 'white' }}>
                Skills First Matching
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-center" style={{ color: 'white', maxWidth: '200px', margin: '0 auto' }}>
                Share your strengths and get matched with opportunities that fit you.
              </p>
            </div>
          </div>

          {/* Card 3 - Inclusive for All */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#2d5a87' }}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-3" style={{ color: 'white' }}>
                Inclusive for All
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-center" style={{ 
                color: 'white',
                maxWidth: '200px', 
                margin: '0 auto',
                lineHeight: '1.5',
                fontFamily: 'Plus Jakarta Sans !important',
                whiteSpace: 'normal !important'
              }}>
                We champion diversity and inclusion, connecting you with underrepresented talent.
              </p>
            </div>
          </div>

          {/* Card 4 - Beyond Jobs */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1a365d' }}>
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mb-3" style={{ color: 'white' }}>
                Beyond Jobs
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed text-center" style={{ color: 'white', maxWidth: '200px', margin: '0 auto' }}>
                We invest in training and innovation programs that support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}