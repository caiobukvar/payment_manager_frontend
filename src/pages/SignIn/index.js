import './styles.css';
import Logo from "../../assets/logo.svg";
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import InputPassword from "../../components/InputPassword/InputPassword"
import AuthContext from '../../AuthContext';
import UserContext from '../../UserContext';
import { toast } from 'react-toastify';

function SignIn() {
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const { setToken } = useContext(AuthContext);
    const { setUserInfo } = useContext(UserContext);
    const { handleSubmit, register } = useForm();
    const history = useHistory();


    async function signInData(data) {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/login',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        const userData = await response.json();
        if (response.ok) {
            setToken(userData.token);
            setUserInfo(userData.usuario);
            localStorage.setItem('token-usuario', JSON.stringify(userData.token));
            localStorage.setItem('info-usuario', JSON.stringify(userData.usuario));
            toast.success('Login realizado com sucesso!');
            history.push('/');
            return;
        }
        const err = true;

        if (userData === "Email não existe no sistema.") {
            toast.error('Email não cadastrado!');
            setErrorEmail(err);
        } else if (userData === "Senha incorreta.") {
            toast.error('Senha inválida!');
            setErrorPassword(err);
        } else {
            toast.error("Ocorreu um erro inesperado!");
        }
    }

    function handleError() {
        setErrorEmail(false);
    }
    const [signInValues, setSignInValues] = useState({
        email: ''
    });

    return (
        <div className="container-form flex-column">
            <form className="form form-sign-in" onSubmit={handleSubmit(signInData)}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className={`flex-column border-bt ${errorEmail ? 'inputError' : ''}`}>
                    <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Digite seu e-mail"
                        {...register('email', { required: true })}
                        value={signInValues.email}
                        onChange={(e) => { setSignInValues({ ...signInValues, email: e.target.value }, handleError()) }}
                    />
                </div>
                <div className={`flex-column input-password border-bt ${errorPassword ? 'inputError' : ''}`}>
                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha"
                        register={register}
                        value={password}
                        setValue={setPassword}
                        required
                    />
                </div>
                {
                    (signInValues.email && password
                        ? <button className="btn-pink-bright mb-lg mt-lg font-md-bold enabled" >
                            Entrar
                        </button>
                        : <button className="btn-pink mb-lg mt-lg font-md-bold disabled" disabled>
                            Entrar
                        </button>)}
            </form>
            <span className="mt-lg">
                Não possui uma conta?
                <Link to="/signup" className="pink ml-sm">Cadastre-se!</Link>
            </span>
        </div>
    );
}

export default SignIn;