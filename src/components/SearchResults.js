import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Row, Col } from 'reactstrap';

class SearchResults extends Component {

  renderImages = (props) => this.props.searchResults.map(image =>
  <img
     key={image.id}
     src={image.urls.small}
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

// const mapStateToProps = state => {
//   return {
//     images: state.images
//   }
// }

export default SearchResults;
