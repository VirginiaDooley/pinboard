import React from 'react'

const SearchResults = ({image}) =>
  <div className="grid-container">
      <div className="grid-item">
        <img src={image.urls.thumb} alt={image.alt_description}/>
      </div>
  </div>

export default SearchResults;
