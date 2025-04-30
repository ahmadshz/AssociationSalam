import React from 'react'
import img1 from '../assets/images.jpeg'
import woman from '../assets/womanActivity.jpeg'
import gift from '../assets/gift.jpg'
import RevolutionEvent from '../assets/RevolutionEvent.jpeg'
import news from '../assets/howWriteNews.jpg'
import kids from '../assets/kids.jpeg'


const Activity = () => {
    return (
        <section id="activities" className="min-h-screen my-50">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-[#23BF5B] mb-4">الأنشطة</h2>
                <p className="  mx-auto text-2xl">نسعى دائمًا لتنفيذ أنشطة وفعاليات تخدم المجتمع وتطور من قدرات أفراده</p>
            </div>

            {/* Activity Timeline */}
            <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute right-1/2 h-full w-1 bg-gradient-to-b from-green-300 to-green-500 transform translate-x-1/2"></div>

                {/* Activity 2021 */}
                <div className="relative mb-16 md:flex items-center">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border lg:border-l-4 border-green-500 transform hover:-translate-y-1">
                            <div className="flex items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">2021 - تركيا / ماردين</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={img1}
                                                alt="Virtual Training"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-medium">تدريب افتراضي</span>
                                            </div>
                                        </div>
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={woman} alt="Women's Activity"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-medium">نشاط مع النساء</span>
                                            </div>
                                        </div>
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={gift} alt="Eid Gifts"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-medium">هدايا العيد</span>
                                            </div>
                                        </div>
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={RevolutionEvent} alt="Revolution Event"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <a href="https://www.facebook.com/share/v/1XEZzJhQ12/"
                                                    className="text-white font-medium hover:underline"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    فعالية الثورة
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>تدريب افتراضي عن مهارات التفاوض</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>نشاط فضفضة مع النساء المُبعَدات</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>توزيع هدايا العيد للأطفال</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>فعالية ذكرى الثورة - <a href="https://www.facebook.com/share/v/1XEZzJhQ12/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* Activity 2022 */}
                <div className="relative mb-16 md:flex items-center">
                    <div className="hidden md:block md:w-1/2 md:pl-12"></div>
                    <div className="md:w-1/2 md:pr-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border lg:border-l-4 border-blue-500 transform hover:-translate-y-1">
                            <div className="flex items-start">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">2022 - تركيا / ماردين وغازي عينتاب</h3>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={news}
                                                alt=""
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-medium">تدريب كتابة الخبر الصحفي</span>
                                            </div>
                                        </div>
                                        <div className="relative group overflow-hidden rounded-lg h-40">
                                            <img
                                                src={kids} alt="Women's Activity"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white font-medium">فعالية للأطفال</span>
                                            </div>
                                        </div>

                                    </div>
                                    <ul className="space-y-3 text-gray-700 mt-4">
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>تدريب كتابة الخبر الصحفي - <a href="https://www.facebook.com/share/p/1AbvdNxrzr/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط التدريب</a></span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="h-5 w-5 text-blue-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>فعالية للأطفال - <a href="https://www.facebook.com/share/v/15HYLD9LfM/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity 2023 */}
                <div className="relative mb-16 md:flex items-center">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border lg:border-l-4 border-purple-500">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                                2023 - سورية
                            </h3>
                            <img src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="2023 Activity" className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-purple-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    جلسة عن واقع الشباب السوري في الأتارب حلب
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-purple-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    واقع الشباب السوري بين الداخل والخارج
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-purple-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    جلسات مناهضة العنف ضد النساء في المخيمات
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-purple-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                                <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                                2024 - سورية
                            </h3>
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="2024 Activity" className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-yellow-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    فعالية عيد للأطفال - <a href="https://www.facebook.com/share/v/1CLGbcka9z/" className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">رابط الفعالية</a>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-yellow-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
                                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                                2025 - سورية
                            </h3>
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="2025 Activity" className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-red-500 ml-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </section>)
}

export default Activity