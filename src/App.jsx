import React, { useState } from "react";
import logo from './assets/logo.png';
import charityBackground from './assets/hero.jpg';
import Activity from "./Component/Activity";
import { FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Hero from "./Component/Hero";
import AboutUs from "./Component/AboutUs";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};


const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.div 
      className="font-sans scroll-smooth" 
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navbar */}
      <motion.nav 
        className="shadow-md fixed top-0 left-0 w-full z-50 bg-white"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
          <motion.div 
            className="w-10 lg:w-16"
            variants={scaleUp}
          >
            <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-semibold"
            variants={containerVariants}
          >
            {["about", "vision", "activities"].map((item, index) => (
              <motion.a
                key={index}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="hover:text-[#23BF5B] transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item === "about" && "من نحن"}
                {item === "vision" && "الرؤية والرسالة"}
                {item === "activities" && "الأنشطة"}
              </motion.a>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-700 focus:outline-none duration-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <IoClose className="h-8 w-8" />
            ) : (
              <BiMenuAltLeft className="h-8 w-8" />
            )}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}
          initial={{ height: 0, opacity: 0 }}
          animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {["about", "vision", "activities"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="py-2 hover:text-[#23BF5B] transition-colors duration-300"
                whileHover={{ x: -5 }}
              >
                {item === "about" && "من نحن"}
                {item === "vision" && "الرؤية والرسالة"}
                {item === "activities" && "الأنشطة"}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      <Hero scrollToSection={scrollToSection} charityBackground={charityBackground} />

      <main className="container mx-auto px-4">
        <AboutUs />
      </main>

      <main className="container mx-auto px-4 flex flex-col gap-8 md:gap-[40px] py-12 md:py-24">
        <motion.div 
          id="vision" 
          className="flex flex-col justify-center container mx-auto px-4 space-y-8 md:space-y-16 pt-16 pb-12 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Vision and Mission */}
          <motion.section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow"
              variants={slideInFromRight}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-full ml-3 md:ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#23BF5B]">الرؤية</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed">التميز في تقديم خدمات تأهيلية وتدريبية مجتمعية للفئات الهشة والضعيفة على المستوى المحلي والإقليمي.</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow"
              variants={slideInFromLeft}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-full ml-3 md:ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#23BF5B]">الرسالة</h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed">خلق مجتمع يؤمن بقدرة الأفراد على التغيير من أجل تحقيق التنمية المجتمعية واحلال السلام المستدام.</p>
            </motion.div>
          </motion.section>

          {/* Values and Goals */}
          <motion.section 
            id="values" 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-full ml-3 md:ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#23BF5B]">القيم والمبادئ</h2>
              </div>
              <motion.div className="flex flex-wrap gap-2 md:gap-3">
                {["حوار", "سلام", "عدالة", "شفافية", "تعاون"].map((value, index) => (
                  <motion.span 
                    key={value}
                    className="bg-green-100 text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {value}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 md:p-3 rounded-full ml-3 md:ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#23BF5B]">الأهداف</h2>
              </div>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                {[
                  "طالب واعي",
                  "امرأة مُمكّنة",
                  "مجتمع تسوده قيم المواطنة والديمقراطية",
                  "تنمية مستدامة"
                ].map((goal, index) => (
                  <motion.li 
                    key={goal}
                    className="flex items-start"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-green-500 ml-2 mt-0.5 md:mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.section>
        </motion.div>

        {/* Activities */}
        <Activity />
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-l from-[#1d1c1c] to-[#469DB0] text-center py-8 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            variants={containerVariants}
          >
            <motion.div 
              className="w-16 mb-6 md:mb-10"
              variants={scaleUp}
            >
              <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center items-center gap-4 md:space-x-6 md:space-x-reverse mb-6 md:mb-0"
              variants={containerVariants}
            >
              {["home", "about", "activities"].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="hover:text-green-200 transition-colors text-sm md:text-base"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {item === "home" && "الصفحة الرئيسية"}
                  {item === "about" && "من نحن"}
                  {item === "activities" && "أنشطتنا"}
                </motion.a>
              ))}
              <motion.a 
                href="#" 
                className="hover:text-green-200 transition-colors text-sm md:text-base"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                اتصل بنا
              </motion.a>
            </motion.div>

            <motion.div 
              className="flex space-x-3 md:space-x-4 space-x-reverse"
              variants={containerVariants}
            >
              {[
                { icon: <FaFacebookF className="h-4 w-4 md:h-5 md:w-5" />, url: "https://www.facebook.com/salam.community.development" },
                { icon: <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />, url: "https://www.instagram.com/salam_for_community_develoment/" },
                { icon: <FaXTwitter className="h-4 w-4 md:h-5 md:w-5" />, url: "https://x.com/salamfcd" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="border-t border-white mt-6 pt-6 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} جميع الحقوق محفوظة - الجمعية الخيرية
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  );
}

export default App;