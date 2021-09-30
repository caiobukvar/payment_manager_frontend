import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function InputPassword({ label, placeholder, value, setValue, register }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex-column input-password">
            <label className="mb-md font-md-bold" htmlFor="password">{label}</label>
            <div className="full-input">
                <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    {...register('senha')}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <FontAwesomeIcon
                    className="eye-password"
                    icon={showPassword ? faEye : faEyeSlash}
                    color="#BEBEBE"
                    onClick={() => setShowPassword(!showPassword)}
                />
            </div>
        </div>
    )
}

export default InputPassword;