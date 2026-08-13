import React, { useState, useRef } from 'react';

export default function Faq({ t }) {
  const [openIndex, setOpenIndex] = useState(null);
  const answersRef = useRef([]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [1, 2, 3, 4];

  return (
    <section id="faq" className="faq-section">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("faq.kicker")}</span>
          <h2>{t("faq.title")}</h2>
        </div>
        <div className="faq-container">
          {faqItems.map((num, index) => {
            const isOpen = openIndex === index;
            const scrollHeight = answersRef.current[index] ? answersRef.current[index].scrollHeight : 0;
            
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={num}>
                <button className="faq-q" onClick={() => toggleFaq(index)}>
                  <span>{t(`faq.q${num}`)}</span>
                  <span className="plus-icon">+</span>
                </button>
                <div 
                  ref={el => answersRef.current[index] = el}
                  className="faq-a" 
                  style={{ maxHeight: isOpen ? `${scrollHeight}px` : '0px' }}
                >
                  <p>{t(`faq.a${num}`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
