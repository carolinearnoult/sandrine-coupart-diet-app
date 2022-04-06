import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../App.css';

function Contact() {
const form = useRef();

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wugqaqw', 'template_o4hxjfe', form.current, 'AKbO2e3_pwdNdVKMm')
      .then((result) => {
          
      }, (error) => {
        
      });
      alert("Message envoyé");
  };

  return(
    <div className='contactContainer'>
      <form ref={form} onSubmit={sendEmail} className='contactBox'>
        <div className="left"></div>
        <div className="right">
				<h2 className='titleForm'>Nous Contacter</h2>
				<input type="text" className="field" name="user_name" required placeholder="Votre nom" />
				<input type="text" className="field" name="user_email" required placeholder="Votre Email" />
				<textarea placeholder="Message" name="message" className="field"></textarea>
				<button type="submit" name="submit" className="btn">Envoyer</button>
			</div>    
      </form>
    </div>
  );
}

export default Contact;
