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
import Layout from './components/Layout';

function Routes() {
    const [value, setValue] = useState(false);

    return (
        <Router>
            <Switch>
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <contextoModal.Provider
                    value={{ value, setValue }}
                >
                    <Layout>
                        <Route path="/" exact component={Main} />
                        <Route path="/add-client" component={AddClient} />
                    </Layout>
                </contextoModal.Provider>
            </Switch>
        </Router>
    )
}

export default Routes;