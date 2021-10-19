import React, { useContext, useState } from 'react';
import './styles.css'

import { CircularProgress } from '@mui/material';

import ClientList from '../../components/ClientList';


import AuthContext from '../../contexts/AuthContext';

import useClientData from '../../hooks/useClientData';
import { useHistory } from 'react-router';


function Client() {
  const [setClientCharges] = useState();
  const { clientArray, isLoading } = useClientData();
  const history = useHistory();
  const { token } = useContext(AuthContext);


  // Pegar info COBRANÇAS no CLIENTE
  async function handleLoadClientCharges(id) {
    const response = await fetch(`https://paymentmanager-api.herokuapp.com/getBillings?id=${id}`,
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

    const data = await response.json();
    setClientCharges(data);
  }

  return (
    <div className="flex-column content-center mt-large">
      {isLoading &&
        <div className="modal-circular" >
          <CircularProgress color="secondary" />
        </div>
      }
      {
        !isLoading && (clientArray.length > 0 ?
          <ClientList
            modalClientDetails
            setModalClientDetails
            userClientList={clientArray}
            handleLoadClientCharges={handleLoadClientCharges}
            addVisible={true}
          /> :
          history.push("/novo-cliente")
        )
      }
    </div>
  );
}

export default Client;
