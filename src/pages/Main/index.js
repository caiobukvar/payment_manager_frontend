import React, { useContext, useEffect, useState } from 'react';

import './styles.css';

import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';

import AuthContext from '../../contexts/AuthContext';


function Main() {
  const { token } = useContext(AuthContext);
  const [userClientNumbers, setUserClientNumbers] = useState();
  const [userChargeNumbers, setUserChargeNumbers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);

      async function loadUserNumbers() {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/getDataToHome',
          {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });

        const userNumbers = await response.json();

        console.log(userNumbers);

        if (response.ok) {
          setUserClientNumbers(userNumbers.clients);
          setUserChargeNumbers(userNumbers.billings);
          setIsLoading(false);
        }
        setIsLoading(false);
      }

      loadUserNumbers();
    } catch (error) {
      console.log(error.message)
    }
  }, []);

  return (
    <div className="flex-row content-center full-height">
      <ClientsCard userClientNumbers={userClientNumbers} />
      <ChargesCard userChargeNumbers={userChargeNumbers} />
    </div>
  );
}

export default Main;
