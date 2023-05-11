import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav.jsx"
import HomePage from "./pages/HomePage.jsx"
import Browse from "./pages/Browse.jsx"
import BrowseItem from "./pages/BrowseItem.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:id" element={<BrowseItem />} />
      </Routes>
      <Nav />
    </Router>
  )
}

export default App
