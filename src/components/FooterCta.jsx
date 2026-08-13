import React from 'react';

export default function FooterCta({ t }) {
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2>{t("final.title")}</h2>
        <p>{t("final.text")}</p>
        <a href="#preco" className="btn btn-primary btn-pulse-active">
          {t("final.cta")}
        </a>
      </div>
    </section>
  );
}
