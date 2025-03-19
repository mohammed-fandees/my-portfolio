import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message or redirect
    alert('Message sent successfully!');
  };
  
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss your project and how I can help"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal animation="fade-right" delay={200}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to reach out to me for any inquiries or project discussions. I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className={`group flex items-start p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-lg ${
                  darkMode ? 'bg-violet-500/20' : 'bg-teal-500/20'
                } flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r ${
                  darkMode ? 'group-hover:from-violet-500 group-hover:to-fuchsia-500' : 'group-hover:from-emerald-500 group-hover:to-teal-500'
                }`}>
                  <Mail 
                    size={20} 
                    className={`${
                      darkMode ? 'text-violet-400' : 'text-teal-600'
                    } group-hover:text-white transition-colors duration-300`} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>mohammed.fandees@gmail.com</p>
                  <a 
                    href="mailto:mohammed.fandees@gmail.com" 
                    className={`text-sm font-medium mt-2 inline-block ${
                      darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-teal-600 hover:text-teal-700'
                    } transition-colors duration-300 hover:underline`}
                  >
                    Send an email
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className={`group flex items-start p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-lg ${
                  darkMode ? 'bg-violet-500/20' : 'bg-teal-500/20'
                } flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r ${
                  darkMode ? 'group-hover:from-violet-500 group-hover:to-fuchsia-500' : 'group-hover:from-emerald-500 group-hover:to-teal-500'
                }`}>
                  <Linkedin 
                    size={20} 
                    className={`${
                      darkMode ? 'text-violet-400' : 'text-teal-600'
                    } group-hover:text-white transition-colors duration-300`} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">LinkedIn</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>linkedin.com/in/mohammed-fandees</p>
                  <a 
                    href="https://www.linkedin.com/in/mohammed-fandees" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium mt-2 inline-block ${
                      darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-teal-600 hover:text-teal-700'
                    } transition-colors duration-300 hover:underline`}
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className={`group flex items-start p-6 rounded-xl ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-lg ${
                  darkMode ? 'bg-violet-500/20' : 'bg-teal-500/20'
                } flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r ${
                  darkMode ? 'group-hover:from-violet-500 group-hover:to-fuchsia-500' : 'group-hover:from-emerald-500 group-hover:to-teal-500'
                }`}>
                  <Github 
                    size={20} 
                    className={`${
                      darkMode ? 'text-violet-400' : 'text-teal-600'
                    } group-hover:text-white transition-colors duration-300`} 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">GitHub</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>github.com/mohammed-fandees</p>
                  <a 
                    href="https://github.com/mohammed-fandees" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium mt-2 inline-block ${
                      darkMode ? 'text-violet-400 hover:text-violet-300' : 'text-teal-600 hover:text-teal-700'
                    } transition-colors duration-300 hover:underline`}
                  >
                    Follow on GitHub
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-left" delay={400}>
            <div className={`p-8 rounded-xl ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } border shadow-lg hover:shadow-xl transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } border focus:outline-none focus:ring-2 ${
                        darkMode ? 'focus:ring-violet-500 focus:border-violet-500' : 'focus:ring-teal-500 focus:border-teal-500'
                      } transition-all duration-300 hover:-translate-y-0.5`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } border focus:outline-none focus:ring-2 ${
                        darkMode ? 'focus:ring-violet-500 focus:border-violet-500' : 'focus:ring-teal-500 focus:border-teal-500'
                      } transition-all duration-300 hover:-translate-y-0.5`}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-violet-500 focus:border-violet-500' : 'focus:ring-teal-500 focus:border-teal-500'
                    } transition-all duration-300 hover:-translate-y-0.5`}
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-violet-500 focus:border-violet-500' : 'focus:ring-teal-500 focus:border-teal-500'
                    } transition-all duration-300 hover:-translate-y-0.5 resize-none`}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full ${
                    darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
                  } text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 group hover:scale-105`}
                >
                  Send Message <MessageSquare size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;