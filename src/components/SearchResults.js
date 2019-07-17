import React from 'react'

const SearchResults = ({image}) =>
  <div className="grid-container">
      <div className="grid-item">
        <div className="image">
          <img src={image.urls.thumb} alt={image.alt_description}/>
        </div>
      </div>
  </div>

export default SearchResults;
