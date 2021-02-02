import React from 'react'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
          <Router>
            <HomePage/>
        <Switch>
        <Route exact path='/sign-up' component={SignUp} />
        </Switch>
       </Router>
      
    </div>
  );
}


export default App;
