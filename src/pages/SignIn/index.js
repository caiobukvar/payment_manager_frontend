import './styles.css';
import Logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InputPassword from "../../components/InputPassword/InputPassword"

function SignIn({ register }) {
    const [password, setPassword] = useState('');

    async function signInData(data) {

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
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Digite seu e-mail"
                        {...register('nome', { required: true })}
                        value={signInValues.email}
                        onChange={(e) => { setSignInValues({ ...signInValues, email: e.target.value }) }}
                    />
                </div>
                <div className="flex-column input-password border-bt">
                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha"
                        register={register}
                        value={password}
                        setValue={setPassword}
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
                <Link to="/sign-up" className="pink"> Cadastre-se!</Link>
            </span>
        </div>
    );
}

export default SignIn;