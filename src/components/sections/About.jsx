import React from 'react';
import { User } from 'lucide-react';
import { Download } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import ImageWithFallback from '../common/ImageWithFallback';
import AnimatedCounter from '../common/AnimatedCounter';
import { useTheme } from '../../contexts/ThemeContext';
import { stats } from '../../data/stats';
import about from "../../assets/about.jpg"

const About = () => {
  const { darkMode } = useTheme();
  
  return (
    <section id="about" className="py-20" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="My journey, experience, and approach to web development" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-right" delay={200}>
            <div className="relative">
              <div className={`aspect-[4/5] rounded-2xl overflow-hidden border-8 ${
                darkMode ? 'border-gray-800' : 'border-white'
              } shadow-xl`}>
                <ImageWithFallback 
                  src={about}
                  alt="About me" 
                  className="w-full h-full object-cover" 
                  fallbackIcon={User}
                />
              </div>
              
              <div className={`absolute bottom-8 sm:-right-8 p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl z-10 animate-float -right-2`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="font-medium">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-left" delay={400}>
            <h3 id="about-title" className="text-3xl font-bold mb-6">
              Crafting Digital Experiences With 
              <span className={`ml-2 text-transparent bg-clip-text bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'}`}>
                Passion
              </span>
            </h3>
            
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
              I'm a Web Developer and UI/UX enthusiast with a passion for creating beautiful, functional, and user-centered digital experiences. With 2+ years of experience in the field, I am constantly looking for new and innovative ways to bring my clients' visions to life.
            </p>
            
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
                <h4 className="font-bold text-lg mb-3">Frontend Development</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Building responsive websites with HTML, CSS, JavaScript, React, and Next.js.
                </p>
              </div>
              
              <div className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-md transition-all duration-300 hover:-translate-y-1`}>
                <h4 className="font-bold text-lg mb-3">UI/UX Design</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Creating intuitive, accessible, and visually appealing interfaces.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <h4 className="font-bold mb-2">Name</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Mohammed Fandees</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} overflow-ellipsis`}>mohammed.fandees@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Menoufia, EG</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Freelance & Part-time</p>
              </div>
            </div>
            
            <div className="mt-8 sm:text-left text-center">
              <a 
                href="https://www.linkedin.com/in/mohammed-fandees/overlay/1728608354322/single-media-viewer?type=DOCUMENT&profileId=ACoAADRPS4UBLtMr3VH5CKpK8VfDxpxLvFkOEeU&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BX3z3tMZ%2FSFaGdDYC1YQ9Pw%3D%3D" 
                target='_blank'
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 ${
                  darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
                } text-white rounded-md font-medium transition-all duration-300 hover:scale-105`}
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              animation="fade-up" 
              delay={index * 150} 
              className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group`}
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r ${
                darkMode ? 'group-hover:from-violet-500 group-hover:to-fuchsia-500' : 'group-hover:from-emerald-500 group-hover:to-teal-500'
              }`}>
                <stat.icon 
                  size={24} 
                  className={`${
                    darkMode ? 'text-violet-400' : 'text-teal-600'
                  } group-hover:text-white transition-colors duration-300`} 
                />
              </div>
              <AnimatedCounter end={stat.count} suffix={stat.suffix || ''} />
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.title}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;