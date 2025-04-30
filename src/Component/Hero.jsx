import React from 'react'

const Hero = ({charityBackground , scrollToSection}) => {
  return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center bg-cover bg-center text-white text-center mt-[73px] md:mt-[85px] lg:mt-[117px] px-4"
            style={{
              backgroundImage: `url(${charityBackground})`,
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0  2xl:bottom-5 bg-black bg-opacity-50"></div>
    
            {/* Content */}
            <div className="relative z-10 max-w-4xl pt-16 md:pt-32 px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                وسائل تتطور وقيم لا تتغير
              </h1>
              <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8">
                معًا نحو مجتمع أفضل وتنمية مستدامة
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a
                  href="#activities"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('activities');
                  }}
                  className="bg-[#23BF5B] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-[#1ea24e] transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  أنشطتنا
                </a>
                <a
                  href="#vision"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('vision');
                  }}
                  className="border-2 border-white text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-[#23BF5B] transition-all duration-300 text-sm sm:text-base"
                >
                  تعرف علينا
                </a>
              </div>
            </div>
          </section>
    
  )
}

export default Hero