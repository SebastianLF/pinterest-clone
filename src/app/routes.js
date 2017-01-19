import React, { PropTypes } from 'react'
import { Router, Route, Link } from 'react-router';
import App from './containers/App'
import history from './history'

const Routes = (props) => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  )
}

export default Routes
