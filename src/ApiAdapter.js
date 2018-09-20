import axios from 'axios';

const apiUri = '';

const submitSignup = ({ userName, password, role }) => {
  console.log('submitting', { userName, password, role });
  return axios.post(apiUri, { userName, password, role });
};

export default {
  submitSignup
};
