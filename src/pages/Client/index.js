import React, { useContext, useState } from 'react';
import './styles.css'

import { CircularProgress } from '@mui/material';

import FormClient from '../../components/FormClient';
import ClientList from '../../components/ClientList';
import ClientDetails from '../../components/ClientDetails';

import AuthContext from '../../contexts/AuthContext';
import AddClientModalContext from '../../contexts/AddClientModalContext';

import CloseIcon from '../../assets/close-icon.svg';
import useClientData from '../../hooks/useClientData';


function Client() {
    const [clientCharges, setClientCharges] = useState();
    const [modalClientDetails, setModalClientDetails] = useState(false);

    const { clientArray, isLoading } = useClientData();

    const { token } = useContext(AuthContext);
    const { valueModalAddClient, setValueModalAddClient } = useContext(AddClientModalContext);


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
        setModalClientDetails(true);
        console.log(clientCharges);
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
                        userClientList={clientArray}
                        handleLoadClientCharges={handleLoadClientCharges}
                    /> :
                    <div>
                        <h2 className="position-left">{'//'} ADICIONAR CLIENTE</h2>
                        <FormClient />
                    </div>
                )
            }
            {modalClientDetails &&
                <ClientDetails
                    modalClientDetails={modalClientDetails}
                    setModalClientDetails={setModalClientDetails}
                />}
            {valueModalAddClient &&
                <div className="modal">
                    <div className="modal-content">
                        <FormClient />
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => { setValueModalAddClient(false) }}
                        />
                    </div>
                </div>
            }
            {valueModalAddClient &&
                <div className="modal">
                    <div className="modal-content">
                        <FormClient />
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => { setValueModalAddClient(false) }}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default Client;
