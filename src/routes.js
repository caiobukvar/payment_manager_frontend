import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { useState, useContext } from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddClient from './pages/AddClient';
import Layout from './components/Layout';
import { ContextoModal } from './ContextoModal';
import { AuthContext } from './AuthContext';

function ProtectedRoutes(props) {
    const { token } = useContext(AuthContext);

    return (
        <Route render={() => (token ? props.children : <Redirect to="/signin" />)} />
    )
}

function Routes() {
    const [value, setValue] = useState(false);
    const [token, setToken] = useState();

    return (
        <AuthContext.Provider
            value={{ token, setToken }}
        >
            <Router>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <ProtectedRoutes>
                        <ContextoModal.Provider
                            value={{ value, setValue }}
                        >
                            <Layout>
                                <Route path="/" exact component={Main} />
                                <Route path="/add-client" component={AddClient} />
                            </Layout>
                        </ContextoModal.Provider>
                    </ProtectedRoutes>
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}

export default Routes;