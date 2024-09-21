// src/App.js
import React, { useState } from 'react';  // Import useState
import Container from './components/Container';
import Grid from './components/Grid';
import Card from './components/Card';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Modal from './components/Modal'; // Import Modal
import { containerData, gridData, cardData, navBarData, sidebarData, footerData, modalData } from './config/dynamicStyles';

const App = () => {
  const { style, text } = containerData;
  const [isModalVisible, setModalVisible] = useState(false);  // Correct usage of useState

  return (
    <div style={{ padding: '20px' }}>
      
      <NavBar data={navBarData} />
      <Sidebar data={sidebarData} />
      <Container style={style}>
        <p
          style={{
            color: text.color,
            fontSize: text.fontSize,
            textAlign: text.textAlign,
            fontWeight: text.fontWeight,
          }}
        >
          {text.content}
        </p>
      </Container>
      <Grid data={gridData} />
      <Card data={cardData} />
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <Modal
        data={modalData}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <Footer data={footerData} />
    </div>
  );
};

export default App;
