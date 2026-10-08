import React from 'react';
import { Crest } from '../components/SiteElements';

export default function HeroSection() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero__photo" aria-hidden="true" />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content page-container">
          <div className="hero__identity">
            <Crest />
            <p className="eyebrow">Phnom Penh · Cambodia · Est. 2020</p>
          </div>
          <h1>Turning dreams<br />into <span>reality.</span></h1>
          <p className="hero__summary">
            A futsal club building opportunity through competition, education, and community.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#about">Explore our club <span aria-hidden="true">↘</span></a>
            <a className="button button--outline" href="#partnership">Become a partner <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero__side-note" aria-hidden="true">PLAY WITH PURPOSE · GROW TOGETHER</div>
        <a className="hero__scroll" href="#about"><span /> Scroll to discover</a>
        <div className="hero__index">01 <i /> 13</div>
      </section>
      <div className="ticker" aria-label="Mizuna FC, Cambodian futsal, Phnom Penh, founded 2020">
        <div className="ticker__track">
          {[0, 1].map((item) => (
            <span className="ticker__group" key={item} aria-hidden={item === 1}>
              <span>Phnom Penh, Cambodia</span><i>✳</i><span>Futsal with purpose</span><i>✳</i>
              <span>Founded 2020</span><i>✳</i><span>Turning dreams into reality</span><i>✳</i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
