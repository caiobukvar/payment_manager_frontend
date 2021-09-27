import './styles.css';
import LogoWhite from '../../assets/logo-white.svg';
import House from '../../assets/house.svg';
import Money from '../../assets/money.svg';
import Clients from '../../assets/clients.svg';

function Sidebar() {
    return (
        <div className="background-dark sidebar flex-column items-center space-between">
            <div className="mt-lg flex-column items-center content-center">
                <img src={LogoWhite} alt="logo white" className="logo mt-xl" />
                <a href="/" className="flex-row mt-xl white align-start">
                    <img src={House} alt="home" className="ml-lg" />
                    <h2 className="ml-md font-md">Home</h2>
                </a>
                <a href="/" className="flex-row mt-xl white align-start">
                    <img src={Money} alt="charges" className="ml-lg" />
                    <h2 className="ml-md font-md">Cobranças</h2>
                </a>
                <a href="/" className="flex-row mt-xl white align-start">
                    <img src={Clients} alt="clients" className="ml-lg" />
                    <h2 className="ml-md font-md">Clientes</h2>
                </a>
            </div>
            <button type="submit" className="btn-pink-bright mb-xxl font-md-bold">
                Criar cobrança
            </button>
        </div>
    );
}

export default Sidebar;