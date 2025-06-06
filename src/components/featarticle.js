
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import hovericon from '../images/hover-icon.svg';


const FeatArticle = ({link, title, author,date}) => {
    
 const date2 = new Date(date)
 var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }

     return (
        <div className="post-item">
                <a href={link}>
                    <h6>{title}</h6>
                </a>
                <div className="post-details">
                    <span className="author">Submitted by {author}</span>
                    <span className="date">{date2.toLocaleDateString('en-US',options)}</span>
                </div>
            </div>
    );
};

export default FeatArticle;



