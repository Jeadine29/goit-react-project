import RegisterForm from '../components/RegisterForm/RegisterForm';
import s from './Register.module.css';

const Register = () => {
  return (
    <div className={s.container}>
      <RegisterForm signUp />
    </div>
  );
};

export default Register;