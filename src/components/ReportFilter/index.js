import { useState } from 'react';

import './styles.css'

import RectangleIcon from '../../assets/rectangle.svg';

function ReportFilter() {
    const [modalOpen, setModalOpen] = useState();
    const [secondModalOpen, setSecondModalOpen] = useState();
    const [title, setTitle] = useState("CLIENTES");
    const [chargeStatus, setChargeStatus] = useState("EM DIA");

    function handleModal() {
        setModalOpen(!modalOpen);
    }
    function handleSecondModal() {
        setSecondModalOpen(!secondModalOpen);
    }
    function handleFilterClients() {
        setModalOpen(false);
        setTitle("CLIENTES");
    }
    function handleFilterCharges() {
        setModalOpen(false);
        setTitle("COBRANÇAS");
    }
    function handleFilterStatusEmDia() {
        setSecondModalOpen(false);
        setChargeStatus("EM DIA");
    }
    function handleFilterStatusInadimplentes() {
        setSecondModalOpen(false);
        setChargeStatus("INADIMPLENTES");
    }

    return (
        <div className="flex-row report-box screen-pos">
            <div className="font-lg-bold mr-md">
                <p className="pointer" onClick={handleModal}>{title}</p>
                {modalOpen ?
                    <div className="box-shadow-reports modal-shadow white-bg pad-sm text-center">
                        <p className={title === "CLIENTES" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterClients}>
                            Clientes
                        </p>
                        <p className={title === "COBRANÇAS" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterCharges}>
                            Cobranças
                        </p>
                    </div>
                    : ''}
            </div>
            <div className="flex-column content-center">
                <img src={RectangleIcon} alt="seta" />
            </div>
            <div className="ml-md font-lg-bold content-center ">
                <p className="pointer" onClick={handleSecondModal}>{chargeStatus}</p>
                {secondModalOpen ?
                    <div className="box-shadow-reports modal-shadow white-bg pad-sm text-center">
                        <p className={chargeStatus === "EM DIA" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusEmDia}>
                            Em Dia
                        </p>
                        <p className={chargeStatus === "INADIMPLENTES" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`} onClick={handleFilterStatusInadimplentes}>
                            Inadimplentes
                        </p>
                    </div>
                    : ''}
            </div>
        </div>
    );
}

export default ReportFilter;