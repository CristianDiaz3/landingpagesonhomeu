import React from 'react';

export default function Mentor({ t }) {
  return (
    <section className="mentor">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">{t("mentor.kicker")}</span>
          <h2>{t("mentor.title")}</h2>
        </div>
        <div className="mentor-grid">
          <div className="mentor-photo-container">
            <div className="mentor-photo">
              {t("mentor.phototext")}
            </div>
            <span className="editnote mentor-photo-badge">EDITAR foto</span>
          </div>
          <div className="mentor-text">
            <h3>{t("mentor.name")}</h3>
            <span className="role">{t("mentor.role")}</span>
            <p>
              {t("mentor.bio")} 
              <span className="editnote">EDITAR bio</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
