import './styles.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function CalendarInput() {
    const [value, setValue] = useState();
    const { register } = useForm();

    return (
        <div className="flex-column">
            <label htmlFor="value" className="font-md-bold">Vencimento</label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    customStyles={{
                        dateInputStyle: {
                            borderWidth: 0
                        }
                    }}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue.vencimento);
                    }}
                    renderInput={(params) =>
                        <TextField
                            {...register('vencimento', { required: true })}
                            {...params}
                        />}
                />
            </LocalizationProvider>
        </div>

    );
}

export default CalendarInput;