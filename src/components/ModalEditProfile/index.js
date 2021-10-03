import './styles.css';
import { useState, useContext, useEffect } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import InputPassword from '../InputPassword/InputPassword';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthContext';
import { UserContext } from '../../UserContext';

function ModalEditProfile({ setValue }) {
    const { token } = useContext(AuthContext);
    const { userInfo } = useContext(UserContext);
    const { register } = useForm();
    const [newPassword, setNewPassword] = useState('');
    const [editValues, setEditValues] = useState({
        nome: '',
        email: '',
        telefone: '',
        cpf: ''
    });

    useEffect(() => {
        async function editUser() {
            const response = await fetch('https://paymentmanager-api.herokuapp.com/edit',
                {
                    method: 'PUT',
                    body: JSON.stringify(),
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

            const result = await response.json();
            console.log(result);
        }

    })


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
                                <label className="mb-md font-md-bold" htmlFor="nome">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={userInfo.nome}
                                    {...register("nome", { required: true })}
                                    value={editValues.nome}
                                    onChange={(e) => { setEditValues({ ...editValues, nome: e.target.value }) }}
                                />
                            </div>
                            <div className="flex-column border-bt">
                                <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder={userInfo.email}
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
                                    placeholder={userInfo.telefone ? userInfo.telefone : "(XX) X XXXX-XXXX"}
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
                                    placeholder={userInfo.cpf ? userInfo.cpf : "222.222.222-22"}
                                    {...register("cpf")}
                                    value={editValues.cpf}
                                    onChange={(e) => { setEditValues({ ...editValues, cpf: e.target.value }) }}
                                />
                            </div>
                            {
                                (editValues.nome && editValues.email && editValues.telefone && editValues.cpf)
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



async function signUpData(data) {


    console.log(result);
}