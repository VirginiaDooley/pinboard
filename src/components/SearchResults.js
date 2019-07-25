import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Row, Col } from 'reactstrap';

class SearchResults extends Component {

  renderImages = (props) => this.props.searchResults.map(image =>
  <img
     key={image.id}
     src={image.urls.small}
     alt={image.description}
     onClick={this.props.chooseImage}
     name={image}
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
