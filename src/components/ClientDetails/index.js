import './styles.css';
import React, { useState, useContext } from 'react';
import CloseIcon from '../../assets/close-icon.svg';

function ClientDetails({ clientData }) {
    return (
        <div>
            <div>
                Nome e info
            </div>
            <img src={CloseIcon}
                alt="close-icon"
                className="modal-close-icon"
                onClick={() => { setValue(false) }}
            />
            <div>
                <div>
                    dados cliente
                </div>
                <div>
                    MARGEM NA ESQUERDA
                    <div>
                        padding e
                        .map de cobranças/pagamentos recente
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ClientDetails;