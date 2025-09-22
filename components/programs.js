
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function Programs() {
  const programs = [
    {
      title: "Leadership Development",
      price: "₹10000",
      duration: "4 weeks",
      description: "Perfect for recent graduates and career beginners",
      features: [
        "Developing Executive Presence",
        "Strategic Decision-Making",
        "Emotional Intelligence for Leaders",
        "Business Storytelling for Leadership",
        "AI-Powered Leadership Strategies",
        "Crisis Leadership & Risk Mitigation",
        "Human Error Prevention & Risk Analysis",
      ],
      popular: false,
    },
    {
      title: " Soft Skills & Communication",
      price: "₹59999",
      duration: "8 weeks",
      description: "Ideal for mid-career professionals seeking advancement",
      features: [
        " Communication Etiquette",
        "Public Speaking Mastery",
        "Conflict Resolution",
        "Body Language & Nonverbal Communication",
        " Listening Skills for Leaders",
        "Cross-Cultural Communication",
        "Digital Etiquette in the Hybrid Workplace",
        "Assertive Communication & Confidence Building",
      ],
      popular: true,
    },
    {
      title: "Business Storytelling & Negotiation",
      price: "₹70,000",
      duration: "12 weeks",
      description: "Designed for senior professionals and executives",
      features: [
        " Business Storytelling for Influence",
        "Negotiation Mastery",
        " Persuasion & Influence Techniques",
        "Data-Driven Decision Making",
        " Creativity in Strategic Communication",
        "Design Thinking in Communication",
      ],
      popular: false,
    },
    {
      title: "Sales & Stakeholder Management",
      price: "₹65,999",
      duration: "10 weeks",
      description: "Designed for senior professionals and executives",
      features: [
        "Customer Engagement Strategies",
        "KPI-Driven Sales Techniques",
        "Stakeholder Communication & Mapping",
        "Client Retention & Follow-Up Techniques",
        "Time & Territory Management",
        "Hybrid Sales Conversations",
        "B2B & B2C Negotiation Approaches",
        "Stakeholder Expectation Management & Influence"
      ],
      popular: false,
    },
    {
      title: "Technical Training Programs",
      price: "₹79,999",
      duration: "7 week",
      description: "Designed for senior professionals and executives",
      features: [
        "Full Stack Development",
        "Mobile App Development (iOS & Android)",
        "Web Technologies (HTML, CSS, JS, React)",
        "Data Analytics & Visualization",
        "Artificial Intelligence & Machine Learning",
        "Cloud Computing (AWS, Azure, GCP)",
        "Cybersecurity Awareness",
        "DevOps Tools & Practices",
        "UI/UX Design Fundamentals",
        "Low-Code/No-Code Platform Training"
      ],
      popular: false,
    }
  ]

  return (
    <section id="programs" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Programs & Kits</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Choose the program that best fits your career stage and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`relative bg-background border-border hover:shadow-xl transition-all duration-300 ${program.popular ? "ring-2 ring-primary" : ""}`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{program.title}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{program.price}</div>
                <CardDescription className="text-muted">
                  {program.duration} • {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <span className="text-primary mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform">
                  <Button
                    className={`w-full cursor-pointer ${program.popular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"}`}
                  >
                    Get Started
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
