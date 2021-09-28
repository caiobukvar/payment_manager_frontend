import './styles.css';
import { useContext } from 'react';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';
import { contextoModal } from '../../contextoModal';

function ProfileEditMenu({ menuOpen, setMenuOpen }) {
    const { value, setValue } = useContext(contextoModal);

    function handleOpenProfilePage() {
        setValue(true);
    }

    return (
        <>
            {menuOpen &&
                <div className="flex-column menu items-center content-center items-start">
                    <div className="flex-row items-center content-center" onClick={() => handleOpenProfilePage()}>
                        <img
                            src={Edit}
                            alt="edit profile"
                        />
                        <p className="ml-sm">Editar</p>
                    </div>
                    <div className="flex-row items-center content-center">
                        <img
                            src={Exit}
                            alt="exit profile"
                            onClick={() => { setMenuOpen(false) }}
                        />
                        <p className="ml-sm">Deslogar</p>
                    </div>
                </div>
            }
        </>
    );
}

export default {
    ProfileEditMenu
};

