import {CaretDown, CaretUp, LineVertical} from "@phosphor-icons/react";
import Dropdown from "../../dropdown/Dropdown.jsx";
import './NavLinkDropdown.css';

function NavLinkDropdown( { title, className, children } ) {
    return (
        <li className="nav-link__dropdown">
            <LineVertical size={28}/>
            <Dropdown
                title={title}
                openIcon={<CaretUp size={22}/>}
                closedIcon={<CaretDown size={22}/>}
                className={`dropdown__nav-bar dropdown__nav-link ${className}`}
            >
                {children}
            </Dropdown>
        </li>
    );
}

export default NavLinkDropdown;