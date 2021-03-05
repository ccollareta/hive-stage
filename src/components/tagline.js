import React from 'react';
import { Link } from 'gatsby';
import link_arrow from '../images/link-arrow.png';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="hive-cta-section-2">
  <div className="inner-container">
      <div className="cta">
          <h5 className="text-white">Need Help Getting Started? Check Out Our Opportunities!</h5>
          <div className="link">
              <a href="#" className="font-exo text-white">
                  Learn More <img src={link_arrow} />
              </a>
          </div>
      </div>
  </div>
</section>
);

export default Tagline;
