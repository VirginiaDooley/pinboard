import React from 'react'

const SearchResults = (props, index) =>
  <div className="image-results">
      <ul>
        {props.images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.urls.thumb} alt={image.alt_description}/>
          </div>
        ))}
      </ul>
  </div>

export default SearchResults;
