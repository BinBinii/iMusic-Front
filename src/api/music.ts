import request from '../utils/request'

export function searchMusicInfo(query: any) {
    return request({
        url: '/music/info/' + query.groupId,
        method: 'post',
    })
}