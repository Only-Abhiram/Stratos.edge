import Navigation from "../components/navigation"
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import Testimonials from "../components/testimonials"
import Programs from "../components/programs"
import Collaboration from "../components/collaboration"
import JobOptions from "../components/job-options"
import Footer from "../components/footer"
import ContactCard from '../components/contactus'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center overflow-x-hidden">
      <Navigation />
      
      <main className="w-full">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Programs />
        <Collaboration />
        <JobOptions />
        <ContactCard/>
      </main>
      <Footer />
    </div>
  )
}
