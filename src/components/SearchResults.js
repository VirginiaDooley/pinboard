import React from 'react';
import { Row, Col } from 'reactstrap';

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
       <Row>
         <Col>
           {renderImages()}
         </Col>
       </Row>
  )
}

export default SearchResults;
