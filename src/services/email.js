import axios from "axios";
const baseUrl = 'https://photographyportfolio.onrender.com/api/email'
// const localUrl = 'http://localhost:3001/api/email'

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Connects to the server.
const connect =  async () => {
  const request = await api.get('/');
  return request.data;
};

// Sends an email.
const sendEmail = async (email) => {
  const request = await api.post('/', email);
  return request.data;
};

export default { 
  connect,
  sendEmail,
};