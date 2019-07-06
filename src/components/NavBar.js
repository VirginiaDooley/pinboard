import React from 'react'
import PropTypes from 'prop-types'
import NavBar from 'react-bootstrap/NavBar'

const NavBar; = (props) => {
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  )
}

export default NavBar;
