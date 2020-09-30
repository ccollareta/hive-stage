import React from 'react';
import { Link } from 'gatsby';
import link_arrow from '../images/link-arrow.png';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="hive-cta-section">
  <div className="inner-container">
      <div className="cta">
          <h5 className="text-white">Need help getting started? Check out our resource hub!</h5>
          <div className="link">
              <Link to="/resource-library/" className="font-exo text-white">
                  Learn More <img src={link_arrow} />
              </Link>
          </div>
      </div>
  </div>
</section>
);

export default Tagline;
