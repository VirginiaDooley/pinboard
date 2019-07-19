import React from 'react'

const SearchResults = ({image}) =>
  <div>
    <img src={image.urls.thumb} alt={image.alt_description}/>
  </div>

export default SearchResults;
