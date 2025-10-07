"use client"
import { Button } from "./ui/button"
import Link from "next/link"
export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // setIsMenuOpen(false)
  }
  return (
    <section id="home" className=" pt-16 bg-gradient-to-br from-black to-gray-700 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            “Yatra Vidyā Bhavati Vṛddhi”

          </h1>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/60 mb-6 text-balance">– Where Learning Leads to Growth.</h3>
          <p className="text-lg md:text-2xl text-white mb-8 max-w-3xl mx-auto text-pretty">
            Unlock your potential with personalized career guidance, expert mentorship, and proven strategies to
            accelerate your professional growth.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-semibold hover:cursor-pointer">
                Book a free consultation
              </Button >
            </a>
            <Link href="/corporate-programs" >
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Corporate Programs
              </Button></Link>
            <Link href="/college-programs">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
              >
                College Programs
              </Button></Link>
            <Link href="/school-programs">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
              >
                School Programs
              </Button></Link>
            

            

            <Button onClick={() => scrollToSection("careerservices")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
