import React, { useState, useEffect, useContext } from 'react'

import './styles.css';

import { CircularProgress } from '@mui/material';

import ChargesTable from '../../components/ChargesTable';

import AuthContext from '../../contexts/AuthContext';
import ChargeContext from '../../contexts/ChargeContext';
import { useHistory } from 'react-router';

function Charges() {
    const [isLoading, setIsLoading] = useState(true);
    const { chargesList, setChargesList } = useContext(ChargeContext);
    const history = useHistory();

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
            {
                !isLoading && (chargesList.length > 0 ?
                    <ChargesTable
                        chargesList={chargesList}
                    />
                    :
                    history.push('/nova-cobranca')
                )
            }
        </div>
    )
};

export default Charges;