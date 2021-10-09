import React, { useState, useEffect, useContext } from 'react'
import './styles.css';
import ChargesTable from '../../components/ChargesTable';
import AuthContext from '../../contexts/AuthContext';



function Charges() {
    const [isLoading, setIsLoading] = useState(true);
    const [chargesList, setChargesList] = useState([]);
    const { token } = useContext(AuthContext);


    useEffect(() => {
        async function UserChargesInfo() {
            const response = await fetch('https://paymentmanager-api.herokuapp.com/allBillings',
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            const clientCharges = await response.json();
            console.log(clientCharges);
            setChargesList(clientCharges);
            setIsLoading(false);
        }
        UserChargesInfo();
    }, []);

    return (
        <div>
            {
                !isLoading && (chargesList.length > 0 ?
                    <ChargesTable
                        chargesList={chargesList}
                    /> :
                    <AddCharges />
                )
            }


        </div>
    )
};

export default Charges;