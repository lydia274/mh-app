import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/HomePage.jsx";
import Browse from "./pages/Browse.jsx";
import BrowseItem from "./pages/BrowseItem.jsx";
import DisplayLog from "./pages/DisplayLog.jsx";
import Log from "./components/Log.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:id" element={<BrowseItem />} />
        <Route path="/log" element={<Log />} />
        <Route path="/displaylog" element={<DisplayLog />} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default App;
