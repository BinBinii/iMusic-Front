import request from '../utils/request'

export function inviteJoinGroup(data: any) {
    return request({
        url: '/group/server/invite',
        method: 'post',
        data
    })
}

export function joinGroup(data: any) {
    return request({
        url: '/group/server/join',
        method: 'post',
        data
    })
}

export function findApplyList(query: any) {
    return request({
        url: '/group/server/apply/list',
        method: 'get',
        params: query
    })
}

export function examineGroupApply(data: any) {
    return request({
        url: '/group/server/examine',
        method: 'post',
        data
    })
}