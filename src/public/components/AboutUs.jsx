import React from "react";
import { Instagram, MessageCircle, Briefcase, Settings, Award, CheckCircle2 } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

export default function About() {
  const whatsappUrl = "https://wa.me/9895948492";

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6 overflow-hidden md:px-16">
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium uppercase bg-orange-500/20 border border-orange-400/30 rounded-full">
            MEP Engineering Academy
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Adapts <span className="text-orange-400">Academy</span>
          </h1>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            Industry-focused training in Mechanical, Electrical, and Plumbing (MEP) systems 
            designed to build real-world engineering skills and job-ready professionals.
          </p>

          <div className="mt-10 flex justify-center">
            <a href={whatsappUrl} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold shadow-lg">
              <MessageCircle size={20} /> Enroll Now
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:px-16">
        
        {/* ABOUT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-orange-500">Adapts Academy</span>?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Adapts Academy, we bridge the gap between theoretical knowledge and industry requirements. 
              Our programs are designed for engineering students and professionals who want practical exposure 
              in MEP systems and real project environments.
            </p>

            <div className="space-y-4">
              {[
                "Hands-on Practical Training",
                "Live Project Exposure",
                "Industry Expert Mentorship",
                "Job-Oriented Curriculum"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-slate-700">
                  <CheckCircle2 className="text-orange-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* STATS CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-6 bg-orange-50 rounded-2xl text-center">
                <Settings className="mx-auto mb-2 text-orange-500" />
                <div className="font-bold text-2xl">MEP</div>
                <div className="text-xs text-slate-500">Core Focus</div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl text-center">
                <Briefcase className="mx-auto mb-2 text-blue-600" />
                <div className="font-bold text-2xl">100%</div>
                <div className="text-xs text-slate-500">Practical</div>
              </div>

              <div className="p-6 bg-green-50 rounded-2xl text-center col-span-2">
                <Award className="mx-auto mb-2 text-green-600" />
                <div className="font-bold text-xl italic">
                  "Build Skills. Build Career."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMS */}
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Training Programs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {[
            {
              title: "HVAC Design",
              desc: "Heating, ventilation & air conditioning systems",
              list: ["Load Calculation", "Duct Design", "System Planning"]
            },
            {
              title: "Electrical Systems",
              desc: "Design & execution of electrical layouts",
              list: ["Panel Design", "Wiring Layout", "Load Analysis"]
            },
            {
              title: "Plumbing Systems",
              desc: "Water supply & drainage design",
              list: ["Pipe Design", "Drainage Systems", "Water Systems"]
            },
            {
              title: "Fire Fighting Systems",
              desc: "Safety & protection systems",
              list: ["Sprinkler Design", "Fire Hydrant Systems"]
            },
            {
              title: "MEP Software",
              desc: "Design tools training",
              list: ["AutoCAD", "Revit MEP", "Drafting"]
            },
            {
              title: "Complete MEP Course",
              desc: "All-in-one career program",
              list: ["Projects", "Execution", "Career Guidance"]
            }
          ].map((course, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-orange-500 hover:shadow-md">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{course.desc}</p>

              <ul className="space-y-2">
                {course.list.map((li, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-28 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <h4 className="text-2xl font-bold">Adapts Academy</h4>
            <p className="text-slate-500">Engineering Skills for Real Careers</p>
          </div>

          <a 
            href={whatsappUrl}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full"
          >
            <MdWhatsapp size={20} /> Contact Now
          </a>
        </div>

      </div>
    </div>
  );
}