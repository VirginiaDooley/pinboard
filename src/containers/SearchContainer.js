import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Col} from 'reactstrap';
import SearchResults from '../components/SearchResults'

class SearchContainer extends Component {

  constructor(){
    super()
      this.state = {
      images: [],
      query: ''
    }
  }

  render () {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} onChange={event => this.handleChange(event)} value={this.state.value}>
          <FormGroup row>
            <Col sm={10}>
              <Input type="text" name="search" id="search" bsSize="lg"/>
              <Button>Search</Button>
            </Col>
          </FormGroup>
        </Form>
      <SearchResults images={this.state.images}/>
      </div>
    )

  }

  handleChange = (event) => {
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
    	.then(images => {
        this.setState({
          images: images.results
        });
        console.log(images)
      })
    }

}

export default SearchContainer;
