import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xandvawb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });

        // Reset après 3s
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@Yamatoeth',
      href: 'https://github.com/yamatoeth',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/simon',
      href: 'https://linkedin.com/in/simon-lechevalier-5ba743198',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'simon@lechevalier@hotmail.fr',
      href: 'mailto:simon@lechevalier@hotmail.fr',
      color: 'hover:text-red-500'
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      value: '0xyamato',
      href: '#0xyamato',
      color: 'hover:text-indigo-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">
              Let's Work Together!
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can bring your vision to life 
              with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium">
              <h3 className="text-card-title mb-6">Send a Message</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-premium resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full btn-hero ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 animate-scale-in">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-pulse" />
                  <h4 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-card-title mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border hover:bg-card hover:scale-102 transition-all duration-300 group ${link.color}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{link.label}</div>
                          <div className="text-sm text-muted-foreground">{link.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="card-premium bg-gradient-primary text-primary-foreground border-primary/20">
                <h3 className="text-xl font-display font-semibold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Let's transform your ideas into reality with modern technology 
                  and innovative solutions that drive results.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="outline" 
                    className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Portfolio
                  </Button>
                  <Button 
                    variant="outline" 
                    className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10"
                    onClick={() => window.open('https://calendly.com/simon', '_blank')}
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;