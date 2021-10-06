import './styles.css'
import FormClient from '../../components/FormClient';
import ClientList from '../../components/ClientList';
import React, { useEffect, useContext, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

function Client() {
    const { token } = useContext(AuthContext);
    const [userClientList, setUserClientList] = useState([]);

    useEffect(() => {
        async function UserClientInfo() {

            const response = await fetch('https://paymentmanager-api.herokuapp.com/listCustomers',
                {
                    method: 'GET',
                    body: JSON.stringify(),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            const clientList = await response.json();
            setUserClientList(clientList);
        }
        UserClientInfo();
    }, []);


    return (
        <div className="flex-column content-center mt-large">
            {userClientList.length > 0 ? <ClientList /> : <FormClient />}
        </div>
    );
}

export default Client;