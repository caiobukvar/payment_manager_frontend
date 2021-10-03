import './styles.css';
import React, { useState } from 'react';
import ClientsCard from '../../components/ClientsCard';
import ChargesCard from '../../components/ChargesCard';


function Main() {

  return (
    <div className="flex-row content-center gap-sm">
      <ClientsCard />
      <ChargesCard />
    </div>
  );
}

export default Main;
