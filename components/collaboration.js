import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export default function Collaboration() {
  const collaborations = [
    {
      title: "Corporate Partnerships",
      description: "Partner with us to provide career development services to your employees",
      icon: "🏢",
      benefits: ["Employee retention", "Skill development", "Leadership pipeline", "Custom programs"],
    },
    {
      title: "Educational Institutions",
      description: "Collaborate to prepare students for successful career transitions",
      icon: "🎓",
      benefits: ["Student placement", "Career readiness", "Industry connections", "Alumni support"],
    },
    {
      title: "Industry Experts",
      description: "Join our network of career coaches and industry mentors",
      icon: "👥",
      benefits: ["Flexible schedule", "Competitive compensation", "Professional growth", "Impact lives"],
    },
  ]

  return (
    <section id="collaboration" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Collaboration Opportunities</h2>
         
          <p className="text-xl text-muted max-w-2xl mx-auto mb-5">
            Partner with us to expand career development opportunities and create lasting impact.
          </p>
          <Button
                  className=" bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                 <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe_CUUR1tHXg8pAbia0HEzF4dnwmP1A_K78U-Ng8-_xEXnaWA/viewform">Collaborate with us</a>
                   
                </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <CardHeader>
                <div className="text-6xl mb-4">{collab.icon}</div>
                <CardTitle className="text-xl font-semibold text-card-foreground mb-2">{collab.title}</CardTitle>
                <CardDescription className="text-muted">{collab.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {collab.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center text-foreground">
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
