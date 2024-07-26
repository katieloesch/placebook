import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { NavMain } from './components';
import { Auth, NewPlace, UpdatePlace, UserPlaces, Users } from './pages';

function App() {
  return (
    <Router>
      <NavMain />
      <main>
        <Routes>
          <Route path='/' exact element={<Users />}></Route>

          <Route path='/auth' element={<Auth />}></Route>

          <Route path='/places/new' exact element={<NewPlace />}></Route>

          <Route
            path='/places/:placeId'
            exact
            element={<UpdatePlace />}
          ></Route>

          <Route path='/:userId/places' exact element={<UserPlaces />}></Route>

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
