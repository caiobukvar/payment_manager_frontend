import './styles.css';
import React, { useState, useEffect, useContext } from 'react'
import ChargesTable from '../../components/ChargesTable';
import AddCharges from '../../components/AddCharges';
import CloseIcon from '../../assets/close-icon.svg'
import AuthContext from '../../contexts/AuthContext';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';


function Charges() {
    const [isLoading, setIsLoading] = useState(true);
    const [chargesList, setChargesList] = useState(true);
    const { token } = useContext(AuthContext);
    const { valueModalAddCharges, setValueModalAddCharges } = useContext(AddChargeModalContext);

    useEffect(() => {
        async function UserChargesInfo() {
            const response = await fetch('https://paymentmanager-api.herokuapp.com/getBillings',
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
            {valueModalAddCharges &&
                <div className="modal">
                    <div className="modal-content">
                        <AddCharges />
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => { setValueModalAddCharges(false) }}
                        />
                    </div>
                </div>
            }

        </div>
    )
};

export default Charges;