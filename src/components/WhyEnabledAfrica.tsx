import Image from "next/image";

export default function WhyEnabledAfrica() {
  return (
    <section id="why-enabled-durham" className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-gray-800">
            Why Enabled Talent Durham?
          </h2>
        </div>

        {/* Four Cards Grid - 1 row x 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 - Local Durham Network */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-12 mt-8">
                <Image 
                  src="/images/Vector1.png" 
                  alt="Local Durham Network icon" 
                  width={80}
                  height={80}
                  className="w-13 h-13 mx-auto"
                />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.5px] font-bold text-gray-800 mb-3">
                Local Durham Network
              </h3>
              <p className="text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[12.5px] text-gray-600 leading-relaxed text-center" style={{ maxWidth: '200px', margin: '0 auto' }}>
                One platform connecting people and employers across Durham and the region.
              </p>
            </div>
          </div>

          {/* Card 2 - Skills First Matching */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1A6B3F' }}>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-12 mt-8">
                <Image 
                  src="/images/Union (1).png" 
                  alt="Skills First Matching icon" 
                  width={120}
                  height={120}
                  className="w-30 h-30 mx-auto"
                />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.5px] font-bold mb-3" style={{ color: 'white' }}>
                <br></br>Skills First Matching
              </h3>
              <p className="text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[12.5px] leading-relaxed text-center" style={{ color: 'white', maxWidth: '200px', margin: '0 auto' }}>
                Share your strengths and get matched with opportunities that fit you.
              </p>
            </div>
          </div>

          {/* Card 3 - Inclusive for All */}
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-12 mt-8">
                <Image 
                  src="/images/Group 1171276412.png" 
                  alt="Inclusive for All icon" 
                  width={105}
                  height={105}
                  className="mx-auto w-[120px] h-[40px] sm:w-[130px] sm:h-[45px] md:w-[140px] md:h-[48px] lg:w-[150px] lg:h-[50px]"
                />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.5px] font-bold text-gray-800 mb-3" style={{ marginTop: '8px' }}>
                <br></br>Inclusive for All<br></br>
              </h3>
              <p className="text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[12.5px] text-gray-600 text-center" style={{ 
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
          <div className="p-6 sm:p-8 rounded-xl h-[320px] transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#1A6B3F' }}>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-12 mt-8">
                <Image 
                  src="/images/Vector (1).png" 
                  alt="Beyond Jobs icon" 
                  width={80}
                  height={80}
                  className="w-13 h-13 mx-auto"
                />
              </div>
              <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16.5px] font-bold mb-3" style={{ color: 'white' }}>
                Beyond Jobs
              </h3>
              <p className="text-[11px] sm:text-[12px] md:text-[12.5px] lg:text-[12.5px] leading-relaxed text-center" style={{ color: 'white', maxWidth: '200px', margin: '0 auto' }}>
                We invest in training and innovation programs that support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}