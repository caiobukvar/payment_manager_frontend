import { useContext, useEffect, useState } from 'react';
import './styles.css';

import EditChargeModalContext from '../../contexts/EditChargeModalContext';
import ChargeContext from '../../contexts/ChargeContext';

import ModalEditCharges from '../../components/ModalEditCharges';
import SearchBar from '../../components/SearchBar';
import SearchContext from '../../contexts/SearchContext';

function ChargesTable() {
    const [chargeInfo, setChargeInfo] = useState();
    const { searchTerm } = useContext(SearchContext);
    const { chargesList } = useContext(ChargeContext);
    const { valueModalEditCharges, setValueModalEditCharges } = useContext(EditChargeModalContext);

    const dataFormatada =
        (vencimento) => {
            let data = new Date(vencimento);
            data.setHours(data.getHours() + 3)
            return new Date(data).toLocaleDateString('pt-br')
        }

    async function handleClick(charge) {
        setValueModalEditCharges(true);
        setChargeInfo(charge);
    }

    return (
        <div className="flex-column content-center mt-large">
            <div className="flex-column list-box">
                <SearchBar />
                <div className="flex-row border-grey white list-padding">
                    <p className="flex-bar">ID</p>
                    <p className="flex-bar">Cliente</p>
                    <p className="flex-bar">Descrição</p>
                    <p className="flex-bar">Valor</p>
                    <p className="flex-bar">Status</p>
                    <p className="flex-bar">Vencimento</p>
                </div>
                {chargesList.filter((charges) => {
                    if (searchTerm === "") {
                        console.log(charges)
                        return charges
                    } else if (charges.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
                        console.log(charges.nome.toLowerCase());
                        return charges.nome
                    } else if (String(charges.id).includes(searchTerm)) {
                        return charges.id
                    } else if (String(charges.cpf).includes(searchTerm)) {
                        return charges.cpf
                    } else if ((charges.email).includes(searchTerm)) {
                        return charges.email
                    }
                }).map((charge) => (
                    <div className="flex-column list-padding white-bg" onClick={() => handleClick(charge)} key={charge.id}>
                        <div className="flex-row white-bg enabled">
                            <div className="flex-column content-center flex-bar" >
                                <h3 className="font-md-custom gray">{`# ${charge.id}`}</h3>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span>{charge.nome}</span>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span className="overflow">{charge.descricao}</span>
                            </div>
                            <div className="flex-row items-center flex-bar">
                                <span>{parseFloat(charge.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                            <div className="flex-row items-center flex-bar" >
                                <span className={
                                    `${charge.status}` === "pendente" ? "blue" :
                                        `${charge.status}` === "pago" ? "green" :
                                            `${charge.status}` === "vencida" ? "red" : ''
                                }>
                                    <p>{(charge.status).toUpperCase()}</p>
                                </span>
                            </div>
                            <div className="flex-row items-center flex-bar" >
                                <span>{dataFormatada(charge.vencimento)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {
                valueModalEditCharges &&
                <div className="modal">
                    <div className="modal-content">
                        <ModalEditCharges
                            chargeInfo={chargeInfo}
                            setChargeInfo={setChargeInfo}
                        />
                    </div>
                </div>
            }
        </div >
    );
}
export default ChargesTable;