import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
