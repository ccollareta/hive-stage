
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import hovericon from '../images/hover-icon.svg';


const Article = ({path, title,tags, author,html,featured_image,date}) => {
 
    return (
        <div className="col col-4">
                        <div className="card">
                            <div className="card-img">
                                <img src={featured_image} className="img-fluid" />
                                <a href={path} className="card-overlay">
                                    <img src={hovericon} />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={path}>
                                    <h4>{title}</h4>
                                </a>
                                <p>
                                    Please see the file folder labeled Draft RFP 1.75 in the resources section.
                                </p>
                                <div className="post-details">
                                    <a href="#" className="author">Submitted by {author}</a>
                                    <span className="date">{date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Article;



