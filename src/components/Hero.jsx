export default function Hero() {
  return (
    <section className="hero hero--simple" aria-labelledby="hero-title">
      {/* Video still to be chosen: drop it in assets/video/hero.mp4 and it plays here. */}
      <div className="hero__reel" id="reel" aria-hidden="true">
        <video id="hero-video" muted playsInline loop preload="none" />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__inner">
        <h1 className="hero__phrase" id="hero-title"><span className="line"><span className="rise" data-i18n="hero.phrase">Cozinha portuguesa <em>com alma.</em></span></span></h1>
      </div>
    </section>
  );
}
