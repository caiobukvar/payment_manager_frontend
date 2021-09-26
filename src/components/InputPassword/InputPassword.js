import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function InputPassword({ label, placeholder, value, setValue }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex-column input-password">
            <label htmlFor="password">{label}</label>
            <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <FontAwesomeIcon
                className="eye-password"
                icon={showPassword ? faEye : faEyeSlash}
                size="lg"
                onClick={() => setShowPassword(!showPassword)}
            />
        </div>
    )
}

export default InputPassword;