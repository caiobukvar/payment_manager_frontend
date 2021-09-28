function InputDouble({ id, title, label, placeholder }) {
    return (
        <>
            <label htmlFor={title}>{label}</label>
            <input
                type="text"
                title={title}
                id={id}
                placeholder={placeholder}
            />
        </>
    );
}

export default InputDouble;