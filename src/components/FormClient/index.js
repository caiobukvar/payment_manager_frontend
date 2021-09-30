import './styles.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function FormClient() {
    const [novosDadosCliente, setNovosDadosCliente] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        endereco: '',
        bairro: '',
        cidade: '',
        complemento: '',
        referencia: ''
    });

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-borderless mg-top">
            <div className="flex-column ">
                <label htmlFor="name" className="font-md-bold">Nome</label>
                <input
                    className="border-dark pad-sm large mt-sm"
                    type="text"
                    title="name"
                    id="name"
                    placeholder="Digite seu nome"
                    {...register("nome", { required: true })}
                    value={novosDadosCliente.nome}
                    onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, nome: e.target.value }) }}

                />
                <label htmlFor="email" className="font-md-bold">E-mail</label>
                <input
                    className="border-dark pad-sm large mt-sm"
                    type="text"
                    title="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email", { required: true })}
                    value={novosDadosCliente.email}
                    onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, email: e.target.value }) }}
                />
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="CPF" className="font-md-bold">CPF</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="CPF"
                        id="CPF"
                        placeholder="Digite seu CPF"
                        {...register("CPF", { required: true })}
                        value={novosDadosCliente.cpf}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, cpf: e.target.value }) }}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="phone" className="font-md-bold">Telefone</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="phone"
                        id="phone"
                        placeholder="Digite seu telefone"
                        {...register("telefone", { required: true })}
                        value={novosDadosCliente.telefone}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, telefone: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="CEP" className="font-md-bold">CEP</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="CEP"
                        id="CEP"
                        placeholder="Digite seu CEP"
                        {...register("cep")}
                        value={novosDadosCliente.cep}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, cep: e.target.value }) }}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="adress" className="font-md-bold">Logradouro</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="adress"
                        id="adress"
                        placeholder="Digite seu endereço"
                        {...register("endereco")}
                        value={novosDadosCliente.endereco}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, endereco: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="neighbourhood" className="font-md-bold">Bairro</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="neighbourhood"
                        id="neighbourhood"
                        placeholder="Digite seu bairro"
                        {...register("bairro")}
                        value={novosDadosCliente.bairro}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, bairro: e.target.value }) }}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="city" className="font-md-bold">Cidade</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="city"
                        id="city"
                        placeholder="Digite sua cidade"
                        {...register("cidade")}
                        value={novosDadosCliente.cidade}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, cidade: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="flex-row">
                <div className="flex-column mb-md">
                    <label htmlFor="complement" className="font-md-bold">Complemento</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="complement"
                        id="complement"
                        placeholder="Digite seu complemento"
                        {...register("complemento")}
                        value={novosDadosCliente.complemento}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, complemento: e.target.value }) }}
                    />
                </div>
                <div className="flex-column ml-md">
                    <label htmlFor="reference" className="font-md-bold">Ponto de Referência</label>
                    <input
                        className="border-dark pad-sm mt-sm"
                        type="text"
                        title="reference"
                        id="reference"
                        placeholder="Digite um ponto de referência"
                        {...register("referencia")}
                        value={novosDadosCliente.referencia}
                        onChange={(e) => { setNovosDadosCliente({ ...novosDadosCliente, referencia: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="flex-row mt-lg">
                <button className="btn-white">
                    Cancelar
                </button>
                {
                    (
                        novosDadosCliente.nome &&
                        novosDadosCliente.email &&
                        novosDadosCliente.cpf &&
                        novosDadosCliente.telefone
                    )
                        ? <button type="submit" className="btn-pink-bright ml-md enabled">
                            Adicionar cliente
                        </button>
                        : <button type="submit" className="btn-pink ml-md disabled" disabled>
                            Adicionar cliente
                        </button>
                }

            </div>
        </form >
    );
}

export default FormClient;