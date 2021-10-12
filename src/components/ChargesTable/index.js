import './styles.css';
import { useContext } from 'react';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';
import ChargeContext from '../../contexts/ChargeContext';

function ChargesTable() {
    const { chargesList } = useContext(ChargeContext);
    const { setValueModalAddCharges } = useContext(AddChargeModalContext);



    function handleOpenAddCharge() {
        setValueModalAddCharges(true);
    }
    function handleOpenCharge() {
        return;
    }
    const dataFormatada =
        (vencimento) => {
            let data = new Date(vencimento);
            data.setHours(data.getHours() + 3)
            return new Date(data).toLocaleDateString('pt-br')
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
                {chargesList.map((charge) => (
                    <div className="flex-column list-padding white-bg" onClick={handleOpenCharge} key={charge.id} >
                        <div className="flex-row white-bg enabled">
                            <div className="flex-column content-center flex-bar gap-sm" >
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
                                <span className={
                                    `${charge.status}` === "Pendente" ? "blue" : `${charge.status}` === "Vencida" ? "red" : `${charge.status}` === "pago" ? "green" : ''
                                }>{charge.status}</span>
                            </div>
                            <div className="flex-row items-center flex-bar" >
                                <span>{dataFormatada(charge.vencimento)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default ChargesTable;