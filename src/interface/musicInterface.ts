export interface Music {
    id: Number,
    name: String,
    artists: Atrist[],
    album: Album,
    duration: any,
    copyrightId: Number,
    status: Number,
    alias: any,
    rtype: Number,
    ftype: Number,
    mvid: Number,
    fee: Number,
    rUrl: any,
    mark: Number
}

export interface Atrist {
    id: Number,
    name: String,
    picUrl: String,
    alias: any,
    albumSize: Number,
    picId: Number,
    fansGroup: any,
    img1v1Url: String,
    img1v1: Number,
    trans: any
}

export interface Album {
    id: Number,
    name: String,
    artist: Atrist,
    publishTime: Number,
    size: Number,
    copyrightId: Number,
    status: Number,
    picId: Number,
    mark: Number
}

export interface ILyric {
    time: number,
    lyric: string,
    uid: number
}