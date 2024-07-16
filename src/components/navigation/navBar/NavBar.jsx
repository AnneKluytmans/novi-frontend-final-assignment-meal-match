import { NavLink } from 'react-router-dom';
import { User, Heart, SignOut } from '@phosphor-icons/react';
import Logo from '../../logo/Logo.jsx';
import NavItem from '../navItem/NavItem.jsx';
import NavItemDropdown from '../navItemDropdown/NavItemDropdown.jsx';
import NavItemDropdownLink from '../navItemDropdownLink/NavItemDropdownLink.jsx';
import './NavBar.css';
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu.jsx";


function NavBar() {
    const isAuth = true;

    function signOut(){
        console.log("The user is signed out");
    }

    return (
        <nav className="nav-bar outer-content-container">
            <div className="nav-bar__container">
                <Logo/>
                <div className="nav-bar__links-wrapper">
                    <div className="hamburger-menu__small-desktop">
                        <HamburgerMenu/>
                    </div>
                    <div className="hamburger-menu__mobile">
                        <HamburgerMenu>
                            {isAuth ?
                                <>
                                    <NavItemDropdownLink to="/profile" name="Profile"/>
                                    <NavItemDropdownLink to="/favorite-recipes" name="Favorite Recipes"/>
                                    <button type="button" onClick={signOut}>
                                        <p className="hamburger-menu__sign-out-link">Sign Out</p>
                                    </button>
                                </>
                                :
                                <>
                                    <NavItemDropdownLink to="/sign-in" name="Sign In"/>
                                    <NavItemDropdownLink to="/sign-up" name="Sign Up"/>
                                </>
                            }
                        </ HamburgerMenu>
                    </div>
                    <ul className="nav-links-wrapper">
                        <NavItem to="/" name="Home"/>
                        <NavItem to="/recipe-quiz" name="Recipe Quiz"/>
                        <NavItem to="/search-by-ingredients" name="Ingredient search"/>
                        <NavItem to="/all-recipes" name="All Recipes"/>
                        <NavItemDropdown
                            title="Help & Support"
                            className="dropdown__nav-bar--default"
                        >
                            <NavItemDropdownLink to="/contact" name="Contact"/>
                            <NavItemDropdownLink to="/faq" name="Faq"/>
                            <NavItemDropdownLink to="/terms-and-policy" name="Terms and Policy"/>
                        </NavItemDropdown>
                    </ul>
                    <ul className="profile-links-wrapper">
                        {isAuth ?
                            <div className="nav-bar__profile-links">
                                <li>
                                    <NavLink to="/profile-page">
                                        <User size={24} weight="bold" className="nav-bar__profile-link"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/favorite-recipes">
                                        <Heart size={24} weight="bold" className="nav-bar__profile-link"/>
                                    </NavLink>
                                </li>
                                <li>
                                    <button type="button" onClick={signOut}>
                                        <SignOut size={24} weight="bold" className="nav-bar__profile-link"/>
                                    </button>
                                </li>
                            </div>
                            :
                            <NavItemDropdown
                                title="Sign In"
                                className="dropdown__nav-bar--small"
                            >
                                <NavItemDropdownLink to="/sign-in" name="Sign In"/>
                                <NavItemDropdownLink to="/sign-up" name="Sign Up"/>
                            </NavItemDropdown>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;