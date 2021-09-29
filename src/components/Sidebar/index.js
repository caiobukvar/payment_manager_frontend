import './styles.css';
import LogoWhite from '../../assets/logo-white.svg';
import House from '../../assets/house.svg';
import Money from '../../assets/money.svg';
import Clients from '../../assets/clients.svg';
import { useState } from 'react';

function Sidebar() {
    const [selected, setSelected] = useState('home');

    function handleSelection(e, selectedRoute) {
        setSelected(selectedRoute);
        e.preventDefault();
    }

    return (
        <div className="background-dark sidebar flex-column items-center">
            <div className="mt-lg flex-column items-center content-center">
                <img src={LogoWhite} alt="logo white" className="logo mt-xl" />
                <a href="/"
                    onClick={(e) => handleSelection(e, 'home')}
                    className={`flex-row white align-start ${(selected === 'home') ? "active" : ''}`}
                >
                    <img src={House} alt="home" className="ml-lg" />
                    <h2 className="ml-md font-md">Home</h2>
                </a>
                <a href="/"
                    onClick={(e) => handleSelection(e, 'charges')}
                    className={`flex-row white align-start ${(selected === 'charges') ? "active" : ''}`}
                >
                    <img src={Money} alt="charges" className="ml-lg" />
                    <h2 className="ml-md font-md">Cobranças</h2>
                </a>
                <a href="/add-client"
                    onClick={(e) => handleSelection(e, 'add-client')}
                    className={`flex-row white align-start ${(selected === 'add-client') ? "active" : ''}`}
                >
                    <img src={Clients} alt="clients" className="ml-lg" />
                    <h2 className="ml-md font-md">Clientes</h2>
                </a>
            </div>
            <button type="submit" className="btn-pink-bright mt-xxl font-md-bold">
                Criar cobrança
            </button>
        </div >
    );
}

export default Sidebar;