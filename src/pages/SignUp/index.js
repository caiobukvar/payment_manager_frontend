import './styles.css';
import Logo from "../../assets/logo.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputPassword from "../../components/InputPassword/InputPassword"

function SignUp() {
    const [password, setPassword] = useState('');

    return (
        <div className="container-form flex-column">
            <form className="form form-sign-up">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="name">Nome</label>
                    <input type="text" id="name" placeholder="Digite seu nome" />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                    <input type="text" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="flex-column input-password border-bt">
                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha"
                        value={password}
                        setValue={setPassword}
                    />
                </div>
                <button type="submit" className="btn-pink mb-lg mt-lg font-md-bold">
                    Criar conta
                </button>
            </form>
            <span className="mt-lg">
                Já possui uma conta?
                <Link to="/sign-in" className="pink"> Acesse agora!</Link>
            </span>
        </div>
    )
}

export default SignUp;