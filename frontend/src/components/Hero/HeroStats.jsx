import { Sun, Users, Compass } from 'lucide-react';

const STATS = [
  { icon: Sun, value: '850+', label: 'Experiences Shared' },
  { icon: Users, value: '5,000+', label: 'Students Helped' },
  { icon: Compass, value: '120+', label: 'Verified Contributors' },
  { icon: Sun, value: '30+', label: 'Dilemmas Covered' },
];

export default function HeroStats() {
  return (
    <div className="hero__stats">
      {STATS.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div className="hero__stat" key={i}>
            <span className="hero__stat-icon">
              <Icon size={16} strokeWidth={2.2} />
            </span>
            <div className="hero__stat-text">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}