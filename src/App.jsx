import React, { useState, useEffect } from 'react';
import { translations } from './locales/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import ForWhom from './components/ForWhom';
import Modules from './components/Modules';
import Mentor from './components/Mentor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import FooterCta from './components/FooterCta';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [language, setLanguage] = useState('es');

  const t = (key) => {
    if (translations[language] && translations[language][key] !== undefined) {
      return translations[language][key];
    }
    return key;
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'es-PY';
  }, [language]);

  return (
    <>
      <Header language={language} setLang={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <Modules t={t} />
        <ForWhom t={t} />
        <Mentor t={t} />
        <Testimonials t={t} />
        <Pricing language={language} t={t} />
        <Faq t={t} />
        <FooterCta t={t} />
      </main>
      <Footer t={t} />
      <WhatsAppFloat t={t} />
    </>
  );
}
