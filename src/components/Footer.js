// src/components/Footer.js
import React from 'react';

const Footer = ({ data }) => {
  const { style, links, copyright } = data;

  return (
    <footer style={{ ...style.container }}>
      <div style={{ ...style.links }}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            style={{ color: link.color, margin: '0 10px' }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <p style={{ color: style.copyrightColor }}>
        {copyright.text}
      </p>
    </footer>
  );
};

export default Footer;
