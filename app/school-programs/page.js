"use client"
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrainingProposal() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 px-4 md:px-16 py-10 ">
      {/* Back Button */}
      <Link href="/">
      <button
        // onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:text-blue-800 transition-colors fixed top-3 left-3 bg-blue-100 rounded-full p-2 cursor-pointer"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back</span>
      </button>
      </Link>

      {/* Header */}
      <div className="text-center my-10 ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          School Programs
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          By <span className="text-blue-500 font-semibold">Stratos Edge Training Solutions, Hyderabad</span>
        </p>
        <br/> 
        <p className="text-gray-700 leading-relaxed">
          At Stratos Edge Training Solutions, Hyderabad, we aim to transform education through holistic
          programs for students, teachers, and institutions. Our uniqueness lies in offering life skills, soft
          skills, AI, financial literacy, wellness, and teacher development under one umbrella.
        </p>
      </div>

      {/* About Section */}
      {/* <section className="mb-10 p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">About Us</h2>

      </section> */}

      {/* Grid Sections */}
      <div className="grid gap-8">
        {/* Student Development */}
        <Card
          title="1. Student Development Programs"
          objectives={[
            "Build real-world readiness beyond academics.",
            "Strengthen communication, confidence, and collaboration.",
            "Develop resilience, financial awareness, and AI literacy."
          ]}
          topics={[
            { heading: "Life Skills Mastery", points: ["Decision-making", "Goal setting", "Problem-solving", "Adaptability", "Empathy", "Conflict resolution"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Soft Skills Training", points: ["Public speaking", "Active listening", "Presentation skills", "Teamwork & collaboration", "Body language", "Social & professional etiquette"] },
            { heading: "Stress & Time Management", points: ["Identifying stress triggers", "Mindfulness techniques", "Prioritization skills", "Time planning tools", "Exam preparation strategies"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Financial Literacy & Basics of Economics", points: ["Saving vs. spending", "Budgeting and planning", "Basics of banking", "Investments and money management", "Understanding economy in daily life"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "AI for Young Learners", points: ["What is Artificial Intelligence?", "Real-world applications of AI", "AI in education, healthcare, and daily life", "Ethics and responsible use of AI", "Preparing for AI-driven careers"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
          ]}
          outcomes={[
            "Students gain confidence in communication and leadership.",
            "Improved ability to handle academic and personal stress.",
            "Financially aware and responsible mindset.",
            "Early understanding of AI concepts for future readiness."
          ]}
        />

        {/* Teacher Development */}
        <Card
          title="2. Teacher Development Programs"
          objectives={[
            "Equip teachers with modern classroom and digital tools.",
            "Improve teacher wellness and professional leadership.",
            "Foster innovation and creativity in teaching."
          ]}
          topics={[
            { heading: "Classroom Communication & Engagement", points: ["Interactive teaching strategies", "Inclusive classroom methods", "Managing diverse learners", "Effective questioning techniques"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Digital & AI-Powered Teaching Tools", points: ["Gamification in classrooms", "AR/VR tools for education", "Blended learning models", "Online assessment tools", "AI in lesson planning"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Leadership & Mentoring Skills", points: ["Coaching and mentoring students", "Classroom leadership skills", "Conflict management", "Building role-model behavior"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Stress Management & Wellness", points: ["Mindfulness and relaxation", "Work-life balance strategies", "Emotional regulation", "Preventing burnout"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Research & Innovation in Teaching", points: ["Innovative lesson plan design", "Classroom action research", "Creative assessment techniques", "Integrating 21st-century skills"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
          ]}
          outcomes={[
            "Teachers become confident with technology and modern pedagogy.",
            "Stronger classroom engagement and student connect.",
            "Resilient, stress-free, and innovative educators."
          ]}
        />

        {/* Institutional Excellence */}
        <Card
          title="3. Institutional Excellence Programs"
          objectives={[
            "Position schools as hubs of holistic education.",
            "Strengthen leadership and parent-school partnerships.",
            "Create safe, innovative, and future-ready institutions."
          ]}
          topics={[
            { heading: "Leadership Training for School Management", points: ["Strategic decision-making", "Stakeholder management", "Branding and vision planning"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Curriculum Enrichment Programs", points: ["Integrating life skills and AI into subjects", "Financial literacy in everyday teaching", "Holistic assessment strategies"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Parent-School Partnership Workshops", points: ["Building trust with parents", "Parent communication channels", "Aligning academic and emotional growth"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
            { heading: "Wellness & Mental Health Initiatives", points: ["School-wide wellness programs", "Mental health awareness drives", "Peer support systems", "Emotional resilience campaigns"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
          ]}
          outcomes={[
            "Schools stand out as progressive and innovative.",
            "Parents collaborate better with teachers and school leadership.",
            "Improved student performance through a holistic environment."
          ]}
        />
      </div>

      {/* Why Choose Section */}
      <section className="bg-white mt-10 shadow-sm rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Stratos Edge Training Solutions?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Comprehensive Coverage: Students, teachers, and schools.</li>
          <li>Practical Approach: Role plays, activities, real-life applications.</li>
          <li>Future-Oriented: AI, financial literacy, and life skills integration.</li>
          <li>Customization: Programs aligned to each school’s needs.</li>
          <li>Sustainable Growth: Continuous support through refresher sessions.</li>
        </ul>
      </section>

      {/* Overall Outcomes */}
      <section className="bg-blue-50 border border-blue-100 mt-8 rounded-2xl p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Proposed Outcomes (Overall)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Students:</strong> Confident, responsible, and future-ready.</li>
          <li><strong>Teachers:</strong> Innovative, resilient, and digitally empowered.</li>
          <li><strong>Institutions:</strong> Recognized as progressive learning hubs.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-10">
        <p>📍 Hyderabad (Programs available Pan-India & Online)</p>
        <p>📧 stratosedgelearning@gmail.com | ☎️ +91 9289867821</p>
      </footer>
    </div>
  );
}

/* Reusable Card Component */
function Card({ title, objectives, topics, outcomes }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">{title}</h2>

      {/* Objectives */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Objectives</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {objectives.map((obj, idx) => <li key={idx}>{obj}</li>)}
        </ul>
      </div>

      {/* Topics */}
      <div className="grid md:grid-cols-2 gap-6">
        {topics.map((section, idx) => (
          <div key={idx} className="  border-2 border-blue-300 ring-4 ring-blue-100  p-4 rounded-2xl shadow-sm">
            <a href={section.link} target="_blank" className="flex items-center justify-between bg-blue-100 rounded-xl p-2 mb-2 "><h4 className="font-semibold text-blue-600 text-left">{section.heading} </h4> <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=o90MnZhnB2CM&format=png&color=228BE6"></img></a>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {section.points.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="mt-6 ">
        <h3 className="font-semibold text-gray-900 mb-2">Expected Outcomes</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {outcomes.map((out, idx) => <li key={idx}>{out}</li>)}
        </ul>
      </div>
    </div>
  );
}
