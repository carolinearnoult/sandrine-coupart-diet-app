import React from 'react';
import './Articles.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Découvrez tous mes articles sur le blog</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='Sélection de cocktails'
              label='Boissons'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Plats chauds aux légumes de saison'
              label='Plats'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Entrées aux légumes de saison'
              label='Entrées'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Désserts salés et sucrés'
              label='desserts'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Recettes traditionnelles'
              label='tradition'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;