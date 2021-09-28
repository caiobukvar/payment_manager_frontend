import './styles.css';
import { useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import InputPassword from '../InputPassword/InputPassword';

function ModalEditProfile({ setValue }) {
    const [editValues, setEditValues] = useState({
        name: '',
        email: '',
        telefone: '',
        cpf: ''
    });

    return (
        <>
            <div className="modal dark-bg box-shadow">
                <form className="form">
                    <div className="modal-content flex-column content-center items-center">
                        <img src={CloseIcon}
                            className="modal-close-icon"
                            onClick={() => { setValue(false) }}
                        />
                        <div className="flex-column items-center content-center">
                            <p>// EDITAR USUÁRIO</p>
                            <input
                                type="text"
                                id="name"
                                placeholder="seu nome"
                                value={editValues.name}
                                onChange={(e) => { setEditValues({ ...editValues, name: e.target.value }) }}
                            />
                            <input
                                type="text"
                                id="email"
                                placeholder="seu email"
                                value={editValues.email}
                                onChange={(e) => { setEditValues({ ...editValues, email: e.target.value }) }}
                            />
                            <InputPassword id="new-password" placeholder="" />
                            <input
                                type="text"
                                id="phone"
                                placeholder="seu telefone"
                                value={editValues.telefone}
                                onChange={(e) => { setEditValues({ ...editValues, telefone: e.target.value }) }}
                            />
                            <input
                                type="text"
                                id="cpf"
                                placeholder="seu cpf"
                                value={editValues.cpf}
                                onChange={(e) => { setEditValues({ ...editValues, cpf: e.target.value }) }}
                            />
                            {
                                (editValues.name && editValues.email && editValues.telefone && editValues.cpf)
                                    ? <button className="btn-pink-bright enabled">Editar conta</button>
                                    : <button className="btn-pink disabled" disabled>Editar conta</button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ModalEditProfile;