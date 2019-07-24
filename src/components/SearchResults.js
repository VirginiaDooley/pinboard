import React, { Component } from 'react';

class SearchResults extends Component {

  renderImages = (props) => this.props.searchResults.map(image =>
  <img
     key={image.id}
     style={{ height: '220px', width: 'auto', margin: '5px' }}
     src={image.urls.thumb}
     alt={image.description}
   />)

  render() {

     return (
       <div>
         {this.renderImages()};
       </div>
     )
   }
}

export default SearchResults;
