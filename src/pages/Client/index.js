import './styles.css'
// import FormClient from '../../components/FormClient';
import ClientList from '../../components/ClientList';
import React, { useEffect, useContext } from 'react';
import AuthContext from '../../AuthContext';

function Client() {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        async function clientInfo() {

            const response = await fetch('https://paymentmanager-api.herokuapp.com/client',
                {
                    method: 'GET',
                    body: JSON.stringify(),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

            const clientList = await response.json();
            console.log(clientList);

            console.log("renderizar adicionar cliente caso não tenha nada no BD")
        }
        clientInfo();
    }, []);


    return (
        <div className="flex-column content-center mt-large">
            {/* <h2 className="position-left">{'//'} ADICIONAR CLIENTE</h2>
            <FormClient /> */}
            <ClientList />
        </div>
    );
}

export default Client;