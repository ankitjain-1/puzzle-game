import { Link } from "react-router-dom";
import "./../scss/LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>WELCOME TO PUZZLE DUZZLE</h1>
      <h2>Are You Ready To Start The New Game ?</h2>
      <Link to="/play">
        <div className="button play-button">PLAY NOW</div>
      </Link>
    </div>
  );
};

export default LandingPage;
