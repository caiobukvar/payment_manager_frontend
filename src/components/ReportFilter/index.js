import { useContext, useState } from 'react';
import { useHistory } from 'react-router';

import './styles.css'

import RectangleIcon from '../../assets/rectangle.svg';

import ReportFilterContext from '../../contexts/ReportFilterContext';

function ReportFilter() {
    const [modalOpen, setModalOpen] = useState();
    const [secondModalOpen, setSecondModalOpen] = useState();
    const { title, setTitle } = useContext(ReportFilterContext);
    const { chargeStatus, setChargeStatus } = useContext(ReportFilterContext);
    const { clientStatus, setClientStatus } = useContext(ReportFilterContext);

    const history = useHistory();

    function handleModal() {
        setModalOpen(!modalOpen);
    }

    function handleSecondModal() {
        setSecondModalOpen(!secondModalOpen);
    }

    function handleFilterClients() {
        setModalOpen(false);
        setClientStatus("EM DIA");
        setTitle("CLIENTES");
        history.push('/relatorios/clientes?status=em-dia')
    }

    function handleFilterCharges() {
        setModalOpen(false);
        setTitle("COBRANÇAS");
        setChargeStatus("PAGO");
        history.push('/relatorios/cobrancas?status=pagas')
    }

    function handleFilterStatusPago() {
        setSecondModalOpen(false);
        setTitle("COBRANÇAS");
        setChargeStatus("PAGAS");
        history.push('/relatorios/cobrancas?status=pagas');
    }
    function handleFilterStatusVencida() {
        setSecondModalOpen(false);
        setTitle("COBRANÇAS");
        setChargeStatus("VENCIDAS");
        history.push('/relatorios/cobrancas?status=vencidas');
    }

    function handleFilterStatusEmDia() {
        setSecondModalOpen(false);
        setTitle("CLIENTES");
        setClientStatus("EM DIA");
        history.push('/relatorios/clientes?status=em-dia')
    }
    function handleFilterStatusCobrancaEmDia() {
        setSecondModalOpen(false);
        setTitle("COBRANÇAS");
        setChargeStatus("EM DIA");
        history.push('/relatorios/cobrancas?status=em-dia')
    }

    function handleFilterStatusInadimplentes() {
        setSecondModalOpen(false);
        setTitle("CLIENTES");
        setClientStatus("INADIMPLENTES");
        history.push('/relatorios/clientes?status=inadimplentes');
    }


    return (
        <div className="flex-row report-box screen-pos">
            <div className="font-lg-bold mr-md">
                <p className="pointer" onClick={handleModal}>{title}</p>
                {modalOpen &&
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
                }
            </div>
            <div className="flex-column content-center">
                <img src={RectangleIcon} alt="seta" />
            </div>
            <div className="ml-md font-lg-bold content-center ">
                <p className="pointer" onClick={handleSecondModal}>{title === "COBRANÇAS" ? chargeStatus : clientStatus}</p>
                {secondModalOpen && (title === "COBRANÇAS") &&
                    <div className="box-shadow-reports modal-shadow white-bg pad-sm text-center">
                        <p className={chargeStatus === "PENDENTES" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusCobrancaEmDia}>
                            Em Dia
                        </p>
                        <p className={chargeStatus === "VENCIDAS" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusVencida}>
                            Vencidas
                        </p>
                        <p className={chargeStatus === "PAGAS" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusPago}>
                            Pagas
                        </p>
                    </div>
                }
                {secondModalOpen && (title === "CLIENTES") &&
                    <div className="box-shadow-reports modal-shadow white-bg pad-sm text-center">
                        <p className={clientStatus === "EM DIA" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusEmDia}>
                            Em Dia
                        </p>
                        <p className={clientStatus === "INADIMPLENTES" ? `font-md-reports selected-title pointer` : `font-md-reports pointer`}
                            onClick={handleFilterStatusInadimplentes}>
                            Inadimplentes
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ReportFilter;