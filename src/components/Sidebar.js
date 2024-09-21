// src/components/Sidebar.js

import React, { useState } from 'react';

const Sidebar = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { style, collapseStyle, isCollapsible, menuItems } = data;

  const sidebarStyle = collapsed
    ? { ...style, ...collapseStyle }
    : style;

  return (
    <div style={sidebarStyle}>
      {isCollapsible && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{ backgroundColor: 'transparent', border: 'none', color: '#fff' }}
        >
          {collapsed ? '➡️' : '⬅️'}
        </button>
      )}

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ color: item.color, marginRight: '10px' }}>{item.icon}</span>
            {!collapsed && (
              <span style={{ color: item.color, fontSize: `${item.fontSize}px` }}>
                {item.content}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
