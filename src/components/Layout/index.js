import './styles.css';
import { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileBar from '../../components/ProfileBar';
import ModalEditProfile from '../../components/ModalEditProfile';
import ModalContext from '../../ModalContext';

function Layout({ children }) {
    const { value, setValue } = useContext(ModalContext);

    return (
        <div className="flex-row align-start">
            <Sidebar />
            <div className="flex-column items-center full-width ">
                <ProfileBar />
                {children}
            </div>
            {value &&
                <ModalEditProfile
                    value={value}
                    setValue={setValue}
                />
            }
        </div>
    );
}

export default Layout;