import Image from "next/image";
import { OurValues } from "./ValueBadge";

export default function AboutUs() {
  return (
    <>
      <section id="about-us" className="py-8 sm:py-12 lg:py-16" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

          {/* Combined About Enabled Africa, Vision and Mission Section */}
          <div className="bg-[#FFE8B9] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 rounded-2xl mb-8" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
                {/* About Enabled Africa Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-5 lg:mb-6 items-start">
                  {/* Image Card */}
                  <div className="lg:order-1 max-w-sm mx-auto lg:max-w-none">
                    <Image
                      src="/images/Group 1171276405.png"
                      alt="Portrait"
                      width={400}
                      height={500}
                      className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                    />
                  </div>

              {/* Text Card - Left-aligned with exact lines */}
              <div className="lg:order-2 text-center lg:text-left" style={{ maxWidth: '100%' }}>
                <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-gray-800 mb-3 sm:mb-4 leading-[1.35]" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, letterSpacing: '0%' }}>
                  About<br />Enabled Talent Durham
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.35] text-gray-600 mb-3" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 500 }}>
                  Ability is everywhere. Opportunity should be too
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.35] text-gray-700 break-words" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  Enabled Talent Durham is building<br />
                  a regional platform that<br />
                  connects people with opportunities and<br />
                  helps organizations grow stronger through talent.
                </p>
              </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
            {/* Vision Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
              {/* Vision Text - Responsive positioning */}
              <div className="lg:order-1 text-center lg:text-left lg:ml-[30%]" style={{ maxWidth: '100%' }}>
                <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-gray-800 mb-3 sm:mb-4 leading-[1.35]" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, letterSpacing: '0%' }}>Our Vision</h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.35] text-gray-700 break-words" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  A Durham where everyone – regardless of background,<br />
                  gender, age, or ability – has the chance to build<br />
                  a meaningful career and contribute to their<br />
                  community.
                </p>
              </div>
                  {/* Vision Image - responsive positioning */}
                  <div className="lg:order-2 max-w-sm mx-auto lg:max-w-none lg:ml-[-1%]">
                    <Image
                      src="/images/Subtract.png"
                      alt="Vision image"
                      width={400}
                      height={300}
                      className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                    />
                  </div>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
              {/* Mission Image */}
              <div className="lg:order-1 max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="https://www.durham.ca/en/discovering-durham/resources/Images/Maps/yourdurham250.jpg"
                  alt="Durham Region Map"
                  width={400}
                  height={300}
                  className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                />
              </div>
              {/* Mission Text - Left-aligned with 3 lines */}
              <div className="lg:order-2 text-center lg:text-left" style={{ maxWidth: '100%' }}>
                <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-gray-800 mb-3 sm:mb-4 leading-[1.35]" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, letterSpacing: '0%' }}>Our Mission</h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.35] text-gray-700 mb-4 break-words" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  To unlock Durham&apos;s full potential by making access<br />
                  to work, skills, and growth opportunities simple,<br />
                  fair, and inclusive for all.
                </p>
                <br />
                       <a href="https://app.enabledtalent.com/" target="_blank" rel="noopener noreferrer" className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-[14px] sm:text-[15px] font-semibold w-fit shadow-lg mx-auto lg:mx-0 inline-block" style={{ fontFamily: 'Plus Jakarta Sans', backgroundColor: '#1a365d' }}>
                         Get Started
                       </a>
              </div>
            </div>
            </div>
          </div>

          {/* Our Values Section - Right below the woman's image */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <OurValues />
          </div>
        </div>
      </section>
    </>
  );
}