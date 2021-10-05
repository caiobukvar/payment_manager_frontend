import './styles.css';
import React from 'react';
import LogoWhite from '../../assets/logo-white.svg';
import House from '../../assets/house.svg';
import Money from '../../assets/money.svg';
import Clients from '../../assets/clients.svg';
import { NavLink } from 'react-router-dom'

function Sidebar() {

    return (
        <div className="background-dark sidebar flex-column items-center">
            <div className="mt-lg flex-column items-center full-width">
                <img src={LogoWhite} alt="logo white" className="logo mt-xl" />
                <NavLink
                    exact to="/"
                    className="flex-row white items-center sidebar-width"
                    activeClassName={
                        "active"
                    }
                >
                    <img src={House} alt="home" className="ml-lg img-resize" />
                    <h2 className="ml-md font-md">HOME</h2>
                </NavLink>
                <NavLink
                    to="/charges"
                    className="flex-row white items-center sidebar-width"
                    activeClassName={
                        "active"
                    }
                >
                    <img src={Money} alt="charges" className="ml-lg img-resize" />
                    <h2 className="ml-md font-md">COBRANÇAS</h2>
                </NavLink>
                <NavLink
                    to="/client"
                    className="flex-row white items-center sidebar-width"
                    activeClassName={
                        "active"
                    }
                >
                    <img src={Clients} alt="clients" className="ml-lg img-resize" />
                    <h2 className="ml-md font-md">CLIENTES</h2>
                </NavLink>
            </div>
            <button type="submit" className="btn-pink-bright mt-xxl font-md-bold">
                Criar cobrança
            </button>
        </div >
    );
}

export default Sidebar;