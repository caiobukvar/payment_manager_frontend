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
import Charges from './pages/Charges';
import Client from './pages/Client';
import Reports from './pages/Reports';

import Layout from './components/Layout';
import ClientDataContextProvider from './components/ClientDataContextProvider';
import ModalContext from './contexts/ModalContext';
import AuthContext from './contexts/AuthContext';
import UserContext from './contexts/UserContext';
import MenuContext from './contexts/MenuContext';
import ModalEditClientContext from './contexts/ModalEditClientContext';
import AddClientModalContext from './contexts/AddClientModalContext';
import AddChargeModalContext from './contexts/AddChargeModalContext';
import ChargeContext from './contexts/ChargeContext';
import EditChargeModalContext from './contexts/EditChargeModalContext';
import DeleteChargeModalContext from './contexts/DeleteChargeModalContext';



function ProtectedRoutes(props) {
  const { token } = useContext(AuthContext);

  return (
    <Route render={() => (token ? props.children : <Redirect to="/signin" />)} />
  )
}

function Routes() {
  const [value, setValue] = useState(false);
  const [valueModalAddClient, setValueModalAddClient] = useState(false);
  const [valueModalAddCharges, setValueModalAddCharges] = useState(false);
  const [valueModalEditClient, setValueModalEditClient] = useState(false);
  const [valueModalEditCharges, setValueModalEditCharges] = useState(false);
  const [valueModalDeleteCharges, setValueModalDeleteCharges] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chargesList, setChargesList] = useState('');

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
                  <AddClientModalContext.Provider
                    value={{ valueModalAddClient, setValueModalAddClient }}
                  >
                    <ModalEditClientContext.Provider
                      value={{ valueModalEditClient, setValueModalEditClient }}
                    >
                      <AddChargeModalContext.Provider
                        value={{ valueModalAddCharges, setValueModalAddCharges }}
                      >
                        <DeleteChargeModalContext.Provider
                          value={{ valueModalDeleteCharges, setValueModalDeleteCharges }}
                        >
                          <ClientDataContextProvider>
                            <ChargeContext.Provider
                              value={{ chargesList, setChargesList }}
                            >
                              <EditChargeModalContext.Provider
                                value={{ valueModalEditCharges, setValueModalEditCharges }}
                              >
                                <Layout>
                                  <Route path="/" exact component={Main} />

                                  <Route path="/clientes" component={Client} />

                                  <Route path="/relatorios" component={Reports} />

                                  <Route path="/cobrancas" component={Charges} />
                                </Layout>
                              </EditChargeModalContext.Provider>
                            </ChargeContext.Provider>
                          </ClientDataContextProvider>
                        </DeleteChargeModalContext.Provider>
                      </AddChargeModalContext.Provider>
                    </ModalEditClientContext.Provider>
                  </AddClientModalContext.Provider>
                </MenuContext.Provider>
              </ModalContext.Provider>
            </ProtectedRoutes>
          </Switch>
        </Router>
      </UserContext.Provider>
    </AuthContext.Provider >
  )
}

export default Routes;