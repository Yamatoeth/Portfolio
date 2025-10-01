import { Coins, Shield, Zap, TrendingUp, Code, Globe } from 'lucide-react';

const Web3Achievements = () => {
  const achievements = [
    {
      icon: Coins,
      title: 'DeFi Protocol Deployed',
      description: 'Launched a decentralized exchange with $2M+ TVL',
      metric: '$2M+ TVL',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Smart Contracts Audited',
      description: 'Security-first approach with zero vulnerabilities',
      metric: '15+ Audits',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'Gas Optimization',
      description: 'Reduced transaction costs by 60% through optimization',
      metric: '60% Savings',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'NFT Marketplace',
      description: 'Built marketplace with 10K+ active users',
      metric: '10K+ Users',
      color: 'text-purple-500'
    },
    {
      icon: Code,
      title: 'Cross-Chain Solutions',
      description: 'Interoperability across 5+ blockchain networks',
      metric: '5+ Chains',
      color: 'text-orange-500'
    },
    {
      icon: Globe,
      title: 'DAO Governance',
      description: 'Democratic decision-making platform for 1000+ members',
      metric: '1000+ Members',
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="web3" className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-gradient mb-6">
              Web3 Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pioneering the decentralized web with innovative blockchain solutions, 
              smart contracts, and DeFi protocols that push the boundaries of what's possible.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.title}
                  className="card-premium group hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-card-title text-sm leading-tight">{achievement.title}</h3>
                        <span className={`text-sm font-bold ${achievement.color}`}>
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Smart Contracts' },
              { number: '$5M+', label: 'Total Value Locked' },
              { number: '99.9%', label: 'Uptime' },
              { number: '0', label: 'Security Breaches' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl lg:text-3xl font-display font-bold text-gradient mb-2">
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

export default Web3Achievements;