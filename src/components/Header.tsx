import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import soeLogo from '@/assets/soe_logo.png';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'conference', label: 'Conference' },
    { id: 'about', label: 'About Us' },
    { id: 'registration', label: 'Registration' },
    { id: 'news', label: 'News' }
  ];

  const conferenceSubSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'themes', label: 'Themes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'sponsorship', label: 'Sponsorship' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (activeTab !== 'conference') {
      onTabChange('conference');
      // Wait for the tab to change before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-card border-b shadow-card sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-12 h-20 sm:h-24 md:h-28">
          {/* SOE Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-shrink-0">
            <img src={soeLogo} alt="School of Engineering Logo" className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain" />
            <div className="min-w-0">
              <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-primary animate-fade-in leading-tight">
                International Symposium on Engineering
              </h1>
              <p className="text-xs sm:text-sm text-accent font-medium">ISoE 2025 • JNU New Delhi</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4">
            {tabs.map((tab) => (
              <div key={tab.id} className="relative">
                {tab.id === 'conference' ? (
                  <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-smooth flex items-center gap-1 whitespace-nowrap text-sm lg:text-base ${
                          activeTab === tab.id
                            ? 'bg-primary text-primary-foreground shadow-elegant'
                            : 'text-foreground hover:text-primary hover:bg-secondary'
                        }`}
                      >
                        {tab.label}
                        <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-48 bg-card border border-border shadow-card z-50 animate-scale-in"
                      align="start"
                    >
                      {conferenceSubSections.map((section) => (
                        <DropdownMenuItem
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="cursor-pointer hover:bg-secondary focus:bg-secondary transition-smooth hover-scale"
                        >
                          {section.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    onClick={() => onTabChange(tab.id)}
                    className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-smooth whitespace-nowrap text-sm lg:text-base ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground shadow-elegant'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                    }`}
                  >
                    {tab.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex-shrink-0 relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2 hover:bg-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
            
            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50 animate-scale-in">
                <div className="p-4">
                  <div className="pb-3 border-b border-border">
                    <h3 className="text-lg font-bold text-primary">ISoE 2025 Menu</h3>
                    <p className="text-sm text-muted-foreground">Navigate through the symposium</p>
                  </div>
                  
                  <nav className="py-3 space-y-1">
                    {tabs.map((tab) => (
                      <div key={tab.id} className="space-y-1">
                        {tab.id === 'conference' ? (
                          <div>
                            <Button
                              variant={activeTab === tab.id ? "default" : "ghost"}
                              className="w-full justify-start text-left font-medium"
                              onClick={() => {
                                onTabChange(tab.id);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {tab.label}
                            </Button>
                            {activeTab === 'conference' && (
                              <div className="ml-3 space-y-1 mt-1">
                                {conferenceSubSections.map((section) => (
                                  <Button
                                    key={section.id}
                                    variant="ghost"
                                    size="sm"
                                    className="w-full justify-start text-left text-sm"
                                    onClick={() => {
                                      scrollToSection(section.id);
                                      setIsMobileMenuOpen(false);
                                    }}
                                  >
                                    {section.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Button
                            variant={activeTab === tab.id ? "default" : "ghost"}
                            className="w-full justify-start text-left font-medium"
                            onClick={() => {
                              onTabChange(tab.id);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {tab.label}
                          </Button>
                        )}
                      </div>
                    ))}
                  </nav>
                  
                  <div className="pt-3 border-t border-border">
                    <div className="text-xs text-muted-foreground text-center">
                      <p>School of Engineering</p>
                      <p>Jawaharlal Nehru University</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Backdrop */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;