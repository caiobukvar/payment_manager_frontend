import './styles.css';
import Clients from '../../assets/clients.svg'

function ClientsCard() {
    return (
        <div className="card-client flex-column box-shadow mt-xxl">
            <div className="flex-row topbar background-dark card-padding content-center border-round-top">
                <img src={Clients} alt="clients" />
                <p className="ml-sm">Clientes</p>
            </div>
            <div className="flex-column card-content align-center content-center card-padding-lg">
                <div className="border-green flex-row space-between pad-md items-center">
                    <p>Em dia</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-red flex-row space-between mt-md pad-md items-center">
                    <p>Inadimplentes</p>
                    <p className="font-xxl">0</p>
                </div>
            </div>
        </div>
    )
}

export default ClientsCard;