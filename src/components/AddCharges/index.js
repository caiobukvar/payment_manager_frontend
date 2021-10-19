import './styles.css';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import AddChargeModalContext from '../../contexts/AddChargeModalContext';
import AuthContext from '../../contexts/AuthContext';
import ChargeContext from '../../contexts/ChargeContext';

import useClientData from '../../hooks/useClientData';

import { toast } from 'react-toastify';
import { useHistory } from 'react-router';


function AddCharges() {
    const { chargesList, setChargesList } = useContext(ChargeContext);
    const { token } = useContext(AuthContext);
    const history = useHistory();
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
        try {
            const response = await fetch("https://paymentmanager-api.herokuapp.com/registerBilling",
                {
                    method: "POST",
                    body: JSON.stringify(newCharge),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

            const result = await response.json();

            if (response.ok) {
                toast.success("Cobrança cadastrada!");
                setChargesList([...chargesList, ...result]);
                history.push("/cobrancas")
            }
        } catch (error) {
            toast.error(error.message);
        }

    };

    function handleReturn() {
        history.push("/cobrancas")
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
                        className="input-select padY-sm"
                        {...register("cliente", { required: true })}
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                cliente: e.target.value
                            })
                        }}
                    >
                        <option value=""></option>
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
                        className="input-select padY-sm"
                        {...register("status", { required: true })}
                        onChange={(e) => {
                            setNewCharge({
                                ...newCharge,
                                status: e.target.value
                            })
                        }}
                    >
                        <option>selecione um status</option>
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
                    <div className="flex-column">
                        <label className="font-md-bold mt-lg" htmlFor="valor">Valor</label>
                        <input
                            type="number"
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
                    <div className="flex-column ml-lg">
                        <label htmlFor="vencimento" className="font-md-bold mt-lg">Vencimento</label>
                        <input
                            type='date'
                            name="vencimento"
                            className="input-charges-large input-vencimento pad-vencimento mt-md"
                            {...register("vencimento", { required: true })}
                            onChange={(e) => {
                                let data = new Date(e.target.value);
                                data.setHours(data.getHours() + 3)
                                setNewCharge({
                                    ...newCharge,
                                    vencimento: new Date(data).toLocaleDateString('pt-br')
                                })
                            }}
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
        </form >
    );
}

export default AddCharges;
