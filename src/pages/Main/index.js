import './styles.css';
import React from 'react';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';


function Main() {

  // fazer funcao para pegar dados de cobranças E clientes!

  return (
    <div className="flex-row content-center full-height">
      <ClientsCard />
      <ChargesCard />
    </div>
  );
}

export default Main;
