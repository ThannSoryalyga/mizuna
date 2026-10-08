import React from 'react';
import { Crest, SectionIntro } from '../components/SiteElements';

export function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="page-container about__grid">
        <div className="about__image-wrap">
          <img className="about__image" src="/PET06488.png" alt="Mizuna FC players huddled together on the futsal court" loading="lazy" />
          <div className="about__image-caption"><span>EST.</span> 2020 <i /> PHNOM PENH</div>
          <div className="about__vertical">MORE THAN THE GAME</div>
        </div>
        <div className="about__copy">
          <SectionIntro label="02 / Who we are" title={<>A club with<br />a bigger purpose.</>}>
            Founded in 2020, Mizuna FC is a Phnom Penh-based futsal club competing at the highest levels of the Cambodian Futsal League.
          </SectionIntro>
          <p className="body-copy">We create opportunities through sport, education, and community activities — developing people on and off the court.</p>
          <a className="text-link" href="#vision">Discover our vision <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="vision section-pad" id="vision">
      <div className="page-container">
        <SectionIntro label="03 / Vision & mission" title="A clear vision. A shared mission." light>
          Sport can open doors. Our mission is to make those opportunities meaningful and lasting.
        </SectionIntro>
        <div className="vision__grid">
          <article className="vision-card vision-card--vision">
            <span className="vision-card__number">01</span>
            <p className="eyebrow">Our vision</p>
            <h3>“Turning Dreams<br />into Reality.”</h3>
            <p>Create opportunities for aspiring individuals to pursue and achieve their dreams through sport.</p>
            <span className="vision-card__mark" aria-hidden="true">✳</span>
          </article>
          <article className="vision-card vision-card--mission">
            <span className="vision-card__number">02</span>
            <p className="eyebrow">Our mission</p>
            <h3>Build a future<br />we can share.</h3>
            <ul>
              <li><span>01</span> Develop elite players</li>
              <li><span>02</span> Bridge and connect communities</li>
              <li><span>03</span> Build meaningful corporate partnerships</li>
            </ul>
            <span className="vision-card__mark" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function WhatWeDoSection() {
  return (
    <section className="what-we-do section-pad" id="what-we-do">
      <div className="page-container">
        <SectionIntro label="04 / What we do" title="Competition meets opportunity." />
        <div className="what-we-do__grid">
          <article className="pillar-card">
            <div className="pillar-card__icon" aria-hidden="true">01<span>↗</span></div>
            <p className="eyebrow">On the court</p>
            <h3>Competition</h3>
            <p>Competing in the Cambodian Futsal League, football tournaments, and premier tournaments.</p>
            <a href="#competition" aria-label="Learn about competition">Explore competition <span aria-hidden="true">↗</span></a>
          </article>
          <article className="pillar-card pillar-card--red">
            <div className="pillar-card__icon" aria-hidden="true">02<span>↗</span></div>
            <p className="eyebrow">Beyond the game</p>
            <h3>Education</h3>
            <p>Specialized football training that supports youth development and personal growth.</p>
            <a href="#youth" aria-label="Learn about youth development">Explore development <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CompetitionSection() {
  return (
    <section className="competition section-pad" id="competition">
      <div className="page-container competition__grid">
        <div className="competition__copy">
          <SectionIntro label="06 / Competition" title={<>Made for<br />the big moments.</>}>
            Mizuna FC competes in the official Cambodian Futsal League and other football tournaments.
          </SectionIntro>
          <p className="body-copy">A commitment to performance, preparation, and continuous improvement on the court.</p>
          <a className="text-link" href="#partnership">Back the journey <span aria-hidden="true">↗</span></a>
        </div>
        <div className="competition__visual">
          <div className="competition__visual-photo" />
          <div className="competition__label">CAMBODIAN<br /><strong>FUTSAL</strong><br />LEAGUE</div>
          <div className="competition__badge"><Crest small /><span>PLAY<br />TOGETHER</span></div>
          <span className="competition__side">COMPETE · IMPROVE · REPEAT</span>
        </div>
      </div>
    </section>
  );
}

export function YouthSection() {
  return (
    <section className="youth section-pad" id="youth">
      <div className="page-container youth__grid">
        <div className="youth__visual">
          <img src="/PET06490.png" alt="A Mizuna FC youth player on the court" loading="lazy" />
          <div className="youth__stamp"><span>THE NEXT</span> GENERATION <i>✳</i></div>
        </div>
        <div className="youth__copy">
          <SectionIntro label="07 / Youth development" title={<>The next generation<br />starts here.</>}>
            Structured coaching clinics and specialized football training help young talent build skills and confidence.
          </SectionIntro>
          <div className="youth__list">
            <div><span>01</span><strong>Training</strong><small>Specialized football training</small></div>
            <div><span>02</span><strong>Coaching</strong><small>Structured coaching clinics</small></div>
            <div><span>03</span><strong>Growth</strong><small>Talent development and personal growth</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
