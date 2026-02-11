import { useState } from 'react';
import { personalInfo, education, experience, skills, creativeProjects, writingSamples } from './content';
import { Mail, Phone, MapPin, Download, ExternalLink, ChevronDown, Menu, X, Calendar, Tag } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-linen text-teal font-sans selection:bg-salmon/30 selection:text-teal">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-linen/90 backdrop-blur-sm z-50 border-b border-ash/30 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-display font-bold tracking-tight text-teal">
            E<span className="text-mauve">.</span> Engstrom
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-teal/80">
            {['About', 'Experience', 'Writing', 'Education', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-mauve transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-linen border-b border-ash/30 shadow-lg py-4 flex flex-col items-center gap-4">
            {['About', 'Experience', 'Writing', 'Education', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-teal font-medium py-2 hover:text-mauve"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 relative overflow-hidden">
        {/* Placeholder for workspace photo - Decorative abstract background */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-10">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#A4778B" d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,77.4,-45.3C84.7,-32.1,87.6,-16,85.5,-0.9C83.5,14.3,76.5,28.6,68.2,42.1C59.9,55.6,50.3,68.3,37.5,74.7C24.7,81.1,8.7,81.1,-6.6,77.2C-21.9,73.4,-36.5,65.7,-49.2,55.2C-61.9,44.7,-72.7,31.4,-78.2,16.2C-83.7,1,-83.8,-16.2,-76.4,-30.4C-69,-44.6,-54,-55.8,-39.4,-62.4C-24.8,-69,-12.4,-71.1,1.5,-73.7C15.4,-76.4,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 opacity-10">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#9BC1BC" d="M38.1,-65.4C49.1,-58.8,57.5,-48.3,64.3,-36.7C71.1,-25.1,76.2,-12.6,76.6,0.2C77,13,72.7,26,65.6,37.3C58.5,48.6,48.7,58.2,37.1,65.1C25.5,72,12.7,76.3,-0.5,77.1C-13.7,77.9,-27.3,75.2,-39.5,68.9C-51.7,62.6,-62.4,52.8,-69.1,40.9C-75.8,29.1,-78.5,15.2,-77.8,1.6C-77.1,-12.1,-73,-25.5,-65.5,-36.9C-57.9,-48.2,-47,-57.5,-35.1,-63.5C-23.2,-69.5,-11.6,-72.2,0.6,-73.2C12.8,-74.2,25.6,-73.5,38.1,-65.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-ash/20 text-teal text-xs font-bold tracking-[0.2em] uppercase">
            Now Accepting New Projects
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black text-teal tracking-tight mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-mauve mb-10 font-medium tracking-wide max-w-2xl mx-auto italic">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-teal text-linen rounded-full font-bold hover:bg-teal/90 transition-all shadow-lg hover:shadow-teal/20 transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
            <a 
              href="/Eve_Engstrom_Resume.pdf" 
              target="_blank"
              className="px-10 py-4 bg-transparent text-teal border-2 border-teal rounded-full font-bold hover:bg-teal hover:text-linen transition-all flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center text-ash animate-bounce mt-12">
            <ChevronDown size={40} />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-ash/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-square bg-ash/30 rounded-2xl overflow-hidden relative group">
              {/* Photo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-teal/40 font-display italic text-lg p-8 text-center">
                Photo of my creative workspace coming soon
              </div>
              <div className="absolute inset-0 border-4 border-mauve/20 m-4 rounded-xl group-hover:border-mauve/40 transition-colors"></div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-display font-bold text-teal mb-8 relative inline-block">
                About Me
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-salmon rounded-full"></div>
              </h2>
              <p className="text-lg text-teal/90 leading-relaxed font-medium">
                {personalInfo.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-linen">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-teal mb-16 text-center">Professional Journey</h2>
          <div className="space-y-16">
            {experience.map((job, index) => (
              <div key={index} className="relative group">
                <div className="md:grid md:grid-cols-4 md:gap-12">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <p className="text-xs font-black text-salmon uppercase tracking-[0.2em] mb-1">{job.period}</p>
                    <p className="text-sm font-bold text-mauve flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </p>
                  </div>
                  <div className="md:col-span-3 relative bg-ash/5 p-8 rounded-2xl border border-ash/20 hover:border-mauve/40 transition-all hover:shadow-xl hover:shadow-mauve/5">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="p-3 rounded-xl bg-linen text-salmon shadow-sm border border-ash/10">
                          <job.icon size={24} />
                       </div>
                       <div>
                          <h3 className="text-2xl font-display font-bold text-teal">{job.role}</h3>
                          <p className="text-lg font-medium text-mauve">{job.company}</p>
                       </div>
                    </div>
                    <ul className="space-y-3">
                      {job.description.map((point, i) => (
                        <li key={i} className="flex gap-3 text-teal/80 leading-relaxed text-sm font-medium">
                          <span className="text-salmon mt-1 flex-shrink-0">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-24 bg-ash/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-teal mb-4">Writing Samples</h2>
            <p className="text-mauve font-medium max-w-2xl mx-auto italic">
              A collection of my recent work in technical writing, marketing, and editorial content. Updated quarterly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {writingSamples.map((sample, index) => (
              <div key={index} className="bg-linen p-8 rounded-2xl border border-ash/30 hover:border-salmon/40 transition-all group flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-mauve/10 text-mauve text-[10px] font-black uppercase tracking-widest rounded-full border border-mauve/20">
                    {sample.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-ash text-xs font-bold">
                    <Calendar size={14} />
                    {sample.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-bold text-teal mb-3 group-hover:text-mauve transition-colors">
                  {sample.title}
                </h3>
                
                <p className="text-sm text-teal/70 font-medium leading-relaxed mb-6 flex-grow">
                  {sample.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {sample.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 text-[10px] font-bold text-ash uppercase tracking-wider">
                      <Tag size={10} className="text-salmon" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {sample.link !== '#' && (
                  <a 
                    href={sample.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal font-bold text-sm hover:text-salmon transition-colors mt-auto pt-4 border-t border-ash/10"
                  >
                    View Sample <ExternalLink size={16} />
                  </a>
                )}
                {sample.link === '#' && (
                  <div className="text-ash/50 italic text-xs font-medium mt-auto pt-4 border-t border-ash/10">
                    Sample available upon request
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-teal text-linen rounded-3xl max-w-lg">
              <p className="text-sm font-medium leading-relaxed">
                Need to see more specific examples? I have a comprehensive portfolio of technical documentation, 
                grant proposals, and editorial guides available for review during the interview process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-ash/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-teal mb-16 border-b-2 border-mauve/20 pb-4 inline-block">Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-linen p-8 rounded-2xl border border-ash/30 hover:transform hover:-translate-y-2 transition-all shadow-sm">
                <div className="text-5xl font-display font-black text-ash/20 mb-6">0{index + 1}</div>
                <h3 className="text-xl font-display font-bold text-teal mb-2">{edu.school}</h3>
                <p className="text-salmon font-bold text-sm uppercase tracking-wider mb-3">{edu.degree}</p>
                <p className="text-xs font-black text-mauve mb-4">{edu.year}</p>
                <p className="text-sm text-teal/70 font-medium leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Creative Section */}
      <section id="skills" className="py-24 bg-teal text-linen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-display font-bold mb-12 flex items-center gap-4">
                Core Expertise
                <div className="h-px flex-grow bg-ash/30"></div>
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="px-5 py-2.5 bg-linen/10 rounded-full text-xs font-bold tracking-wider uppercase border border-linen/20 hover:border-salmon hover:text-salmon transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-display font-bold mb-12 flex items-center gap-4">
                Creative Pursuit
                <div className="h-px flex-grow bg-ash/30"></div>
              </h2>
              {creativeProjects.map((project, index) => (
                <div key={index} className="bg-linen/5 p-8 rounded-3xl border border-linen/10 hover:border-salmon/50 transition-all group">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-salmon/20 rounded-2xl text-salmon group-hover:scale-110 transition-transform">
                      <project.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                      <p className="text-ash leading-relaxed mb-6 font-medium">{project.description}</p>
                      {project.link !== '#' && (
                        <a href={project.link} className="inline-flex items-center gap-2 text-salmon hover:text-salmon/80 font-bold text-sm tracking-widest uppercase">
                          Listen Now <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-linen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold text-teal mb-8">Let's Create Something Together</h2>
          <p className="text-xl text-mauve mb-16 font-medium">
            I'm currently seeking opportunities in technical writing and editing where I can make a meaningful impact.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center gap-4 p-8 bg-ash/5 rounded-3xl border border-ash/20 hover:border-salmon transition-all group">
              <div className="p-4 bg-linen rounded-2xl text-teal group-hover:text-salmon shadow-sm transition-colors">
                <Mail size={32} />
              </div>
              <span className="text-teal font-bold text-lg">{personalInfo.email}</span>
              <span className="text-xs font-black text-mauve uppercase tracking-widest">Email Me</span>
            </a>
            
            <div className="flex flex-col items-center gap-4 p-8 bg-ash/5 rounded-3xl border border-ash/20 hover:border-salmon transition-all group">
              <div className="p-4 bg-linen rounded-2xl text-teal group-hover:text-salmon shadow-sm transition-colors">
                <Phone size={32} />
              </div>
              <span className="text-teal font-bold text-lg">{personalInfo.phone}</span>
              <span className="text-xs font-black text-mauve uppercase tracking-widest">Call Me</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-mauve font-bold tracking-widest uppercase text-xs">
            <MapPin size={16} className="text-salmon" />
            {personalInfo.location}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-ash/10 text-center">
        <div className="max-w-4xl mx-auto px-6 border-t border-ash/20 pt-12">
          <p className="font-display font-bold text-teal mb-2 italic">Eve Engstrom</p>
          <p className="text-mauve/60 text-xs font-bold tracking-widest uppercase">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;