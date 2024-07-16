import { X, List } from '@phosphor-icons/react';
import Dropdown from '../../dropdown/Dropdown.jsx';
import './HamburgerMenu.css';
import NavItemDropdownLink from "../navItemDropdownLink/NavItemDropdownLink.jsx";


function HamburgerMenu( { children }) {
    return (
        <Dropdown
            openIcon={<X size={36}/>}
            closedIcon={<List size={36}/>}
            className="dropdown__nav-bar dropdown__nav-bar--default dropdown__hamburger-menu"
        >
            <NavItemDropdownLink to="/" name="Home" />
            <NavItemDropdownLink to="/recipe-quiz" name="Recipe Quiz" />
            <NavItemDropdownLink to="/ingredient-search" name="Ingredient Search" />
            <NavItemDropdownLink to="/all-recipes" name="All Recipes" />
            <NavItemDropdownLink to="/contact" name="Contact" />
            <NavItemDropdownLink to="/faq" name="Faq" />
            <NavItemDropdownLink to="/terms-and-policy" name="Terms and Policy" />
            {children}
        </Dropdown>
    );
}

export default HamburgerMenu;