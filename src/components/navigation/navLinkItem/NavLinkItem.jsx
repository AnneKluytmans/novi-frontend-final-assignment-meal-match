import { NavLink } from 'react-router-dom';
import { LineVertical } from '@phosphor-icons/react';
import './NavLinkItem.css';

function NavLinkItem( { to, name } ){
    return (
        <li className="nav-link-item">
            <NavLink to={to} className={({isActive}) => isActive ? "nav-link-item active-link" : "nav-link-item default-link"}>
                <LineVertical size={28} />
                <p>{name}</p>
            </NavLink>
        </li>
    );
}

export default NavLinkItem;