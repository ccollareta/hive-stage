import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import { Helmet } from 'react-helmet';


const FeaturedPost = ({title, slug, description, thumb, date, author }) => {
    
    
    return (
        <div className="row">
            <div className="col-6 text">
                <div className="section-head">
                    <div className="section-title">
                        <p className="sub-title text-orange-alt">FEATURED NEWS</p>
                        <h2 className="title text-white"><Link to={slug} className="text-dark">{title}</Link></h2>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: description }} />
                <a href={slug} className="btn rounded">Read More</a>
            </div>
            <div className="col-6">
            <a href={slug}><img src={thumb} className="featured-img" alt="img" /></a>
            </div>
    </div>
    );
};

export default FeaturedPost;
