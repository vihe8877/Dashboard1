import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Grillic newsletter to receive notifications about food going bad around you!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Video</h2>
            <Link to='/'>Our Pitch</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
