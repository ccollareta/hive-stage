import { Link } from 'gatsby';
import React from 'react';

import close from '../../node_modules/uswds/dist/img/close.svg';
import logo_white from '../images/logo-white.png';
import logo from '../images/logo.png';
import search_white from '../images/search-white.png';
import search from '../images/search.png';
import SearchForm from './search-form';

const Nav = ({ navigation, secondaryLinks }) => (
  
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                        <img src={logo_white} className="white-logo" alt="logo" />
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                    <button className="navbar-toggler">
                        <div className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </button>
                    <div className="navbar-collapse">
    
      <ul className="navbar-nav">
      <li className="nav-item m-link">
                                <form className="search-box mobile">
                                    <input type="text" className="text search-input" placeholder="Type here to search..." />
                                </form>
                            </li>
        {navigation.map((navGroup, idx) => (
          <li key={idx} className="nav-item">
            {navGroup.items.length > 1 ? (
              <>
                <button
                  className={`usa-accordion__button usa-nav__link ${
                    idx === 0 ? 'usa-current' : ''
                  }`}
                  aria-controls={`extended-nav-section-${idx}`}
                  aria-expanded={false}
                >
                  <span>{navGroup.title}</span>
                </button>
                <ul
                  id={`extended-nav-section-${idx}`}
                  className="usa-accordion__content usa-nav__submenu"
                  hidden
                >
                  {navGroup.items.map((navItem, idx) => (
                    <li key={idx} className="usa-nav__submenu-item">
                      <Link to={navItem.link}>{navItem.text}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                className="nav-link"
                activeClassName="current"
                to={navGroup.items[0].link}
              >
                {navGroup.items[0].text}
              </Link>
            )}
          </li>
        ))}
      </ul>
      
        <ul className="navbar-nav right-menu">
        <li className="nav-item d-link">
                                <a className="nav-link search-toggle" href="#">
                                    <img className="search-white" src={search_white} alt="search" />
                                    <img className="search" src={search} alt="search" />
                                </a>
                                <SearchForm />
                            </li>
                            <li className="nav-item">
                                <Link className="btn rounded outline" to="/contact/">
                                    Contact Us
                                </Link>
                            </li>
        </ul>
    </div>
  </nav>
);

export default Nav;
