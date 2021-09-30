import './styles.css';
import Logo from "../../assets/logo.svg";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputPassword from "../../components/InputPassword/InputPassword"
import { toast } from 'react-toastify';

function SignUp() {
    const [password, setPassword] = useState('');
    const { handleSubmit, register } = useForm();
    const history = useHistory();

    async function signUpData(data) {
        const response = await fetch('https://paymentmanager-api.herokuapp.com/',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        const result = await response.json();

        console.log(result);

        if (response.ok) {
            toast.success('Cadastro realizado com sucesso!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                progress: undefined,
            });

            history.push('/sign-in');
            return;
        }
        console.log('tratar: cadastro realizado com sucesso');
    }

    const [signUpValues, setSignUpValues] = useState({
        nome: '',
        email: ''
    });

    return (
        <div className="container-form flex-column">
            <form className="form form-sign-up" onSubmit={handleSubmit(signUpData)}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="flex-column border-bt">
                    <label className="mb-md font-md-bold" htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome"
                        {...register('nome', { required: true })}
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
                        register={register}
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