import logo from "./logo.svg";
import "./App.css";
import PlayerCardContainer from "./Containers/PlayerCardContainer/PlayerCardContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/home" component={LandingPage} />
          </Routes>

          {/* <PlayerCardContainer
            playerName={"Barry O'Sullivan"}
            description={"This is my test player card"}
            currentWeekPoints={"10"}
            totalPointsToDate={"42 points"}
          /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
