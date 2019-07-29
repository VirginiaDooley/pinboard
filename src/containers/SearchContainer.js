import React, { Component } from 'react';
import { Button, Form, Input, Col, Row} from 'reactstrap';
import { connect } from 'react-redux';
import { addImageToBoard } from '../actions/images'

class SearchContainer extends Component {

  state = {
    query: '',
    searchResults: [],
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateStateImages = (images) => {
    this.setState({
      searchResults: images
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const query = this.state.query
    const KEY = 'd5c39b1d4142cbfb56008c655ecd3b9bbb420cf12e53130dc9cbdf1ef67f746b'
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${query}`

    const images = fetch(URL, {
      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })
    .then(response => {
      return response.json()
    })
    .then(responseJSON => {
      this.updateStateImages(responseJSON.results)
    })
  }

  renderSearchResults = () => this.state.searchResults.map(image =>
    <img id={image.id}
       key={image.id}
       src={image.urls.small}
       alt={image.description}
     />
 )

   chooseImage = (event) => {
     let imageId = event.target.id
     console.log(imageId)
     this.props.addImageToBoard(imageId)
   }

    render () {
      console.log(this.state)
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Col>
              <Input type="text" name="query" onChange={this.handleChange} value={this.state.query}/>
              <Button type="submit">Search</Button>
            </Col>
          </Form>
          <Row>
            <Col>
              <div className="image" onClick={this.chooseImage}>
                {this.renderSearchResults()}
              </div>
            </Col>
        </Row>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => ({
    addImageToBoard: newBoardImage => { dispatch(addImageToBoard(newBoardImage))
  }
})

export default connect(null, mapDispatchToProps)(SearchContainer)
