import React from "react";
import logo from './assets/logo.png'
import charityBackground from './assets/5278.jpg'
import Activity from "./Component/Activity";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function App() {
  return (
    <div className="font-sans   scroll-smooth" dir="rtl">
      {/* Navbar */}
      <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="w-10 lg:w-16">
            <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
          </div>
          <div className="hidden md:flex gap-8 text-lg font-semibold">
            <a href="#vision" className="hover:text-[#23BF5B] transition-colors duration-300">الرؤية والرسالة</a>
            <a href="#values" className="hover:text-[#23BF5B] transition-colors duration-300">القيم والأهداف</a>
            <a href="#activities" className="hover:text-[#23BF5B] transition-colors duration-300">الأنشطة</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white text-center mt-[85px] lg:mt-[117px] px-4"
        style={{
          backgroundImage: `url(${charityBackground})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bottom-24 2xl:bottom-5 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl pt-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            وسائل تتطور وقيم لا تتغير
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            معًا نحو مجتمع أفضل وتنمية مستدامة
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#activities"
              className="bg-[#23BF5B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1ea24e] transition-all duration-300 shadow-lg"
            >
              أنشطتنا
            </a>
            <a
              href="#vision"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#23BF5B] transition-all duration-300"
            >
              تعرف علينا
            </a>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col gap-[40px] py-24">

        <div id="vision" className="h-screen flex flex-col justify-center container mx-auto px-4 space-y-16 py-24">
          {/* Vision and Mission */}
          <section className="grid md:grid-cols-2 gap-8 ">
            <div className="bg-white p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#23BF5B]">الرؤية</h2>
              </div>
              <p className=" leading-relaxed">التميز في تقديم خدمات تأهيلية وتدريبية مجتمعية للفئات الهشة والضعيفة على المستوى المحلي والإقليمي.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#23BF5B]">الرسالة</h2>
              </div>
              <p className=" leading-relaxed">خلق مجتمع يؤمن بقدرة الأفراد على التغيير من أجل تحقيق التنمية المجتمعية واحلال السلام المستدام.</p>
            </div>
          </section>

          {/* Values and Goals */}
          <section id="values" className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#23BF5B]">القيم والمبادئ</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">حوار</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">سلام</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">عدالة</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">شفافية</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">تعاون</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#23BF5B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#23BF5B]">الأهداف</h2>
              </div>
              <ul className="space-y-3 ">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  طالب واعي
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  امرأة مُمكّنة
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  مجتمع تسوده قيم المواطنة والديمقراطية
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  تنمية مستدامة
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* Activities */}
        <Activity />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-[#1d1c1c] to-[#469DB0] text-center py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-16 mb-10">
            <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
          </div>

          <div className="flex space-x-6 space-x-reverse mb-4 md:mb-0">
            <a href="#" className="hover:text-green-200 transition-colors">الصفحة الرئيسية</a>
            <a href="#vision" className="hover:text-green-200 transition-colors">من نحن</a>
            <a href="#activities" className="hover:text-green-200 transition-colors">أنشطتنا</a>
            <a href="#" className="hover:text-green-200 transition-colors">اتصل بنا</a>
          </div>

          <div className="flex space-x-4 space-x-reverse">
            <a
              href="https://www.facebook.com/salam.community.development"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/salam_for_community_develoment/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/salamfcd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white mt-6 pt-6 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة - الجمعية الخيرية
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;