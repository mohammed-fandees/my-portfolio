import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import Portfolio from '../components/sections/Portfolio';
import Experience from '../components/sections/Experience';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function HomeDeferredSections() {
  return (
    <>
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
  