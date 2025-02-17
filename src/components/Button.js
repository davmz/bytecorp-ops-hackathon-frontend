"use client";

import PropTypes from 'prop-types';
import { useRouter } from 'next/navigation';

export default function Button({ variant, children, className, href }) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`
                w-[240px] h-[75px] rounded-[18px]
                font-poppins font-bold text-[24px] leading-[36px]
                ${variant === 'primary' 
                ? 'bg-[#091540] text-white' 
                : 'bg-white text-[#091540]'
                }
            `}
        >
            {children}
        </button>
    );
}

// PropTypes for type-checking
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.string,
};

  // Default props (optional)
Button.defaultProps = {
    href: null,
};