import React from "react";
import { MessageCircle, Briefcase, Award, CheckCircle2, Activity } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

export default function About() {
  const whatsappUrl = "https://wa.me/917559841714";

  return (
    <div className="bg-green-50 text-slate-900 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white py-24 px-6 overflow-hidden md:px-16">
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium uppercase bg-green-500/20 border border-green-400/30 rounded-full">
            Pharmacy Training Institute
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            PharmaPro <span className="text-green-400">Academy</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Master pharmacy with practical clinical knowledge, real-world case understanding, 
            and career-focused training designed for modern healthcare professionals.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={whatsappUrl}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold shadow-lg"
            >
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
              Why <span className="text-green-600">PharmaProAcademy</span>?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              PharmaProAcademy is dedicated to transforming pharmacy students into confident 
              professionals by bridging the gap between academic learning and real-world practice.
              
              Our Pharmacy Mastery Course focuses on clinical understanding, patient interaction, 
              and practical pharmaceutical skills required in hospitals and retail environments.
            </p>

            <div className="space-y-4">
              {[
                "Clinical & Practical Pharmacy Training",
                "Real Case Study Discussions",
                "Expert Pharmacist Mentorship",
                "Career-Oriented Learning Approach"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-slate-700">
                  <CheckCircle2 className="text-green-600" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* STATS CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-6 bg-green-50 rounded-2xl text-center">
                <Activity className="mx-auto mb-2 text-green-600" />
                <div className="font-bold text-2xl">Clinical</div>
                <div className="text-xs text-slate-500">Core Focus</div>
              </div>

              <div className="p-6 bg-emerald-50 rounded-2xl text-center">
                <Briefcase className="mx-auto mb-2 text-emerald-600" />
                <div className="font-bold text-2xl">100%</div>
                <div className="text-xs text-slate-500">Career Ready</div>
              </div>

              <div className="p-6 bg-green-100 rounded-2xl text-center col-span-2">
                <Award className="mx-auto mb-2 text-green-700" />
                <div className="font-bold text-xl italic">
                  "Learn Pharmacy. Practice Professionally."
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
              title: "Pharmacy Mastery Course",
              desc: "Complete professional training program",
              list: ["Clinical Concepts", "Drug Knowledge", "Practical Training"]
            },
            {
              title: "Prescription Analysis",
              desc: "Understand real-world prescriptions",
              list: ["Case Studies", "Dosage Understanding", "Drug Interactions"]
            },
            {
              title: "Patient Counseling",
              desc: "Improve communication & care skills",
              list: ["Patient Guidance", "Medication Advice", "Professional Ethics"]
            }
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500 hover:shadow-md"
            >
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
            <h4 className="text-2xl font-bold">PharmaProAcademy</h4>
            <p className="text-slate-500">Master Pharmacy. Build Your Career.</p>
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