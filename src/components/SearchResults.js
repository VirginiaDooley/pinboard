import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class SearchResults extends Component {

  renderImages = (props) => this.props.searchResults.map(image =>
  <img
     key={image.id}
     src={image.urls.small}
     alt={image.description}
     name={image}
   />)

  render() {

     return (
         <Row>
           <Col>
             {this.renderImages()};
           </Col>
         </Row>
     )
   }
}

export default SearchResults;
