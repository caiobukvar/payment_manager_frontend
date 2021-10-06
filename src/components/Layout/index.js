import './styles.css';
import React, { useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import ProfileBar from '../../components/ProfileBar';
import ModalEditProfile from '../../components/ModalEditProfile';
import ModalContext from '../../contexts/ModalContext';
import ModalClientContext from '../../contexts/ModalClientContext';
import ModalEditClient from "../ModalEditClient";

function Layout({ children }) {
    const { value, setValue } = useContext(ModalContext);
    const { valueModalClient, setValueModalClient } = useContext(ModalClientContext);

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
            {valueModalClient &&
                <ModalEditClient
                    value={valueModalClient}
                    setValue={setValueModalClient}
                />
            }
        </div>
    );
}

export default Layout;