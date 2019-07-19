import React, { Component } from 'react';
import { Button, Form, Input, Col} from 'reactstrap';
import SearchResults from '../components/SearchResults'
import BoardContainer from './BoardContainer'

class SearchContainer extends Component {

  constructor(props){
    super(props)
      this.state = {
      query: '',
      images: [],
      boardImages: []
    }
  }

  handleSearchInput = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.query)
    const q = this.state.query
    const KEY = 'd5c39b1d4142cbfb56008c655ecd3b9bbb420cf12e53130dc9cbdf1ef67f746b'
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${q}`

    fetch(URL, {

      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })
    .then(function(response) {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
    		return response.json();

    	})
    	.then((images) => {
        this.setState({images: images.results});
        // this.setState({images: images.map( image => ({ url: image.results.urls.thumb,  description: image.results.description }) )});
        console.log(this.state.images)
      })
    }

    chooseImage = (event) => {
      console.log("event handler is working!");
      this.setState({ boardImages: [...this.state.boardImages, event.target.src]});
      console.log("now this is the current state", this.state)
    }

    render () {
      const renderImages = this.state.images.map((image, index) =>
      (<SearchResults image={image} key={index} url={image.url} description={image.description}/>))
      return (
        <div>
          <Form onSubmit={this.handleSubmit} onChange={this.handleSearchInput}
            value={this.state.value}>
            <Col>
              <Input type="text" name="search" id="search" bsSize="lg"/>
              <Button id="button">Search</Button>
            </Col>
          </Form>

          <h4>Search and click images to add to your board.</h4>

            <div className="grid-container">
              <div className="grid-item">
                <div className="image" onClick={this.chooseImage} >
                  {renderImages}
                </div>
              </div>
            </div>

        </div>
      )
    }
}

export default SearchContainer;
