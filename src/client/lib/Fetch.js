import axios from 'axios';

export const fromLocal = ( key ) => {
  return Promise.resolve( localStorage.getItem(key));
}

export const toLocal = ( key, value ) => {
  try {
    localStorage.setItem(key, value);
  }
  catch (err) {
    return Promise.reject(err);
  }
  return Promise.resolve(value);
}

const API_PATH = 'http://localhost:8000/api';
export const fromWeb = ( objectType, id ) => {

  return axios.get([API_PATH, objectType, id].join('/')).then( payload => {
    return payload.data;
  });

  //return Promise.resolve( null );
}
