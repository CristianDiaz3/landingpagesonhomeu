import React from 'react';

export default function Modules({ t }) {
  const modulesList = [1, 2, 3, 4, 5, 6];

  return (
    <section className="modules" id="modulos">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("mod.kicker")}</span>
          <h2>{t("mod.title")}</h2>
          <p>
            {t("mod.subtitle")} 
            <span className="editnote">EDITAR módulos</span>
          </p>
        </div>
        <div className="mod-list">
          {modulesList.map(num => (
            <div className="mod-item" key={num}>
              <div className="mod-num">
                {num.toString().padStart(2, '0')}
              </div>
              <div className="mod-content">
                <h4>{t(`mod.${num}.title`)}</h4>
                <p>{t(`mod.${num}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
