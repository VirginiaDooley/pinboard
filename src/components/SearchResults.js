import React from 'react'

const SearchResults = ({image}, index) =>
  <div>
    <img src={image.urls.thumb} alt={image.description} key={index}/>
  </div>

export default SearchResults;
