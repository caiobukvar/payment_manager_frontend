import './styles.css';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Edit from '../../assets/edit.svg';
import Exit from '../../assets/exit.svg';

function ProfileEditMenu({ menuOpen, setMenuOpen }) {
    const [openProfileEdit, setOpenProfileEdit] = useState(false);

    return (
        <>
            {menuOpen &&
                <div className="flex-column menu items-center content-center items-start">
                    <div className="flex-row items-center" >
                        <img
                            src={Edit}
                            alt="edit profile"
                            onClick={() => handleOpenProfilePage()}
                        />
                        <p className="ml-sm">Editar</p>
                    </div>
                    <div className="flex-row items-center">
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

export default ProfileEditMenu;

