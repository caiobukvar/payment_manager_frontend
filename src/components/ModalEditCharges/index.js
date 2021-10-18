import './styles.css';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import EditChargeModalContext from '../../contexts/EditChargeModalContext';
import AuthContext from '../../contexts/AuthContext';
import DeleteChargeModalContext from '../../contexts/DeleteChargeModalContext';

import useClientData from '../../hooks/useClientData';

import { toast } from 'react-toastify';

import TrashIcon from '../../assets/trash.svg';
import DeleteDropdown from '../../components/DeleteDropdown';


function EditCharges() {
    const [autocompleteData, setAutocompleteData] = useState();
    const { setValueModalEditCharges } = useContext(EditChargeModalContext);
    const { valueModalDeleteCharges, setValueModalDeleteCharges } = useContext(DeleteChargeModalContext);
    const { token } = useContext(AuthContext);

    const { clientArray } = useClientData();

    const { register, handleSubmit } = useForm();

    const [editData, setEditData] = useState({
        cliente: "",
        descricao: "",
        status: "",
        valor: "",
        vencimento: ""
    });

    const chargeId = localStorage.getItem('client-id-on-click');
    console.log(chargeId);

    useEffect(() => {
        try {
            async function getClientData(chargeId) {
                const response = await fetch(`https://paymentmanager-api.herokuapp.com/getCustomerBillings?id=${chargeId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    });
                const data = await response.json();
                console.log("data", data)

                if (response.ok) {
                    setAutocompleteData(data);
                }
            }
            getClientData(chargeId);
        } catch (error) {

        }
    }, [chargeId])

    async function EditCharge(editData) {
        try {
            const response = await fetch("https://paymentmanager-api.herokuapp.com/registerBilling",
                {
                    method: "PUT",
                    body: JSON.stringify(editData),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });

            const chargeData = await response.json();
            console.log(chargeData);

            if (response.ok) {
                toast.success("Cobrança cadastrada!");
                setValueModalEditCharges(false);
            }
        } catch (error) {
            console.log(error.message);
            //tratar erros - campos em branco
        }
    };

    function handleCloseModal() {
        setValueModalEditCharges(false);
    }
    function handleDeleteModal() {
        setValueModalDeleteCharges(true);
    }

    return (
        <form onSubmit={handleSubmit(EditCharge)} className="form-borderless-charges" >
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
                            setEditData({
                                ...editData,
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
                            setEditData({
                                ...editData,
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
                            setEditData({
                                ...editData,
                                status: e.target.value
                            })
                        }}
                    >
                        <option placeholder="" value="">Selecione um status...</option>
                        <option
                            value="pago"
                            key="pago"
                            placeholder="pago"
                        >
                            pago
                        </option>
                        <option
                            value="Pendente"
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
                                setEditData({
                                    ...editData,
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
                                setEditData({
                                    ...editData,
                                    vencimento: new Date(data).toLocaleDateString('pt-br')
                                })
                            }}
                        />
                    </div>
                </div>
                {/* ADICIONAR BOTAO PARA CONFIRMAR EXCLUSÃO AQUI */}
                <div className="flex-row items-center mt-xl">
                    <img src={TrashIcon} alt="img-trash-icon" className="mr-sm" />
                    <a className="light-gray" onClick={handleDeleteModal}>Excluir cobrança</a>
                </div>
                {/* ADICIONAR BOTAO PARA CONFIRMAR EXCLUSÃO AQUI */}
                <div className="flex-row mt-xl ml-xxl">
                    <button className="btn-white-client" onClick={handleCloseModal}>
                        Cancelar
                    </button>
                    {
                        (
                            editData.cliente &&
                            editData.descricao &&
                            editData.status &&
                            editData.valor &&
                            editData.vencimento
                        )
                            ? <button type="submit" className="btn-pink-bright-client ml-md enabled">
                                Editar cobrança
                            </button>
                            : <button type="submit" className="btn-pink-client ml-md disabled" disabled>
                                Editar cobrança
                            </button>
                    }
                </div>
            </div>
            {valueModalDeleteCharges &&
                <div className="dropdown-placement">
                    <DeleteDropdown />
                </div>

            }
        </form >
    );
}

export default EditCharges;
