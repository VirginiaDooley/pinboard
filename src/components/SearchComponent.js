import React, { Component } from 'react';
import SearchResults from './SearchResults'

class SearchComponent extends Component {

    constructor(){
      super()
        this.state = {
        images: [],
        query: ''
      }
    }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // pinterest fetch api will go here
  }

  render () {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.value}/>
            <button type="submit">Submit</button>
        </form>
        // render image results component here
      </div>
    )
  }
}

export default SearchComponent;
