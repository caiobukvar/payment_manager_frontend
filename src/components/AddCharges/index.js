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





    return (
        <form onSubmit={handleSubmit(addCharge)} className="form-borderless-charges" >
            <div className="items-center">
                <div className="flex-column mt-lg">
                    <label className="font-md-bold mt-lg mb-md" htmlFor="description">Cliente</label>
                    <select
                        type="text"
                        name="cliente"
                        placeholder=""
                        id="cliente"
                        className="input-select"
                        {...register("cliente", { required: true })}
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                cliente: e.target.value
                            })
                        }}
                    >
                        {clientArray.map((client) => (
                            <option
                                value={client.id}
                                key={client.id}
                                placeholder={client.nome}
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
                        placeholder="Insira descrição da cobrança"
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
                    <label className="font-md-bold mt-lg" htmlFor="status">Status</label>
                    <select
                        type="text"
                        name="status"
                        placeholder="status"
                        id="status"
                        className="input-select"
                        {...register("status", { required: true })}
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                status: e.target.value
                            })
                        }}
                    >
                        <option disabled selected value>selecione um status</option>
                        <option
                            value="pago"
                            key="pago"
                            placeholder="pago"
                        >
                            pago
                        </option>
                        <option
                            value="pendente"
                            key="pendente"
                            placeholder="pendente"
                        >
                            pendente
                        </option>
                        ))
                    </select>
                </div>
                <div className="flex-row">
                    {/* FORMATAR VALOR - regex: \d{1,3}(?:\.\d{3})*?,\d{2} */}
                    <div className="flex-column">
                        <label className="font-md-bold mt-lg" htmlFor="valor">Valor</label>
                        <input
                            type="text"
                            name="valor"
                            placeholder="Insira o valor"
                            id="valor"
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
                            newCharge
                            setNewCharge
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
