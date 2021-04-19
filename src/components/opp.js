import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import one_icon from '../images/hover-icon.svg';
import two_icon from '../images/one-icon-2.svg';


const FeatOpp = ({title, description, thumbnail,link, author, date }) => {
    const date2 = new Date(date);
    var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    
    
    return (
                        <div className="card">
                            <div className="card-img">
                                <img src={thumbnail} className="img-fluid" />
                                <a href={`${link}/`} className="card-overlay">
                                    <img src={one_icon} />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={`${link}/`}>
                                    <h4 className="text-white">{title}</h4>
                                </a>
                                <p className="text-white">
                                    {description}
                                </p>
                                <div className="post-details">
                                    <span className="author">Submitted by {author}</span>
                                    <span className="date">{date2.toLocaleDateString('en-US',options)}</span>
                                </div>
                            </div>
                        </div>
    );
};

export default FeatOpp;
