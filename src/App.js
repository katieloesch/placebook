import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Users } from "./components/user";
import { NewPlace } from "./components/places";
import { NavMain } from "./components/shared";

function App() {
  return (
    <Router>
      <NavMain />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
