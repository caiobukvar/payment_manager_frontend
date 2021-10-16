function DeleteDropdown() {
    return (
        // div de posicionamento
        <div>
            {/* div do modal */}
            <div className="flex-column">
                <p className="font-sm">Apagar item?</p>
                <div className="flex-row">
                    <button className="btn-blue-delete">Sim</button>
                    <button className="btn-red-delete">Não</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteDropdown;