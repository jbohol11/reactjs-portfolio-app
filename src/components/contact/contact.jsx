import React from 'react'
import "./contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {SiViber} from 'react-icons/si'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an39fr2', 'template_9r603pd', form.current, "juH_bJRsi7Yd_1mfP")
    .then(
      function(response) {
          alert("Email Sent Successfully!");
          e.target.reset();
      },
      function(error) {
        alert("FAILED!" + error);
      }
  );
  };

  return (
    <section id="contact">
      <h5>How can I help?</h5>
      <h2>Get in Touch</h2>

      <div className="container contact__container">
        <div className='contact__options'>

          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jhunrheycbohol@gmail.com</h5>
            <a href='mailto:jhunrheycbohol@gmail.com' target="_blank" rel='noopener noreferrer'>Send me an Email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>facebook.com/jrbohol11</h5>
            <a href='https://m.me/jrbohol11' target="_blank" rel='noopener noreferrer'>Message Me in Facebook</a>
          </article>

          <article className='contact__option'>
            <SiViber className='contact__option-icon' />
            <h4>Viber</h4>
            <h5>+639953648749</h5>
            <a href='https://msng.link/o/?639953648749=vi' target="_blank" rel='noopener noreferrer'>Message Me in Viber</a>
          </article>
        </div>

      {/*-----------END OF CONTACT OPTIONS-----------*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name Here' required />
          <input type="email" name='email' placeholder='Your Email Here' required />
          <textarea name='message' rows="7" placeholder='Your Message Here' required></textarea>
          <button type="Submit" value="Send" className='btn btn-primary'>Send a Message via this page </button>
        </form>

      </div>
    </section>
  )
}

export default Contact