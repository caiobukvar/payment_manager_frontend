import './styles.css';
import { useContext } from 'react';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';

function ChargesTable() {
    const { setValueModalAddCharges } = useContext(AddChargeModalContext);

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
                <div className="flex-row list-padding white-bg" key="" onClick={handleOpenCharge} >
                    <div className="flex-row white-bg enabled" key="{client.id}" onClick="">
                        <div className="flex-column content-center flex-bar">
                            <h3 className="font-md-bold">#3</h3>
                        </div>
                        <div className="flex-row items-center flex-bar">
                            <span>Cliente 3</span>
                        </div>
                        <div className="flex-row items-center flex-bar">
                            <span>Pagamento relativo a...</span>
                        </div>
                        <div className="flex-row items-center flex-bar">
                            <span>R$ 00.000,00</span>
                        </div>
                        <div className="flex-row items-center flex-bar" >
                            <span className="green">PAGO</span>
                        </div>
                        <div className="flex-row items-center flex-bar" >
                            <span>12/12/2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ChargesTable;