import React from 'react';
import '../App.css';
import { Button } from './Button';
import './About.css';

function AboutSection() {
  return (
    <div className='about-container'>
      <p>Rejoignez-moi sur mes cours en ligne</p>
      <div className='about-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          YOUTUBE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}



export default AboutSection;