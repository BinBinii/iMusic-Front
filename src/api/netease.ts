import request from '../utils/neteaseRequest'

//搜索音乐
export function searchMusic(query: object) {
    return request({
        url: '/search',
        method: 'get',
        params: query
    })
}

// 音乐详情
export function findMusicDetail(query: object) {
    return request({
        url: '/song/detail',
        method: 'get',
        params: query
    })
}

// 查询音乐歌词
export function findMusicLyric(query: object) {
    return request({
        url: '/lyric',
        method: 'get',
        params: query
    })
}

// 获取音乐mp3
export function findMusicMp3(query: object) {
    return request({
        url: '/song/url/v1',
        method: 'get',
        params: query
    })
}