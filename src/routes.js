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
import { UserContext } from './UserContext';

function ProtectedRoutes(props) {
    const { token } = useContext(AuthContext);

    return (
        <Route render={() => (token ? props.children : <Redirect to="/signin" />)} />
    )
}

function Routes() {
    const [value, setValue] = useState(false);
    const [userInfo, setUserInfo] = useState(() => {
        const localUserInfo = localStorage.getItem('info-usuario');
        return localUserInfo ? JSON.parse(localUserInfo) : '';
    });
    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem('token-usuario');
        return localToken ? localToken : '';
    });


    return (
        <AuthContext.Provider
            value={{ token, setToken }}
        >
            <UserContext.Provider
                value={{ userInfo, setUserInfo }}
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
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export default Routes;