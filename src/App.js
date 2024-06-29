import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Users } from "./components/user";
import { NewPlace } from "./components/places";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/places/new" element={<NewPlace />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
