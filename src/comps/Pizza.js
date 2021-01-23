import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Pizza extends React.Component {


  render () {
    return (
      <div>
        <h2>Pizza</h2>

          <p>There are many kinds of pizza.</p>

            <Route exact path="/pizza">
              <nav>
                <ul>
                  <li><Link to="/pizza/cheese">cheese</Link></li> / 
                  <li><Link to="/pizza/pepperoni">pepperoni</Link></li>
                </ul>
              </nav>
            </Route>
{/*             
            <Route path={/\/pizza\/.+/}>
              <Link to="/pizza"><em>← back</em></Link>
            </Route>

            <Switch>  
              <Route exact path="/pizza/cheese">
                <h3>Cheese Pizza</h3>
                <p>A pizza with cheese.</p>
              </Route>
              <Route path="/pizza/pepperoni">
                <h3>Pepperoni Pizza</h3>
                <p>Mmm, pepperoni.</p>
              </Route>
            </Switch> */}
      </div>
    )
  }
}