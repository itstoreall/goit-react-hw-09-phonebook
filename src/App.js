import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "Home"*/)
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "Register"*/)
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "Login"*/)
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "Contacts"*/)
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path='/' exact>
              <HomeView />
            </PublicRoute>

            <PublicRoute path='/register' restricted redirectTo='/contacts'>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path='/login' restricted redirectTo='/contacts'>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path='/contacts' redirectTo='/login'>
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}

/*
import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
*/
// const HomeView = lazy(() =>
//   import('./views/HomeView' /*webpackChunkName: "Home"*/)
// );
// const RegisterView = lazy(() =>
//   import('./views/RegisterView' /*webpackChunkName: "Register"*/)
// );
// const LoginView = lazy(() =>
//   import('./views/LoginView' /*webpackChunkName: "Login"*/)
// );
// const ContactsView = lazy(() =>
//   import('./views/ContactsView' /*webpackChunkName: "Contacts"*/)
// );
/*
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path='/' exact component={HomeView} />
            <PublicRoute
              path='/register'
              restricted
              redirectTo='/contacts'
              component={RegisterView}
            />
            <PublicRoute
              path='/login'
              restricted
              redirectTo='/contacts'
              component={LoginView}
            />
            <PrivateRoute
              path='/contacts'
              redirectTo='/'
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </div>
    </Container>
  );
}
*/
