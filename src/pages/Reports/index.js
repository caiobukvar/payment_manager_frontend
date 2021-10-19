import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import './styles.css';

import { CircularProgress } from '@mui/material';

import ChargesTable from '../../components/ChargesTable';

import AuthContext from '../../contexts/AuthContext';
import ChargeContext from '../../contexts/ChargeContext';
import ReportFilter from '../../components/ReportFilter';
import ClientList from '../../components/ClientList';
import useClientData from '../../hooks/useClientData';

function Reports() {
    const [isLoading, setIsLoading] = useState(true);
    let location = useLocation();
    const [status, setStatus] = useState('');

    const { chargesList, setChargesList } = useContext(ChargeContext);
    const { clientArray } = useClientData();

    const { token } = useContext(AuthContext);

    useEffect(() => {
        async function loadAllUserBillings() {
            const response = await fetch('https://paymentmanager-api.herokuapp.com/allUserBillings',
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            const clientCharges = await response.json();

            if (response.ok) {
                setChargesList(clientCharges);
                setIsLoading(false);
            } else {
                setChargesList([]);
                setIsLoading(false);
            }
        }
        loadAllUserBillings();
    }, []);

    return (
        <div>
            {isLoading &&
                <div className="modal-circular" >
                    <CircularProgress color="secondary" />
                </div>
            }
            {!isLoading &&
                location.pathname.includes('/clientes')
                ?
                (clientArray.length > 0 &&
                    <div className="flex-column content-center mt-large">
                        <ReportFilter />
                        <ClientList
                            clientArray={clientArray}
                            addVisible={false}
                        />
                    </div>
                )
                :
                (chargesList.length > 0 &&
                    <div>
                        <ReportFilter />
                        <ChargesTable
                            chargesList={chargesList}
                        />
                    </div>
                )
            }
        </div>
    )
};

export default Reports;