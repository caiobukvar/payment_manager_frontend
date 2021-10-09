import './styles.css';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import CalendarInput from '../CalendarInput';

import AddChargeModalContext from '../../contexts/AddChargeModalContext';
import useClientData from '../../hooks/useClientData';


function AddCharges() {
    const { setValueModalAddCharges } = useContext(AddChargeModalContext);

    const { clientArray } = useClientData();
    const { register, handleSubmit } = useForm();


    const [newCharge, setNewCharge] = useState({
        cliente: "",
        descricao: "",
        status: "",
        valor: "",
        vencimento: ""
    });

    async function addCharge(newCharge) {

        const response = await fetch("https://paymentmanager-api.herokuapp.com/registerBilling",
            {
                method: "POST",
                body: JSON.stringify(newCharge),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

        const chargeData = await response.json();
        console.log(chargeData);
        if (response.ok) {
            toast.success("Cobrança cadastrada!");
        }

    };

    function handleReturn() {
        setValueModalAddCharges(false);
    }

    //SELECT - MATERIAL UI
    const [inputValue, setInputValue] = React.useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };


    return (
        < form onSubmit={handleSubmit(addCharge)} className="form-borderless-charges" >
            <div className="items-center">
                <div className="flex-column mt-lg">
                    <label className="font-md-bold mt-lg mb-md" htmlFor="description">Cliente</label>
                    <select name="" id="" value={inputValue} onChange={handleChange}>,
                        {clientArray.map((client) => (
                            <option
                                value={client.id}
                                {...register("cliente", { required: true })}
                            >
                                {client.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex-column">
                    <label className="font-md-bold mt-lg" htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        name="description"
                        placeholder=""
                        id="description"
                        className="input-charges-large padY-sm mt-md"
                        {...register("descricao", { required: true })}
                    />
                </div>
                <div className="flex-column">
                    <label className="font-md-bold mt-lg" htmlFor="chargeStatus">Status</label>
                    <input
                        type="text"
                        name="chargeStatus"
                        placeholder=""
                        id="chargeStatus"
                        className="input-charges-large padY-sm mt-md"
                        {...register("status", { required: true })}
                    />
                </div>
                <div className="flex-row">
                    {/* FORMATAR VALOR */}
                    <div className="flex-column">
                        <label className="font-md-bold mt-lg" htmlFor="chargeValue">Valor</label>
                        <input
                            type="text"
                            name="chargeValue"
                            placeholder=""
                            id="chargeValue"
                            className="input-charges-line-small padY-sm mt-md"
                            {...register("valor", { required: true })}
                        />
                    </div>
                    {/* COMPONENTE DE CALENDÁRIO - MES/DIA/ANO */}
                    <div className="flex-column ml-lg mt-custom">
                        <CalendarInput
                            register
                        />
                    </div>
                </div>
                <div className="flex-row mt-xl ml-xxl">
                    <button className="btn-white-client" onClick={handleReturn}>
                        Cancelar
                    </button>
                    {
                        (
                            newCharge.cliente &&
                            newCharge.descricao &&
                            newCharge.status &&
                            newCharge.valor &&
                            newCharge.vencimento
                        )
                            ? <button type="submit" className="btn-pink-bright-client ml-md enabled">
                                Criar cobrança
                            </button>
                            : <button type="submit" className="btn-pink-client ml-md disabled" disabled>
                                Criar cobrança
                            </button>
                    }
                </div>
            </div>
        </form>
    );
}

export default AddCharges;
