import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';


const Javs = () =>  (
            <>
<script src={withPrefix('/scripts/jquery.min.js')} type="text/javascript" />
    <script src={withPrefix('/vendor/slick/slick.min.js')} type="text/javascript"/>
    <script src={withPrefix('/vendor/lity/lity.min.js')} type="text/javascript"/>
    <script src={withPrefix('/scripts/custom.js')} type="text/javascript"/>
            </>
           
    );

export default Javs;
