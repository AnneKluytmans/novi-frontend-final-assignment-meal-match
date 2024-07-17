import { Link } from 'react-router-dom';
import { SmileyXEyes, CaretRight } from '@phosphor-icons/react';
import Header from '../../components/header/Header.jsx';
import './NotFound.css';


function NotFound() {
    return (
        <>
            <Header
                title="Oops! Not Found..."
                subtitle="This page doesn't exist. You've taken a wrong path in your culinary adventure."
                icon={<SmileyXEyes size={132}/>}
            />
            <section className="not-found-section outer-content-container ">
                <div className="inner-content-container__column not-found-section__text-restrictor">
                    <h4>Lost your way? No problem! Let's get you back on the right track to discover
                        more delicious recipes!</h4>
                    <div className="not-found-section__links-wrapper">
                        <Link to="/" className="not-found-section__link">
                            <span><CaretRight size={22}/></span>
                            <p>Take me back to the Home Page</p>
                        </Link>
                        <Link to="/recipe-quiz" className="not-found-section__link">
                            <span><CaretRight size={22}/></span>
                            <p>Do the Recipe Quiz to uncover your next favorite meal</p>
                        </Link>
                        <Link to="/all-recipes" className="not-found-section__link">
                            <span><CaretRight size={22}/></span>
                            <p>Go to our recipe collection to explore new recipes</p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;