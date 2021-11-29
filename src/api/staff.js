import request from '@/utils/request'

//获取员工信息
export function getStaffInfo(data) {
    return request({
        url: '/staff/info',
        method: 'post',
        data
    })
}

//删除员工
export function delStaff(data) {
    return request({
        url: '/staff/del',
        method: 'delete',
        data
    })
}

//增加员工
export function addStaff(data) {
    return request({
        url: '/staff/add',
        method: 'post',
        data
    })
}

//修改员工
export function editStaff(data) {
    return request({
        url: '/staff/edit',
        method: 'post',
        data
    })
}

//excel增加员工
export function excelStaff(data) {
    return request({
        url: '/staff/add/excel',
        method: 'post',
        data
    })
}

//查看员工个人信息
export function seeStaff(id) {
    return request({
        url: `/staff/information/${id}`,
        method: 'post',
        params: { id }
    })
}