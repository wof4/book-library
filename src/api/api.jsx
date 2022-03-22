import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
