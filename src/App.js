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
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((userId, token) => {
    setToken(token);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path='/' exact element={<Users />}></Route>
        <Route path='/:userId/places' exact element={<UserPlaces />}></Route>
        <Route path='/places/new' exact element={<NewPlace />}></Route>
        <Route path='/places/:placeId' exact element={<UpdatePlace />}></Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path='/' exact element={<Users />}></Route>
        <Route path='/:userId/places' exact element={<UserPlaces />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <NavMain />

        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
