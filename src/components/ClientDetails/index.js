import React, { useContext, useEffect, useState } from 'react';

import './styles.css';

import CloseIcon from '../../assets/close-icon.svg';
import MailIcon from '../../assets/mail.svg';
import PhoneIcon from '../../assets/phone.svg';

import AuthContext from '../../contexts/AuthContext';
import { CircularProgress } from '@mui/material';

function ClientDetails({ setModalClientDetails, clientInformation }) {
    const { token } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [customerData, setCustomerData] = useState([]);
    const [info, setInfo] = useState([]);
    const { id } = clientInformation;

    useEffect(() => {
        try {
            async function getDataCustomer(id) {
                const response = await fetch(`https://paymentmanager-api.herokuapp.com/getDataCustomer?id=${id}`,
                    {
                        method: 'GET',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
                setLoading(true);

                const client = await response.json();

                const clientDetails = {
                    nome: client[0].nome,
                    email: client[0].email,
                    telefone: client[0].telefone,
                    cep: client[0].cep,
                    bairro: client[0].bairro,
                    cidade: client[0].cidade,
                    logradouro: client[0].logradouro,
                    complemento: client[0].complemento,
                    referencia: client[0].referencia,
                }

                console.log("client:", client);
                console.log("clientDetails:", clientDetails);

                if (response.ok) {
                    setLoading(false);
                    setCustomerData(client);
                    setInfo(clientDetails);
                    console.log("data", customerData);
                    console.log("info", info);
                }
            }
            getDataCustomer(id);


        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div className="modal">
            {loading &&
                <div className="modal-circular" >
                    <CircularProgress color="secondary" />
                </div>
            }
            {
                !loading &&
                <div className="flex-row modal-content modal-padding modal-size-card space-evenly">
                    <div className="flex-row half-width">
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => setModalClientDetails(false)}
                        />
                        <div className="pad-side full-width mt-xl">
                            <div className="pad-client-details">
                                <h2>{clientInformation.nome}</h2>
                                <p>CPF</p>
                            </div>
                            <div className="flex-row border-right">
                                <div className="flex-row gap-sm half-width pad-client-details">
                                    <img src={MailIcon} alt="email" />
                                    <span>{clientInformation.email}</span>
                                </div>
                                <div className="flex-row gap-sm half-width pad-client-details">
                                    <img src={PhoneIcon} alt="phone" />
                                    <span>TELEFONE</span>
                                </div>
                            </div>
                            <div className="border-right pad-vertical">
                                <div className="flex-row">
                                    <div className="flex-column pad-client-details">
                                        <h3>CEP</h3>
                                        <span>12.323-231</span>
                                    </div>
                                    <div className="flex-column ml-lg pad-client-details">
                                        <h3>Bairro</h3>
                                        <span>BAIRRO X</span>
                                    </div>
                                    <div className="flex-column ml-lg pad-client-details">
                                        <h3>Cidade</h3>
                                        <span>Sampa</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex-column pad-client-details">
                                        <h3>Logradouro</h3>
                                        <span>Rua dificuldade</span>
                                    </div>
                                </div>
                                <div className="flex-row">
                                    <div className="flex-column pad-client-details">
                                        <h3>Complemento</h3>
                                        <span>casa 1</span>
                                    </div>
                                    <div className="flex-column ml-lg pad-client-details">
                                        <h3>Ponto de referência</h3>
                                        <span>perto do petshop</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row half-width mt-xl">
                        <div className="flex-column full-width pad-md content-center items-center">
                            {customerData && customerData.map((charge) => {
                                <div className="box-shadow-charges pad-card charge-card flex-row" key={charge.id}>
                                    <div className="flex-column space-between">
                                        <span>`"#"${charge.id} ${charge.descricao}`</span>
                                        <span>{charge.vencimento}</span>
                                    </div>
                                    <div className="flex-column space-between">
                                        <span>{parseFloat(charge.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                        <span>{charge.status}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default ClientDetails;