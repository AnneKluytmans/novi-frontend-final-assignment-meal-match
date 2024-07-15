import './Logo.css';
import LogoIcon from '../../assets/svg-icons/logo-icon.svg?react';

function Logo() {
    return (
        <div className="logo">
            <LogoIcon className="logo__icon"/>
            <div className="logo__text-wrapper">
                <h5 className="logo__text">meal</h5>
                <h5 className="logo__text">match</h5>
            </div>
        </div>
    );
}

export default Logo;