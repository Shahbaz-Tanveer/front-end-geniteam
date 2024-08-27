// import axios from 'axios'
// import { BASE_URL } from './contants'

// const axiosInstance=axios.create({
//     baseUrl:BASE_URL,
//     timeout:10000,
//     headers:{
//         'content-type':'application/jason',

//     },
// })
// axiosInstance.interceptors.request.use(
//     (config)=>
//     {
//         const accessToken=localStorage.getitem('token');
//         if(accessToken)
//         {
//             config.headers.Authorization= `Bearer ${accessToken}` ;
//         }
//         return config

//     },
//     (error)=>{
//         return Promise.reject(error);

//     }

// );


// export default axiosInstance;