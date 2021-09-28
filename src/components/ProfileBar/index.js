import './styles.css';
import { useState } from 'react';
import ProfileIcon from '../../assets/profile-icon.svg';
import ProfileEditMenu from '../ProfileEditMenu';

function ProfileBar() {
    const [menuOpen, setMenuOpen] = useState(false);

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