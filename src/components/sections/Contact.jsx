import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ScrollReveal from '../common/ScrollReveal';
import { useTheme } from '../../contexts/ThemeContext';
import emailjs from 'emailjs-com';
import Notification from '../common/Notification';

const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if EmailJS credentials are defined
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS credentials are not configured.');
      setNotification({
        show: true,
        type: 'error',
        message: 'Contact form is not properly configured. Please contact the administrator.'
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message
      };
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      // Show success notification
      setNotification({
        show: true,
        type: 'success',
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error notification
      setNotification({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const closeNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };
  
  // We don't need the init call with the newer method of sending emails
  // The init() method is used for other features of EmailJS but not required for simple sending
  
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
            } h-[100%] border shadow-lg hover:shadow-xl transition-all duration-300`}>
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full ${
                    darkMode ? 'bg-violet-600 hover:bg-violet-700' : 'bg-teal-600 hover:bg-teal-700'
                  } text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 group hover:scale-105 disabled:opacity-70 disabled:hover:scale-100`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending... <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full ml-2"></div></>
                  ) : (
                    <>Send Message <MessageSquare size={18} className="group-hover:scale-110 transition-transform duration-300" /></>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Notification */}
      {notification.show && (
        <Notification 
          type={notification.type} 
          message={notification.message} 
          onClose={closeNotification} 
        />
      )}
    </section>
  );
};

export default Contact;