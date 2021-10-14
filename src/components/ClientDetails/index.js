import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import MailIcon from '../../assets/mail.svg';
import PhoneIcon from '../../assets/phone.svg';
import AuthContext from '../../contexts/AuthContext';
import './styles.css';

function ClientDetails({ setModalClientDetails, clientId }) {
  const { token } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    try {
      setLoading(true);

      async function getDataCustomer() {
        if (!clientId) {
          throw new Error('Id not found!');
        }

        const response = await fetch(`https://paymentmanager-api.herokuapp.com/getDataCustomer?id=${clientId}`,
          {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          });

        const data = await response.json();

        if (!data.length) {
          return;
        }

        const {
          nome,
          email,
          telefone,
          cep,
          bairro,
          cidade,
          logradouro,
          complemento,
          referencia
        } = data;

        const clientDetails = {
          nome,
          email,
          telefone,
          cep,
          bairro,
          cidade,
          logradouro,
          complemento,
          referencia,
        }

        const billings = [];

        for (const billing of data) {
          billings.push({
            id: billing.id,
            descricao: billing.descricao,
            vencimento: billing.vencimento,
            valor: billing.valor,
            status: billing.status
          });
        }


        if (response.ok) {
          setCustomerData(billings);
          setClientData(clientDetails);
        }
      }
      getDataCustomer();

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }

  }, []);

  return (
    <div className="modal">
      {loading &&
        <div className="modal-circular" >
          <CircularProgress color="secondary" />
        </div>
      }
      {
        !loading &&
        <div className="flex-row modal-content modal-padding modal-size-card space-evenly">
          <div className="flex-row half-width">
            <img src={CloseIcon}
              alt="close-icon"
              className="modal-close-icon"
              onClick={() => setModalClientDetails(false)}
            />
            <div className="pad-side full-width mt-xl">
              <div className="pad-client-details">
                <h2>{clientData.nome}</h2>
                <p>CPF</p>
              </div>
              <div className="flex-row border-right">
                <div className="flex-row gap-sm half-width pad-client-details">
                  <img src={MailIcon} alt="email" />
                  <span>{clientData.email}</span>
                </div>
                <div className="flex-row gap-sm half-width pad-client-details">
                  <img src={PhoneIcon} alt="phone" />
                  <span>{clientData.telefone}</span>
                </div>
              </div>
              <div className="border-right pad-vertical">
                <div className="flex-row">
                  <div className="flex-column pad-client-details">
                    <h3>CEP</h3>
                    <span>{clientData.cep || '-'}</span>
                  </div>
                  <div className="flex-column ml-lg pad-client-details">
                    <h3>Bairro</h3>
                    <span>{clientData.bairro || '-'}</span>
                  </div>
                  <div className="flex-column ml-lg pad-client-details">
                    <h3>Cidade</h3>
                    <span>{clientData.cidade || '-'}</span>
                  </div>
                </div>
                <div>
                  <div className="flex-column pad-client-details">
                    <h3>Logradouro</h3>
                    <span>{clientData.logradouro || '-'}</span>
                  </div>
                </div>
                <div className="flex-row">
                  <div className="flex-column pad-client-details">
                    <h3>Complemento</h3>
                    <span>{clientData.complemento || '-'}</span>
                  </div>
                  <div className="flex-column ml-lg pad-client-details">
                    <h3>Ponto de referência</h3>
                    <span>{clientData.referencia || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row half-width mt-xl">
            <div className="flex-column full-width pad-md content-center items-center">
              {customerData && customerData.map((charge) => {
                <div className="box-shadow-charges pad-card charge-card flex-row" key={charge.id}>
                  <div className="flex-column space-between">
                    <span>`"#"${charge.id} ${charge.descricao}`</span>
                    <span>{charge.vencimento}</span>
                  </div>
                  <div className="flex-column space-between">
                    <span>{parseFloat(charge.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    <span>{charge.status}</span>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}
export default ClientDetails;