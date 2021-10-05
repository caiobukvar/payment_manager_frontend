import './styles.css';
import React from 'react';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';


function Main() {

  return (
    <div className="flex-row content-center full-height">
      <ClientsCard />
      <ChargesCard />
    </div>
  );
}

export default Main;
