import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Inscrivez-vous à la newsletter pour recevoir les dernières recettes
        </p>
        <p className='footer-subscription-text'>
          Vous pouvez vous désinscrie à n'importe quel moment.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'inscrire</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Catégories</h2>
            <Link to='/sign-up'>À propos</Link>
            <Link to='/'>Mes services</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Mentions Légales</Link>
            <Link to='/'>Politique de confidentialité</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Informations</h2>
            <Link to='/'>Recettes</Link>
            <Link to='/'>Articles</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Sponsors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Ambassadeurs</Link>
            <Link to='/'>Agence</Link>
            <Link to='/'>Influenceurs</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Sandrine Coupart
            </Link>
          </div>
          <small className='website-rights'>Tous droits réservés © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

   

