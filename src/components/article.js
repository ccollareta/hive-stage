
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import hovericon from '../images/hover-icon.svg';


const Article = ({path, title,tags, author,excerpt,featured_image,date,thumbnail}) => {
    const date2 = new Date(date);
    var options = {year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }
    var style = 'text-dark';
    var style2 = 'text-blue';
    
    return (
        <div className="col col-4"> 
                        <div className="card">
                            <div className="card-img">
                                <img src={thumbnail} className="img-fluid" />
                                <a href={path} className="card-overlay">
                                    <img src={hovericon} className="hover"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <a href={path}>
                                    <h4 className={style}>{title}</h4>
                                </a>
                                <p className={style}>
                                    {excerpt}
                                </p>
                                <div className="post-details">
                                    <span className={`author ${style2}`}>Submitted by {author}</span>
                                    <span className={`date ${style}`}>{date2.toLocaleDateString('en-US',options)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Article;



