import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operation';
import css from './LoginForm.module.css';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
  };

  

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    
      <label className={css.label} >
        Email <br></br>
         <input className={css.input} type="email" name="email" />
      </label>
      
        <label className={css.label}>
            Password<br></br>
         <input className={css.input} type="password" name="password" />
      </label>
  
    

      <button className={css.btn} type="submit"> Log In</button>
  
    </form>
  );
};

