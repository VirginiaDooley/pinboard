import React, { Component } from 'react';
import { Button, Form, Input, Col} from 'reactstrap';
import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults'
import BoardContainer from './BoardContainer';
import manageBoards from '../reducers/manageBoards';

class SearchContainer extends Component {

  state = {
    query: '',
    searchResults: [],
    boards: [],
    boardImages: []
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
            <div className="grid-container">
              <div className="grid-item">
                  <SearchResults searchResults={this.state.searchResults} />
              </div>
            </div>
        </div>
      )
    }
}

export default connect()(SearchContainer);
