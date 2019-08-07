import React from 'react';

const SearchResults = (props) => {

  const renderImages = () => props.searchResults.map(image =>
  <img
     key={image.id}
     src={image.urls.small}
     alt={image.description}
     name={image}
     onClick={props.chooseImage}
   />)

   return (
     <div className="SearchResults">
        {renderImages()}
    </div>
  )
}

export default SearchResults;
