import { NavLink } from 'react-router-dom';
import { LineVertical } from '@phosphor-icons/react';
import './NavItem.css';

function NavItem( { to, name } ){
    return (
        <li className="nav-item">
            <NavLink to={to} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item default-link"}>
                <LineVertical size={28} />
                <p>{name}</p>
            </NavLink>
        </li>
    );
}

export default NavItem;