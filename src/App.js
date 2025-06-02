import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { LoadingSpinner, NavMain } from './components';
import { AuthContext } from './components/shared/context/authContext';
import { useAuth } from './components/shared/hooks/auth-hook';

const Users = React.lazy(() => import('./pages/user/Users/Users.js'));
const NewPlace = React.lazy(() => import('./pages/place/NewPlace.js'));
const UserPlaces = React.lazy(() => import('./pages/place/UserPlaces.js'));
const UpdatePlace = React.lazy(() => import('./pages/place/UpdatePlace.js'));
const Auth = React.lazy(() => import('./pages/user/Auth/Auth.js'));

function App() {
  const { token, login, logout, userId } = useAuth();

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

        <main>
          <Suspense
            fallback={
              <div className='center'>
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
