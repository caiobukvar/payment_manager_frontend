import './styles.css';
import React from 'react';
import Clients from '../../assets/clients.svg'

function ClientsCard() {
    return (
        <div className="card-client flex-column box-shadow mt-xxl">
            <div className="flex-row topbar background-dark-smooth card-padding content-center border-round-top">
                <img src={Clients} alt="clients" className="img-resize" />
                <p className="ml-sm">Clientes</p>
            </div>
            <div className="flex-column card-content items-center content-center card-padding-lg">
                <div className="border-green flex-row space-between pad-md items-center full-width">
                    <p>Em dia</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-red flex-row space-between mt-md pad-md items-center full-width">
                    <p>Inadimplentes</p>
                    <p className="font-xxl">0</p>
                </div>
            </div>
        </div>
    )
}

export default ClientsCard;