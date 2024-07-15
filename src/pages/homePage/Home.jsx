import Button from '../../components/button/Button.jsx';
import Loader from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/errorMessage/ErrorMessage.jsx';
import './Home.css';


function Home() {
    return (
      <div className="outer-content-container">
          <div className="inner-content-container__column">
              <h1>Home</h1>
              <Button
                  type="button"
                  className="btn__default"
                  onClick={() => {
                      console.log("This button is clicked!");
                  }}
              >
                  Try it now
              </Button>
              <Loader text="Finding delicious recipes just for you...🍝"/>
              <Loader />
              <ErrorMessage message="Something went wrong..." />
          </div>
      </div>
    );
}

export default Home;