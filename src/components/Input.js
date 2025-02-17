import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types";

import eyeIcon from "../../images/eye.png";

export default function Input({ 
    label, 
    type, 
    placeholder, 
    value, 
    onChange,
    icon,
    showPasswordToggle
}) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? "text" : type;

    return (
        <div className="w-full">
            <label className="text-[12px] leading-4 text-[#2f2f2f] font-sans font-normal">
                {label}
            </label>
            <div className="relative mt-2">
                <div className="w-full h-[77px] bg-[#ececec] rounded-lg flex items-center px-4">
                    {icon && (
                        <div className="mr-3">
                            <Image src={icon} alt="" width={30} height={24} />
                        </div>
                    )}
                    <input
                        type={inputType}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className="bg-transparent w-full font-sans font-bold text-base leading-[22px] text-[#2f2f2f] outline-none"
                    />
                    {showPasswordToggle && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4"
                        >
                            <Image 
                                src={eyeIcon} 
                                alt={showPassword ? "Hide password" : "Show password"}
                                width={22}
                                height={22}
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// ✅ PropTypes for type-checking
Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string,
    showPasswordToggle: PropTypes.bool
};

// ✅ Default Props (optional)
Input.defaultProps = {
    icon: null,
    showPasswordToggle: false
};