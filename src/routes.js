import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import React, { useState, useContext } from 'react';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Client from './pages/Client';
import Layout from './components/Layout';
import ModalContext from './contexts/ModalContext';
import AuthContext from './contexts/AuthContext';
import UserContext from './contexts/UserContext';
import MenuContext from './contexts/MenuContext';
import ModalClientContext from './contexts/ModalClientContext';

function ProtectedRoutes(props) {
    const { token } = useContext(AuthContext);

    return (
        <Route render={() => (token ? props.children : <Redirect to="/signin" />)} />
    )
}

function Routes() {
    const [value, setValue] = useState(false);
    const [valueModalClient, setValueModalClient] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
                            <ModalContext.Provider
                                value={{ value, setValue }}
                            >
                                <MenuContext.Provider
                                    value={{ menuOpen, setMenuOpen }}
                                >
                                    <ModalClientContext.Provider
                                        value={{ valueModalClient, setValueModalClient }}
                                    >
                                        <Layout>
                                            <Route path="/" exact component={Main} />

                                            <Route path="/client" component={Client} />

                                        </Layout>
                                    </ModalClientContext.Provider>
                                </MenuContext.Provider>
                            </ModalContext.Provider>
                        </ProtectedRoutes>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export default Routes;