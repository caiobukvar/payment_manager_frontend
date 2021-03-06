import { useState, useEffect, useContext } from 'react';
import ClientDataContext from '../../contexts/ClientDataContext';
import AuthContext from '../../contexts/AuthContext';


function ClientDataContextProvider({ children }) {
  const [clientArray, setClientArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useContext(AuthContext);

  async function UserClientInfo() {
    const response = await fetch('https://paymentmanager-api.herokuapp.com/listCustomers',
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
    const clientData = await response.json();

    if (response.ok) {
      setClientArray(clientData);
    }
    setIsLoading(false);
  }
  useEffect(async () => {
    await UserClientInfo();
  }, []);

  return (
    <ClientDataContext.Provider
      value={{ clientArray, isLoading, UserClientInfo, setClientArray }}
    >
      {children}
    </ClientDataContext.Provider>
  );
}

export default ClientDataContextProvider;