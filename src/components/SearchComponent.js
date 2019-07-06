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
    console.log(this.state.query)
    // fetch image api url and update images array
  }

  render () {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.value}/>
            <button type="submit">Submit</button>
        </form>
        <SearchResults/>
      </div>
    )
  }
}

export default SearchComponent;
