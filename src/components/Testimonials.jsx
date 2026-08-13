import React from 'react';

export default function Testimonials({ t }) {
  const testimonials = [1, 2, 3];

  return (
    <section className="testi">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("testi.kicker")}</span>
          <h2>{t("testi.title")}</h2>
          <p><span className="editnote">EDITAR depoimentos reais</span></p>
        </div>
        <div className="testi-grid">
          {testimonials.map(num => (
            <div className="testi-card" key={num}>
              <div>
                <div className="stars">★★★★★</div>
                <p>{t(`testi.${num}.text`)}</p>
              </div>
              <div className="testi-author">
                <div className="testi-avatar">
                  {`A${num}`}
                </div>
                <div className="testi-meta">
                  <span className="testi-name">{t(`testi.${num}.name`)}</span>
                  <span className="testi-verified">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    Aluna Verificada
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
