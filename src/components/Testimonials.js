import React from 'react'
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  return (
    <div id='testimonials' className='testimonials'>
        <h1>Our happy costumers</h1>
        <div className='container'>
            <div className='testimonials-content'>
                <TestimonialCarousel />
            </div>
        </div>
    </div>
  )
}

export default Testimonials;