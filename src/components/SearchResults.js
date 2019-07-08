import React from 'react'

const SearchResults = (props, index) =>
  <div className="image-results">
    // <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <ul>
        {props.images.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.urls.thumb} alt={image.alt_description}/>
          </div>
        ))}
      </ul>
    // </div>
  </div>

export default SearchResults;
