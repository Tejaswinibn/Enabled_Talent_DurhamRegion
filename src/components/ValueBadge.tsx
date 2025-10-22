// app/components/ValueBadge.tsx
import React from "react";

export default function ValueBadge({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="inline-flex h-12 w-12 lg:h-14 lg:w-14 rounded-full items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: '#D6EADF' }}
    >
      <span className="h-6 w-6 lg:h-7 lg:w-7" style={{ color: '#045F33' }}>
        {children}
      </span>
    </span>
  );
}

// Our Values Component
export function OurValues() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:ml-[8%]">
        {/* GRID: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-10">
            {/* ROW 1 - Our Values */}
            <div className="flex flex-col">
              <h2
                className="font-bold mb-4 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 700,
                  color: "#0C1B33",
                }}
              >
                Our Values
              </h2>
              <p
                className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: 400,
                  color: "#374151",
                  lineHeight: "1.6",
                }}
              >
                A Durham where everyone – regardless of background, gender, age, or ability – has
                the chance to build a meaningful career and contribute to their community.
              </p>
            </div>

            {/* ROW 2 - Respect */}
            <div className="flex items-start gap-4 pb-6 relative">
              <div className="absolute bottom-1 left-8 w-4/5 h-px bg-gray-300"></div>
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2" />
                </svg>
              </ValueBadge>
              <div>
                <h3 
                  className="font-bold mb-2 text-[14px] sm:text-[15px] md:text-[16px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    color: "#0C1B33",
                  }}
                >
                  Respect
                </h3>
                <p 
                  className="text-[11px] sm:text-[12px] md:text-[13px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    color: "#374151",
                  }}
                >
                  Every individual has value and deserves dignity in work.
                </p>
              </div>
            </div>

            {/* ROW 3 - Trust */}
            <div className="flex items-start gap-4" style={{ marginTop: '1.50rem' }}>
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L20 6.5V12C20 17.07 16.09 21.36 12 22 7.91 21.36 4 17.07 4 12V6.5L12 2z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </ValueBadge>
              <div>
                <h3 
                  className="font-bold mb-2 text-[14px] sm:text-[15px] md:text-[16px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    color: "#0C1B33",
                  }}
                >
                  Trust
                </h3>
                <p 
                  className="text-[11px] sm:text-[12px] md:text-[13px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    color: "#374151",
                  }}
                >
                  Clear, fair, and transparent in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 mt-6">
            {/* ROW 1 - Collaboration */}
            <div className="flex items-start gap-4 pb-8 relative">
              <div className="absolute bottom-0 left-8 w-4/5 h-px bg-gray-300"></div>
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="7" y="11" width="10" height="7" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </ValueBadge>
              <div>
                <h3 
                  className="font-bold mb-2 text-[14px] sm:text-[15px] md:text-[16px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    color: "#0C1B33",
                  }}
                >
                  Collaboration
                </h3>
                <p 
                  className="text-[11px] sm:text-[12px] md:text-[13px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    color: "#374151",
                  }}
                >
                  Working with businesses, governments, NGOs, and communities to open doors.
                </p>
              </div>
            </div>

            {/* ROW 2 - Opportunity */}
            <div className="flex items-start gap-4 pb-8 relative">
              <div className="absolute bottom-0 left-8 w-4/5 h-px bg-gray-300"></div>
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </ValueBadge>
              <div>
                <h3 
                  className="font-bold mb-2 text-[14px] sm:text-[15px] md:text-[16px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    color: "#0C1B33",
                  }}
                >
                  Opportunity
                </h3>
                <p 
                  className="text-[11px] sm:text-[12px] md:text-[13px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    color: "#374151",
                  }}
                >
                  We focus on creating equal access for all.
                </p>
              </div>
            </div>

            {/* ROW 3 - Growth */}
            <div className="flex items-start gap-4">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l-3 6 3 3 3-3-3-6z" />
                  <path d="M12 11v11" />
                  <path d="M8 22h8" />
                </svg>
              </ValueBadge>
              <div>
                <h3 
                  className="font-bold mb-2 text-[14px] sm:text-[15px] md:text-[16px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 700,
                    color: "#0C1B33",
                  }}
                >
                  Growth
                </h3>
                <p 
                  className="text-[11px] sm:text-[12px] md:text-[13px]"
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: 400,
                    color: "#374151",
                  }}
                >
                  We help people learn, adapt, and build futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}