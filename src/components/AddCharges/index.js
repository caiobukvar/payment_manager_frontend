import './styles.css';
import { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CalendarInput from '../CalendarInput';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';


function AddCharges() {
    const { setValueModalAddCharges } = useContext(AddChargeModalContext);
    const [newCharge, setNewCharge] = useState();

    const clientListById = [
        // .map na lista de clientes (pegando o id e nome) dentro do usuario
        {
            // label: `${client.nome}`
            label: "Cliente 1"
        },
        {
            label: "Cliente 2"
        }
    ];

    function handleReturn() {
        setValueModalAddCharges(false);
    }

    return (
        < form onSubmit="" className="form-borderless" >
            <div className="items-center">
                <div className="flex-column mt-lg">
                    <label className="font-md-bold mt-lg mb-md" htmlFor="description">Cliente</label>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={clientListById}
                        sx={{ width: 632 }}
                        renderInput={(params) => <TextField {...params} label="Selecione um cliente" />}
                    />
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
                        className="input-charges padY-sm mt-md"
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
                    {/* COMPONENTE DE CALENDÁRIO */}
                    <div className="flex-column ml-lg mt-custom">
                        <CalendarInput />
                    </div>
                </div>
                <div className="flex-row mt-lg">
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
