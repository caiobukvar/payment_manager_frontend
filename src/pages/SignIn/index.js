import './styles.css';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InputPassword from "../../components/InputPassword/InputPassword"

function SignIn() {
    const [password, setPassword] = useState('');

    return (
        <div className="container-form flex-column">
            <form className="form form-sign-in">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                    <input id="email" type="text" placeholder="Digite seu e-mail" />
                </div>
                <div className="flex-column input-password border-bt">
                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={password}
                        setValue={setPassword}
                    />
                </div>
                <button className="btn-pink mb-lg mt-lg font-md-bold">
                    Entrar
                </button>
            </form>
            <span className="mt-lg">
                Não possui uma conta?
                <Link to="/sign-up"> Cadastre-se!</Link>
            </span>
        </div>
    );
}

export default SignIn;