import React from 'react'

const SearchResults = (props, index) =>
      <div className="image-results">
        <ol>
          {props.images.map((image, index) => (
          <div className="image" key={index}>
            <li>
              <p>Url: {image.urls.thumb}</p>
            </li>
          </div>
          ))}
        </ol>
      </div>

export default SearchResults;
