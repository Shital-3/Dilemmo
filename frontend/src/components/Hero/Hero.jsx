

import { HelpCircle } from 'lucide-react';
import HeroButtons from './HeroButtons';
import HeroStats from './HeroStats';

import heroBg from '../../assets/images/hero/hero-bg.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        {/* Left column: copy */}
        <div className="hero__content">
          <span className="hero__eyebrow">Real Experiences. Better Decisions.</span>

          <h1 className="hero__title">
            Stop guessing.
            <br />
            <span className="hero__title-accent">Learn from real journeys.</span>
          </h1>

          <p className="hero__subtitle">
            Confused about your career decisions? Explore dilemmas faced by
            students like you and learn from their real experiences.
          </p>

          <HeroButtons />
          <HeroStats />
        </div>

        {/* Right column: illustration */}
        <div className="hero__visual">
          <div
            className="hero__scene"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="hero__scene-overlay" />

            <span className="hero__question-bubble">
              <HelpCircle size={20} strokeWidth={2.5} />
            </span>

            {/* <div className="hero__signposts">
              <span className="hero__sign hero__sign--left">DSA Focused</span>
              <span className="hero__sign hero__sign--right">Build Projects</span>
            </div> */}

           
          </div>
        </div>
      </div>
    </section>
  );
}