import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1> ENDING FFOOD WASTE</h1>
        <p>What are you waiting for? Join us! Hi</p>
        <div className='here-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                SIGN UP
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH THINGY <i className='far fa-play-circle'></i>
            </Button>
        </div>

    </div>
  )
}

export default HeroSection