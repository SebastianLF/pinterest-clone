import React, { PropTypes } from 'react'
import { Grid, Button, Jumbotron } from 'react-bootstrap'

const Body = React.createClass({
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h1>Minterest</h1>
          <p>This is a pinterest clone, made with React js, redux, node js, mongodb. It also use mansonry, sockJS for notifications.</p>
          <p><Button bsStyle="primary">Learn More</Button></p>
        </Jumbotron>
      </Grid>
    )
  }
})

export default Body
