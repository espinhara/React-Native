import axios from 'axios';
// let api = axios;
// if(window.location.protocol === "http://10.0.2.2"){
// api.create({
//   baseURL: 'http://10.0.2.2:3000/',
// });
// }else{
    const api = axios.create({
        baseURL:'http://10.0.2.2:3000/'
    })
// }
export default api;
