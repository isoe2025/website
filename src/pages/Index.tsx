import React, { useState } from 'react';
import Header from '@/components/Header';
import ConferenceSection from '@/components/ConferenceSection';
import AboutSection from '@/components/AboutSection';
import RegistrationSection from '@/components/RegistrationSection';
import NewsSection from '@/components/NewsSection';
import BackgroundEffects from '@/components/BackgroundEffects';
import { Toaster } from '@/components/ui/toaster';
import collegeLogo1 from '@/assets/college-logo-1.png';

const Index = () => {
  const [activeTab, setActiveTab] = useState('conference');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Scroll to top of the page when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'conference':
        return <ConferenceSection />;
      case 'about':
        return <AboutSection />;
      case 'registration':
        return <RegistrationSection />;
      case 'news':
        return <NewsSection />;
      default:
        return <ConferenceSection />;
    }
  };

  return (
    <div className="min-h-screen floating-particles relative">
      <BackgroundEffects />
      <Toaster />
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="animate-fade-in">
        {renderActiveSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-white py-16 mt-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-48 translate-x-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {/* ISoE 2025 Section */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <div className="w-16 h-1 bg-accent mb-4"></div>
                <h3 className="text-2xl font-black text-accent mb-4 tracking-wide uppercase">ISoE 2025</h3>
                <p className="text-sm font-medium text-white/90 leading-relaxed">
                  International Symposium on Engineering - Advances and Innovations in Engineering for a Sustainable Future
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={collegeLogo1} alt="College Logo" className="w-16 h-16 object-contain" />
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide">Organized by</p>
                  <p className="text-sm font-medium text-white/90">JNU School of Engineering</p>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <div className="w-16 h-1 bg-accent mb-4"></div>
                <h4 className="text-2xl font-black text-accent mb-6 tracking-wide uppercase">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={() => handleTabChange('conference')} 
                      className="group flex items-center text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Conference</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleTabChange('about')} 
                      className="group flex items-center text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">About Us</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleTabChange('registration')} 
                      className="group flex items-center text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Registration</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleTabChange('news')} 
                      className="group flex items-center text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">News & Updates</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6">
                <div className="w-16 h-1 bg-accent mb-4"></div>
                <h4 className="text-2xl font-black text-accent mb-6 tracking-wide uppercase">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-white">School of Engineering, JNU</p>
                      <p className="text-xs text-white/70">Jawaharlal Nehru University</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold text-white">New Delhi, India</p>
                      <p className="text-xs text-white/70">110067</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a
                        href="mailto:isoe.jnu@gmail.com"
                        className="text-sm font-semibold text-white underline transition-colors duration-200 ease-in-out hover:text-accent focus:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded"
                        aria-label="Email ISoE contact"
                      >
                        isoe.jnu@gmail.com
                      </a>
                      <p className="text-xs text-white/70">Primary Contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <img src={collegeLogo1} alt="College Logo" className="h-16 w-16 object-contain" />
                <p className="text-xs text-white/60 font-medium">Powered by JNU School of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
