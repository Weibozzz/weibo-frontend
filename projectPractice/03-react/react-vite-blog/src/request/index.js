import axios from 'axios'
import { setLoading } from '@/store/actions'
import { store } from '../App'
// https://github.com/axios/axios

const instance = axios.create({
  baseURL: ''
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch(setLoading(true))
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  store.dispatch(setLoading(false))
  if(response.status === 200){
    return response.data;
  }
  return response;
}, function (error) {
  store.dispatch(setLoading(false))
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance
