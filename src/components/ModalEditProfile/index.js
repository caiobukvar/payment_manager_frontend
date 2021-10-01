import './styles.css';
import { useState, useContext } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import InputPassword from '../InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext';

function ModalEditProfile({ setValue, userData }) {
    const { token } = useContext(AuthContext);
    const { register } = useForm();
    const [newPassword, setNewPassword] = useState('');

    const [editValues, setEditValues] = useState({
        name: '',
        email: '',
        telefone: '',
        cpf: ''
    });

    console.log(userData)
    return (
        <>
            <div className="modal dark-bg box-shadow ">
                <form className="form">
                    <div className="modal-content flex-column content-center items-center modal-padding">
                        <img src={CloseIcon}
                            className="modal-close-icon"
                            onClick={() => { setValue(false) }}
                        />
                        <div className="flex-column items-center content-center">
                            <p className="flex-column align-start font-xl">// EDITAR USUÁRIO</p>
                            <div className="flex-column border-bt mt-lg">
                                <label className="mb-md font-md-bold" htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Digite o novo nome"
                                    {...register("nome", { required: true })}
                                    value={editValues.name}
                                    onChange={(e) => { setEditValues({ ...editValues, name: e.target.value }) }}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Digite o novo email"
                                    {...register("email", { required: true })}
                                    value={editValues.email}
                                    onChange={(e) => { setEditValues({ ...editValues, email: e.target.value }) }}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="new-password">Nova senha</label>
                                <InputPassword
                                    id="password"
                                    placeholder="Digite a nova senha"
                                    value={newPassword}
                                    setValue={setNewPassword}
                                    register={register}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="email">Telefone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="(xx) x xxxx-xxxx"
                                    {...register("telefone")}
                                    value={editValues.telefone}
                                    onChange={(e) => { setEditValues({ ...editValues, telefone: e.target.value }) }}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="email">CPF</label>
                                <input
                                    type="text"
                                    id="cpf"
                                    placeholder="222.222.222-22"
                                    {...register("cpf")}
                                    value={editValues.cpf}
                                    onChange={(e) => { setEditValues({ ...editValues, cpf: e.target.value }) }}
                                />
                            </div>
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