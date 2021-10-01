import './styles.css';
import Money from '../../assets/money.svg';

function ChargesCard() {
    return (
        <div className="card flex-column box-shadow mt-xxl ml-lg">
            <div className="flex-row topbar background-dark-smooth card-padding content-center border-round-top">
                <img src={Money} alt="charges" className="img-resize" />
                <p className="ml-sm">Cobranças</p>
            </div>
            <div className="flex-column card-content align-center content-center card-padding-lg">
                <div className="border-blue flex-row space-between pad-md items-center">
                    <p>Previstas</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-red flex-row space-between mt-md pad-md items-center">
                    <p>Vencidas</p>
                    <p className="font-xxl">0</p>
                </div>
                <div className="border-green flex-row space-between mt-lg pad-md items-center">
                    <p>Pagas</p>
                    <p className="font-xxl">0</p>
                </div>
            </div>
        </div>
    )
}

export default ChargesCard;