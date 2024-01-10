import axios from "axios";
//const baseUrl = import.meta.env.VITE_API_URL
const baseUrl = 'https://photographyportfolio.onrender.com/api/email'

/**
 * Connects to the server.
 */
const connect =  async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};


/**
 * Sends an email.
 * @param {Object} email - The email object to be sent.
 * @returns {Promise} - A promise that resolves to the response data.
 */
const sendEmail = async (email) => {
  const request = await axios.post(baseUrl, email);
  return request.data;
};

export default { 
  connect,
  sendEmail,
};