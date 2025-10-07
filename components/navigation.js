"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import  Link  from "next/link"
// import {imag} from '../public/unnamed.jpg'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Testimonials", href: "#testimonials" },
    { name: "Program & Kits", href: "#programs" },
    { name: "Collab", href: "#collaboration" },
    // { name: "More", href: "#job-options" },
    { name: "School Programs", href: "/school-programs" },
    { name: "College Programs", href: "/college-programs" },
    { name: "Corporate Programs", href: "/corporate-programs" }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b  ">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex justify-center gap-2 items-center">
            <img className="w-10 h-10 rounded-2xl" src="./unnamed.jpg"></img>
            <div className="flex flex-col justify-">
              <h1 className="text-2xl font-bold text-black p-0">Stratos Edge </h1>
              <h2 className="text-black">Training Solutions</h2>

            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-evenly items-center space-x-8">
              {navItems.map((item) => {

                if (item.href === "/school-programs" || item.href === "/college-programs" || item.href === "/corporate-programs") {
                  return (
                    <Link href={item.href}>
                      <button className="text-foreground hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 cursor-pointer rounded-xl">{item.name}</button>
                    
                    </Link>
                  )
                } else {
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-200 cursor-pointer rounded-xl"
                    >
                      {item.name}
                    </button>
                  )
                }

              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdC9-vL-JwGBtZG-kknkTd1OIsAaTRJlQ6tBZLONlQ-VI2xSw/viewform">
              <Button className="bg-black hover:bg-black/90  hover:cursor-pointer">Get Started</Button></a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-black p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => {
                if (item.href === "/school-programs" || item.href === "/college-programs" || item.href ==="/corporate-programs") {
                  return (
                    <Link href={item.href}>
                      <button className="text-foreground hover:text-black block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200">{item.name}</button>
                    </Link>
                  )
                }else{
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-foreground hover:text-black block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )
                }
                
              })}
              <div className="pt-4">
                <Button className="w-full bg-black hover:bg-black/90 text-white">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

