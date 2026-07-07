

import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="hero__buttons">
      <button className="hero__btn hero__btn--primary">
        Explore Dilemmas <ArrowRight size={16} />
      </button>
      <button className="hero__btn hero__btn--outline">Share Your Experience</button>
    </div>
  );
}