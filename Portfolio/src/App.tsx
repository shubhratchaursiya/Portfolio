import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, Award, BookOpen, Code, Trophy, User, Calendar, MapPin, Heart } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'internships', 'certifications', 'projects', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b-4 border-orange-400">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-orange-600">Shubhrat Chaursiya</div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'internships', label: 'Experience' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'achievements', label: 'Achievements' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-yellow-200/30"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 rounded-full animate-bounce ${
                i % 3 === 0 ? 'bg-orange-300' : i % 3 === 1 ? 'bg-yellow-300' : 'bg-blue-300'
              } opacity-60`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-orange-300">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 animate-pulse">
              Shubhrat Chaursiya
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold">
              Information Technology Student & Aspiring Developer
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4">
                <Phone className="w-6 h-6 text-orange-600" />
                <span className="text-gray-800 font-medium">+91 7339893753</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-gray-800 font-medium">shubhratchaursiya2005@gmail.com</span>
              </div>
              <a href="https://github.com/shubhratchaursiya" className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                <Github className="w-6 h-6 text-gray-700" />
                <span className="text-gray-800 font-medium">GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/shubhrat-chaursiya-819672354" className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                <Linkedin className="w-6 h-6 text-blue-700" />
                <span className="text-gray-800 font-medium">LinkedIn Profile</span>
              </a>
            </div>
            
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
            Career Objective
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center font-medium">
              Seeking a challenging position in a reputed organization where I can learn new skills, 
              expand my knowledge and leverage my learnings to contribute meaningfully to innovative projects.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Personal Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>DOB: 08-12-2006</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-orange-500" />
                    <span>Gender: Male</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span>Location: Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-orange-500">🗣️</span>
                    <span>Languages: Hindi, English</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Hobbies & Interests</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-blue-500" />
                    <span>Chess</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-blue-500">🏸</span>
                    <span>Badminton</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 text-blue-500">🎮</span>
                    <span>Playing Online Games</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Education Qualifications
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-blue-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-blue-500 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Bachelor of Technology - Information Technology</h3>
                  <p className="text-gray-700 font-medium mb-2">Arya College of Engineering & IT</p>
                  <p className="text-gray-600 mb-2">Affiliated to Rajasthan Technical University</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold">CGPA: 8.0 (1st Year)</span>
                    <span className="text-gray-500">2023-2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-green-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-green-500 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Senior Secondary Education</h3>
                  <p className="text-gray-700 font-medium mb-2">Decent Public Sr. Sec. School, Baran</p>
                  <p className="text-gray-600 mb-2">Rajasthan Board of Secondary Education</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">68.40%</span>
                    <span className="text-gray-500">2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-orange-500 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <BookOpen className="w-8 h-8 text-orange-500 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Secondary Education</h3>
                  <p className="text-gray-700 font-medium mb-2">Decent Public Sr. Sec. School, Baran</p>
                  <p className="text-gray-600 mb-2">Rajasthan Board of Secondary Education</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold">87%</span>
                    <span className="text-gray-500">2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Technical Skills
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-200">
            <div className="text-center mb-8">
              <Code className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-purple-600">Programming Languages</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['C++', 'C', 'HTML', 'Java', 'Python'].map((skill) => (
                <div key={skill} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                  <span className="font-bold text-purple-700 text-lg">{skill}</span>
                  <div className="text-sm text-gray-600 mt-1">Basic</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internships */}
      <section id="internships" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            Internship Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-green-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">LnB: Learn and Build</h3>
                <p className="text-gray-600 font-medium">Cyber Security Intern</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Duration:</strong> July 1, 2024 - October 1, 2024</p>
                <p className="text-gray-700"><strong>Focus:</strong> Cyber Security</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-blue-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">MicroIT</h3>
                <p className="text-gray-600 font-medium">Java Intern</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Duration:</strong> April 1, 2025 - May 1, 2025</p>
                <p className="text-gray-700"><strong>Focus:</strong> Java Development</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center">Offer Letters Received</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-orange-600 text-lg">MicroIT India</h4>
                <p className="text-gray-600">Cloud Computing - 2025</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-blue-600 text-lg">Internshala</h4>
                <p className="text-gray-600">2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gradient-to-r from-indigo-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-red-500">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-red-600">Cyber Security Project</h3>
              </div>
              <p className="text-gray-600 text-center">Completed comprehensive cybersecurity project focusing on network security and threat analysis.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-green-500">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-green-600">Lead Generation Chatbot</h3>
              </div>
              <p className="text-gray-600 text-center">Created a messenger chatbot using Chatfuel for automated lead generation and customer engagement.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-blue-500">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Student Management System</h3>
              </div>
              <p className="text-gray-600 text-center">Developed a comprehensive student management system using Java with database integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
            Technical Certificates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Oracle Fusion Cloud Applications SCM Certified Foundations Associate - 2025',
              'Oracle Fusion Cloud Applications HCM Certified Foundations Associate - 2025',
              'Oracle Fusion Cloud Applications ERP Certified Foundations Associate - 2025',
              'Oracle Fusion Cloud Applications CX Certified Foundations Associate - 2025',
              'Networking Basics - Cisco Networking Academy - 2025',
              'AI Tools and ChatGPT Certified - be10X - 2025',
              'Data Analytics Masterclass - AcceleratorX - 2025',
              'Certificate of Volunteership - Plasmid Innovation Pvt Ltd. - 2024',
              'Cyber Security certified from LnB, Jaipur - 2024',
              'AI Powered Performance Ads Certification by Google - 2025',
              'Web Development Basics - Physics Wallah - 2025',
              'Basics of Python - UniAthena in partnership with Cambridge International Qualifications, UK - 2025',
              'Power BI Workshop - Wayspire - 2025',
              '534 Day SQL Basics Course - Newton School - 2025',
              'Red Hat Certified System Administrator (RHCSA) - Pursuing'
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm font-medium leading-relaxed">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-gradient-to-r from-pink-100 to-red-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
            Achievements & Competitions
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-600">Sports Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-yellow-500">
                <div className="text-center">
                  <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h4 className="text-xl font-bold text-yellow-600 mb-2">3rd Rank in Chess</h4>
                  <p className="text-gray-700">Baran District Chess Association</p>
                  <p className="text-gray-600">Rajasthan Physical Education Teachers Association, 2021</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-green-500">
                <div className="text-center">
                  <span className="text-6xl block mb-4">🏸</span>
                  <h4 className="text-xl font-bold text-green-600 mb-2">District Level Badminton</h4>
                  <p className="text-gray-700">Secondary/High Secondary School</p>
                  <p className="text-gray-600">Badminton Competition 2017-2018</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Technical Competitions & Events</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Scintillations - 2024 National Level Technical Fest',
                'Goonj - 2024 National Level Technical Fest',
                'CodeRed4.0 - Vivekananda Global University, Jaipur - 2024',
                'Cursed Code - CTF, MAIT, New Delhi - 2025',
                'Logo Making Competition - NIT, Jamshedpur - 2025',
                'Quiz-A-THAN by Micro-IT - 2025',
                'National Project Expo under IEEE, JECRC Foundation - 2025',
                'ACM TCET Code Warz 25, TCET, Mumbai - 2025',
                'National Road Hackathon 2025 - NHAI and HOAI',
                'Cushman & Wakefield Consulting Challenge',
                'Nova Coders Hackathon 2025 - Vision Groups of Institution',
                'Design of India 2025 - Delhi Technological University'
              ].map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex items-start space-x-2">
                    <Trophy className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Shubhrat Chaursiya</h3>
            <p className="text-xl opacity-90">Information Technology Student & Aspiring Developer</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="tel:+917339893753" className="flex items-center space-x-2 hover:text-yellow-200 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 7339893753</span>
            </a>
            <a href="mailto:shubhratchaursiya2005@gmail.com" className="flex items-center space-x-2 hover:text-yellow-200 transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href="https://github.com/shubhratchaursiya" className="flex items-center space-x-2 hover:text-yellow-200 transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/shubhrat-chaursiya-819672354" className="flex items-center space-x-2 hover:text-yellow-200 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div className="border-t border-white/30 pt-8">
            <p className="opacity-75">
              All information provided above is true as per my knowledge.
            </p>
            <p className="opacity-75 mt-2">
              <Heart className="w-4 h-4 inline mr-1" />
              Made with passion | Jaipur, Rajasthan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;