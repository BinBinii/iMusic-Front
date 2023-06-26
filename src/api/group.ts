import request from '../utils/request'

export function searchGroupInfo(query: any) {
    return request({
        url: '/group/get/info/' + query.groupId,
        method: 'get',
    })
}

export function findGroupList(query: any) {
    return request({
        url: '/group/get/list',
        method: 'get',
        params: query
    })
}

export function createGroup(data: any) {
    return request({
        url: '/group/create',
        method: 'post',
        data
    })
}

export function updateGroup(data: any) {
    return request({
        url: '/group/update',
        method: 'post',
        data
    })
}