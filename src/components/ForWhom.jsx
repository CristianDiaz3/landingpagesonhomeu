import React from 'react';

export default function ForWhom({ t }) {
  return (
    <section className="for-whom">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("fw.kicker")}</span>
          <h2>{t("fw.title")}</h2>
        </div>
        <div className="fw-grid">
          <div className="fw-card fw-yes">
            <h3>💙 <span>{t("fw.yes.title")}</span></h3>
            <ul>
              {[1, 2, 3, 4].map(idx => (
                <li key={`yes-${idx}`}>
                  {/* SVG Check icon */}
                  <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t(`fw.yes.${idx}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="fw-card fw-no">
            <h3>💗 <span>{t("fw.no.title")}</span></h3>
            <ul>
              {[1, 2, 3, 4].map(idx => (
                <li key={`no-${idx}`}>
                  {/* SVG Cross icon */}
                  <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  {t(`fw.no.${idx}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
