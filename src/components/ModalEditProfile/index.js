import './styles.css';
import CloseIcon from '../../assets/close-icon.svg';

function ModalEditProfile({ openProfileEdit, setOpenProfileEdit }) {
    return (
        <>
            {openProfileEdit &&
                <div className="modal">
                    <div className="modal-content flex-column content-center items-center">
                        <img src={CloseIcon}
                            alt="modal-close-icon"
                            onClick={() => { setOpenProfileEdit(false) }}
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
            }
        </>
    );
}

export default ModalEditProfile;