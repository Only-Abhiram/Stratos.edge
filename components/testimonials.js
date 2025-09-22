import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya S",
      role: "BTech Student",
      content:
        "The career kit helped me crack my first job interview. Super practical!",
      rating: 5,
    },
    {
      name: "Arjun R",
      role: "MBA Graduate",
      content:
        "The interview coaching sessions were game-changing. I went from being nervous about interviews to confidently securing multiple offers.",
      rating: 5,
    },
    {
      name: "HR Manager",
      role: "HR Manager, TechCorp Pvt. Ltd",
      content:
        "Their career assessment opened my eyes to possibilities I never considered. Now I'm thriving in a role that perfectly matches my skills and interests.",
      rating: 5,
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground">{testimonial.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
