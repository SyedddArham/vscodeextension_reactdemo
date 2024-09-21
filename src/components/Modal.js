// src/components/Modal.js
import React from 'react';

const Modal = ({ data, isVisible, onClose }) => {
  const { style, title, content, actions } = data;

  if (!isVisible) return null;

  return (
    <div style={{ ...style.overlay }}>
      <div style={{ ...style.modal }}>
        <div style={{ ...style.header }}>
          <h2>{title}</h2>
          <button onClick={onClose} style={{ ...style.closeButton }}>X</button>
        </div>
        <div style={{ ...style.body }}>
          <p>{content}</p>
        </div>
        <div style={{ ...style.footer }}>
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onPress}
              style={{ ...style.button }}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
