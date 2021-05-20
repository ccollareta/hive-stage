
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import hovericon from '../images/hover-icon.svg';
import link_arrow from '../images/new/link-arrow.png'


const Block = ({title,description, link_text, icon}) => {
    
    return (
        <div className="col col-3">
                        <div className="card">
                            <img src={icon} className="card-icon" />
                            <h4 className="card-title">{title}</h4>
                            <p className="card-body">
                                {description}
                            </p>
                            <div className="link">
                                <a href={link_text} className="font-exo text-dark">
                                    Learn More <img src={link_arrow} />
                                </a>
                            </div>
                        </div>
                    </div>
    );
};

export default Block;



