import './ErrorMessage.css';

function ErrorMessage( { message } ) {
    return (
        <h5 className="error-message">{message}</h5>
    );
}

export default ErrorMessage;