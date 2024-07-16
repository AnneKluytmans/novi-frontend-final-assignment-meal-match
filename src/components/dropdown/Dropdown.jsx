import { useState } from 'react';
import './Dropdown.css';

function Dropdown ( { title, openIcon, closedIcon, children, disabled, className = '' } ) {
    const [isOpen, toggleIsOpen] = useState(false);

    function toggleDropdown() {
        toggleIsOpen(!isOpen);
    }

    return (
        <div className={`dropdown ${className}`}>
            <button
                className={"dropdown__header"}
                type="button"
                onClick={toggleDropdown}
                disabled={disabled}
            >
                <span className={"dropdown__title"}>
                    {title}
                </span>
                <span className={"dropdown__icon"}>
                    {isOpen ? openIcon : closedIcon}
                </span>
            </button>
            {isOpen && (
                <div className={"dropdown__content"}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;