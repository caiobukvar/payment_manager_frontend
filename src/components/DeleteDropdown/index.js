import { useContext } from 'react';
import { toast } from "react-toastify";

import DeleteChargeModalContext from '../../contexts/DeleteChargeModalContext';

function DeleteDropdown() {
    const { setValueModalDeleteCharges } = useContext(DeleteChargeModalContext);

    async function DeleteCharge(chargeId) {
        const response = await fetch(`https://paymentmanager-api.herokuapp.com/deleteBilling?id=${chargeId}`,
            {
                method: "DELETE",
                body: JSON.stringify(editData),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

        if (response.ok) {
            toast.success(`Cobrança ${chargeId} excluída!`)
        }
    }

    function handleReturn() {
        setValueModalDeleteCharges(false);
    }

    return (
        // div de posicionamento
        <div className="dropdown-bg-img flex-column items-center content-center pad-sm">
            {/* div do modal */}
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