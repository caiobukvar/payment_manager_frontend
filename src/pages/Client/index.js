import './styles.css'
import React, { useEffect, useContext, useState } from 'react';
import { CircularProgress } from '@mui/material';
import FormClient from '../../components/FormClient';
import ClientList from '../../components/ClientList';
import ClientDetails from '../../components/ClientDetails';
import AuthContext from '../../contexts/AuthContext';
import AddClientModalContext from '../../contexts/AddClientModalContext';
import CloseIcon from '../../assets/close-icon.svg';


function Client() {
    const [clientData, setClientData] = useState();
    const [clientCharges, setClientCharges] = useState();
    const { token } = useContext(AuthContext);
    const { valueModalAddClient, setValueModalAddClient } = useContext(AddClientModalContext);
    const [userClientList, setUserClientList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalClientDetails, setModalClientDetails] = useState(false);

    // Pegar info USUÁRIO
    useEffect(() => {
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
            console.log(clientData);
            setUserClientList(clientData);
            setIsLoading(false);
        }
        UserClientInfo();
    }, []);

    // Pegar info COBRANÇAS no CLIENTE
    async function handleLoadClientCharges(id) {
        const response = await fetch(`https://paymentmanager-api.herokuapp.com/customerBillings?id=${id}`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

        const clientFind = clientData.find(client => client.id === id);
        const clientCharges = await response.json();
        setClientData(clientFind);
        setClientCharges(clientCharges);
        setModalClientDetails(true);
        console.log(dataClient);
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
                !isLoading && (userClientList.length > 0 ?
                    <ClientList
                        userClientList={userClientList}
                        handleLoadClientCharges={handleLoadClientCharges}
                    /> :
                    <div>
                        <h2 className="position-left">{'//'} ADICIONAR CLIENTE</h2>
                        <FormClient />
                    </div>
                )
            }
            {modalClientDetails && <ClientDetails />}
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
