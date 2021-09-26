import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </Router>
    )
}

export default Routes;