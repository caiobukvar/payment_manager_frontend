import './styles.css';
import { useContext } from 'react';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';
import { contextoModal } from '../../contextoModal';
import { Link } from 'react-router-dom';

function ProfileEditMenu({ setMenuOpen }) {
    const { setValue } = useContext(contextoModal);

    function handleOpenProfilePage() {
        setValue(true);
    }

    return (
        <>
            <div className="flex-column menu items-center content-center items-start">
                <div className="flex-row items-center content-center" onClick={() => handleOpenProfilePage()}>
                    <img
                        src={Edit}
                        alt="edit profile"
                    />
                    <p className="ml-sm">Editar</p>
                </div>
                <div className="flex-row items-center content-center">
                    <Link
                        style={{ textDecoration: 'none' }}
                        to="/sign-in"
                        className="flex-row"
                    >
                        <img
                            src={Exit}
                            alt="exit profile"
                            onClick={() => { setMenuOpen(false) }}
                        />
                        <p className="ml-sm">Deslogar</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProfileEditMenu;

