import './styles.css';
import LogoWhite from '../../assets/logo-white.svg';
import House from '../../assets/house.svg';
import Money from '../../assets/money.svg';
import Clients from '../../assets/clients.svg';

function Sidebar() {
    return (
        <div className="background-dark sidebar flex-column items-center space-between">
            <div className="mt-lg flex-column">
                <img src={LogoWhite} alt="logo white" />

                <div className="flex-row mt-xl white">
                    <img src={House} alt="home" />
                    <h2 className="ml-md font-md">Home</h2>
                </div>
                <div className="flex-row white">
                    <img src={Money} alt="charges" />
                    <h2 className="ml-md font-md">Cobranças</h2>
                </div>
                <div className="flex-row white">
                    <img src={Clients} alt="clients" />
                    <h2 className="ml-md font-md">Clientes</h2>
                </div>
            </div>
            <button type="submit" className="btn-pink-bright mb-xxl font-md-bold">
                Criar cobrança
            </button>
        </div>
    );
}

export default Sidebar;