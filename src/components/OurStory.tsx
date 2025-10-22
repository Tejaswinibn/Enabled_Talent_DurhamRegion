import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" className="relative isolate py-6 sm:py-8 lg:py-10">
      {/* Centered container for everything, including ribbon */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Ribbon underlay positioned to this container only */}
        <div aria-hidden="true" className="pointer-events-none relative -z-10">
          <Image
            src="/images/Union.png"
            alt=""
            width={2400}
            height={600}
            className="absolute left-[0%] right-[-24%] top-[-40px] sm:top-[-20px] h-[280px] sm:h-[350px] lg:h-[420px] w-[700%] object-contain opacity-85"
            priority
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-y-6 sm:gap-y-8 lg:gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          {/* Left text — force to top-left and closer to image */}
          <div className="lg:col-span-4 self-start lg:-mt-12 lg:pr-6 text-center lg:text-left px-4 lg:px-0">
            <h2 className="text-black mb-4 sm:mb-6 text-[24px] sm:text-[28px] md:text-[36px] lg:text-[54px] leading-tight" style={{ 
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 600,
              letterSpacing: '0%'
            }}>
              Our Story
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-black max-w-full lg:max-w-[285px] mx-auto lg:mx-0" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400 }}>
              Enabled Talent Durham began in 2025 with<br />
              a simple idea: talent is everywhere,<br />
              but not everyone has access<br />
              to opportunity
            </p>
          </div>

              {/* Center image (unchanged) */}
              <div className="lg:col-span-4 relative z-20">
                <div className="overflow-hidden ring-1 ring-black/10 inline-block" style={{ borderRadius: '30px' }}>
                  <Image
                    src="https://img.freepik.com/free-photo/medium-shot-smiley-disabled-man-work_23-2149313729.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Medium shot of smiley disabled man at work"
                    width={351}
                    height={473}
                    className="h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] md:h-[340px] md:w-[290px] lg:h-[351px] lg:w-[320px] object-cover object-center mx-auto"
                    priority
                  />
                </div>
              </div>

          {/* Right text + CTA — push to bottom-right and away from image */}
          <div className="lg:col-span-4 self-end lg:mt-16 lg:pl-6 text-center lg:text-left px-4 lg:px-0">
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed text-black mb-4 sm:mb-6" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 400, whiteSpace: 'pre-line' }}>
              {`Today, with partners across Durham
and beyond, we are shaping
a new future for our region's workforce
– one that works for everyone`}
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-white font-medium shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F95206]/40 text-[15px] w-full sm:w-auto"
              style={{ backgroundColor: '#F95206' }}
            >
              Join the movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}