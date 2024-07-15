import Button from '../../components/button/Button.jsx';
import './Home.css';


function Home() {
    return (
      <div className="outer-content-container">
          <div className="inner-content-container">
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
          </div>
      </div>
    );
}

export default Home;