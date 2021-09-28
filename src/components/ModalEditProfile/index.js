import './styles.css';
import CloseIcon from '../../assets/close-icon.svg';
import InputPassword from '../InputPassword/InputPassword';

function ModalEditProfile({ setValue }) {
    return (
        <>
            <div className="modal dark-bg box-shadow">
                <div className="modal-content flex-column content-center items-center">
                    <img src={CloseIcon}
                        className="modal-close-icon"
                        onClick={() => { setValue(false) }}
                    />
                    <div className="flex-column items-center content-center">
                        <p>// EDITAR USUÁRIO</p>
                        <input type="text" id="name" placeholder="seu nome" />
                        <input type="text" id="email" placeholder="seu email" />
                        <InputPassword id="new-password" placeholder="" />
                        <input type="text" id="phone" placeholder="seu telefone" />
                        <input type="text" id="CPF" placeholder="seu cpf" />
                        <button className="btn-pink">Editar conta</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalEditProfile;