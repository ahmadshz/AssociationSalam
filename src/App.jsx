import React from "react";
import logo from './assets/logo.png'
import charityBackground from './assets/5278.jpg'

function App() {
  return (
    <div className="font-sans   scroll-smooth" dir="rtl">
      {/* Navbar */}
      <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="w-16">
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
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white text-center mt-[117px] px-4"
        style={{
          backgroundImage: `url(${charityBackground})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
      <main className="container mx-auto px-4 space-y-16 py-24">

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
            <div className="bg-white p-8 rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow">
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

            <div className="bg-white p-8 rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow">
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
        <section id="activities" className="space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#23BF5B] mb-4">الأنشطة</h2>
            <p className="  mx-auto text-2xl">نسعى دائمًا لتنفيذ أنشطة وفعاليات تخدم المجتمع وتطور من قدرات أفراده</p>
          </div>

          {/* Activity Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute right-1/2 h-full w-1 bg-green-200 transform translate-x-1/2"></div>

            {/* Activity 2021 */}
            <div className="relative mb-16 md:flex items-center">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">2021 - تركيا / ماردين</h3>
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Activity 2021" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 ">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      تدريب افتراضي عن مهارات التفاوض
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      نشاط فضفضة مع النساء المُبعَدات
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      توزيع هدايا العيد للأطفال
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      فعالية ذكرى الثورة - <a href="https://www.facebook.com/share/v/1XEZzJhQ12/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Activity 2022 */}
            <div className="relative mb-16 md:flex items-center">
              <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">2022 - تركيا / ماردين وغازي عينتاب</h3>
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Activity 2022" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 ">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      تدريب كتابة الخبر الصحفي - <a href="https://www.facebook.com/share/p/1AbvdNxrzr/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط التدريب</a>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      فعالية للأطفال - <a href="https://www.facebook.com/share/v/15HYLD9LfM/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Activity 2023 */}
            <div className="relative mb-16 md:flex items-center">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">2023 - سورية</h3>
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Activity 2023" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 ">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      جلسة عن واقع الشباب السوري في الأتارب حلب
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      واقع الشباب السوري بين الداخل والخارج
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      جلسات مناهضة العنف ضد النساء في المخيمات
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      حملة 16 يوم لمناهضة العنف ضد النساء
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Activity 2024 */}
            <div className="relative mb-16 md:flex items-center">
              <div className="hidden md:block md:w-1/2 md:pl-12"></div>
              <div className="md:w-1/2 md:pr-12">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">2024 - سورية</h3>
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Activity 2024" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 ">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      فعالية عيد للأطفال - <a href="https://www.facebook.com/share/v/1CLGbcka9z/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      المشاركة في حملة التشجير - <a href="https://www.facebook.com/share/v/1ALbEmNBe3/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الحملة</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Activity 2025 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-4">2025 - سورية</h3>
                  <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Activity 2025" className="w-full h-48 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 ">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <a href="https://www.facebook.com/share/v/1A7syCYp3Z" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط النشاط</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-[#1d1c1c] to-[#469DB0] text-center py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-16">
              <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
            </div>
            <div className="flex space-x-6 space-x-reverse mb-4 md:mb-0">
              <a href="#" className="hover:text-green-200 transition-colors">الصفحة الرئيسية</a>
              <a href="#vision" className="hover:text-green-200 transition-colors">من نحن</a>
              <a href="#activities" className="hover:text-green-200 transition-colors">أنشطتنا</a>
              <a href="#" className="hover:text-green-200 transition-colors">اتصل بنا</a>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-[#20C254] p-2 rounded-full hover:bg-green-600 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748 1.857.344.353.3.882.344 1.857.047 1.023.058 1.351.058 3.807v.468c0 2.456-.011 2.784-.058 3.807-.045.975-.207 1.504-.344 1.857-.182.467-.401.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.023-.058-1.351-.058-3.807v-.468c0-2.456.011-2.784.058-3.807.045-.975.207-1.504.344-1.857.182-.466.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.023-.047 1.351-.058 3.807-.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.401-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.048-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
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