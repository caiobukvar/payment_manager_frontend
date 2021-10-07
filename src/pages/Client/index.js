import './styles.css'
import React, { useEffect, useContext, useState } from 'react';
import { CircularProgress } from '@mui/material';
import FormClient from '../../components/FormClient';
import ClientList from '../../components/ClientList';
import ClientDetails from '../../components/ClientDetails';
import AuthContext from '../../contexts/AuthContext';


function Client() {
    const [clientData, setClientData] = useState();
    const { token } = useContext(AuthContext);
    const [userClientList, setUserClientList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalClientDetails, setModalClientDetails] = useState(false);

    async function handleLoadClientData(id) {
        const response = await fetch(`https://paymentmanager-api.herokuapp.com/customerData?id=${id}`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
        const dataClient = await response.json();
        setClientData(dataClient);
        setModalClientDetails(true);
        console.log(dataClient);
    }

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


    return (
        <div className="flex-column content-center mt-large">
            {isLoading &&
                <div className="modal" >
                    <CircularProgress />
                </div>}
            {
                !isLoading && (userClientList.length > 0 ?
                    <ClientList
                        userClientList={userClientList}
                        handleLoadClientData={handleLoadClientData}
                    /> :
                    <FormClient />
                )
            }
            {modalClientDetails && <ClientDetails />}
        </div>
    );
}

export default Client;
