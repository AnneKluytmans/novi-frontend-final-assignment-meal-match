import {CaretDown, CaretUp, LineVertical} from '@phosphor-icons/react';
import Dropdown from '../../dropdown/Dropdown.jsx';
import './NavItemDropdown.css';

function NavItemDropdown({ title, className, children } ) {
    return (
        <li className="nav-item__dropdown">
            <LineVertical size={28}/>
            <Dropdown
                title={title}
                openIcon={<CaretUp size={22}/>}
                closedIcon={<CaretDown size={22}/>}
                className={`dropdown__nav-bar dropdown__nav-item ${className}`}
            >
                {children}
            </Dropdown>
        </li>
    );
}

export default NavItemDropdown;