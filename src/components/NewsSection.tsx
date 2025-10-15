import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  posterUrl?: string;
  downloadUrl?: string;
  downloadFileName?: string;
  isNew?: boolean;
}

const NewsSection: React.FC = () => {
  const [hasShownNotification, setHasShownNotification] = useState(false);

  // Sample news items - in production, this would come from a backend/database
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'ISoE 2025 Call for Papers & Presentations',
      date: '15 October 2025',
      description: 'We are excited to announce that abstract submissions are now open for ISoE 2025. Submit your innovative research in engineering and sustainable technologies.',
      posterUrl: '\callforpapaper.svg',
      downloadUrl: '#',
      isNew: false
    },
    {
      id: '2',
      title: 'ISoE 2025 Brochure Released',
      date: '10 October 2025',
      description: 'Brochure for the ISoE 2025 is now available. Download it to explore the event highlights, keynote speakers, and session topics.',
      posterUrl: '\callforpapaper.svg',
      downloadUrl: '#',
      isNew: false
    }

  ];

  // Check for new news items and show notification
  useEffect(() => {
    const hasNewItems = newsItems.some(item => item.isNew);
    
    if (hasNewItems && !hasShownNotification) {
      toast({
        title: "New Updates Available! 🎉",
        description: "Check out the latest news and announcements for ISoE 2025.",
        duration: 5000,
      });
      setHasShownNotification(true);
    }
  }, []);

  const handleDownload = (url: string, fileName: string) => {
    // In production, this would trigger actual file download
    toast({
      title: "Download Started",
      description: `Downloading ${fileName}...`,
      duration: 3000,
    });
    // Actual download logic would go here
    // window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section id="news" className="scroll-mt-24 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Event Updates & News</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest announcements, updates, and important information about ISoE 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className={`shadow-card transition-smooth hover-scale animate-fade-in relative overflow-hidden ${
                item.isNew ? 'border-accent animate-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase animate-glow flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    New
                  </div>
                </div>
              )}
              
              {item.posterUrl && (
                <div className="w-full h-48 overflow-hidden bg-secondary">
                  <img 
                    src={item.posterUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-primary text-xl">{item.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {item.downloadUrl && item.downloadFileName && (
                  <Button 
                    variant="outline"
                    className="w-full group"
                    onClick={() => handleDownload(item.downloadUrl!, item.downloadFileName!)}
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download Details
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Message */}
        <div className="mt-12 text-center">
          <Card className="inline-block shadow-card">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Stay Updated:</span> Check this section regularly for the latest announcements and important updates about ISoE 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;