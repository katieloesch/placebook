import React, { useCallback, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { NavMain } from './components';
import { Auth, NewPlace, UpdatePlace, UserPlaces, Users } from './pages';
import { AuthContext } from './components/shared/context/authContext';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = useCallback(() => {
    setIsloggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsloggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
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

            <Route
              path='/:userId/places'
              exact
              element={<UserPlaces />}
            ></Route>

            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
