import {Route, Switch} from 'react-router-dom'
import SignUp from './Components/SignUp'
import HomePage from './Components/HomePage'

function Routes () {
    return(
        <Switch>
            <Route path = '/' exact component={HomePage}/>
            <Route path = '/SignUp' exact component={SignUp}/>
        </Switch>

    )
}

export default Routes