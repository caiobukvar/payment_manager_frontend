import "./styles.css";
import React, { useContext } from "react";
import ModalClientContext from "../../contexts/ModalClientContext";

function ClientList({ userClientList }) {
    const { setValueModalClient } = useContext(ModalClientContext);

    function handleModal() {
        setValueModalClient(true);
    }

    return (
        <>
            <div className="flex-colum list-box">
                <button className="btn-white-large mb-xl">Adicionar cliente</button>
                <div className="flex-row border-grey white space-between list-padding">
                    <p>Cliente</p>
                    <p>Cobranças Feitas</p>
                    <p>Cobranças Recebidas</p>
                    <p>Status</p>
                    <p></p>
                </div>
                {/* {userClientList.map(client => (
                    <div className="flex-row space-between list-padding">
                        <div className="flex-column client-box content-center space-between">
                            <h3 className="font-md-bold">{client.nome}</h3>
                            <div className="flex-row items-center space-between">
                                <img src="" alt="mail-icon" />
                                <p className="font-md font-regular">{client.email}</p>
                            </div>
                            <div className="flex-row items-center space-between">
                                <img src="" alt="phone-icon" />
                                <p className="font-md font-regular">{client.telefone}</p>
                            </div>
                        </div>
                        <div className="flex-row items-center">
                            <p>R$ 00.000,00</p>
                        </div>
                        <div className="flex-row items-center">
                            <p>R$ 00.000,00</p>
                        </div>
                        <div className={`flex-row items-center ${client.debtPaid ? "green" : "red"}`} >
                            <p className="green">{ok ? "EM DIA" : "INADIMPLENTE"}</p>
                        </div>
                        <div className="flex-row items-center">
                            <img src="" alt="edit-icon" onClick={handleModal} />
                        </div>
                    </div>
                ))} */}
                <div className="flex-row items-center" onClick={handleModal} >
                    <img src="" alt="edit-icon" />
                </div>
            </div>
        </>
    );
}

export default ClientList;