import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from "./Components/Landing_page";
import AccountCreation from "./Components/Account_creation";
import SportSelection from "./Components/Sport_selection";
import TeamPage from "./Components/Team_Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="blogs" element={<AccountCreation />} />
          <Route path="contact" element={<SportSelection />} />
          <Route path="*" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
