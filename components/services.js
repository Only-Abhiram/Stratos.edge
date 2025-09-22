import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Services() {
  const services = [
    {
      title: " Enterprise Training",
      description: "Future-ready programs on innovation, culture transformation, DEI, and managerial capability building.",
      icon: "💼",
    },
    {
      title: " Campus Readiness",
      description: "Career mapping, behavioral interviews, resume diagnostics, and simulated assessments for job readiness.",
      icon: "🎓",
    },
    {
      title: "Tech Excellence",
      description: "Learning paths in Gen AI, full-stack, cyber-security, cloud, and data science for upskilling tech teams.",
      icon: "🧑‍💻 ",
    },
    {
      title: "Communication Mastery",
      description: "Programs in assertive communication, client handling, storytelling, and business presentations.",
      icon: "🗣️ ",
    },
    {
      title: "Leadership Acceleration",
      description: "Executive coaching, leadership labs, agile frameworks, and strategic thinking simulations.",
      icon: "👑",
    },
    {
      title: "Tailored Learning",
      description: "Custom-built solutions to match domain maturity, team goals, and organizational culture.",
      icon: "🔧",
    },
  ]

  return (
    <section id="careerservices" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Career Services</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Everything you need to accelerate your career growth and achieve your professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
