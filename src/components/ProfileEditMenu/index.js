import './styles.css';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';

function ProfileEditMenu() {

    return (
        <div className="flex-column menu">
            <div className="flex-row">
                <img src={Edit} alt="edit profile" />
                <p>Editar</p>
            </div>
            <div className="flex-row">
                <img src={Exit} alt="exit profile" />
                <p>Deslogar</p>
            </div>
        </div>
    );
}

export default ProfileEditMenu;

