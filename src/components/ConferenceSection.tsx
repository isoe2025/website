import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Target, DollarSign, Users, MapPin } from 'lucide-react';

const ConferenceSection: React.FC = () => {
  // Consolidated 9 research themes (user-provided)
  const themes = [
    'Artificial Intelligence, Machine Learning, and Data Science',
    'Cybersecurity, Blockchain, and Privacy Engineering',
    'Internet of Things (IoT), Edge Computing, and Smart Embedded Systems',
    'Robotics, Mechatronics, and Autonomous Systems',
    '5G/6G Wireless Communication and Networked Systems',
    'VLSI Design, Microelectronics, and Smart Sensors',
    'Computational Modeling, Digital Twins, and Simulation Technologies',
    'Electrical Vehicles and Hydrogen as Fuel',
    'Additive Manufacturing, Materials Engineering, and Advanced Fabrication',
    '', // placeholder slot so the final real item shifts to column 2, row 4
    'Energy, Sustainability, and Thermal Systems Engineering',
  ];

  // `themes` is the consolidated list of 9 items; we'll render them in a 3x3 grid below

  // Function to determine timeline status based on current date
  const getTimelineStatus = (dateString: string) => {
    const currentDate = new Date();
    const eventDate = new Date(dateString);
    
    if (currentDate > eventDate) {
      return 'completed';
    } else if (currentDate.toDateString() === eventDate.toDateString()) {
      return 'current';
    } else {
      return 'upcoming';
    }
  };

  const timeline = [
    { date: '15 October 2025', event: 'Abstract Submission Opens', status: getTimelineStatus('15 October 2025') },
    { date: '5 November 2025', event: 'Abstract Submission Deadline', status: getTimelineStatus('5 November 2025') },
    { date: '12 November 2025', event: 'Abstract Acceptance Notification', status: getTimelineStatus('12 November 2025') },
    { date: '15 November 2025', event: 'Registration Deadline', status: getTimelineStatus('15 November 2025') },
    { date: '21 November 2025', event: 'ISoE 2025 Symposium', status: getTimelineStatus('21 November 2025') }
  ];

  const sponsorshipTiers = [
    {
      tier: 'Platinum',
      amount: '₹50,000',
      benefits: ['Prime exhibition space', 'Logo on all materials', 'Keynote opportunity', 'VIP access to all events']
    },
    {
      tier: 'Gold',
      amount: '₹25,000',
      benefits: ['Premium exhibition space', 'Logo on website and materials', 'Welcome reception access', 'Certificate of appreciation']
    },
    {
      tier: 'Silver',
      amount: '₹10,000',
      benefits: ['Standard exhibition space', 'Logo recognition', 'Conference materials', 'Networking events access']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-24 animate-fade-in">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-2">International Symposium on Engineering</h2>
          <h2 className="text-4xl font-bold text-primary mb-8">(ISoE 2025)</h2>
          <p className="text-xl text-accent font-semibold mb-2">Advances and Innovations in Engineering for a Sustainable Future</p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The International Symposium on Engineering (ISoE 2025), organized by the School of Engineering, 
            Jawaharlal Nehru University (JNU), New Delhi, India, is a premier forum designed to bring together 
            academicians, researchers, industry professionals, and students from diverse engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-16 max-w-5xl mx-auto px-4 sm:px-0">
          <Card className="shadow-card transition-smooth animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-primary">Event Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 py-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow"></div>
                <span>Keynote lectures by renowned experts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
                <span>Paper presentations and project exhibitions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{ animationDelay: '3s' }}></div>
                <span>Networking and collaboration opportunities</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-primary">Venue & Date</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <CalendarDays className="h-5 w-5 text-accent mt-1 animate-glow" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">When</div>
                  <div className="text-lg font-semibold text-primary">21<sup>st</sup> November 2025</div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 animate-glow" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Where</div>
                  <div className="font-medium text-primary">School of Engineering</div>
                  <div className="text-muted-foreground">Jawaharlal Nehru University</div>
                  <div className="text-muted-foreground">New Delhi, India</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="scroll-mt-24 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Research Themes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Abstracts on the following themes related to Advances and Innovations in Engineering for a Sustainable Future are invited
          </p>
          <p className="text-sm text-muted-foreground mb-8" style={{ fontSize: '14px', fontWeight: 'bolder' }}>(Maximum 250-300 words)</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-card transition-smooth animate-fade-in">
            <CardContent className="text-center py-8">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center text-left">
                  {themes.map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      {topic ? (
                        <>
                          <div className="w-2 h-2 bg-accent rounded-full mt-1 animate-glow" style={{ animationDelay: `${idx * 0.02}s` }}></div>
                          <span>{topic}</span>
                        </>
                      ) : (
                        // empty placeholder to occupy the grid cell but render no dot/text
                        <div className="h-6 w-full" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Note encouraging submissions beyond listed themes */}
                <div className="mt-10 text-sm text-muted-foreground text-center max-w-3xl mx-auto">
                  Submissions are not restricted to the themes mentioned; innovative and related topics beyond these areas are equally encouraged.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="scroll-mt-24 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Key Dates</h2>
          <p className="text-muted-foreground mb-8">Important deadlines and milestones for ISoE 2025</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center mb-8 animate-fade-in" 
                 style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`flex-shrink-0 w-4 h-4 rounded-full mr-4 ${
                item.status === 'completed' ? 'bg-green-500' :
                item.status === 'current' ? 'bg-accent animate-glow' :
                'bg-primary animate-glow'
              }`}></div>
              <div className="flex-grow">
                <Card className={`shadow-card hover-scale transition-smooth ${
                  item.status === 'current' ? 'border-accent animate-glow' : 
                  item.status === 'completed' ? 'border-green-200 bg-green-50' : ''
                }`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-primary">{item.event}</h4>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'current' ? 'bg-accent text-accent-foreground animate-glow' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="scroll-mt-24 animate-fade-in">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Sponsorship Opportunities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with us to support engineering excellence and gain valuable exposure to the academic and research community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
          {sponsorshipTiers.map((tier, index) => (
            <Card key={index} className={`shadow-card transition-smooth hover-scale animate-fade-in ${
              tier.tier === 'Platinum' ? 'border-accent animate-glow' : ''
            }`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="text-center py-8">
                <div className="mb-4">
                  <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                  <CardTitle className="text-3xl font-black text-primary tracking-wide uppercase">{tier.tier}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">SPONSOR</p>
                </div>
                <div className="text-4xl font-black text-accent mt-4 tracking-tight">{tier.amount}</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">INR</div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConferenceSection;