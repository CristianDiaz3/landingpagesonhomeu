import React from 'react';

export default function Footer({ t }) {
  return (
    <footer>
      <div>{t("footer.text")}</div>
      <div className="socials">
        <a href="https://instagram.com/sonhomeupy" target="_blank" rel="noopener noreferrer">
          Instagram @sonhomeupy
        </a>
      </div>
    </footer>
  );
}
