import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Bahasa yang Identik dengan Informatika</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/java.png'
              text='Java adalah bahasa program yang digunakan untuk android'
              label='Android'
              path='/services'
            />
            <CardItem
              src='images/js.jpg'
              text='JS ini digunakan untuk website'
              label='Website'
              path='/services'
            />
            <CardItem
              src='images/c++.png'
              text='Biasanya digunakan untuk perhitungan matematika'
              label='Android'
              path='/services'
            />
            <CardItem
              src='images/dart.png'
              text='Dart / FLutter bahasa multiplatform'
              label='Android'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/py.png'
              text='Biasanya digunakan untuk membuat Game'
              label='Multiplatform'
              path='/services'
            />
            <CardItem
              src='images/ruby.png'
              text='Biasanya digunakan untuk pemrograman dinamis'
              label='Multiplatform'
              path='/services'
            />
            <CardItem
              src='images/c.jpg'
              text='Biasanya digunakan untuk perhitungan'
              label='Android'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
