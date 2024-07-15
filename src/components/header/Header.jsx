import './Header.css';

function Header( { title, subtitle, icon } ) {
    return (
        <header className="header outer-content-container">
            <div className="header__content inner-content-container__row">
                <div className="header__text">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <div className="header__icon">
                    <span>{icon}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;