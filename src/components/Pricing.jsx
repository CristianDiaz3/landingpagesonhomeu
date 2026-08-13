import React from 'react';

export default function Pricing({ language, t }) {
  const items = [1, 2, 3, 4];

  return (
    <section className="pricing" id="preco">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("price.kicker")}</span>
          <h2>{t("price.title")}</h2>
        </div>
        <div className="price-card">
          {/* Discount Badge */}
          <span className="price-badge">{t("price.badgeText")}</span>
          
          <div className="price-old">{t("price.old")}</div>
          <div className="price-new">
            {language === 'pt' ? 'R$ 97' : 'Gs. 200.000'}
            <span> {t("price.newsub")}</span>
          </div>
          
          <ul className="price-list">
            {items.map(num => (
              <li key={num}>
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{t(`price.item${num}`)}</span>
              </li>
            ))}
          </ul>
          
          <a href="#" className="btn btn-primary btn-pulse-active">
            {t("price.cta")}
          </a>
          
          <p style={{ marginTop: '16px', fontSize: '0.75rem', color: 'var(--marrom-suave)', fontWeight: '600' }}>
            <span className="editnote">EDITAR preço e link de pagamento</span>
          </p>
          
          {/* Security and Guarantee Seals */}
          <div className="security-flow">
            <div className="security-item">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>{t("price.guarantee")}</span>
            </div>
            <div className="security-item">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <span>{t("price.secure")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
