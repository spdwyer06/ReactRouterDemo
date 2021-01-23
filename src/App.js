import './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Hamburger from './comps/Hamburger'
import Pizza from './comps/Pizza'

function App() {
  return (
    <div className="App">
      <p class="pretitle">♫ <em>These are a few of</em> ♫</p>
      <h1>MY FAVORITE FOODS</h1>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li> ⧸ 
            <li><Link to="/hamburger">hamburger</Link></li> ⧸ 
            <li><Link to="/pizza">pizza</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/hamburger"><Hamburger/></Route>
          <Route exact path="/pizza"><Pizza/></Route>

          {/* This works how I want it to, but would it get too stuffy having all the routing in the App comp? Is it bad practice doing it this way? */}
          <Route path='/pizza/cheese'>
            <Route path={/\/pizza\/.+/}>
              <Link to="/pizza"><em>← back</em></Link>
            </Route>
            <h3>Cheese Pizza</h3>
            <p>A pizza with cheese.</p>
          </Route>
          <Route path="/pizza/pepperoni">
            <Route path={/\/pizza\/.+/}>
              <Link to="/pizza"><em>← back</em></Link>
            </Route>
            <h3>Pepperoni Pizza</h3>
            <p>Mmm, pepperoni.</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
