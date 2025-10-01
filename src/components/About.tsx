import { Code, Database, Globe, Palette, Rocket, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Globe,
      title: 'User-Centric Front-End',
      description: 'Designs interfaces that are intuitive and enjoyable for users, focusing on accessibility and performance.'
    },
    {
      icon: Database,
      title: 'Scalable Back-End',
      description: 'Builds robust server architectures that grow with your business and handle millions of requests.'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Implements smart contracts with military-grade security practices and comprehensive audit protocols.'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Leverages cutting-edge frameworks and tools to deliver future-proof solutions that stand the test of time.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Ensures lightning-fast load times and smooth interactions that keep users engaged and satisfied.'
    },
    {
      icon: Palette,
      title: 'Creative Problem Solving',
      description: 'Transforms complex challenges into elegant solutions through innovative thinking and technical expertise.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who bridges the gap between traditional web development and 
              blockchain innovation. With a keen eye for user experience and a deep understanding of 
              modern technologies, I create digital solutions that not only work flawlessly but also 
              delight users and drive business growth.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.title}
                  className="card-premium group hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-card-title">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '10+', label: 'Technologies Mastered' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:bg-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl lg:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;