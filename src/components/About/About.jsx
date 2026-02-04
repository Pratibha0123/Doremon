import React from "react";
import DoraImg from "../../assets/doraemon.png";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div data-aos="fade-right" className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img src={DoraImg} alt="Doraemon" className="relative z-10 w-3/4 mx-auto drop-shadow-2xl hover:rotate-3 transition-transform duration-500" />
          </div>

          {/* Content Side */}
          <div data-aos="fade-left" className="flex-1 space-y-6">
            <p className="text-secondary font-bold text-lg uppercase tracking-wide">The Story</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight">
              Who is <span className="text-primary">Doraemon</span>?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Doraemon is a cat-like robot from the 22nd century. Created by the legendary duo <strong>Fujiko F. Fujio</strong> in <strong>1969</strong>, he has become a global cultural icon.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              After its manga debut, the first anime adaptation aired in <strong>1973</strong>, launching a legacy that spans generations. Sent back in time by Sewashi Nobi, Doraemon uses his 4-dimensional pocket to help Nobita navigate life's challenges with futuristic gadgets!
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-primary">
                <h4 className="font-bold text-xl text-primary mb-1">2112</h4>
                <p className="text-sm text-gray-500">Birth Year</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary">
                <h4 className="font-bold text-xl text-secondary mb-1">129.3 kg</h4>
                <p className="text-sm text-gray-500">Weight</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;