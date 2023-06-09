import axios from 'axios'

// 创建axios
const $http = axios.create({
    //设置默认请求地址
    baseURL: 'http://127.0.0.1:3000',
    //设置请求超时时间
    timeout: 5000,
    //设置请求头
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

//响应拦截
$http.interceptors.response.use(res => {
    // 状态码为200正常返回
    if (res.status === 200) {
        return Promise.resolve(res.data);
    } else {
        return Promise.reject(res.data);
    }
}, error => {
    return Promise.reject(error);
})

// 导出封装的axios
export default $http
