import React, { Component } from 'react';
import { Button, Form, Input, Col, Label} from 'reactstrap';
import SearchResults from '../components/SearchResults'
import CreateBoard from '../containers/CreateBoard'

class SearchContainer extends Component {

  state = {
    query: "",
    searchResults: [],
    boardImages: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateStateImages = images => {
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

  chooseImage = event => {
    console.log(this)
    let image = event.target;
    this.setState(previousState => ({
      boardImages: [...previousState.boardImages, image]
    }))
  }

    render () {
      console.log(this.state)
      return (
        <div>
          <div className="grid-item">
            <Form onSubmit={this.handleSubmit}>
              <Label for="searchForm">Search Unsplash to find your inspiration.</Label>
                <Col>
                  <Input type="text" name="query" onChange={this.handleChange} value={this.state.query} />
                  <Button type="submit">Search</Button>
                </Col>
            </Form>
            <SearchResults searchResults={this.state.searchResults} chooseImage={this.chooseImage}/>
          </div>


            <CreateBoard boardImages={this.state.boardImages}/>
        
      </div>

      )
    }
}

export default SearchContainer;
