import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import download from "../images/download.png";

const FeaturedResource = ({title, file, file_size, description, resource_thumb }) => {
    
    
    return (
                            <div className="row">
                                <div className="col-6 text">
                                    <div className="section-head">
                                        <div className="section-title">
                                            <p className="sub-title text-orange-alt">FEATURED RESOURCE</p>
                                            <h2 className="title text-white"><a href={file} download className="text-dark">{title}</a></h2>
                                        </div>
                                    </div>
                                    <p>
                                        {description}
                                    </p>
                                    <a href={file} className="btn rounded"><img src={download} /> DOWNLOAD
                                        ({file_size})</a>
                                </div>
                                <div className="col-6">
                                    <img src={resource_thumb} className="featured-img" alt="img" />
                                </div>
                            </div>
                        
    );
};

export default FeaturedResource;
