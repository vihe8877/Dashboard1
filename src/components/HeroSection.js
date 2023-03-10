import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1> ENDING FOOD WASTE</h1>
        <p>What are you waiting for? Join us! Hi</p>
        <div className='here-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                SIGN UP
            </Button>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH OUR PITCH <i className='far fa-play-circle'></i>
            </Button> */}
        </div>

    </div>
  )
}

export default HeroSection