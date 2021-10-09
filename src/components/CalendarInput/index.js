import './styles.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function CalendarInput() {
    const [value, setValue] = useState();

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
                        setValue(newValue);
                    }}
                    renderInput={(params) =>
                        <TextField {...params}
                        />}
                />
            </LocalizationProvider>
        </div>

    );
}

export default CalendarInput;