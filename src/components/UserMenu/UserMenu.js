import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operation';


import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.div}>
      <p className={css.name} >Welcome, {user.name}</p>
      <button className={css.btn}  type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};