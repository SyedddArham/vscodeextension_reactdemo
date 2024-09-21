// src/components/Grid.js

import React from 'react';

const Grid = ({ data }) => {
  const { rows, columns, spacing, style, items } = data;

  const gridItemStyle = {
    ...style,
    flex: `0 0 ${100 / columns}%`,
    margin: `${spacing / 2}px`,
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((item, index) => (
        <div key={index} style={gridItemStyle}>
          <p style={{ color: item.color, fontSize: item.fontSize, textAlign: 'center' }}>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
