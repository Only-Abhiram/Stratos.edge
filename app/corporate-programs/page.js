"use client"
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrainingProposal() {
    return (
        <div className="min-h-screen bg-purple-50 text-gray-800 px-4 md:px-16 py-10 ">
            {/* Back Button */}
            <Link href="/">
                <button
                    // onClick={() => window.history.back()}
                    className="flex items-center gap-2 text-purple-600 mb-6 hover:text-purple-800 transition-colors fixed top-3 left-3 bg-purple-100 rounded-full p-2 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back</span>
                </button>
            </Link>

            {/* Header */}
            <div className="text-center my-10 ">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Corporate Training Programs
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                    By <span className="text-purple-700 font-semibold">Stratos Edge Training Solutions, Hyderabad</span>
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                    At Stratos Edge Training Solutions, Hyderabad, we empower organizations to cultivate effective leaders, enhance productivity, and build high-performing teams through transformative learning experiences. Our programs are designed to align with organizational goals and meet the dynamic demands of today’s corporate world. </p>
            </div>

            {/* About Section */}
            {/* <section className="mb-10 p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">About Us</h2>

      </section> */}

            {/* Grid Sections */}
            <div className="grid gap-8">
                {/* Student Development */}
                <Card
                    title="1. Leadership & Management Development Programs"
                    objectives={[
                        "Build leadership pipelines aligned with organizational growth.",
                        "Enhance strategic and critical thinking for business decisions.",
                        "Strengthen emotional intelligence and people management."
                    ]}
                    topics={[
                        { heading: "Leadership & Strategic Thinking", points: ["Visionary and adaptive leadership", "Decision-making under uncertainty", "Driving innovation and cultural change", "Strategic planning and execution"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" },
                        { heading: "Goal Setting & Productivity", points: ["Setting SMART goals and KPIs", "Prioritization and focus techniques", "Productivity frameworks and tools", "Accountability and performance management"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform" }
                    ]}
                    outcomes={[
                        "Leaders equipped with clarity, direction, and influence.",
                        "Improved decision-making and strategic alignment.",
                        "Enhanced ownership and accountability within teams."
                    ]}
                />

                {/* Teacher Development */}
                <Card
                    title="2. Professional & Workplace Effectiveness Programs"
                    objectives={[
                        "Improve workplace communication and collaboration.",
                        "Enable professionals to manage time, stress, and priorities effectively.",
                        "Build a culture of continuous improvement and mutual respect."
                    ]}
                    topics={[
                        {
                            heading: "Time & Stress Management", points: ["Understanding time traps and stress triggers",
                                "Prioritization frameworks (Eisenhower Matrix, Pareto Principle)",
                                "Mindfulness and resilience techniques",
                                "Work-life balance and burnout prevention"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        },
                        {
                            heading: "Business Communication & Email Etiquette",
                            points: ["Professional writing and communication tone",
                                , "Effective presentation and meeting skills",
                                "Email etiquette for clarity and professionalism",
                                "Handling feedback and conflict with diplomacy"],
                            link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        },
                        {
                            heading: "Team Building & Collaboration",
                            points: ["Trust-building exercises and synergy games",
                                "Inter-departmental collaboration tools",
                                "Empathy and active listening",
                                "Fostering ownership and collective problem-solving"],
                            link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        }
                    ]}
                    outcomes={[
                        "Teams communicate with confidence and purpose.",
                        "Reduced workplace stress and improved morale.",
                        "Enhanced teamwork leading to higher efficiency."
                    ]}
                />

                {/* Institutional Excellence */}
                <Card
                    title="3. Specialized Corporate Skill Programs"
                    objectives={[
                        "Strengthen sales and negotiation capabilities.",

                        "Create impactful internal trainers for long-term capacity building."

                        , "Simulate real-world business challenges for practical learning.",
                    ]}
                    topics={[
                        {
                            heading: "Sales Training & Negotiation Skills", points: ["Customer psychology and persuasion techniques"

                                , "Consultative and value-based selling",

                                "Negotiation frameworks and objection handling"

                                , "Building long-term client relationships"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        },
                        {
                            heading: "Train The Trainer (TTT)", points: ["Adult learning principles and facilitation techniques",

                                "Designing engaging training sessions",

                                "Managing participant dynamics",

                                "Feedback and continuous improvement"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        },
                        {
                            heading: "Realistic Business Simulations", points: ["Strategy, operations, and finance simulations",

                                "Crisis management and problem-solving",

                                "Risk-free decision-making practice",
                                "Reflection and debriefing for insights"], link: "https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform"
                        }
                    ]}
                    outcomes={[
                        "Sales teams drive measurable business growth.",

                        "Internal trainers deliver high-impact, scalable programs.",

                        "Professionals develop real-world strategic acumen."
                    ]}
                />


            </div>

            {/* Why Choose Section */}
            <section className="bg-white mt-10 shadow-sm rounded-2xl p-6 md:p-10">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Why Choose Stratos Edge Training Solutions?</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Tailored Learning: Programs aligned with company goals and workforce needs.</li>
                    <li>Expert Facilitation: Certified corporate trainers with industry expertise.</li>
                    <li>Interactive Experience: Case studies, role plays, and business simulations.</li>
                    <li>Outcome-Driven: Focus on measurable behavioral and performance improvements.</li>
                    <li>Flexible Modes: Onsite, hybrid, and online options for all levels of employees.</li>
                </ul>
            </section>

            {/* Overall Outcomes */}
            <section className="bg-purple-100 border border-purple-100 mt-8 rounded-2xl p-6 md:p-10">
                <h2 className="text-2xl font-semibold text-purple-800 mb-4">Proposed Outcomes (Overall)</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li><strong>Leaders:</strong> Visionary, strategic, and emotionally intelligent.</li>
                    <li><strong>Teams:</strong> Collaborative, resilient, and performance-focused.</li>
                    <li><strong>Oganizations:</strong> Agile, innovative, and future-ready.</li>
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
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">{title}</h2>

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
                    <div key={idx} className="  border-2 border-purple-300 ring-4 ring-purple-100  p-4 rounded-2xl shadow-sm">
                        <a href={section.link} target="_blank" className="flex items-center justify-between bg-purple-100 rounded-xl p-2 mb-2 "><h4 className="font-semibold text-purple-600 text-left">{section.heading} </h4> <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=o90MnZhnB2CM&format=png&color=7950F2"></img></a>
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
