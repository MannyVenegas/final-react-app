import React from 'react'
import Chef from "../restaurant-chef-B.jpg"

const About = () => {
  return (
    <div id='about' className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap' mb-5>
                    <img src={Chef} alt="chefb..."  className='profile-img'/> 
                </div>
            </div>
            <div className='col-lg6 col-xm-12'>
                <h1 className='about-heading'>About us</h1>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nulla facilisi etiam dignissim diam quis. Eget mi proin sed libero enim. Eu non diam phasellus vestibulum. " 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About