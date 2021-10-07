import "./styles.css";
import React, { useContext } from "react";
import ModalClientContext from "../../contexts/ModalClientContext";


function ClientList({ userClientList, handleLoadClientData }) {
    const { setValueModalClient } = useContext(ModalClientContext);

    function handleModal() {
        setValueModalClient(true);
    }

    return (
        <>
            <div className="flex-colum list-box">
                <button className="btn-white-large mb-xl">Adicionar cliente</button>
                <div className="flex-row border-grey white list-padding">
                    <p className="flex-basis">Cliente</p>
                    <p className="flex-basis">Cobranças Feitas</p>
                    <p className="flex-basis">Cobranças Recebidas</p>
                    <p className="flex-basis">Status</p>
                </div>
                {userClientList.map(client => (
                    <div className="flex-row list-padding" key={client.id} onClick={() => { handleLoadClientData(client.id) }}>
                        <div className="flex-column client-box content-center space-between flex-basis">
                            <h3 className="font-md-bold">{client.nome}</h3>
                            <div className="flex-row items-center gap-sm">
                                <img src="" alt="mail-icon" />
                                <p className="font-md font-regular">{client.email}</p>
                            </div>
                            <div className="flex-row items-center gap-sm">
                                <img src="" alt="phone-icon" />
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
                            <p className="green"> "EM DIA"</p>
                        </div>
                        <div className="flex-row items-center flex-basis">
                            <img src="" alt="edit-icon" onClick={handleModal} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ClientList;