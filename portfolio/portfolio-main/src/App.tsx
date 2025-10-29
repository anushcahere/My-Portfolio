import { Github, Linkedin, Instagram, Youtube, Mail, Download, ExternalLink, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900' : 'bg-gradient-to-br from-stone-50 via-white to-amber-50/30'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-stone-700 text-amber-300' : 'bg-white text-stone-800'}`}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-amber-100 to-stone-200 shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/kk.jpg"
                  alt="Anushka Choubey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                  Anushka Choubey
                </h1>
                <div className={`flex flex-wrap justify-center lg:justify-start gap-2 text-sm md:text-base transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  <span>Final Year CSE Student</span>
                  <span className={darkMode ? 'text-stone-500' : 'text-stone-400'}>•</span>
                  <span>Frontend Developer</span>
                  <span className={darkMode ? 'text-stone-500' : 'text-stone-400'}>•</span>
                  <span>Creative Designer</span>
                </div>
              </div>

              <p className={`text-lg md:text-xl max-w-2xl font-light leading-relaxed transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                I love building clean, user-friendly web experiences and exploring machine learning.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/1VpUhXOwWK_yC22ZqNIyS2_oRq_lKV6G8/view?usp=sharing"
                  target='_blank'
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${darkMode ? 'bg-amber-500 text-stone-900 hover:bg-amber-400' : 'bg-stone-800 text-white hover:bg-stone-700'}`}
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${darkMode ? 'bg-stone-700 text-stone-100 hover:bg-stone-600' : 'bg-white text-stone-800 hover:bg-stone-50'}`}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 px-6 transition-colors ${darkMode ? 'bg-stone-800/50' : 'bg-white/50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-light mb-12 text-center transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>About Me</h2>
          <div className={`rounded-3xl p-8 md:p-12 shadow-lg space-y-6 transition-colors ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
            <p className={`text-lg leading-relaxed transition-colors ${darkMode ? 'text-stone-200' : 'text-stone-700'}`}>
              I'm a passionate final-year Computer Science Engineering student with a deep interest in creating
              beautiful and functional web applications. My journey in tech has been driven by curiosity and a
              love for design aesthetics combined with clean code.
            </p>
            <p className={`text-lg leading-relaxed transition-colors ${darkMode ? 'text-stone-200' : 'text-stone-700'}`}>
              When I'm not coding, I enjoy exploring the creative side of technology through video editing
              and design work. I believe that great user experiences come from the perfect blend of technical
              excellence and thoughtful design.
            </p>
            <div className={`pt-6 border-t transition-colors ${darkMode ? 'border-stone-600' : 'border-stone-200'}`}>
              <h3 className={`text-xl font-medium mb-3 transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Education</h3>
              <p className={`text-lg transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                B.Tech in Computer Science Engineering
                <span className={`block text-base mt-1 transition-colors ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>Final Year</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-light mb-12 text-center transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-6xl">📈</div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className={`text-2xl font-medium transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>StockView</h3>
                <p className={`leading-relaxed transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  Real-time stock analysis web application with interactive charts and market insights.
                </p>
                <a
                  href="https://stockview-pearl.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors font-medium ${darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-stone-800 hover:text-stone-600'}`}
                >
                  View Live
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <div className="h-64 bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
                <div className="text-6xl">🌤️</div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className={`text-2xl font-medium transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>WeatherWiser</h3>
                <p className={`leading-relaxed transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  Weather prediction web app with accurate forecasts and beautiful visualizations.
                </p>
                <a
                  href="https://weatherwiser.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 transition-colors font-medium ${darkMode ? 'text-amber-400 hover:text-amber-300' : 'text-stone-800 hover:text-stone-600'}`}
                >
                  View Live
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 transition-colors ${darkMode ? 'bg-stone-800/50' : 'bg-white/50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-light mb-12 text-center transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className={`rounded-3xl p-8 shadow-lg space-y-4 transition-colors ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-medium mb-6 transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Machine Learning'].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${darkMode ? 'bg-stone-600 text-stone-200 hover:bg-stone-500' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className={`rounded-3xl p-8 shadow-lg space-y-4 transition-colors ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-medium mb-6 transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'C++'].map((lang) => (
                  <span
                    key={lang}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${darkMode ? 'bg-stone-600 text-stone-200 hover:bg-stone-500' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className={`rounded-3xl p-8 shadow-lg space-y-4 transition-colors ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-medium mb-6 transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['GitHub', 'VSCode', 'Canva', 'Figma'].map((tool) => (
                  <span
                    key={tool}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${darkMode ? 'bg-stone-600 text-stone-200 hover:bg-stone-500' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Editing Tools */}
            <div className={`rounded-3xl p-8 shadow-lg space-y-4 transition-colors ${darkMode ? 'bg-stone-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-medium mb-6 transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Video Editing Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Adobe After Effects', 'Premiere Pro'].map((tool) => (
                  <span
                    key={tool}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${darkMode ? 'bg-stone-600 text-stone-200 hover:bg-stone-500' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className={`text-4xl md:text-5xl font-light transition-colors ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Let's Connect</h2>
            <p className={`text-lg max-w-2xl mx-auto transition-colors ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:anushkachoubey001@gmail.com"
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-stone-700 hover:bg-stone-600' : 'bg-white hover:bg-stone-50'}`}
            >
              <Mail size={20} className={darkMode ? 'text-amber-400' : 'text-stone-600'} />
              <span className={darkMode ? 'text-stone-100' : 'text-stone-800'}>Email</span>
            </a>
            <a
              href="https://github.com/anushcahere"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-stone-700 hover:bg-stone-600' : 'bg-white hover:bg-stone-50'}`}
            >
              <Github size={20} className={darkMode ? 'text-amber-400' : 'text-stone-600'} />
              <span className={darkMode ? 'text-stone-100' : 'text-stone-800'}>GitHub</span>
            </a>
            <a
              href="http://www.linkedin.com/in/anushka-choubey"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-stone-700 hover:bg-stone-600' : 'bg-white hover:bg-stone-50'}`}
            >
              <Linkedin size={20} className={darkMode ? 'text-amber-400' : 'text-stone-600'} />
              <span className={darkMode ? 'text-stone-100' : 'text-stone-800'}>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/anushkachoubeyy/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-stone-700 hover:bg-stone-600' : 'bg-white hover:bg-stone-50'}`}
            >
              <Instagram size={20} className={darkMode ? 'text-amber-400' : 'text-stone-600'} />
              <span className={darkMode ? 'text-stone-100' : 'text-stone-800'}>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@anushkachoubeyy"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-stone-700 hover:bg-stone-600' : 'bg-white hover:bg-stone-50'}`}
            >
              <Youtube size={20} className={darkMode ? 'text-amber-400' : 'text-stone-600'} />
              <span className={darkMode ? 'text-stone-100' : 'text-stone-800'}>YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
