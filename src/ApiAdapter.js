import authApi from './network/authApi';
import fileApi from './network/fileApi';

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

const submitVideo = videoBlob => {
  console.log('submitting video', videoBlob);
  var formData = new FormData();
  formData.append('file', videoBlob, 'blob.webm');
  return fileApi
    .post('/files/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(r => r.data)
    .then(data => console.log(data))
    .catch(e => console.log(e));
};

export default {
  submitSignup,
  me,
  submitLogin,
  submitVideo
};
