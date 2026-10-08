import React from 'react';
import { ActivityCard, SectionIntro } from '../components/SiteElements';
import { activities } from '../data/siteContent';

export function ActivitiesSection() {
  return (
    <section className="activities section-pad" id="activities">
      <div className="page-container">
        <div className="activities__heading">
          <SectionIntro label="05 / Core club activities" title="Four ways we move forward." />
          <p className="body-copy">From league competition to local coaching clinics, every activity creates room to grow.</p>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => <ActivityCard activity={activity} key={activity.number} />)}
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section className="community section-pad" id="community">
      <div className="page-container">
        <div className="community__top">
          <SectionIntro label="08 / Community & events" title={<>The game brings<br />us together.</>} light>
            We connect sport with community through football festivals, events, and grassroots outreach.
          </SectionIntro>
          <a className="button button--outline" href="#contact">Create something together <span aria-hidden="true">↗</span></a>
        </div>
        <div className="community__gallery">
          <figure className="community__photo community__photo--large">
            <img src="/PET06511.png" alt="Mizuna FC players celebrating together" loading="lazy" />
            <figcaption><span>01 / FOOTBALL FESTIVALS</span><strong>Make room for everyone.</strong></figcaption>
          </figure>
          <figure className="community__photo community__photo--small">
            <img src="/PET06804.png" alt="A Mizuna FC player taking part in a community event" loading="lazy" />
            <figcaption><span>02 / GRASSROOTS</span><strong>Grow closer, together.</strong></figcaption>
          </figure>
          <div className="community__note"><span>SPORT<br />+ PEOPLE<br />= POSSIBILITY</span><i aria-hidden="true">✳</i></div>
        </div>
      </div>
    </section>
  );
}

export function BrandExposureSection() {
  const channels = [
    { number: '01', title: 'Apparel branding', detail: 'Official match jerseys and team training wear' },
    { number: '02', title: 'Digital & media', detail: 'Social media, team photos, and digital content' },
    { number: '03', title: 'Events & campaigns', detail: 'Community events, tournaments, and promotional campaigns' }
  ];

  return (
    <section className="exposure section-pad" id="brand-exposure">
      <div className="page-container exposure__grid">
        <div>
          <SectionIntro label="09 / Brand exposure" title={<>Show up where<br />it matters.</>}>
            Build a visible connection with the club across its apparel, digital presence, and community activity.
          </SectionIntro>
        </div>
        <div className="exposure__channels">
          {channels.map((channel) => (
            <article className="exposure-row" key={channel.number}>
              <span>{channel.number}</span>
              <div><h3>{channel.title}</h3><p>{channel.detail}</p></div>
              <span className="exposure-row__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
