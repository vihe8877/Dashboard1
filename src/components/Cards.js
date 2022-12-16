import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src=''
              text='Item 1'
              label='label'
              path=''
            />
            <CardItem
              //src=''
              text='Item 2'
              label='label 2'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              //src=''
              text='Item 3'
              label='label'
              path=''
            />
            <CardItem
              //src=''
              text='Item 4'
              label='label 2'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;