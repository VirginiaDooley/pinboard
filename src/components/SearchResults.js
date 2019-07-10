import React from 'react'

const SearchResults = (props, index) =>
  <div class="grid-container">
    {props.images.map((image, index) => (
      <div class="grid-item" key={index}>
        <img src={image.urls.thumb} alt={image.alt_description}/>
      </div>
    ))}
  </div>

export default SearchResults;
