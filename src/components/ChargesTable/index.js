import './styles.css';
import { useContext } from 'react';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';
import ChargeContext from '../../contexts/ChargeContext';

function ChargesTable() {
    const { setValueModalAddCharges } = useContext(AddChargeModalContext);
    const { chargesList } = useContext(ChargeContext);

    function handleOpenAddCharge() {
        setValueModalAddCharges(true);
    }
    function handleOpenCharge() {
        return;
    }

    return (
        <div className="flex-column content-center mt-large">
            <div className="flex-column list-box">
                <button className="btn-white-large mb-xl" onClick={handleOpenAddCharge}>Adicionar cobrança</button>
                <div className="flex-row border-grey white list-padding">
                    <p className="flex-bar">ID</p>
                    <p className="flex-bar">Cliente</p>
                    <p className="flex-bar">Descrição</p>
                    <p className="flex-bar">Valor</p>
                    <p className="flex-bar">Status</p>
                    <p className="flex-bar">Vencimento</p>
                </div>
                <div className="flex-row list-padding white-bg" onClick={handleOpenCharge} >
                    {chargesList.map((charge) => (
                        <div className="flex-row white-bg enabled" key={charge.id}>
                            <div className="flex-column content-center flex-bar">
                                <h3 className="font-md-bold">{`# ${charge.id}`}</h3>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span>{charge.nome}</span>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span>{charge.descricao}</span>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span>{`R$ ${charge.valor}`}</span>
                            </div>
                            <div className="flex-row items-center flex-bar" >
                                <span className="green">{charge.status}</span>
                            </div>
                            <div className="flex-row items-center flex-bar" >
                                <span>{charge.vencimento}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
export default ChargesTable;