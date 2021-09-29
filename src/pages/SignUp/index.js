import './styles.css';
import Logo from "../../assets/logo.svg";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputPassword from "../../components/InputPassword/InputPassword"

function SignUp() {
    const [password, setPassword] = useState('');
    const { handleSubmit, register } = useForm();

    async function signUpData(data) {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/',
            {
                method: 'POST',
                body: JSON.stringify(data),

            });

        const responseData = await response.json();
        console.log(responseData);
    }

    const [signUpValues, setSignUpValues] = useState({
        nome: '',
        email: ''
    });

    return (
        <div className="container-form flex-column" onSubmit={handleSubmit(signUpData)}>
            <form className="form form-sign-up">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        {...register('name', { required: true })}
                        value={signUpValues.nome}
                        onChange={(e) => { setSignUpValues({ ...signUpValues, nome: e.target.value }) }}
                    />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="email">E-mail</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu e-mail"
                        {...register('email', { required: true })}
                        value={signUpValues.email}
                        onChange={(e) => { setSignUpValues({ ...signUpValues, email: e.target.value }) }} />
                </div>
                <div className="flex-column input-password border-bt">
                    <InputPassword
                        label="Senha"
                        placeholder="Digite sua senha"
                        register={() => register()}
                        value={password}
                        setValue={setPassword}
                    />
                </div>
                {
                    (signUpValues.nome && signUpValues.email && password)
                        ? <button type="submit" className="btn-pink-bright mb-lg mt-lg font-md-bold enabled">
                            Criar conta
                        </button>
                        : <button className="btn-pink mb-lg mt-lg font-md-bold disabled " disabled >
                            Criar conta
                        </button>
                }

            </form>
            <span className="mt-lg">
                Já possui uma conta?
                <Link to="/sign-in" className="pink"> Acesse agora!</Link>
            </span>
        </div>
    )
}

export default SignUp;