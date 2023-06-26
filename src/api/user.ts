import request from '../utils/request'

// 发送验证码
export function sendVerCode(data: object) {
    return request({
        url: '/mail/send/register/verification/code',
        method: 'post',
        data
    })
}

// 注册
export function register(data: object) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

//登录
export function login(data: object) {
    return request({
        url: '/auth/login',
        method: 'post',
        data
    })
}

// 根据token获取登录信息
export function loginToken() {
    return request({
        url: '/auth/token',
        method: 'get'
    })
}

// 搜索用户
export function searchUser(query: object) {
    return request({
        url: '/user/search',
        method: 'get',
        params: query
    })   
}