import React from 'react';
import { Crest, PartnerPackageCard, PartnershipTierCard, SectionIntro } from '../components/SiteElements';
import { packages, partnershipTiers } from '../data/siteContent';

export function PartnershipSection() {
  return (
    <section className="partnership section-pad" id="partnership">
      <div className="page-container">
        <div className="partnership__heading">
          <SectionIntro label="10 / Partnership opportunities" title={<>Find your place<br />in our story.</>}>
            A partnership shaped around your brand and the future we can build together.
          </SectionIntro>
          <p className="partnership__note">Four ways to partner<br /><span>One shared purpose ↘</span></p>
        </div>
        <div className="tier-grid">
          {partnershipTiers.map((tier) => <PartnershipTierCard tier={tier} key={tier.title} />)}
        </div>
      </div>
    </section>
  );
}

export function WhyPartnerSection() {
  const benefits = [
    ['Brand visibility', 'Reach audiences on and off the court.'],
    ['Community engagement', 'Connect directly with local communities.'],
    ['Sports connection', 'Build meaningful relationships through football and futsal.'],
    ['Professional management', 'Work with a club committed to professional management standards.']
  ];

  return (
    <section className="why-partner section-pad" id="why-partner">
      <div className="page-container why-partner__grid">
        <div className="why-partner__intro">
          <SectionIntro label="11 / Why partner with Mizuna FC?" title={<>Good for the<br />game. Good for<br />your brand.</>}>
            A partnership with Mizuna FC connects your brand to sport, people, and possibility.
          </SectionIntro>
        </div>
        <div className="why-list">
          {benefits.map(([title, description], index) => (
            <article key={title}>
              <span>{`0${index + 1}`}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrowthSection() {
  const priorities = [
    ['Competitive growth', 'Strengthen league performance.'],
    ['Education', 'Scale football initiatives.'],
    ['International partnerships', 'Build beyond borders.']
  ];

  return (
    <section className="growth section-pad" id="growth">
      <div className="page-container">
        <div className="growth__heading">
          <SectionIntro label="12 / Growth strategy · 2026–2027" title="Ambition, built together." light>
            A shared direction for competitive progress, education, and international connection.
          </SectionIntro>
          <div className="growth__years"><span>2026</span><i /> <span>2027</span></div>
        </div>
        <div className="growth__roadmap">
          {priorities.map(([label, detail], index) => (
            <article key={label}>
              <span>{`0${index + 1}`}</span>
              <div><p className="eyebrow">{label}</p><h3>{detail}</h3></div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
        <p className="growth__footnote">Shared success is built with strategic partners, step by step.</p>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="page-container">
        <div className="contact__heading">
          <SectionIntro label="13 / Partner with us" title={<>Let’s build the<br />future together.</>}>
            Partnership packages can be customized to fit your marketing objectives.
          </SectionIntro>
          <a className="button button--dark" href="mailto:chanvathana97@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
        <div className="package-grid">
          {packages.map((item) => <PartnerPackageCard item={item} key={item.name} />)}
        </div>
        <div className="contact__details">
          <div className="contact__founder">
            <p className="eyebrow">Your point of contact</p><h3>CHAN Vathana</h3><p>Founder, Mizuna FC</p>
          </div>
          <div className="contact__links">
            <a href="mailto:chanvathana97@gmail.com"><span>Email</span>chanvathana97@gmail.com <i aria-hidden="true">↗</i></a>
            <a href="https://t.me/chanvathana_22" target="_blank" rel="noreferrer"><span>Telegram</span>@chanvathana_22 <i aria-hidden="true">↗</i></a>
            <div><span>Facebook</span>Vatha ña</div>
          </div>
          <div className="contact__crest"><Crest /></div>
        </div>
      </div>
    </section>
  );
}
