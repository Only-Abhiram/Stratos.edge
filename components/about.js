"use client"


import { Button } from "./ui/button"

export default function About() {
  const scrollToSection = (href) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    
  }
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">Hari Krishna K (Co-Founder) </h2>
            <p className="text-lg text-muted mb-6">
              Certified Corporate Master Trainer, is the visionary Co-Founder of STRATOS EDGE TRAINING SOLUTIONS (formerly STRATOS EDGE LEARNING). With extensive experience in campus-to-corporate transitions, corporate masterclasses, and leadership development, he has mentored thousands of students and professionals across India. His training style blends innovation, strategy, and practical insights that leave a lasting impact on individuals and organizations alike. <a className="text-blue-500 underline"  target="_blank" href="https://www.linkedin.com/in/harikrishnakairi/">LinkedIn</a>
            </p>
            
           
           
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full" onClick={()=>scrollToSection("contactus")}
              >Contact Us</Button>
         
          </div>
          <div className="flex justify-center items-center ">
            <img src="https://api.time.com/wp-content/uploads/2018/07/mark-zuckerberg-holocaust.jpg" className="rounded-3xl"></img>
            {/* <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">10,000+ Careers Transformed</h3>
              <p className="text-primary-foreground/90">
                Join thousands of professionals who have successfully navigated their career transitions with our
                guidance.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
