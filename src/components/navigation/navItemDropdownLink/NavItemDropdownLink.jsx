import { NavLink } from 'react-router-dom';
import './NavItemDropdownLink.css';

function NavItemDropdownLink({ to, name } ) {
    return (
        <NavLink to={to} className={({ isActive }) =>
            `dropdown__link ${isActive ? 'active-dropdown-link' : 'default-dropdown-link'}`
        }>
            <p>{name}</p>
        </NavLink>
    );
}

export default NavItemDropdownLink;