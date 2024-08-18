import RegisterForm from 'components/RegisterForm/RegisterForm';
// import LoginForm from '../components/LoginForm/LoginForm';
import s from './Login.module.css';

const Login = () => {
  return (
    <div className={s.container}>
      <RegisterForm signIn />
    </div>
  );
};

export default Login;