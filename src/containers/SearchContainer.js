import React, { Component } from 'react';
import { Button, Form, Input, Col, Row, Label} from 'reactstrap';
import { connect } from 'react-redux';
import { addImageToBoard } from '../actions/images'
import SearchResults from '../components/SearchResults'

class SearchContainer extends Component {

  state = {
    query: "",
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
    this.setState({
      query: ''
    })
  }

   chooseImage = (event) => {
     let image = event.target
     console.log(image)
     this.props.addImageToBoard(image)
   }

    render () {
      console.log(this.state)
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Label for="searchForm">Search Unsplash to find your inspiration.</Label>
              <Col>
                <Input type="text" name="query" onChange={this.handleChange} value={this.state.query}/>
                <Button type="submit">Search</Button>
              </Col>
          </Form>
            <div>
                < SearchResults searchResults={this.state.searchResults} chooseImage={this.chooseImage} />
            </div>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => ({
    addImageToBoard: newBoardImage => { dispatch(addImageToBoard(newBoardImage))
  }
})

export default connect(null, mapDispatchToProps)(SearchContainer)
