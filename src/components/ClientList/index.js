import React, { useContext, useState } from "react";

import "./styles.css";
import ModalEditClientContext from "../../contexts/ModalEditClientContext";
import AddClientModalContext from "../../contexts/AddClientModalContext";
import SearchContext from "../../contexts/SearchContext";

import SearchBar from '../../components/SearchBar';

import editIcon from '../../assets/edit.svg'
import phoneIcon from '../../assets/phone.svg'
import mailIcon from '../../assets/mail.svg'
import useClientData from "../../hooks/useClientData";
import ClientDetails from "../ClientDetails";
import ReportFilter from "../ReportFilter";



function ClientList({ handleLoadClientCharges, addVisible }) {
    const { setValueModalEditClient } = useContext(ModalEditClientContext);
    const { setValueModalAddClient } = useContext(AddClientModalContext);
    const { searchTerm } = useContext(SearchContext);

    const [modalClientDetails, setModalClientDetails] = useState(false);
    const [clientInformation, setClientInformation] = useState();

    const { clientArray } = useClientData();


    function handleAddClient() {
        setValueModalAddClient(true);
    }

    function handleClick(client) {
        handleLoadClientCharges(client.id);
        setClientInformation(client);
        localStorage.setItem('client-id', client.id);
        setModalClientDetails(true);
    }

    const array = clientArray.filter((clients) => {
        if (searchTerm === "") {
            return clients
        } else if (clients.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
            return clients.nome
        } else if (String(clients.cpf).includes(searchTerm)) {
            return clients.cpf
        } else if ((clients.email).includes(searchTerm)) {
            return clients.email
        }
    });

    return (
        <>
            <div className="flex-column list-box">
                <div className="flex-row">
                    {addVisible &&
                        <button className="btn-white-large" onClick={handleAddClient}>Adicionar cliente</button>
                    }
                    <SearchBar />
                </div>
                <div className="flex-row border-grey white list-padding">
                    <p className="flex-basis">Cliente</p>
                    <p className="flex-basis">Cobranças Feitas</p>
                    <p className="flex-basis">Cobranças Recebidas</p>
                    <p className="flex-basis">Status</p>
                </div>
                {array.length > 0 ? array.map(client => (
                    <div className="flex-row list-padding white-bg mb-md" key={client.id} >
                        <div className="flex-column client-box content-center flex-basis enabled" onClick={() => handleClick(client)}>
                            <h3 className="font-md-bold">{client.nome}</h3>
                            <div className="flex-row items-center gap-xs">
                                <img src={mailIcon} alt="mail-icon" />
                                <p className="font-md font-regular">{client.email}</p>
                            </div>
                            <div className="flex-row items-center gap-xs">
                                <img src={phoneIcon} alt="phone-icon" />
                                <p className="font-md font-regular">{client.telefone}</p>
                            </div>
                        </div>
                        <div className="flex-row items-center flex-basis">
                            <p className="font-regular">{parseFloat(client.valortotalcobrancasfeitas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div className="flex-row items-center flex-basis">
                            <p className="font-regular">{parseFloat(client.valortotalcobrancaspagas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                        <div className="flex-row items-center flex-basis" >
                            {((client.valortotalcobrancasfeitas || 0) - (client.valortotalcobrancaspagas || 0) === 0) ?
                                (<p className="green">
                                    EM DIA
                                </p>)
                                :
                                (<p className="red">
                                    INADIMPLENTE
                                </p>)
                            }
                        </div>
                        <div className="flex-row items-center flex-basis" >
                            <img
                                src={editIcon}
                                alt="edit-icon"
                                className="enabled"
                                onClick={() => { setClientInformation(client), setValueModalEditClient(true), localStorage.setItem('client-id', client.id) }}
                            />
                        </div>
                    </div>
                ))
                    :
                    <div className="flex-row content-center items-center flex-basis mt-md">
                        <p className="font-lg">
                            Nenhum resultado encontrado
                        </p>
                    </div>
                }
            </div>
            {modalClientDetails &&
                <ClientDetails
                    clientId={clientInformation.id}
                    modalClientDetails={modalClientDetails}
                    setModalClientDetails={setModalClientDetails}
                    handleLoadClientCharges={handleLoadClientCharges}
                />}
        </>
    );
}

export default ClientList;