import { NavLink } from 'react-router-dom';
import './NavLinkItemDropdown.css';

function NavLinkItemDropdown( { to, name } ) {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `dropdown__nav-link-item ${isActive ? 'active-nav-link' : 'default-nav-link'}`
        }>
            <p>{name}</p>
        </NavLink>
    );
}

export default NavLinkItemDropdown;