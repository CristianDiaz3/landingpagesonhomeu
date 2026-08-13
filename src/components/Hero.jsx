import React, { useRef } from 'react';
import heroImage from '../assets/hero.png';
import clientVideo from '../assets/3961662277143931990.mp4';

export default function Hero({ t }) {
  const videoRef = useRef(null);

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    if (!video.muted) {
      video.play();
    }
  };

  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1>
            <span>{t("hero.title1")} </span>
            <span className="accent-wrapper">
              <span className="accent">{t("hero.accent")}</span>
              <span className="accent-bg"></span>
            </span>
            <span> {t("hero.title2")}</span>
            <span className="editnote">EDITAR headline</span>
          </h1>
          <p className="lead">{t("hero.lead")}</p>
          
          <div className="cta-block">
            <div className="cta-row">
              <a href="#preco" className="btn btn-primary btn-pulse-active">
                {t("hero.cta")}
              </a>
              <a href="#modulos" className="btn btn-ghost">
                {t("hero.cta2")}
              </a>
            </div>
            {/* Scarcity / Urgency hook */}
            <div className="urgency-badge">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>{t("hero.urgency")}</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-scene">
            {/* Sparkles */}
            <div className="sparkle sparkle-1"></div>
            <div className="sparkle sparkle-2"></div>
            <div className="sparkle sparkle-3"></div>
            
            <div className="main-visual-card">
              <div className="video-frame">
                <video
                  ref={videoRef}
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={heroImage}
                >
                  <source src={clientVideo} type="video/mp4" />
                </video>
                <button type="button" className="audio-toggle" onClick={toggleAudio} aria-label="Ativar ou desativar som do vídeo">
                  🔊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
