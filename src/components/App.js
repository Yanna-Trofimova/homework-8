import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';
import { lazy } from 'react';
import NonExistentPage from 'pages/NonExistentPage';


const HomePage = lazy(()=> import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
          
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
          
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          
          <Route path="*" element={<NonExistentPage/>} />
        </Route>
       
    </Routes>
  );
};

