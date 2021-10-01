import './styles.css';
import { useContext } from 'react';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';
import { ContextoModal } from '../../ContextoModal';
import { AuthContext } from '../../AuthContext';
import { useHistory } from 'react-router-dom';

function ProfileEditMenu() {
    const { setValue } = useContext(ContextoModal);
    const { setToken } = useContext(AuthContext);
    const history = useHistory();

    function handleOpenProfilePage() {
        setValue(true);
    }

    function handleLogout() {
        setToken('');
        history.push('/signin');
    }

    return (
        <>
            <div className="flex-column menu items-center content-center items-start pad-left">
                <div className="flex-row items-center content-center text-center" onClick={() => handleOpenProfilePage()}>
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

