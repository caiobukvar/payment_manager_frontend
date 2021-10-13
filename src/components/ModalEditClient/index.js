import React, { useState, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import './styles.css';

import CloseIcon from '../../assets/close-icon.svg';
import AuthContext from '../../contexts/AuthContext';
import ModalEditClientContext from '../../contexts/ModalEditClientContext';

function ModalEditClient() {
  const [errorEmail, setErrorEmail] = useState('');
  const [autocomplete, setAutocomplete] = useState('');
  const { token } = useContext(AuthContext);
  const { setValueModalEditClient } = useContext(ModalEditClientContext);
  const [dadosParaAtualizar, setDadosParaAtualizar] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    cidade: '',
    referencia: ''
  });

  const { register, handleSubmit, watch, setValue, setError } = useForm();

  const history = useHistory();

  const id = localStorage.getItem('client-id');

  useEffect(() => {
    async function UserClientInfo(id) {
      const response = await fetch(`https://paymentmanager-api.herokuapp.com/getDataCustomer?id=${id}`,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      const clientData = await response.json();
      if (response.ok) {
        setDadosParaAtualizar(clientData[0]);
      }
    }
    UserClientInfo(id);
  }, []);


  async function updateClientData(dadosParaAtualizar) {
    dadosParaAtualizar.telefone.replace(/[^0-9]/g, '');
    dadosParaAtualizar.cpf.replace(/[^0-9]/g, '');
    dadosParaAtualizar.cep.replace(/[^0-9]/g, '');

    const response = await fetch(`https://paymentmanager-api.herokuapp.com/editDataCustomer?id=${id}`,
      {
        method: "PUT",
        body: JSON.stringify(dadosParaAtualizar),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

    const clientListResponse = await response.json();

    if (response.ok) {
      toast.success("Cliente atualizado com sucesso!");
      setValueModalEditClient(false);
      history.push('/client');
    }
    else {
      const err = true;

      if (clientListResponse === "E-mail já cadastrado.") {
        toast.error("E-mail já cadastrado.");
        setErrorEmail(err);
      } else {
        toast.error("Ocorreu um erro inesperado!");
      }
    }
  }

  function handleError() {
    setErrorEmail(false);
  }

  function handleCloseModal() {
    setValueModalEditClient(false);
  }

  return (
    <div className="modal dark-bg box-shadow ">
      <form onSubmit={handleSubmit(updateClientData)} className="modal-content modal-size flex-column content-center items-center modal-padding" >
        <img src={CloseIcon}
          alt="close-icon"
          className="modal-close-icon"
          onClick={handleCloseModal}
        />
        <div className="flex-column ">
          <label htmlFor="name" className="font-md-bold">Nome</label>
          <input
            className="border-dark pad-sm large mt-sm"
            type="text"
            title="name"
            id="name"
            placeholder=""
            {...register("nome", { required: true })}
            value={dadosParaAtualizar.nome}
            onChange={(e) => {
              setDadosParaAtualizar({
                ...dadosParaAtualizar,
                nome: e.target.value
              })
            }}
          />
          <label htmlFor="email" className="font-md-bold">E-mail</label>
          <input
            className={`border-dark pad-sm large mt-sm ${errorEmail ? 'inputError' : ''}`}
            type="text"
            title="email"
            id="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
            value={dadosParaAtualizar.email}
            onChange={(e) => {
              setDadosParaAtualizar({
                ...dadosParaAtualizar,
                email: e.target.value
              },
                handleError()
              )
            }}
          />
        </div>
        <div className="flex-row">
          <div className="flex-column mb-md">
            <label htmlFor="cpf" className="font-md-bold">CPF</label>
            <input
              className="border-dark pad-sm mt-sm"
              type="text"
              title="cpf"
              id="cpf"
              placeholder="cpf"
              {...register("cpf", { required: true })}
              value={dadosParaAtualizar.cpf}
              maxLength="14"
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  cpf: e.target.value.replace(/\D/g, "")
                    .replace(/^(\d{3})(\d)/g, "$1.$2")
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1')
                })
              }}
            />
          </div>
          <div className="flex-column ml-md">
            <label htmlFor="phone" className="font-md-bold">Telefone</label>
            <input
              className="border-dark pad-sm mt-sm"
              type="text"
              title="phone"
              id="phone"
              placeholder="telefone"
              {...register("telefone", { required: true })}
              value={dadosParaAtualizar.telefone}
              maxLength="15"
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  telefone: e.target.value
                    .replace(/\D/g, "")
                    .replace(/^(\d{2})(\d)/g, "($1) $2")
                    .replace(/(\d)(\d{4})$/, "$1-$2")
                    .substr(0, 15)
                })
              }}
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
              placeholder="cep"
              {...register("cep")}
              value={dadosParaAtualizar.cep}
              maxLength="8"
              onChange={(e) => {
                setCep(e.target.value);
              }}
            />
          </div>
          <div className="flex-column ml-md">
            <label htmlFor="adress" className="font-md-bold">Logradouro</label>
            <input
              className="border-dark pad-sm mt-sm"
              type="text"
              title="adress"
              id="adress"
              placeholder="Logradouro"
              {...register("logradouro")}
              value={dadosParaAtualizar.logradouro}
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  logradouro: e.target.value
                })
              }}
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
              placeholder="Bairro"
              {...register("bairro")}
              value={dadosParaAtualizar.bairro}
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  bairro: e.target.value
                })
              }}
            />
          </div>
          <div className="flex-column ml-md">
            <label htmlFor="city" className="font-md-bold">Cidade</label>
            <input
              className="border-dark pad-sm mt-sm"
              type="text"
              title="city"
              id="city"
              placeholder="Cidade"
              {...register("cidade")}
              value={dadosParaAtualizar.cidade}
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  cidade: e.target.value
                })
              }}
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
              placeholder="Complemento"
              {...register("complemento")}
              value={dadosParaAtualizar.complemento}
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  complemento: e.target.value
                })
              }}
            />
          </div>
          <div className="flex-column ml-md">
            <label htmlFor="reference" className="font-md-bold">Ponto de Referência</label>
            <input
              className="border-dark pad-sm mt-sm"
              type="text"
              title="reference"
              id="reference"
              placeholder="Referência"
              {...register("referencia")}
              value={dadosParaAtualizar.referencia}
              onChange={(e) => {
                setDadosParaAtualizar({
                  ...dadosParaAtualizar,
                  referencia: e.target.value
                })
              }}
            />
          </div>
        </div>
        <div className="flex-row mt-lg">
          <button className="btn-white-client" onClick={handleCloseModal}>
            Cancelar
          </button>
          {
            (
              dadosParaAtualizar.nome &&
              dadosParaAtualizar.email &&
              dadosParaAtualizar.cpf &&
              dadosParaAtualizar.telefone
            )
              ?
              <button type="submit" className="btn-pink-bright-client ml-md enabled">
                Editar cliente
              </button>
              :
              <button type="submit" className="btn-pink-client ml-md disabled" disabled>
                Editar cliente
              </button>
          }
        </div>
      </form>
    </div>
  )
}

export default ModalEditClient;