import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";

import React from 'react'

const TestimonialCarousel = () => {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <>
          {/* Avatar 1 */}
          <img className="ava-img" src={avatar1} alt="John Doe 1" />
          <div className="myCarousel">
            <h3>John Doe 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
              beatae possimus laborum obcaecati consectetur odit voluptatem
              numquam explicabo porro?
            </p>
          </div>
        </>
        <>
          {/* Avatar 2 */}
          <img className="ava-img" src={avatar2} alt="Jane Doe 2" />
          <div className="myCarousel">
            <h3>Jane Doe 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
              beatae possimus laborum obcaecati consectetur odit voluptatem
              numquam explicabo porro?
            </p>
          </div>
        </>
        <>
          {/* Avatar 3 */}
          <img className="ava-img" src={avatar3} alt="John Doe 3" />
          <div className="myCarousel">
            <h3>John Doe 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
              beatae possimus laborum obcaecati consectetur odit voluptatem
              numquam explicabo porro?
            </p>
          </div>
        </>
      </Carousel>
    );
  };
  

export default TestimonialCarousel;

