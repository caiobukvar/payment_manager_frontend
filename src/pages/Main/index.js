import './styles.css';
import React, { useContext, useEffect } from 'react';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';
import { AuthContext } from '../../AuthContext';


function Main() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    async function getUserData() {
      const response = await fetch('https://paymentmanager-api.herokuapp.com/',
        {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

      const userData = await response.json();

      console.log(userData);
    }

    getUserData();
  }, []);



  return (
    <div className="flex-row content-center gap-sm">
      <ClientsCard />
      <ChargesCard />
    </div>
  );
}

export default Main;
