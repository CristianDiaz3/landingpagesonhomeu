import React, { useState, useEffect } from 'react';

export default function Header({ language, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="nav">
        <div className="brand">
          <span className="heart">💗</span>
          <span>Sonho Meu</span>
        </div>
        <div className="nav-actions">
          {/* Top Sticky CTA Button */}
          <a href="#preco" className="btn-nav-cta">
            {t("sticky.cta")}
          </a>
          {/* Language Toggle: ES before PT */}
          <div className="lang-toggle">
            <button 
              id="btn-es" 
              className={language === 'es' ? 'active' : ''} 
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button 
              id="btn-pt" 
              className={language === 'pt' ? 'active' : ''} 
              onClick={() => setLang('pt')}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
