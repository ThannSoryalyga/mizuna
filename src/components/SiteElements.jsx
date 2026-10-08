import React from 'react';

export function Crest({ small = false }) {
  return (
    <img
      className={`crest${small ? ' crest--small' : ''}`}
      src="/mizuna.jpg"
      alt="Mizuna FC crest"
    />
  );
}

export function SectionIntro({ label, title, children, light = false }) {
  return (
    <div className={`section-intro${light ? ' section-intro--light' : ''}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro__copy">{children}</p>}
    </div>
  );
}

export function ActivityCard({ activity }) {
  return (
    <article className="activity-card">
      <img src={activity.image} alt={activity.alt} loading="lazy" />
      <div className="activity-card__shade" />
      <div className="activity-card__content">
        <span>{activity.number} / 04</span>
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
      </div>
      <span className="activity-card__arrow" aria-hidden="true">↗</span>
    </article>
  );
}

export function PartnershipTierCard({ tier }) {
  return (
    <article className={`tier-card${tier.featured ? ' tier-card--featured' : ''}`}>
      <p className="eyebrow">{tier.eyebrow}</p>
      <h3>{tier.title}</h3>
      <p className="tier-card__description">{tier.description}</p>
      <ul>
        {tier.benefits.map((benefit) => (
          <li key={benefit}><span>＋</span>{benefit}</li>
        ))}
      </ul>
      <a href="#contact">Talk partnership <span aria-hidden="true">↗</span></a>
    </article>
  );
}

export function PartnerPackageCard({ item }) {
  return (
    <article className={`package-card${item.featured ? ' package-card--featured' : ''}`}>
      <p className="eyebrow">{item.name}</p>
      <p className="package-card__price">{item.price}<span> / year</span></p>
      <a href={`mailto:chanvathana97@gmail.com?subject=${encodeURIComponent(`Mizuna FC ${item.name} enquiry`)}`}>
        Enquire about this package <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
