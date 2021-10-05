import './styles.css';
import React, { useContext } from 'react';
import ProfileIcon from '../../assets/profile-icon.svg';
import ProfileEditMenu from '../ProfileEditMenu';
import MenuContext from '../../MenuContext';

function ProfileBar() {
    const { menuOpen, setMenuOpen } = useContext(MenuContext);

    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <img src={ProfileIcon}
                alt="Icon"
                className="icon"
                onClick={() => { handleOpenMenu() }}
            />
            {menuOpen &&
                <ProfileEditMenu
                    setMenuOpen={setMenuOpen}
                />
            }
        </div>
    );
}

export default ProfileBar;