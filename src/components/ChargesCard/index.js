import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import Money from '../../assets/money.svg';

import ReportFilterContext from '../../contexts/ReportFilterContext';

function ChargesCard() {
    const { title, setTitle } = useContext(ReportFilterContext);
    const { chargeStatus, setChargeStatus } = useContext(ReportFilterContext);

    const history = useHistory();

    function handlePredictedCharges() {
        history.push(`/relatorios/cobrancas?status=previstas`);
        setTitle("COBRANÇAS");
        setChargeStatus("PREVISTAS");
    }
    function handleExpiredCharges() {
        history.push(`/relatorios/cobrancas?status=vencidas`);
        setTitle("COBRANÇAS");
        setChargeStatus("VENCIDAS");
    }
    function handlePaidCharges() {
        history.push(`/relatorios/cobrancas?status=pagas`);
        setTitle("COBRANÇAS");
        setChargeStatus("PAGO");
    }

    return (
        <div className="card flex-column box-shadow mt-xxl ml-lg">
            <div className="flex-row topbar background-dark-smooth card-padding content-center border-round-top">
                <img src={Money} alt="charges" className="img-resize" />
                <p className="ml-sm">Cobranças</p>
            </div>
            <div className="flex-column card-content items-center content-center card-padding-lg">
                <div className="border-blue flex-row space-between pad-md items-center full-width pointer" onClick={handlePredictedCharges}>
                    <p>Previstas</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-red flex-row space-between mt-md pad-md items-center full-width pointer" onClick={handleExpiredCharges}>
                    <p>Vencidas</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-green flex-row space-between mt-lg pad-md items-center full-width pointer" onClick={handlePaidCharges}>
                    <p>Pagas</p>
                    <p className="font-xxl">0</p>
                </div>
            </div>
        </div>
    )
}

export default ChargesCard;