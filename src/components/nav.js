import { Link } from 'gatsby';
import React from 'react';

import close from '../../node_modules/uswds/dist/img/close.svg';
import logo_white from '../images/new/logo-white.svg';
import logo from '../images/new/logo.svg';
import search_white from '../images/new/search.svg';
import search from '../images/new/search-dark.svg';
import SearchForm from './search-form';
import SearchFormMobile from './search-form-mobile';

const Nav = ({ navigation }) => (
  
  <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand" href="/">
      <img src={logo_white} className="white-logo" alt="logo" />
      <img src={logo} className="logo" alt="logo" />
  </a>
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
              <SearchFormMobile />
          </li>
          {navigation.map((navGroup, idx) => (
          <li key={idx} className="nav-item">
             
              <a
                className="nav-link"
                href={navGroup.items[0].link}
              >
                {navGroup.items[0].text}
              </a>
            
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
              <a className="btn rounded outline" href="https://community.hive.gov/">
                  <span>ENTER THE HIVE</span>
              </a>
          </li>
      </ul>
  </div>
</nav>
);

export default Nav;
