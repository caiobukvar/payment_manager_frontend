import React, { useContext, useEffect } from 'react';

import './styles.css';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';

import AuthContext from '../../contexts/AuthContext';


function Main() {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    try {
      async function loadUserNumbers() {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/getUserNumbers',
          {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });

        const userNumbers = await response.json();

        // console.log(userNumbers);
        // const userClientNumbers = userNumbers.clients;
        // const userChargeNumbers = userNumbers.charges;

        // userClientNumbers.emDia
        // userClientNumbers.inadimplentes


        if (response.ok) {
          setChargesList(clientCharges);
          setIsLoading(false);
        } else {
          setChargesList([]);
          setIsLoading(false);
        }
      }

      loadUserNumbers();
    } catch (error) {
      console.log(error.message)
    }
  }, []);

  return (
    <div className="flex-row content-center full-height">
      <ClientsCard />
      <ChargesCard />
    </div>
  );
}

export default Main;
