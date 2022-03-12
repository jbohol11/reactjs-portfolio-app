import React from 'react'
import "./about.css"
import ME from '../../assets/Casual1.png'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {CgWebsite} from "react-icons/cg"

const about = () => {
  return (
    <section id="about">
      <h5>Get to know me </h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year of Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Worked with 20+ Clients Worldwide</small>
            </article>

            <article className='about__card'>
              <CgWebsite className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Landed and finished Projects</small>
            </article>
          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, necessitatibus commodi sit voluptatem suscipit ullam minima quis maxime quidem illo autem velit est sequi officia modi. Est et obcaecati sint?
          </p>
        
        <a href = "#contact" className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default about