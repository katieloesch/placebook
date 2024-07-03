import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Users } from "./components/user";
import { NewPlace, UserPlaces } from "./components/places";
import { NavMain } from "./components/shared";

function App() {
  return (
    <Router>
      <NavMain />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />}></Route>
          <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
          <Route path="/places/new" exact element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
