import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showAt = window.innerHeight * 0.5; // Show after scrolling 50% of viewport
      setIsVisible(scrollY > showAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-card border border-border rounded-xl shadow-medium p-4 max-w-xs animate-scale-in">
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-sm">Let's work together!</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
          <Button
            onClick={scrollToContact}
            className="w-full btn-hero text-sm"
          >
            Get in Touch
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsExpanded(true)}
          className="rounded-full w-14 h-14 btn-hero shadow-glow animate-pulse hover:animate-none group"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </Button>
      )}
    </div>
  );
};

export default FloatingCTA;