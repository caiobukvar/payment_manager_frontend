import './styles.css';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import CalendarInput from '../CalendarInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    return (
        < form onSubmit={handleSubmit(addCharge)} className="form-borderless-charges" >
            <div className="items-center">
                <div className="flex-column mt-lg">
                    <label className="font-md-bold mt-lg mb-md" htmlFor="description">Cliente</label>
                    <Select
                        value={inputValue}
                        onChange={handleChange}
                        {...register('cliente', { required: true })}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>Selecione um cliente</em>
                        </MenuItem>
                        {clientArray.map((client) => (
                            <MenuItem
                                value={client.id}
                            >
                                {client.nome}
                            </MenuItem>
                        ))}


                    </Select>
                </div>
                <div className="flex-column">
                    <label className="font-md-bold mt-lg" htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        name="description"
                        placeholder=""
                        id="description"
                        className="input-charges-large padY-sm mt-md"
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
                        />
                    </div>
                    {/* COMPONENTE DE CALENDÁRIO - DIA/MES/ANO */}
                    <div className="flex-column ml-lg mt-custom">
                        <CalendarInput />
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
