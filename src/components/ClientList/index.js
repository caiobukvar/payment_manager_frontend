import './styles.css';
import React from 'react';

function ClientList() {
    return (
        <div className="flex-colum list-box">
            <button className="btn-white-large mb-xl">Adicionar cliente</button>
            <div className="flex-row border-grey white space-between list-padding">
                <p>Cliente</p>
                <p>Cobranças Feitas</p>
                <p>Cobranças Recebidas</p>
                <p>Status</p>
                <p></p>
            </div>

            <div className="flex-row space-between list-padding">
                <div className="flex-column client-box content-center space-between">
                    <h3 className="font-md-bold">Nome e Sobrenome da Cliente</h3>
                    <div className="flex-row items-center space-between">
                        <img src="" alt="mail-icon" />
                        <p className="font-md font-regular">email@email.com</p>
                    </div>
                    <div className="flex-row items-center space-between">
                        <img src="" alt="phone-icon" />
                        <p className="font-md font-regular">(DDD) 00000-0000</p>
                    </div>
                </div>
                <div className="flex-row items-center">
                    <p>R$ 00.000,00</p>
                </div>
                <div className="flex-row items-center">
                    <p>R$ 00.000,00</p>
                </div>
                <div className="flex-row items-center">
                    <p className="green">EM DIA</p>
                </div>
                <div className="flex-row items-center">
                    <img src="" alt="edit-icon" />
                </div>
            </div>
        </div>
    );
}

export default ClientList;