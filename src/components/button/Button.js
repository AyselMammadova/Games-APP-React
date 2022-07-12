import React from 'react';
import './Button.css';
import { Link, useLocation } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']


export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]


     // window location href
     const location = useLocation();
     const { pathname } = location;
     const splitLocation = pathname;


    return (
        <Link to='/contact' className="btn-mobile">
            <button 
            className={`custom-btn ${checkButtonStyle} ${checkButtonSize} ${splitLocation === '/contact' ? 'active' : ''}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>


        </Link>
    )
};