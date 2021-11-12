import request from '@/utils/request'

//获取角色信息
export function getetup(data) {
    return request({
        url: '/setup',
        method: 'post',
        data
    })
}

//增加角色
export function addroles(data) {
    return request({
        url: '/addroles',
        method: 'post',
        data
    })
}

//修改角色
export function editroles(data) {
    return request({
        url: '/editroles',
        method: 'post',
        data
    })
}

//删除角色 delroles
export function delroles(data) {
    return request({
        url: '/delroles',
        method: 'delete',
        data
    })
}

//获取公司信息 information
export function getInformation() {
    return request({
        url: '/information',
        method: 'get'
    })
}

//修改公司信息 information
export function setInformation(data) {
    return request({
        url: '/information',
        method: 'post',
        data
    })
}