import './Button.css'

function Button( { children, type, onClick, disabled, className } ) {
    return (
        <button type={type || 'button'}
                onClick={onClick}
                disabled={disabled}
                className={`btn ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;