import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  )
}
