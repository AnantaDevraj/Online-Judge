// src/components/Mid.jsx
import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        textAlign: 'center',
        flexDirection: 'column',
        backgroundColor: '#9EC8B9',
      }}
    >
      <h1 className="font-bold" style={{ color: '#333', fontSize: '2.5rem', marginBottom: '10px' }}>
        Start your Journey Today
      </h1>
      <h2 style={{ color: '#555', fontSize: '2rem', marginBottom: '8px' }}>
        With CodeArena
      </h2>
      <h3 style={{ color: '#777', fontSize: '1.5rem' }}>
        Learn, Practice and Win
      </h3>
    </div>
  );
};

export default Home;

