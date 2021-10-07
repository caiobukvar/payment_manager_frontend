import "./styles.css";
import React, { useContext } from "react";
import ModalClientContext from "../../contexts/ModalClientContext";
import AddClientModalContext from "../../contexts/AddClientModalContext";
import FormClient from '../FormClient'

import editIcon from '../../assets/edit.svg'
import phoneIcon from '../../assets/phone.svg'
import mailIcon from '../../assets/mail.svg'


function ClientList({ userClientList, handleLoadClientData, setModalClientDetails }) {
    const { setValueModalClient } = useContext(ModalClientContext);
    const { setValueModalAddClient } = useContext(AddClientModalContext);

    function handleModal() {
        setValueModalClient(true);
    }
    function handleAddClient() {
        setValueModalAddClient(true);
    }
    function handleClientDetailsModal() {
        setModalClientDetails(true);
    }

    return (
        <>
            <div className="flex-colum list-box">
                <button className="btn-white-large mb-xl" onClick={handleAddClient}>Adicionar cliente</button>

                {setValueModalAddClient === true ? <FormClient /> : ''}

                <div className="flex-row border-grey white list-padding">
                    <p className="flex-basis">Cliente</p>
                    <p className="flex-basis">Cobranças Feitas</p>
                    <p className="flex-basis">Cobranças Recebidas</p>
                    <p className="flex-basis">Status</p>
                </div>
                {userClientList.map(client => (
                    <div className="flex-row list-padding white-bg" key={client.id} onClick={() => { handleLoadClientData(client.id), handleClientDetailsModal }}>
                        <div className="flex-column client-box content-center space-between flex-basis enabled">
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
                            <p>R$ 00.000,00</p>
                        </div>
                        <div className="flex-row items-center flex-basis">
                            <p>R$ 00.000,00</p>
                        </div>
                        <div className={`flex-row items-center flex-basis ${client.debtPaid ? "green" : "red"}`} >
                            <p className="green">{client.debtPaid ? "EM DIA" : "INADIMPLENTE"}</p>
                        </div>
                        <div className="flex-row items-center flex-basis" >
                            <img
                                src={editIcon}
                                alt="edit-icon"
                                className="enabled"
                                onClick={handleModal}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ClientList;