import React from 'react'

class SearchComponent extends React.Component {
  render () {
    return (
      <form>
        <input className="search-form" type="text" placeholder="Search images" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SearchComponent;
