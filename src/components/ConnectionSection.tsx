import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section id="who-we-are" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          {/* Mobile Left Text */}
          <div className="text-center mb-6 px-4">
            <h2 className="text-[16px] sm:text-[18px] font-semibold leading-tight text-gray-800 mb-3">
              Connecting you to the<br />
              best talent across<br />
              Africa
            </h2>
          </div>

          {/* Mobile Map Container - Fixed positioning like desktop */}
          <div className="relative h-[350px] sm:h-[380px] mb-6 overflow-hidden">
            {/* Africa Map - Mobile - Made larger */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
              <Image
                src="/images/Vector.png"
                alt="Africa Map"
                width={400}
                height={400}
                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] object-contain"
                priority
              />
            </div>
            
            {/* Connecting Lines - Mobile (same relative position) */}
            <div className="absolute top-[22%] left-[8%] right-[8%] h-[56%] z-10">
              <Image
                src="/images/Vector 4504.png"
                alt="Connecting Lines"
                width={800}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Mobile Profile Images - Removed shadows */}
            <div className="absolute top-[18%] left-[35%] z-20">
              <Image 
                src="/images/Ellipse 4344.png" 
                alt="Profile 1" 
                width={45} 
                height={45} 
                className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] rounded-full" 
              />
            </div>
            
            <div className="absolute top-[45%] left-[20%] z-20">
              <Image 
                src="/images/Ellipse 4342.png" 
                alt="Profile 2" 
                width={45} 
                height={45} 
                className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] rounded-full" 
              />
            </div>
            
            <div className="absolute top-[68%] left-[55%] z-20">
              <Image 
                src="/images/Ellipse 4345.png" 
                alt="Profile 3" 
                width={55} 
                height={55} 
                className="h-[50px] w-[50px] sm:h-[55px] sm:w-[55px] rounded-full" 
              />
            </div>
            
            <div className="absolute top-[25%] left-[72%] z-20">
              <Image 
                src="/images/Ellipse 4343.png" 
                alt="Profile 4" 
                width={45} 
                height={45} 
                className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] rounded-full" 
              />
            </div>
            
            <div className="absolute top-[60%] left-[30%] z-20">
              <Image 
                src="/images/Ellipse 4346.png" 
                alt="Profile 5" 
                width={45} 
                height={45} 
                className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px] rounded-full" 
              />
            </div>
          </div>

          {/* Mobile Right Text - Formatted in exactly 5 lines */}
          <div className="text-center px-4">
            <p className="text-gray-700 text-[13px] sm:text-[14px] leading-6 max-w-[95%] mx-auto">
              We believe that talent exists<br />
              everywhere in Africa, and everyone<br />
              deserves a fair chance to succeed.<br />
              Whether you&apos;re a job seeker, a student,<br />
              a professional, or an employer,<br />
              we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:block">
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Left Text Block */}
            <div className="absolute top-16 left-8 lg:left-12 z-10 max-w-[35ch]">
              <h2 className="text-[20px] lg:text-[24px] font-semibold leading-tight text-gray-800 mb-4">
                Connecting you to the<br />
                best talent across<br />
                Africa
              </h2>
            </div>

            {/* Africa Map - Desktop - Made larger */}
            <div className="absolute top-1/2 left-[55%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-5">
              <Image
                src="/images/Vector.png"
                alt="Africa Map"
                width={500}
                height={500}
                className="w-[480px] h-[480px] lg:w-[550px] lg:h-[550px] object-contain"
                priority
              />
            </div>
            
            {/* Connecting Lines - Desktop */}
            <div className="absolute top-[25%] left-[10%] right-[10%] h-[50%] z-10">
              <Image
                src="/images/Vector 4504.png"
                alt="Connecting Lines"
                width={1200}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Desktop Profile Images - Removed shadows */}
            {/* Top-Left Profile - At actual top-left of African map (Morocco/Western Sahara region) */}
            <div className="absolute top-[12%] left-[30%] lg:top-[12%] lg:left-[30%] z-20">
              <Image 
                src="/images/Ellipse 4344.png" 
                alt="Profile 1" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Bottom-Left Profile - Below text, left of map */}
            <div className="absolute top-[42%] left-36 lg:top-[42%] lg:left-40 z-20">
              <Image 
                src="/images/Ellipse 4342.png" 
                alt="Profile 2" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Center-Right Profile - On the map, larger size */}
            <div className="absolute top-[68%] left-[54%] lg:top-[68%] lg:left-[58%] z-20">
              <Image 
                src="/images/Ellipse 4345.png" 
                alt="Profile 3" 
                width={95} 
                height={95} 
                className="h-[95px] w-[95px] rounded-full hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Top-Right Profile - Above map, right side */}
            <div className="absolute top-44 left-[66%] lg:top-48 lg:left-[71%] z-20">
              <Image 
                src="/images/Ellipse 4343.png" 
                alt="Profile 4" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Bottom-Right Profile - On ribbon, more to right and bottom */}
            <div className="absolute top-[60%] left-60 lg:top-[60%] lg:left-64 z-20">
              <Image 
                src="/images/Ellipse 4346.png" 
                alt="Profile 5" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Right Text Block - Formatted in exactly 5 lines */}
            <div className="absolute top-[58%] right-0 lg:right-0 z-10 max-w-[40ch]">
              <p className="text-gray-700 text-[12px] lg:text-[13px] leading-relaxed">
                We believe that talent exists everywhere<br />
                in Africa, and everyone deserves a fair chance<br />
                to succeed.Whether you&apos;re a job seeker,<br />
                a student, a professional, or an employer,<br />
                we make it easier to grow, connect, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
