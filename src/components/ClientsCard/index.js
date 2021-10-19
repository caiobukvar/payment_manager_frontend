import React, { useContext } from 'react';
import Clients from '../../assets/clients.svg'

import './styles.css';

import { useHistory } from 'react-router-dom';

import ReportFilterContext from '../../contexts/ReportFilterContext';

function ClientsCard() {
    const { title, setTitle } = useContext(ReportFilterContext);
    const { clientStatus, setClientStatus } = useContext(ReportFilterContext);

    const history = useHistory();

    function handleDefaulterClients() {
        history.push(`/relatorios/clientes?status=inadimplentes`);
        setTitle("CLIENTES");
        setClientStatus("INADIMPLENTES")
    }

    function handleInDayClients() {
        history.push(`/relatorios/clientes?status=em-dia`);
        setTitle("CLIENTES");
        setClientStatus("EM DIA")
    }

    return (
        <div className="card-client flex-column box-shadow mt-xxl">
            <div className="flex-row topbar background-dark-smooth card-padding content-center border-round-top">
                <img src={Clients} alt="clients" className="img-resize" />
                <p className="ml-sm">Clientes</p>
            </div>
            <div className="flex-column card-content items-center content-center card-padding-lg">
                <div className="border-green flex-row space-between pad-md items-center full-width pointer" onClick={handleInDayClients}>
                    <p>Em dia</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-red flex-row space-between mt-md pad-md items-center full-width pointer" onClick={handleDefaulterClients}>
                    <p>Inadimplentes</p>
                    <p className="font-xxl">0</p>
                </div>
            </div>
        </div>
    )
}

export default ClientsCard;