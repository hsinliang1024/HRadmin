import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/info',
        params: { token }
    })
}

export function register(data) {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}

// export function logout() {

// }