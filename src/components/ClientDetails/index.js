import React, { useContext, useEffect, useState } from 'react';

import './styles.css';

import CloseIcon from '../../assets/close-icon.svg';
import MailIcon from '../../assets/mail.svg';
import PhoneIcon from '../../assets/phone.svg';

import AuthContext from '../../contexts/AuthContext';

function ClientDetails({ setModalClientDetails }) {
    const { token } = useContext(AuthContext);

    const id = localStorage.getItem('client-id', id)
    console.log("id:", id)

    const [infoForClientDetails, setInfoForClientDetails] = useState('');

    useEffect(() => {
        async function ClientInfo(id) {
            const response = await fetch(`https://paymentmanager-api.herokuapp.com/getBillings?id=${id}`,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            const clientInfo = await response.json();

            if (response.ok) {
                setInfoForClientDetails(clientInfo)
                console.log("info da request getBillings?id=${id}", infoForClientDetails);
                console.log("array de info, pos 1:", infoForClientDetails[1]);
            }
        }
        ClientInfo(id);
    }, []);


    return (
        <div className="modal">
            <div className="flex-row modal-content modal-padding modal-size-card space-evenly">
                <div className="flex-row half-width">
                    <img src={CloseIcon}
                        alt="close-icon"
                        className="modal-close-icon"
                        onClick={() => { setModalClientDetails(false) }}
                    />
                    <div className="pad-side full-width mt-xl">
                        <div className="pad-client-details">
                            <h2>Nome</h2>
                            <p>CPF</p>
                        </div>
                        <div className="flex-row border-right">
                            <div className="flex-row gap-sm half-width pad-client-details">
                                <img src={MailIcon} alt="email" />
                                <span>email@email.com</span>
                            </div>
                            <div className="flex-row gap-sm half-width pad-client-details">
                                <img src={PhoneIcon} alt="phone" />
                                <span>(xx) x xxxx-xxxx</span>
                            </div>
                        </div>
                        <div className="border-right pad-vertical">
                            <div className="flex-row">
                                <div className="flex-column pad-client-details">
                                    <h3>CEP</h3>
                                    <span>12.322-456</span>
                                </div>
                                <div className="flex-column ml-lg pad-client-details">
                                    <h3>Bairro</h3>
                                    <span>Rio vermei</span>
                                </div>
                                <div className="flex-column ml-lg pad-client-details">
                                    <h3>Cidade</h3>
                                    <span>Salvadô</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex-column pad-client-details">
                                    <h3>Logradouro</h3>
                                    <span>Rua batata</span>
                                </div>
                            </div>
                            <div className="flex-row">
                                <div className="flex-column pad-client-details">
                                    <h3>Complemento</h3>
                                    <span>casa 22</span>
                                </div>
                                <div className="flex-column ml-lg pad-client-details">
                                    <h3>Ponto de referência</h3>
                                    <span>Perto do farmácia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row half-width mt-xl">
                    <div className="flex-column full-width pad-md content-center items-center">
                        {(Array.isArray(infoForClientDetails)
                            ? infoForClientDetails.map((charge) => {
                                <div className="box-shadow-charges pad-card charge-card flex-row" key={charge.id}>
                                    <div className="flex-column space-between">
                                        <span>`${charge.id} + descricao cobranca`</span>
                                        <span>data cobrança</span>
                                    </div>
                                    <div className="flex-column space-between">
                                        <span>valor cobrança</span>
                                        <span>status cobrança</span>
                                    </div>
                                </div>
                            })
                            : '')}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientDetails;