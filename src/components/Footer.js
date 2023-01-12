import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";


const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* Col 1 */}
            <div className="d-flex">
              <p>Chicago, Illinois.</p>
            </div>
            {/* Col 2 */}
            <div className="d-flex">
              <a href="tel:555-555-555">+7(960)555-5555</a>
            </div>
            {/* Col 3 */}
            <div className="d-flex">
              <p>littlelemon@email.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              {/* Col 1 */}
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About</a>
                <br />
                <a className="footer-nav">Menu</a>
              </div>

              {/* Col 2 */}
              <div className="col">
                <a className="footer-nav">Reviews</a>
                <br />
                <a className="footer-nav">Reserve</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              {/* Share button 1 */}
              <FacebookShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              {/* Share button 2 */}
              <TwitterShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              {/* Share button 4 */}
              <WhatsappShareButton
                url={"www.google.com"}
                quote={"Full stack Developer"}
                hashtag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer