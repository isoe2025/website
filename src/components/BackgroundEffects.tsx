import React, { useEffect, useState } from 'react';

const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-background via-secondary/20 to-background"></div>
      
      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-30"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-accent/20 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-primary/15 rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-32 w-8 h-8 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-primary/20 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Mouse Follow Light Effect */}
      <div 
        className="fixed -z-10 w-96 h-96 bg-gradient-radial from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Pulsing Accent Dots */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-accent rounded-full animate-glow opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-glow opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-3/4 w-1.5 h-1.5 bg-accent rounded-full animate-glow opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>
    </>
  );
};

export default BackgroundEffects;