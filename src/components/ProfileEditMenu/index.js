import './styles.css';
import React, { useContext } from 'react';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';
import ModalContext from '../../contexts/ModalContext';
import AuthContext from '../../contexts/AuthContext';
import MenuContext from '../../contexts/MenuContext';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProfileEditMenu() {
    const { setValue } = useContext(ModalContext);
    const { setMenuOpen } = useContext(MenuContext);
    const { setToken } = useContext(AuthContext);
    const history = useHistory();

    function handleOpenProfilePage() {
        setValue(true);
        setMenuOpen(false);
    }

    function handleLogout() {
        setToken('');
        setMenuOpen(false);
        localStorage.removeItem('token-usuario');
        localStorage.removeItem('info-usuario');
        toast.success("Deslogado com sucesso!");
        history.push('/signin');
    }

    return (
        <>
            <div className="flex-column menu items-center content-center items-start pad-left">
                <div className="flex-row items-center content-center" onClick={() => handleOpenProfilePage()}>
                    <img
                        src={Edit}
                        alt="edit profile"
                    />
                    <p className="ml-sm">Editar</p>
                </div>
                <div className="flex-row items-center content-center" onClick={handleLogout}>
                    <img
                        src={Exit}
                        alt="exit profile"
                    />
                    <p className="ml-sm">Logout</p>
                </div>
            </div>
        </>
    );
}

export default ProfileEditMenu;

