
import { ArrowRight } from 'lucide-react';
import { User } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import hero from "../../assets/hero.jpg"
import clientsList from '../../data/clients';
import { projects } from '../../data/projects';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 relative" aria-labelledby="hero-title">
      {/* Background elements */}
      <div
        className={`absolute top-0 right-0 -z-10 w-1/3 aspect-square rounded-full bg-gradient-to-br ${darkMode ? 'from-violet-500/10 to-fuchsia-500/10' : 'from-emerald-500/10 to-teal-500/10'
          } blur-3xl animate-pulse-slow`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 -z-10 w-1/2 aspect-square rounded-full bg-gradient-to-tr ${darkMode ? 'from-cyan-500/10 to-blue-500/10' : 'from-amber-500/10 to-orange-500/10'
          } blur-3xl animate-pulse-slow animation-delay-2000`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="fade-right" delay={200}>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${darkMode ? 'bg-violet-500/10 border border-violet-500/20 text-violet-400' : 'bg-teal-500/10 border border-teal-500/20 text-teal-600'
              } mb-6`}>
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r transition-colors ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
                } mr-2 animate-pulse`}></span>
              Available for freelance work
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 transition-colors">
              Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-colors ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
                }`}>Mohammed</span> <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-colors ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-amber-500 to-orange-500'
                }`}>Web Developer</span>
            </h1>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-xl mb-8 transition-colors`}>
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your ideas into reality!
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className={`${darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
                  } text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 group hover:scale-105`}
              >
                View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className={`border ${darkMode ? 'border-violet-500 text-violet-400 hover:bg-violet-500/10' : 'border-teal-600 text-teal-600 hover:bg-teal-500/10'
                  } px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105`}
              >
                Contact Me
              </a>
            </div>

              <div className="mt-12 flex items-center">
                {/* Client Avatars */}
                <div className="flex -space-x-2 client-image">
                  {clientsList.map((client, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-full border-2 transition-colors ${
                        darkMode ? 'border-gray-800 bg-gray-700' : 'border-white bg-gray-100'
                      } overflow-hidden shadow-md transition-transform hover:scale-110 hover:z-10 duration-300`}
                    >
                      <ImageWithFallback
                        src={client.avatar}
                        alt={client.name}
                        className="w-full h-full object-cover transition-colors"
                        fallbackIcon={User}
                      />
                    </div>
                  ))}
                </div>

                {/* Rating and Count */}
                <div className="ml-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current client-image ${
                          i < Math.round(clientsList.reduce((sum, c) => sum + c.rating, 0) / clientsList.length)
                            ? 'text-yellow-400'
                            : darkMode
                            ? 'text-gray-600'
                            : 'text-gray-300'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {clientsList.length} Satisfied Client{clientsList.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={400}>
            <div className="relative">
              {/* Main profile image */}
              <div className={`aspect-square rounded-2xl overflow-hidden border-8 hero-image ${darkMode ? 'border-gray-800' : 'border-white'
                } shadow-2xl relative z-10 transform transition-transform duration-500 hover:rotate-2`}>
                <ImageWithFallback
                  src={hero}
                  alt="Portfolio hero"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  fallbackIcon={User}
                />
              </div>

              {/* Floating elements */}
              <div className={`absolute z-20 -top-6 -left-2 md:-left-6 p-4 rounded-lg transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg flex items-center gap-2 animate-float`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-violet-500/20 text-violet-400' : 'bg-teal-500/20 text-teal-600'
                  }`}>
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium transition-colors">Experience</div>
                  <div className={`text-xs transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>2+ Years</div>
                </div>
              </div>

              <div className={`absolute z-20 top-1/4 -right-2 xl:-right-10 p-4 rounded-lg transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg animate-float animation-delay-1000`}>
                <div className="flex items-center justify-center transition-colors">
                  <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r transition-colors ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-emerald-500 to-teal-500'
                    }`}>
                    {projects.length}+
                  </div>
                </div>
                <div className="text-sm text-center font-medium transition-colors">Projects</div>
              </div>

              <div className={`absolute z-20 -bottom-6 right-10 p-4 rounded-lg transition-colors ${darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg flex items-center gap-2 animate-float animation-delay-2000`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-600'
                  }`}>
                  <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium transition-colors">Frontend</div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Developer</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;