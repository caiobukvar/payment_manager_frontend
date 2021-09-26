import './styles.css';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InputPassword from "../../components/InputPassword/InputPassword"

function SignIn() {
    const [password, setPassword] = useState('');

    return (
        <div className="form-container flex-column items-center content-center">
            <img src={Logo} alt="logo" />
            <form className="form form-sign-in">
                <div className="flex-column">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="text" placeholder="Digite seu e-mail" />
                </div>
                <InputPassword
                    label="Senha"
                    placeholder="Digite sua senha"
                    value={password}
                    setValue={setPassword}
                />
                <Link to="/sign-up">Cadastre-se</Link>
            </form>
        </div>
    );
}

export default SignIn;