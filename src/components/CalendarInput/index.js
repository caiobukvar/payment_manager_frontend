import './styles.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function CalendarInput({ newCharge, setNewCharge }) {
    const { register } = useForm();

    return (
        <div className="flex-column">
            <label htmlFor="vencimento" className="font-md-bold">Vencimento</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    renderInput={(params) =>
                        <TextField
                            {...register('vencimento', { required: true })}
                            value="vencimento"
                            placeholder=""
                            id="vencimento"
                            onChange={(e) => {
                                setNewCharge({
                                    ...newCharge,
                                    vencimento: e.target.value
                                })
                            }}
                            {...params}
                        />}
                />
            </LocalizationProvider>
        </div>

    );
}

export default CalendarInput;

// type="text"
//                             name="chargeValue"
//                             placeholder=""
//                             id="chargeValue"
//                             className="input-charges-line-small padY-sm mt-md"
//                             {...register("valor", { required: true })}
//                             onChange={(e) => {
//                                 setNewCharge({
//                                     ...newCharge,
//                                     valor: e.target.value
//                                 })
//                             }}