import './styles.css';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function FormClient() {
    const { register, handleSubmit, watch } = useForm();
    let nameWatch = watch('name');

    const onSubmit = (data) => {
        console.log(data);
        //placeholder={nameWatch} ??
    }

    useEffect(() => {
        console.log(nameWatch);
    }, [nameWatch]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-borderless mg-top">
            <div className="flex-column ">
                <label htmlFor="name">Nome</label>
                <input
                    className="border-dark pad-sm large mt-sm"
                    type="text"
                    title="name"
                    id="name"
                    placeholder="Digite seu nome"
                    {...register("nome")}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    className="border-dark pad-sm large mt-sm"
                    type="text"
                    title="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="CPF">CPF</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="CPF"
                        id="CPF"
                        placeholder="Digite seu CPF"
                        {...register("CPF")}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="phone">Telefone</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="phone"
                        id="phone"
                        placeholder="Digite seu telefone"
                        {...register("phone")}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="CEP">CEP</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="CEP"
                        id="CEP"
                        placeholder="Digite seu CEP"
                        {...register("CEP")}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="adress">Logradouro</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="adress"
                        id="adress"
                        placeholder="Digite seu endereço"
                        {...register("adress")}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="neighbourhood">Bairro</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="neighbourhood"
                        id="neighbourhood"
                        placeholder="Digite seu bairro"
                        {...register("neighbourhood")}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="city">Cidade</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="city"
                        id="city"
                        placeholder="Digite sua cidade"
                        {...register("city")}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="complement">Complemento</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="complement"
                        id="complement"
                        placeholder="Digite seu complemento"
                        {...register("complement")}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="reference">Ponto de Referência</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="reference"
                        id="reference"
                        placeholder="Digite um ponto de referência"
                        {...register("reference")}
                    />
                </div>
            </div>
            <div className="flex-row mt-lg">
                <button className="btn-white">
                    Cancelar
                </button>
                <button type="submit" className="btn-pink ml-md">
                    Adicionar cliente
                </button>
            </div>
        </form >
    );
}

export default FormClient;