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

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };


    return (
        <form onSubmit={handleSubmit(addCharge)} className="form-borderless-charges" >
            <div className="items-center">
                <div className="flex-column mt-lg">
                    <label className="font-md-bold mt-lg mb-md" htmlFor="description">Cliente</label>
                    <select name="clientes"
                        id="clientes"
                        className="input-select"
                        key={newCharge}
                        value={newCharge}
                        onChange={handleChange}
                        {...register("cliente", { required: true })}
                    >
                        {clientArray.map((client) => (
                            <option
                                value={client.id}
                                key={client.id}
                                placeholder={client.nome}
                                onChange={(e) => {
                                    setNewCharge({
                                        ...newCharge,
                                        cliente: e.target.value
                                    })
                                }}
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
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                descricao: e.target.value
                            })
                        }}
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
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                status: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="flex-row">
                    {/* FORMATAR VALOR - regex: \d{1,3}(?:\.\d{3})*?,\d{2} */}
                    <div className="flex-column">
                        <label className="font-md-bold mt-lg" htmlFor="chargeValue">Valor</label>
                        <input
                            type="text"
                            name="chargeValue"
                            placeholder=""
                            id="chargeValue"
                            className="input-charges-line-small padY-sm mt-md"
                            {...register("valor", { required: true })}
                            onChange={(e) => {
                                setNewCharge({
                                    ...newCharge,
                                    valor: e.target.value
                                })
                            }}
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
                            newCharge.valor
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
