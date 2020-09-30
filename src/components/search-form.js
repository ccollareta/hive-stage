import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navigate } from '@reach/router';

const SearchForm = ({ navigation, secondaryLinks }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          pathPrefix
          siteMetadata {
            searchgov {
              affiliate
              endpoint
              inline
            }
          }
        }
      }
    `
  );
  const { affiliate, endpoint, inline } = site.siteMetadata.searchgov;

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.query.value;
    if (inline) {
      navigate(`${site.pathPrefix}/search?query=${query}`);
    } else {
      window.location.replace(
        `${endpoint}/search?utf8=✓&affiliate=${affiliate}&query=${query}`
      );
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
        <input
          className="text search-input"
          id="extended-search-field-small"
          type="search"
          name="query"
          autoComplete="off"
          placeholder="Type here to search..."
        />
    </form>
    
  );
};

export default SearchForm;
