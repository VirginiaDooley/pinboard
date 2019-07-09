import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SearchResults = (props, index) =>
  <div className="image-results">
    {props.images.map((image, index) => (
      <div className="image" key={index}>
        <Container>
          <Row>
            <Col size="12" md="8">
              <img src={image.urls.thumb} alt={image.alt_description}/>
            </Col>
          </Row>
        </Container>
      </div>
    ))}
  </div>

export default SearchResults;
