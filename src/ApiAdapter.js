import authApi from './network/authApi';

const submitSignup = ({
  userName,
  email,
  password,
  repeatedPassword,
  role
}) => {
  console.log('submitting', { userName, password, repeatedPassword, role });
  return authApi.post('/register', {
    userName,
    password,
    repeatedPassword,
    role,
    email
  });
};

const me = () => {
  console.log('submitting me');
  return authApi.get('/me');
};

const submitLogin = ({ userName, password }) => {
  console.log('submitting', { userName, password });
  return authApi.post('/login', { userName, password });
};

export default {
  submitSignup,
  me,
  submitLogin
};
