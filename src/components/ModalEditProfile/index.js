import './styles.css';
import React, { useState, useContext } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import InputPassword from '../InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import AuthContext from '../../AuthContext';
import UserContext from '../../UserContext';
import { toast } from 'react-toastify';

function ModalEditProfile({ setValue }) {
    const { token } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [newPassword, setNewPassword] = useState('');

    const [editValues, setEditValues] = useState({
        nome: userInfo.nome ? userInfo.nome : '',
        email: userInfo.email ? userInfo.email : '',
        senha: (newPassword ? newPassword : null),
        telefone: userInfo.telefone ? userInfo.telefone : '',
        cpf: userInfo.cpf ? userInfo.cpf : ''
    });

    async function editUser(editValues) {
        editValues.telefone.replace(/[^0-9]/g, '');
        editValues.cpf.replace(/[^0-9]/g, '');

        const response = await fetch('https://paymentmanager-api.herokuapp.com/edit',
            {
                method: 'PUT',
                body: JSON.stringify(editValues),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

        const newValues = await response.json();
        console.log(newValues);

        if (response.ok) {
            toast.success("Dados editados com sucesso!");
            localStorage.setItem('info-usuario', JSON.stringify(editValues));
            setUserInfo(editValues);
            setValue(false);
        } else {
            toast.error("Falha ao editar os dados.");
        }
    }

    return (
        <>
            <div className="modal dark-bg box-shadow ">
                <form className="form" onSubmit={handleSubmit(editUser)}>
                    <div className="modal-content flex-column content-center items-center modal-padding">
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => { setValue(false) }}
                        />
                        <div className="flex-column items-center content-center">
                            <p className="flex-column align-start font-xl">{'//'} EDITAR USUÁRIO</p>
                            <div className="flex-column border-bt mt-lg">
                                <label className="mb-md font-md-bold" htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Digite seu nome"
                                    {...register("nome", { required: true })}
                                    value={editValues.nome}
                                    onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            nome: e.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Digite seu email"
                                    {...register("email", { required: true })}
                                    value={editValues.email}
                                    onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            email: e.target.value
                                        })
                                    }}
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
                                    placeholder="(XX) X XXXX-XXXX"
                                    {...register("telefone")}
                                    value={editValues.telefone}
                                    maxLength="15"
                                    onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            telefone: e.target.value
                                                .replace(/\D/g, "")
                                                .replace(/^(\d{2})(\d)/g, "($1) $2")
                                                .replace(/(\d)(\d{4})$/, "$1-$2")
                                                .substr(0, 15)
                                        })
                                    }}
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
                                    maxLength="14"
                                    onChange={(e) => {
                                        setEditValues({
                                            ...editValues,
                                            cpf: e.target.value.replace(/\D/g, "")
                                                .replace(/^(\d{3})(\d)/g, "$1.$2")
                                                .replace(/(\d{3})(\d)/, '$1.$2')
                                                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                                                .replace(/(-\d{2})\d+?$/, '$1')
                                        })
                                    }}
                                />
                            </div>
                            {
                                (editValues.nome && editValues.email)
                                    ? <button className="btn-pink-bright enabled" type="submit">Editar conta</button>
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