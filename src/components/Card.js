// src/components/Card.js

import React from 'react';

const Card = ({ data }) => {
  const { style, header, body, footer } = data;

  return (
    <div style={style}>
      <h2 style={{ color: header.color, fontSize: header.fontSize, fontWeight: header.fontWeight }}>
        {header.content}
      </h2>
      <p style={{ color: body.color, fontSize: body.fontSize }}>
        {body.content}
      </p>
      <p style={{ color: footer.color, fontSize: footer.fontSize, textAlign: footer.textAlign }}>
        {footer.content}
      </p>
    </div>
  );
};

export default Card;
