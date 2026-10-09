import { Leaf, ArrowUpRight, SunMedium, Droplets, Heart } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><Leaf size={15} strokeWidth={2.2} /> ROOTED IN THE GOOD THINGS</div>
        <h1 id="hero-title">Bring home<br />a little <em>green.</em></h1>
        <p className="hero-intro">Thoughtfully grown plants for the places you call home. Meet your next favorite roommate, leaf by leaf.</p>
        <a className="hero-link" href="#plants">Find your plant <ArrowUpRight size={16} /></a>
        <div className="hero-promises">
          <span><SunMedium size={16} /> Light-matched picks</span>
          <span><Droplets size={16} /> Easy-care favorites</span>
          <span><Heart size={16} /> Packed with care</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <img src={`${import.meta.env.BASE_URL}plants/monstera-deliciosa.svg`} alt="Illustrated monstera in a warm terracotta planter" />
        <div className="hero-sticker"><span>GROWN WITH</span><strong>good energy</strong><Leaf size={15} /></div>
        <div className="hero-caption"><span className="caption-dot" /> A happier home starts here</div>
      </div>
      <div className="hero-side-note">GROW SLOW · LIVE WELL · STAY LEAFY</div>
    </section>
  );
}
