import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/styles/App.scss";
import "./assets/styles/variables/_colors.css";

import Modal from "./components/UI/Modal";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact element={<h1>Use Your Component</h1>} path="" />
      </Routes>
      <Modal />
    </Router>
  );
}

export default App;
