"use client"
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrainingProposal() {
    return (
        <div className="min-h-screen bg-orange-50 text-gray-800 px-4 md:px-16 py-10 ">
            {/* Back Button */}
            <Link href="/">
                <button
                    // onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-orange-600 mb-6 hover:text-orange-800 transition-colors fixed top-3 left-3 bg-orange-100 rounded-full p-2 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back</span>
                </button>
            </Link>

            {/* Header */}
            <div className="text-center my-10 ">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    College Training Programs
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    By <span className="text-orange-700 font-semibold">Stratos Edge Training Solutions, Hyderabad</span>
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                    At Stratos Edge Training Solutions, Hyderabad, we empower students and graduates to seamlessly transition from campus to corporate life. Our specialized college training modules are designed to enhance employability, professional readiness, and real-world competence. </p>
            </div>

            {/* About Section */}
            {/* <section className="mb-10 p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">About Us</h2>

      </section> */}

            {/* Grid Sections */}
            <div className="grid gap-8">
                {/* Student Development */}
                <Card
                    title="1. Campus-to-Corporate (C2C) Transition Programs"
                    objectives={[
                        "Prepare students for the shift from academic life to corporate environments.",
                        "Build confidence, adaptability, and professional discipline.",
                        "Enhance understanding of workplace expectations and culture."
                    ]}
                    topics={[
                        { heading: "C2C Orientation & Readiness", points: ["Understanding corporate work culture and hierarchy", "Professional conduct and organizational ethics", "Time and responsibility management", "Transitioning from student to professional mindset"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" },
                        { heading: "Professional Etiquette & Grooming", points: ["Dress code and appearance for interviews and work settings", "Business etiquette and meeting protocols", "Professional dining manners", "Maintaining a polished image and behavior"] , link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" },
                        { heading: "Body Language & First Impressions", points: ["Non-verbal communication mastery", "Confident posture, handshake, and eye contact", "Conveying credibility and professionalism", "Building executive presence"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" }
                        ]}
                    outcomes={[
                        "Students confidently adapt to corporate environments.",
                        "Improved professionalism and workplace readiness.",
                        "Positive first impressions and strong personal presence."
                    ]}
                />

                {/* Teacher Development */}
                <Card
                    title="2. Career Readiness & Employability Programs"
                    objectives={[
                        "Equip students with practical job-seeking and interview skills.",
                        "Strengthen communication and collaboration abilities.",
                        "Build self-branding and digital visibility for future careers."
                    ]}
                    topics={[
                        { heading: "Resume Building & Personal Branding", points: ["Crafting impactful resumes and cover letters", "Highlighting achievements and key skills", "Optimizing LinkedIn and digital presence", "Building an authentic professional brand"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" },
                        { heading: "Group Discussion & Interview Skills", points: ["GD etiquette and group dynamics", "Handling stress and pressure in interviews", "Behavioral and situational interview techniques", "Personal introduction and storytelling mastery"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" },
                        { heading: "Mock Interviews with Real-Time Feedback", points: ["Simulated HR and technical interview sessions", "Personalized feedback from industry experts", "Identifying strengths and improvement areas", "Building confidence through repeated practice"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" }
                        ]}
                    outcomes={[
                        "Students present themselves effectively to employers.",
                        "Improved success rates in campus placements.",
                        "Enhanced communication and interview confidence."
                    ]}
                />

                {/* Institutional Excellence */}
                <Card
                    title="3. Communication & Workplace Essentials"
                    objectives={[
                        "Strengthen communication and interpersonal effectiveness.",
                        "Develop writing skills for professional correspondence.",
                        "Enhance teamwork and workplace adaptability."
                    ]}
                    topics={[
                        { heading: "Email Writing & Communication Skills", points: ["Writing clear, concise, and professional emails", "Understanding tone, grammar, and structure", "Corporate communication channels and etiquette", "Handling feedback and conflict with maturity"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" },
                        { heading: "Teamwork & Collaboration Skills", points: ["Working in diverse teams", "Managing group tasks and responsibilities", "Active listening and problem-solving", "Leadership within team contexts"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" }
                    ]}
                    outcomes={[
                        "Effective communication across professional settings.",
                        "Students display clarity, confidence, and courtesy in workplace interactions.",
                        "Strong teamwork and adaptability in corporate environments."
                    ]}
                />

                <Card
                    title="4. Internships & Certifications"
                    objectives={[
                        "Provide hands-on exposure to real-world industry environments.",
                        "Offer government-approved certifications to enhance employability.",
                        "Enhance teamwork and workplace adaptability."
                    ]}
                    topics={[
                        { heading: "Government-Approved Internships & Certifications", points: ["Internship programs with recognized industry partners, concise, and professional emails", "Certificate courses aligned to job roles and skill gaps", "Practical exposure to corporate projects and case studies", "Recognition that strengthens resumes and job profiles"], link: "https://docs.google.com/forms/d/e/1FAIpQLSc5Tc1pwb2KY3bcjjnBUzjzChKjRrsODYNk7fPV2_waHF-bkw/viewform" }
                    ]}
                    outcomes={[
                        "Students gain real-world industry experience before graduation.",
                        "Certification-backed credibility and improved job prospects.",
                        "Early professional network building and skill application."
                    ]}
                />
            </div>

            {/* Why Choose Section */}
            <section className="bg-white mt-10 shadow-sm rounded-2xl p-6 md:p-10">
                <h2 className="text-2xl font-semibold text-orange-800 mb-4">Why Choose Stratos Edge Training Solutions?</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Campus-to-Corporate Integration: Bridging education and employment effectively.</li>
                    <li>End-to-End Preparation: From soft skills to certifications.</li>
                    <li>Proven Methodology: Interactive, engaging, and result-oriented sessions.</li>
                    <li>National Reach: On-campus and online delivery Pan-India.</li>
                    <li>Sustained Development: Continuous mentoring and refresher sessions.</li>
                </ul>
            </section>

            {/* Overall Outcomes */}
            <section className="bg-orange-100 border border-orange-100 mt-8 rounded-2xl p-6 md:p-10">
                <h2 className="text-2xl font-semibold text-orange-800 mb-4">Proposed Outcomes (Overall)</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Students:</strong> Confident, employable, and professionally ready.</li>
                    <li><strong>Colleges:</strong> Known for producing industry-ready graduates.</li>
                    <li><strong>Recruiters:</strong> Gain skilled, polished, and adaptable new hires.</li>
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
            <h2 className="text-2xl font-semibold text-orange-800 mb-4">{title}</h2>

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
                    <div key={idx} className="  border-2 border-orange-300 ring-4 ring-orange-100  p-4 rounded-2xl shadow-sm">
                        <a href={section.link} target="_blank" className="flex items-center justify-between bg-orange-100 rounded-xl p-2 mb-2 "><h4 className="font-semibold text-orange-600 text-left">{section.heading} </h4> <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=o90MnZhnB2CM&format=png&color=FD7E14"></img></a>
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
