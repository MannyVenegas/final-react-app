import React from 'react';
import salad from "../greek-salad.jpg";
import brushetta from "../brushetta.jpeg";
import lemon from "../lemon-dessert.jpg";
import tapas from "../tapas2.jpeg";

const Menu = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Main dishes</h1>
      <div className="container">
        <div className="row">
          {/* Col 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                 <img src={salad} alt="greek salad" className='img1'/>
              </div>
              <h3>Greek Salad</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                 <img src={brushetta} alt="brushetta" className='img2'/>
              </div>
              <h3>Brushetta</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Col 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
              <img src={lemon} alt="lemon dessert" className='img3'/>
              </div>
              <h3>Lemon Dessert</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Col 4 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                 <img src={tapas} alt="tapas" className='img4'/>
              </div>
              <h3>Tapas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu