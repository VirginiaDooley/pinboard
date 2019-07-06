import React, { Component } from 'react';

class SearchComponent extends Component {

    constructor(){
      super()
        this.state = {
        images: [],
        query: ""
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
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.value} placeholder="Search images" />
          <div>
            <button type="submit">Submit</button>
          <div>
        </form>
      </div>
    )
  }
}



export default SearchComponent;
