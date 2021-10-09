import React, { useContext } from 'react';
import './styles.css';

import Sidebar from '../../components/Sidebar';
import ProfileBar from '../../components/ProfileBar';
import ModalEditProfile from '../../components/ModalEditProfile';
import AddCharges from '../../components/AddCharges';

import ModalEditClient from "../ModalEditClient";

import ModalEditClientContext from '../../contexts/ModalEditClientContext';
import ModalContext from '../../contexts/ModalContext';
import AddChargeModalContext from '../../contexts/AddChargeModalContext';

import CloseIcon from '../../assets/close-icon.svg';

function Layout({ children }) {
    const { value, setValue } = useContext(ModalContext);
    const { valueModalEditClient, setValueModalEditClient } = useContext(ModalEditClientContext);
    const { valueModalAddCharges, setValueModalAddCharges } = useContext(AddChargeModalContext);

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
            {valueModalEditClient &&
                <ModalEditClient
                    value={valueModalEditClient}
                    setValue={setValueModalEditClient}
                />
            }
            {valueModalAddCharges &&
                <div className="modal">
                    <div className="modal-content ml-lg">
                        <AddCharges />
                        <img src={CloseIcon}
                            alt="close-icon"
                            className="modal-close-icon"
                            onClick={() => { setValueModalAddCharges(false) }}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default Layout;