// import axios from 'axios';


// export default ({ app, env }, inject) => {
//   console.log(app);
//   function request(params) {
//     return axios.get(`${env.baseUrl}${params.uri}`).then(({ status, data }) => {
//       if (status === 200) {
//         return data;
//       } else {
//         return data
//       }
//     });
//   }

//   inject('request', params => request(params));
// }