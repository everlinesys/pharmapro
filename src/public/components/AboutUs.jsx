import React from "react";

export default function About() {
  return (
    <div className="bg-white text-slate-900 min-w-[100vw] md:px-16 lg:px-16">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          TutorX Learning Academy
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Strong foundations for students from Class 1 to 10 with focused guidance, 
          structured learning, and personalized attention.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            About TutorX
          </h2>
          <p className="text-slate-600 leading-relaxed">
            TutorX Learning Academy is dedicated to building strong academic foundations 
            for school students. We provide structured tuition for multiple subjects and 
            syllabi, ensuring clarity, confidence, and consistent academic improvement.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* BASIC */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Foundation Classes (Basics)
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Strong fundamentals for early learners.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• English</li>
              <li>• Malayalam</li>
              <li>• Mathematics</li>
              <li>• Hindi</li>
              <li>• Arabic</li>
            </ul>
          </div>

          {/* ELITE */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Elite Programs
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Advanced language mastery programs.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Elite English (Advanced English)</li>
              <li>• Elite Hindi (Advanced Hindi)</li>
            </ul>
          </div>

          {/* KERALA */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              Kerala Syllabus
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Comprehensive support for state syllabus students.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Classes 5 – 10</li>
              <li>• English Medium</li>
              <li>• Malayalam Medium</li>
            </ul>
          </div>

          {/* CBSE */}
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-800">
              CBSE Syllabus
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Full academic support across all subjects.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Classes 1 – 10</li>
              <li>• All Subjects Covered</li>
            </ul>
          </div>

        </div>

        {/* WHY CHOOSE */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose TutorX?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We focus on concept clarity, regular practice, and individual attention 
            to help students excel academically. Our structured approach ensures 
            steady improvement and confidence in every subject.
          </p>
        </div>

      </div>
    </div>
  );
}