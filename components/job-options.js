import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function JobOptions() {
  const industries = [
    {
      name: "Internship ",
      roles: ["Practical work—not theory", "Weekly progress reports and mentor check-ins", "Certificate", "personalized recommendations"],
      growth: "+15%",
      icon: "💻",
    },
    {
      name: "Marketing",
      roles: ["Practical work—not theory", "Weekly progress reports and mentor check-ins", "Certificate", "personalized recommendations"],
      growth: "+10%",
      icon: "📈",
    },
    {
      name: "Consultant",
      roles: ["Real-world client case studies", "Weekly mentor check-ins & progress reports", "Certificate of completion", "Personalized career recommendations"],
      growth: "+7%",
      icon: "📊",
    }
  ]

  return (
    <section id="job-options" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Careers / Job-openings </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Discover high-growth industries and in-demand roles that align with your interests and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {industry.growth} growth
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Program Features:</h4>
                  <ul className="space-y-1">
                    {industry.roles.map((role, roleIndex) => (
                      <li key={roleIndex} className="text-muted flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Explore {industry.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            View All Career Paths
          </Button>
        </div>
      </div>
    </section>
  )
}
