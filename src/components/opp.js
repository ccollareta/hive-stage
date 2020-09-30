import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import one_icon from '../images/one-icon-1.svg';
import two_icon from '../images/one-icon-2.svg';


const FeatOpp = ({title, description, thumbnail,link, author, date }) => {
    
    
    return (
        <div className="card">
        <div className="hex-img-container one">
                                <img src={one_icon} className="sub-hex hex-1" alt="item1" />
                                <img src={two_icon} className="sub-hex hex-2" alt="item1" />
                                <div className='hex main-hex'>
                                    <div className='hex-inner'>
                                        <div className='hex-inner-inner'>
                                            <img className="hex-img" src={thumbnail} />
                                        </div>
                                    </div>
                                </div>
                            </div>
        <div className="card-body">
            <Link to={`${link}/`}><h4 className="text-white">{title}</h4></Link>
            <p className="text-white">
            {description}
            </p>
            <div className="post-details">
                <span className="author">Submitted by {author}</span>
                <span className="date">{date}</span>
            </div>
        </div>
    </div>
    );
};

export default FeatOpp;
