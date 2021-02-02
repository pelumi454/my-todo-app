import React from 'react'
import {connect} from 'react-redux'
import * as actions from './Components/redux/Todos/TodoAction';
import HomePage from './Components/HomePage'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import image1 from './Images/blobs.svg'

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

// const mapStateToProps = state => ({
//   isLoading: () => state.isLoading !== false
// })

// // const mapDispatchToProps = dispatch => ({
// //   fetchTodos: () => dispatch(actions.fetchTodos())
// // })

export default App;
