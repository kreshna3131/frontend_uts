import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>TEKNIK INFORMATIKA</h1>
      <p>Website Resmi Teknik Informatika</p>
      </div>
  );
}

export default HeroSection;
