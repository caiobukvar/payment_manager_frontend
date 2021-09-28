import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { useState } from 'react';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddClient from './pages/AddClient';
import { contextoModal } from './contextoModal';

function Routes() {
    const [value, setValue] = useState(false);

    return (
        <Router>
            <Switch>
                <contextoModal.Provider
                    value={{ value, setValue }}
                >
                    <Route path="/" exact component={Main} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/add-client" component={AddClient} />
                </contextoModal.Provider>
            </Switch>
        </Router>
    )
}

export default Routes;