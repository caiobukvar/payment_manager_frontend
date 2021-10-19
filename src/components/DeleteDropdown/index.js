import { useContext } from 'react';
import { toast } from "react-toastify";

import DeleteChargeModalContext from '../../contexts/DeleteChargeModalContext';
import AuthContext from '../../contexts/AuthContext';

function DeleteDropdown({ id }) {
    const { setValueModalDeleteCharges } = useContext(DeleteChargeModalContext);
    const { token } = useContext(AuthContext);

    async function DeleteCharge() {
        const chargeId = id;
        console.log("chargeId", chargeId)

        const response = await fetch(`https://paymentmanager-api.herokuapp.com/deleteBilling?id=${chargeId}`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

        await response.json();

        if (response.ok) {
            toast.success(`Cobrança ${chargeId} excluída!`)
            setValueModalDeleteCharges(false);
        }
        setValueModalDeleteCharges(false);
    }

    function handleReturn() {
        setValueModalDeleteCharges(false);
    }

    return (
        <div className="dropdown-bg-img flex-column items-center content-center pad-sm">
            <div className="flex-column items-center">
                <p className="font-sm">Apagar item?</p>
                <div className="flex-row pad-sm">
                    <button className="btn-blue-delete" onClick={DeleteCharge}>Sim</button>
                    <button className="btn-red-delete" onClick={handleReturn}>Não</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteDropdown;