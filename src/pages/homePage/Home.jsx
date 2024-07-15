import { House } from '@phosphor-icons/react';
import Header from '../../components/header/Header.jsx';
import Button from '../../components/button/Button.jsx';
import Loader from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/errorMessage/ErrorMessage.jsx';
import Logo from '../../components/logo/Logo.jsx';
import './Home.css';




function Home() {
    return (
      <>
          <Header
          title="Home Page"
          subtitle="Welcome to Meal Match. Start your culinary adventure."
          icon={<House size={120} color="#D8F499"/>}
          />
          <div className="outer-content-container">
              <div className="inner-content-container__column">
                  <Logo />
                  <h1>Home</h1>
                  <Button
                      type="button"
                      className="button"
                      onClick={() => { console.log("This button is clicked!"); }}
                  >
                      Try it now
                  </Button>
                  <Loader text="Finding delicious recipes just for you...🍝"/>
                  <Loader />
                  <ErrorMessage message="Something went wrong..." />
              </div>
          </div>
      </>
    );
}

export default Home;