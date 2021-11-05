import request from '@/utils/request'

//获取部门信息
export function getStructure(params) {
    return request({
        url: '/structure',
        method: 'get',
        params
    })
}

//删除部门
export function delStructure(id) {
    return request({
        url: `/structure/${id}`,
        method: 'delete',
        params: { id }
    })
}

//增加子部门
export function addStructure(data) {
    return request({
        url: '/structure',
        method: 'post',
        data
    })
}

//修改部门
export function editStructure(data) {
    return request({
        url: '/structure/edit',
        method: 'post',
        data
    })
}