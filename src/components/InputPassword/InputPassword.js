import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


function InputPassword({ label, placeholder, value, setValue }) {
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useForm();

    return (
        <div className="flex-column input-password">
            <label className="mb-md font-md-bold" htmlFor="password">{label}</label>
            <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                {...register('password')}
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
    )
}

export default InputPassword;