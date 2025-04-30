import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23BF5B] mb-4">من نحن</h2>
          <div className="w-20 h-1 bg-[#23BF5B] mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg md:text-xl leading-relaxed  mb-6">
            مؤسسة سورية بدأت رحلتها في المهجر (مدينة ماردين التركية) ثم الشمال السوري واليوم تعمل في كامل الأراضي السورية.
          </p>
          <p className="text-lg md:text-xl leading-relaxed  mb-6">
            تهتم بالبنية الفوقية (الإنسان كقيمة عليا نعمل عليه من خلال التوعية والتمكين) وتؤمن بالسلام كقيمة عليا تجمع الناس كلهم.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#23BF5B] mb-3">البداية</h3>
              <p>ماردين التركية</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#23BF5B] mb-3">التوسع</h3>
              <p>الشمال السوري</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-[#23BF5B] mb-3">الآن</h3>
              <p>كامل الأراضي السورية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;