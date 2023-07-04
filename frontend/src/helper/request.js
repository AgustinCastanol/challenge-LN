import axios from "axios";

const service = axios.create({

  baseURL: 'http://localhost:3001',

  withCredentials: false,
  timeout: 5000,
  headers: {
    'allow-origin': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  }
})

service.interceptors.request.use(
  (config) => {
  return config;
  },
  (error) => {
   console.log("request err", error);
    return Promise.reject(error);
  }
)

service.interceptors.response.use(

  response => {
    //loadingInstance.close()

    const res = response.data
    //console.log("resdata", res)




    return res

  },
  error => {
    //loadingInstance.close()
    console.log('err', error) // for debug

    return Promise.reject(error)
  }
)

export default service
