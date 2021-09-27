import './styles.css';
import { useState } from 'react';
import ProfileIcon from '../../assets/profile-icon.svg';

function ProfileBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleOpenMenu() {
        if (menuOpen === false) {
            setMenuOpen(true);
        }
        setMenuOpen(false);
    }


    return (
        <div>
            <img src={ProfileIcon}
                alt="Icon"
                className="icon"
                onClick={() => { handleOpenMenu() }}
            />
            {menuOpen ? <ProfileEditMenu /> : null}
        </div>
    );
}

export default ProfileBar;