import './styles.css';
import React, { useContext } from 'react';
import LogoWhite from '../../assets/logo-white.svg';
import House from '../../assets/house.svg';
import Money from '../../assets/money.svg';
import Clients from '../../assets/clients.svg';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import MenuContext from '../../contexts/MenuContext';

function Sidebar() {
    const { setMenuOpen } = useContext(MenuContext);
    const history = useHistory();

    function handleCloseProfileDropdown() {
        setMenuOpen(false);
    }

    function handleCreateCharge() {
        history.push("/nova-cobranca")
    }

    return (
        <div className="background-dark sidebar flex-column items-center">
            <div className="mt-lg flex-column items-center content-center full-width">
                <img src={LogoWhite} alt="logo white" className="logo mt-xl" />
                <NavLink
                    exact to="/"
                    className="flex-row white sidebar-width items-center"
                    activeClassName={
                        "active"
                    }
                    onClick={handleCloseProfileDropdown}
                >
                    <img src={House} alt="home" className="img-resize ml-xl" />
                    <h2 className="ml-md font-md">HOME</h2>
                </NavLink>
                <NavLink
                    to="/cobrancas"
                    className="flex-row white sidebar-width items-center"
                    activeClassName={
                        "active"
                    }
                    onClick={handleCloseProfileDropdown}
                >
                    <img src={Money} alt="charges" className="img-resize ml-xl" />
                    <h2 className="ml-md font-md">COBRANÇAS</h2>
                </NavLink>
                <NavLink
                    to="/clientes"
                    className="flex-row white sidebar-width items-center"
                    activeClassName={
                        "active"
                    }
                    onClick={handleCloseProfileDropdown}
                >
                    <img src={Clients} alt="clients" className="img-resize ml-xl" />
                    <h2 className="ml-md font-md">CLIENTES</h2>
                </NavLink>
            </div>
            <button type="submit" className="btn-pink-bright mt-xxl font-md-bold" onClick={handleCreateCharge}>
                Criar cobrança
            </button>
        </div >
    );
}

export default Sidebar;