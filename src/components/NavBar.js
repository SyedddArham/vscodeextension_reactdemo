// src/components/NavBar.js

import React from 'react';

const NavBar = ({ data }) => {
  const { style, title, links } = data;

  const navBarStyle = {
    backgroundColor: style.backgroundColor,
    height: style.height,
    display: 'flex',
    justifyContent: style.justifyContent,
    alignItems: style.alignItems,
    padding: `${style.paddingHorizontal}px`,
    flexDirection: style.flexDirection,
  };

  return (
    <div style={navBarStyle}>
      <h1 style={{ 
        color: title.color, 
        fontSize: title.fontSize, 
        fontWeight: title.fontWeight, 
        textAlign: title.textAlign 
      }}>
        {title.content}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            style={{ 
              color: link.color, 
              fontSize: link.fontSize, 
              marginLeft: '20px', 
              textDecoration: 'none' 
            }}
          >
            {link.content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
